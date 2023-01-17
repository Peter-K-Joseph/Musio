const path = require("path");
const sharp = require("sharp");
const logger = require("./logger.js");
const analytics = require("./analytics.js");
const sqlite3 = require("sqlite3");

const getMusicDataById = (res, id) => {
  const db = new sqlite3.Database(path.join(__dirname, "/../manage/music.db"));
  db.serialize(function () {
    db.all("SELECT * FROM music WHERE id = ?", [id], function (err, rows) {
      if (err) {
        logger.error(
          "An internal error occurred with the database. Further Investigation Required. Traceback at getMusicDataById on " +
            JSON.stringify(err)
        );
        res.status(500);
        res.send({
          status: "error",
          message:
            "An internal error occurred with the database. Further Investigation Required. Traceback at getMusicDataById on " +
            JSON.stringify(err),
        });
        return;
      }
      if (rows.length == 0) {
        res.status(404);
        res.send({
          status: "error",
          message: "No Music Found with the given ID",
        });
        return;
      }
      res.send({
        status: "success",
        message: "Music Data Found",
        name: rows[0].title,
        album: rows[0].album,
        artist: rows[0].artist,
        duration: rows[0].duration,
        year: rows[0].year,
        genre: rows[0].genre,
        track: rows[0].track,
        picture: rows[0].picture,
        lyrics: rows[0].lyrics,
        id: rows[0].id,
      });
    });
  });
};

const getMusicData = (res) => {
  const db = new sqlite3.Database(path.join(__dirname, "/../manage/music.db"));
  db.serialize(function () {
    // send the first 50 rows
    db.all("SELECT * FROM music LIMIT 50", function (err, rows) {
      if (err) {
        logger.error(
          "An internal error occurred with the database. Further Investigation Required. Traceback at getMusicData on " +
            JSON.stringify(err)
        );
        res.status(500);
        res.send({
          status: "error",
          message:
            "An internal error occurred with the database. Further Investigation Required. Traceback at getMusicData on " +
            JSON.stringify(err),
        });
        return;
      }
      let data = [];
      for (let i = 0; i < rows.length; i++) {
        data.push({
          id: rows[i].id,
          title: rows[i].title,
          album: rows[i].album,
          artist: rows[i].artist,
          duration: rows[i].duration,
        });
      }
      res.send(data);
    });
  });
  db.close();
};

const getAlbumArt = (id, size, res) => {
  const db = new sqlite3.Database(path.join(__dirname, "/../manage/music.db"));
  db.serialize(function () {
    db.get("SELECT picture FROM music WHERE id = ?", [id], function (err, row) {
      if (err) {
        logger.error(
          "An internal error occurred with the database. Further Investigation Required. Traceback at getAlbumArt on " +
            JSON.stringify(err)
        );
        res.send({
          status: "error",
          message:
            "An internal error occurred with the database. Further Investigation Required. Traceback at getAlbumArt on " +
            JSON.stringify(err),
        });
      }
      if (row != null && row != undefined && row.picture != null) {
        let picture = JSON.parse(row.picture);
        var base64String = "";
        for (var i = 0; i < picture.data.length; i++) {
          base64String += String.fromCharCode(picture.data[i]);
        }
        let imageData = Buffer.from(base64String, "binary").toString("base64");
        if (size != null && size != undefined && !isNaN(size)) {
          sharp(Buffer(imageData, "base64"))
            .resize(parseInt(size), parseInt(size))
            .toBuffer()
            .then((resizedImageBuffer) => {
              const base64Image = resizedImageBuffer;
              const imageBuffer = Buffer.from(base64Image, "base64");
              const imageLength = Buffer.byteLength(base64Image, "base64");

              res.set("Content-Type", "image/png");
              res.set("Content-Length", imageLength);
              res.send(imageBuffer);
            })
            .catch((error) => {
              res.send(error);
            });
        } else {
          const base64Image = `${imageData}`;
          const imageBuffer = Buffer.from(base64Image, "base64");
          const imageLength = Buffer.byteLength(base64Image, "base64");

          res.set("Content-Type", "image/png");
          res.set("Content-Length", imageLength);
          res.send(imageBuffer);
        }
      } else {
        res.sendFile(path.resolve(__dirname + "/../dist/resources/noart.png"));
      }
    });
  });
  db.close();
};

const playMusicById = (res, id) => {
  analytics.song_played(id);
  const db = new sqlite3.Database(path.join(__dirname, "/../manage/music.db"));
  db.serialize(function () {
    db.all(
      "SELECT location FROM music WHERE id = ?",
      [id],
      function (err, rows) {
        if (err) {
          logger.error(
            "An internal error occurred with the database. Further Investigation Required. Traceback at playMusicById on " +
              JSON.stringify(err)
          );
          res.status(500);
          res.send({
            status: "error",
            message:
              "An internal error occurred with the database. Further Investigation Required. Traceback at playMusicById on " +
              JSON.stringify(err),
          });
          return;
        }
        if (rows.length == 0) {
          res.status(404);
          res.send({
            status: "error",
            message: "No music found with the given id.",
          });
          return;
        }
        res.setHeader("Content-Type", "audio/mpeg");
        res.sendFile(rows[0].location, { root: "/" });
      }
    );
  });
  db.close();
};

const getAlbumData = (res) => {
  const db = new sqlite3.Database(path.join(__dirname, "/../manage/music.db"));
  db.serialize(function () {
    // select unique values from the album column
    db.all("SELECT * FROM music GROUP BY album", function (err, rows) {
      if (err) {
        logger.error(
          "An internal error occurred with the database. Further Investigation Required. Traceback at getAlbumData on " +
            JSON.stringify(err)
        );
        res.status(500);
        res.send({
          status: "error",
          message:
            "An internal error occurred with the database. Further Investigation Required. Traceback at getAlbumData on " +
            JSON.stringify(err),
        });
        return;
      }
      let data = [];
      for (let i = 0; i < rows.length; i++) {
        data.push({
          album: (rows[i].album == null ? "Unknown Album" : rows[i].album),
          art: "/api/music/" + rows[i].id + "/albumart",
          artist: (rows[i].artist == null ? "Unknown Artist" : rows[i].artist),
        });
      }
      res.send(data);
    });
  })
}

module.exports = {
  getMusicData,
  getAlbumArt,
  getMusicDataById,
  playMusicById,
  getAlbumData
};
