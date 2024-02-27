const jsmediatags = require("jsmediatags");
const { getAudioDurationInSeconds } = require("get-audio-duration");
const crypto = require("crypto");
const sqlite3 = require("sqlite3");
const path = require("path");
const logger = require("./logger.js");
const fs = require("fs");
const { threadId } = require("worker_threads");

class musicLocalSync {
  reset = false;
  db;
  req;
  res;
  id = [];

  constructor(req, res) {
    this.song_names = [];
    this.req = req;
    this.res = res;
    this.id = [];
    this.db = new sqlite3.Database(path.join(__dirname, "/../manage/music.db"));
  } 

  invokeHardReset = () => {
    this.reset = true;
    this.db.serialize(() => {
      this.db.run("DROP TABLE IF EXISTS music;");
      this.db.run(
        "CREATE TABLE music (id TEXT PRIMARY KEY, title TEXT NOT NULL, album TEXT, artist TEXT, duration INTEGER NOT NULL, year INTEGER, genre TEXT, track INTEGER, picture TEXT, lyrics TEXT, location TEXT);"
      )
      this.getMusicList(this.getOSRootDir());
    });
  }

  /*
    This function will save the metadata to the database.
    If the metadata is null, it will save the file name as the title.
  */
  saveMusicMetaData = (musicFile, tag) => {
    let tags = [];
    if (tag != null) {
      tags = {
        id: this.generateHash(musicFile),
        title: tag.tags.title == undefined ? null : tag.tags.title,
        album: tag.tags.album == undefined ? null : tag.tags.album,
        artist: tag.tags.artist == undefined ? null : tag.tags.artist,
        duration: 0,
        year: tag.tags.year == undefined ? null : tag.tags.year,
        genre: tag.tags.genre == undefined ? null : tag.tags.genre,
        track: tag.tags.track == undefined ? null : tag.tags.track,
        picture: JSON.stringify(tag.tags.picture),
        lyrics: tag.tags.USLT != undefined ? (tag.tags.USLT.lyrics != undefined) ? tag.tags.USLT.lyrics : null : null,
        location: musicFile
      };
    } else {
      tags = {
        id: this.generateHash(musicFile),
        title: path.basename(musicFile, path.extname(musicFile)),
        album: null,
        artist: null,
        duration: 0,
        year: null,
        genre: null,
        track: null,
        picture: null,
        lyrics: null,
        location: musicFile
      };
    }
    this.id.push(tags.id);
    // id, title, album, artist, duration, year, genre, track INTEGER, picture, lyrics, location
    this.db.serialize(() => {
      this.db.run(
        "INSERT or IGNORE INTO music (id, title, album, artist, duration, year, genre, track, picture, lyrics, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [tags.id, tags.title, tags.album, tags.artist, tags.duration, tags.year, tags.genre, tags.track, tags.picture, tags.lyrics, tags.location],
        (err) => {
          if (err) {
            logger.info(
              "An internal error occurred with the database. Further Investigation Required. Traceback on saveMusicMetaData on " + tags.location + " at " +
              JSON.stringify(err)
            );
          } else {
            logger.info(`Saved Music File: ${tags.title}`);
            this.getSongDuration(musicFile, tags.id);
          }
        }
      );
    })
  };

  /* 
      A function to recursively scan the drive and get all the music files. 
      Once done, it will call the function to get the metadata of the music files.
    */
  getMusicList = (directory) => {
    console.log(directory);
    let files = fs.readdirSync(directory);
    for (let i = 0; i < files.length; i++) {
      try {
        if (
          files[i].endsWith(".mp3") ||
          files[i].endsWith(".flac") ||
          files[i].endsWith(".aac") ||
          files[i].endsWith(".wav") ||
          files[i].endsWith(".m4a") ||
          files[i].endsWith(".ogg")
        ) {
          this.musicMetaData(path.join(directory, files[i]));
          logger.info(`Found Music File: ${files[i]}`);
        }
        if (
          fs.statSync(path.join(directory, files[i])).isDirectory() &&
          !files[i].startsWith(".") &&
          files[i] != "AppData" &&
          files[i] != "node_modules" &&
          files[i] != "System Volume Information" &&
          files[i] != "Windows" &&
          files[i] != "Library"
        ) {
          this.getMusicList(path.join(directory, files[i]));
        }
      } catch {
        logger.error(
          `Unexpected Error Occurred. Possibly Permission Denied for ${files[i]}`
        );
      }
    }
  };

  /* 
      Using the jsmediatags library, this function will get the metadata of the music file.
      Once done, it will call the function to save the metadata to the database.
    */
  musicMetaData = (musicFile) => {
    jsmediatags.read(musicFile, {
      onSuccess: (tag) => {
        this.saveMusicMetaData(musicFile, tag);
      },
      onError: (err) => {
        this.saveMusicMetaData(musicFile, null);
        logger.error(
          "An internal error occurred while getting metadata. Further Investigation Required. Traceback at musicMetaData on " +
          JSON.stringify(err)
        );
      },
    });
  };

  /*
    Function to get the OS Root Directory.    
    */
  getOSRootDir = () => {
    switch (process.platform) {
      case "darwin":
        if (fs.readdirSync("/").includes("Users")) return "/Users";
        else return "/";
      case "win32":
        logger.info("Detected OS: Windows");
        if (fs.readdirSync("/").includes("Users")) return "/Users";
        else return "/";
      case "linux":
        logger.info("Detected OS: Linux");
        return "/home";
      default:
        // raise Error
        logger.error("Unsupported OS");
        break;
    }
  };

  /*
      This function will get the duration of the song and save it to the database.
    */
  getSongDuration = (path, pos) => {
    getAudioDurationInSeconds(path).then((duration) => {
      this.db.run(
        "UPDATE music SET duration = ? WHERE id = ?",
        [duration.toFixed(0), pos],
        function (err) {
          if (err) {
            logger.info(
              "An internal error occurred with the database. Further Investigation Required. Traceback on getSongDuration at " +
              JSON.stringify(err)
            );
          }
        }
      );
      this.isLastQuery(pos);
    });
  };

  /* 
      This function will check if the current query is the last query.
      If it is, it will delete all the music files which are not in the current ID.
  */
  isLastQuery = (pos) => {
    if (this.reset === false) return 
    if (pos == this.id[this.id.length - 1]) {
      this.db.run(
        `DELETE FROM music WHERE id NOT IN ('${this.id ? this.id.join("','") : "''"}')`
      );
      logger.info(`Deleted all music files except for ${this.id.length} `);
      logger.info("Music Sync Completed");
      this.res.json({
        status: "success",
        message: "Music Sync Completed",
        total: this.id.length,
      });
      this.db.close();
    }
  };

  /* Generated a hash for a file which is used in analytics to ensure analytics data isn't lost while on hard sync */
  generateHash = (path) => {
    return crypto
      .createHash("sha256")
      .update(fs.readFileSync(path))
      .digest("hex");
  };
}

module.exports = { musicLocalSync };
