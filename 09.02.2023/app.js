const express = require("express");
const hbs = require("hbs");
const app = express();
const PORT = 3200;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home", {
    name: "simona",
    title: "corso node",
    pet: "cane",
    myPreferences: {
      pet: "cat",
      color: "red",
      season: "summer",
    },
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/mipresento", (req, res) => {
  res.render("mipresento");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// app.post("/login", (req, res) => {
//   const { name } = req.body;
//   if (name) {
//     return res.status(200).send(`Benvenuto/a ${name}`);
//   }
//   res.status(400).send("per favore aggiungi il dato");
// });

app.post("/login", (req, res) => {
  const username = req.body.username;
  res.render("entra", { username });
});
app.get("/entra", (req, res) => {
  res.render("entra");
});

// app.post("/login", (req, res) => {
//   const { username } = req.body;
//   if (username) {
//     return res.status(200).res.render("login", { username });
//   }
//   res.status(400).send("per favore aggiungi il dato");
// });

app.listen(PORT, () => {
  console.log(`server attivo si ${PORT}`);
});
