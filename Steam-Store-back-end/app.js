// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const gamesController = require("./controllers/gamesController");
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Steam Store!");
});

app.use("/games", gamesController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
