"use strict";
const express = require("express");
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;
// import local as "./modules/local.mjs";
const app = express();
const fs = require("fs");
const logger = createLogger({
    format: combine(timestamp(), printf(({ level, message, timestamp }) => {
        return `${timestamp} [${level}]: ${message}`;
    })),
    transports: [new transports.Console(), new transports.File({ filename: 'system.log' })],
});
const data = {
    setting_data: require("./manage/settings.json"),
};
const port = 80;
app.use(express.static("dist"));
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    logger.info(`${req.protocol} connection established by HOST:${req.headers["host"]}`);
    try {
        res.render("index");
    }
    catch {
        logger.error(`Server crashed. Failed to serve index page to HOST:${req.headers["host"]}`);
        res.send(res.json({
            "error": "500",
            "type": "Internal Server Error",
            "desc": "Index file crashed during rendering"
        }));
    }
});
app.listen(port, () => {
    logger.info(`Portifolio app is online and is active at PORT:${port}`);
});
app.get("*", (req, res) => {
    logger.error(`Access requested denied due to Error 404 to ${req.originalUrl}`);
    res.status(404).redirect(`${req.protocol + "://" + req.get("host")}/error/404.html`);
});
app.post("*", (req, res) => {
    logger.error(`Access requested denied due to Error 404`);
    res.send(res.json({
        "error": 404,
        "access-request": "denied",
        "desc": "Requested file not found",
    }));
});
