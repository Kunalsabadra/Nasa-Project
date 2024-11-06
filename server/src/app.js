const path = require("path");
const express = require("express");
const app = express();
const planetsRouter = require("./routes/planets/planets.routes");
const cors = require("cors");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(planetsRouter);
app.use(express.static(path.join(__dirname, "..", "public")));

module.exports = app;
