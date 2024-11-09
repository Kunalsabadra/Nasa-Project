const express = require("express");
const { getAllLaunches, newlaunch } = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/launches", getAllLaunches);

launchesRouter.post("/launches", newlaunch);

module.exports = launchesRouter;
