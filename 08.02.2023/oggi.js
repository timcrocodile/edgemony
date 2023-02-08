const express = require("express");

const app = express();

const PORT = 8080;

const todos = require("./todos.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get
app.get("/api/todos", (req, res) => {
  res.status(200).json({ success: true, data: todos });
});

//post semplice
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

//post totale, andando a mostrare tutta la lista
app.post("/api/todos/new", (req, res) => {
  const { id, title } = req.body;
  if (!id || !title) {
    return res.status(400).json({ success: false, msg: "manca qualcosa.." });
  }
  return res
    .status(201)
    .json({ success: true, utente: [...todos, { id: id, title: title }] });
});

//put
app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;

  const { title } = req.body;

  const latinQuote = todos.find((latinQuote) => latinQuote.id === Number(id));

  if (!latinQuote) {
    return res
      .status(400)
      .json({ success: false, msg: `non c'è nessuno con id: ${id}` });
  }

  const newLatinQuote = todos.map((latinQuote) => {
    if (latinQuote.id === Number(id)) {
      latinQuote.title = title;
    }
    return latinQuote;
  });
  res.status(200).json({ success: true, data: newLatinQuote });
});

//delete
app.delete("/api/todos/:id", (req, res) => {
  const latinQuote = todos.find(
    (latinQuote) => latinQuote.id === Number(req.params.id)
  );

  if (!latinQuote) {
    return res.status(400).json({
      success: false,
      msg: `non c'è nessuno con id: ${req.params.id}`,
    });
  }

  const newLatinQuote = todos.filter(
    (latinQuote) => latinQuote.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newLatinQuote });
});

//login con chiamata positiva e 400
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const credenziali = username === "ciao" && password === "1234";

  if (!credenziali) {
    res.status(400).send({ error: "hai inserito dati errati.. ritenta!!" });
    return;
  }
  res.send({ message: "bravissimo..ce l'hai fatta!" });
});

app.listen(PORT, () => {
  console.log(`server in ascolto su ${PORT}`);
});
