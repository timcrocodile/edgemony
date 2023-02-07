const express = require("express");

const path = require("path");

const autorizza = require("./autorizza");

const app = express();

const libri = require("./lista.json");

const PORT = 8099;
app.use(express.static("statico"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/statico/home.html");
});

app.get("/tuttiilibri", (req, res) => {
  res.sendFile(__dirname + "/statico/tuttilibri.html");
});

app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/lista.json");
});

const libriprotetti = libri.slice(0, 2);

app.get("/libriprotetti", autorizza, (req, res) => {
  res.json(libriprotetti);
});

app.listen(PORT, () => {
  console.log(`server attivo su ${PORT}`);
});
