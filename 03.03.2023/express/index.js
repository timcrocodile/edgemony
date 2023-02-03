const express = require("express");

const path = require("path");

const app = express();

const PORT = 8099;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});

app.get("/ami", (req, res) => {
  res.sendFile(__dirname + "/public/ami.html");
});

app.get("/esche", (req, res) => {
  res.sendFile(__dirname + "/public/esche.html");
});

app.get("*", (req, res) => {
  res.send("404 | page nottt found");
  console.log(res);
});

app.listen(PORT, () => {
  console.log(`server attivo su ${PORT}`);
});
