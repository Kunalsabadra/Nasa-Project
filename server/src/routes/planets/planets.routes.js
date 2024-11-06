const express = require("express");
const planetsRouter = express.Router();
const {getAllplanets} = require('./planets.controller')


planetsRouter.get("/planets", getAllplanets);

module.exports = planetsRouter;