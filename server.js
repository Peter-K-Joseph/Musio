"use strict";
const express = require("express");
const logger = require("./modules/logger.js");
const local = require("./modules/local.js");
const sync_service = require("./modules/syncServices.js");
const app = express();
const fs = require("fs");

const data = {
  setting_data: require("./manage/settings.json"),
};

const port = 80;

app.use(express.static("dist"));
app.set("view engine", "ejs"); 

app.get("/", (req, res) => {
  logger.info(
    `${req.protocol} connection established by HOST:${req.headers["host"]}`
  );
  try {
    res.render("index");
  } catch {
    logger.error(
      `Server crashed. Failed to serve index page to HOST:${req.headers["host"]}`
    );
    res.send(
      res.json({
        error: "500",
        type: "Internal Server Error",
        desc: "Index file crashed during rendering",
      })
    );
  }
});

app.get("/update", (req, res) => {
  logger.info(
    `${req.protocol} connection established by HOST:${req.headers["host"]}`
  );
  try {
    res.render("player");
  } catch {
    logger.error(
      `Server crashed. Failed to serve update page to HOST:${req.headers["host"]}`
    );
    res.send(
      res.json({
        error: "500",
        type: "Internal Server Error",
        desc: "Update file crashed during rendering",
      })
    );
  } 
});

app.get("/api", (req, res) => {
  logger.info(
    `${req.protocol} connection established by HOST:${req.headers["host"]}`
  );
  res.json({
    code: 200,
    desc: "View various API endpoints to access data the music data",
    api_methods: {
      GET: {
        "/api/music": "View all music data",
        "/api/music/:id": "View music data by ID",
        "/api/music/:id/albumart/:size": "View music data by ID",
        "/api/artist": "View all artist data",
        "/api/artist/:id": "View artist data by ID",
        "/api/album": "View all album data",
        "/api/album/:id": "View album data by ID",
        "/api/genre": "View all genre data",
        "/api/genre/:id": "View genre data by ID",
      },
      POST: {
        "/api/music/add": "Add music",
        "/api/music/remove": "Remove music",
        "/api/sync": "Sync music data from local system",
        "/api/data/restore": "Restore data from backup",
      },
    },
  });
});

app.get("/api/sync", (req, res) => {
	  logger.info("Attempting to sync music data from local system");
    let sync = new sync_service.musicLocalSync(req, res);
	  sync.invokeHardReset()
});

app.get("/api/music/:id/albumart/:size", (req, res) => {
	  logger.info(`Attempting to fetch album art for ID:${req.params.id}`);
	  local.getAlbumArt(req.params.id, req.params.size, res)
}); 

app.get("/api/music/:id/albumart", (req, res) => {
	  logger.info(`Attempting to fetch album art for ID:${req.params.id}`);
	  local.getAlbumArt(req.params.id, req.params.size, res)
});

app.get("/api/music", (req, res) => {
	  logger.info("Attempting to fetch music data");
	  local.getMusicData(res)
});

app.get("/api/music/:id", (req, res) => {
    logger.info(`Attempting to fetch music data for ID:${req.params.id}`);
    local.getMusicDataById(res, req.params.id)
});

app.get("/api/music/:id/play", (req, res) => {
    logger.info(`Attempting to fetch music data for ID:${req.params.id}`);
    local.playMusicById(res, req.params.id)
});

app.get("/api/albums", (req, res) => {
    logger.info("Attempting to fetch album data");
    local.getAlbumData(res)
});

app.listen(port, () => {
  logger.info(`Portifolio app is online and is active at PORT:${port}`);
});

app.get("*", (req, res) => {
  logger.error(
    `Access requested denied due to Error 404 to ${req.originalUrl}`
  );
  res
    .status(404).send({
      error: 404,
      "access-request": "denied",
      desc: "Requested file not found",
    })
});

app.post("*", (req, res) => {
  logger.error(`Access requested denied due to Error 404`);
  res.send(
    res.json({
      error: 404,
      "access-request": "denied",
      desc: "Requested file not found",
    })
  );
});
