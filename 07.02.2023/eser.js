const express = require("express");
const { utenti } = require("./dati");
const app = express();

const PORT = 3100;

const todos = require("./todos.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//GET importando da un file .js
app.get("/api/utenti", (req, res) => {
  res.status(200).json({ success: true, data: utenti });
});

//GET importando da un file .json
app.get("/api/todos", (req, res) => {
  res.status(200).json({ success: true, data: todos });
});

//POST importando da un file .js
app.post("/api/utenti", (req, res) => {
  const { id, email, username } = req.body;
  if (!id || !email || !username) {
    return res.status(400).json({ success: false, msg: "manca qualcosa.." });
  }
  return res.status(200).json({
    success: true,
    utente: { id: id, email: email, username: username },
  });
});

//POST importando da un file .json

app.post("/api/todos", (req, res) => {
  const { id, title } = req.body;
  if (!id || !title) {
    return res.status(400).json({ success: false, msg: "manca qualcosa.." });
  }
  return res.status(200).json({
    success: true,
    utente: { id: id, title: title },
  });
});

app.listen(PORT, () => {
  console.log(`server in ascolto su ${PORT}`);
});
