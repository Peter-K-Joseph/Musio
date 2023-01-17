const logger = require("./logger.js");
const sqlite3 = require("sqlite3");
const path = require("path");

const db = new sqlite3.Database(
  path.join(__dirname, "/../manage/music.db"),
  (err) => {
    if (err) {
      logger.error(`Failed to connect to database: ${err}`);
    } else {
      logger.info("Connected to database");
    }
  }
);

const song_played = (song_id) => {
  db.serialize(() => {
    if (song_id) {
      db.run(
        `CREATE TABLE IF NOT EXISTS songs ('id' INTEGER PRIMARY KEY, 'plays' INTEGER, 'start' INTEGER)`
      );
      db.run(
        `INSERT INTO songs (id, plays, start) VALUES (${song_id}, 1, ${Date.now()}) ON CONFLICT(id) DO UPDATE SET plays = plays + 1`
      );
      logger.info(`Song ${song_id} played`);
    } else {
      logger.error("Song ID not provided");
    }
  });
};

module.exports = {
  song_played,
};
