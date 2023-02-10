const express = require("express");

const router = express.Router();

router.use(express.static("./views"));

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.hbs");
});

router.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.hbs");
});

router.get("/contatti", (req, res) => {
  res.sendFile(__dirname + "/views/contatti.hbs");
});

router.get("/formazione", (req, res) => {
  res.sendFile(__dirname + "/views/formazione.hbs");
});

router.get("/web-design", (req, res) => {
  res.sendFile(__dirname + "/views/web-design.hbs");
});

router.use((req, res, next) => {
  res.status(404).send("Spiacenti, la pagina che stai cercando non esiste.");
});

module.exports = router;
