const express = require("express");
const session = require("cookie-session");
const bodyParser = require("body-parser");
const hbs = require("hbs");

const PORT = 4040;
const app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "la mia sessione" }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", (req, res) => {
  console.log(`${req.body.name} / ${req.body.password}`);

  if (!req.body.name || !req.body.password) {
    res.status(400);
    res.render("/signup", {
      message: "per favore, aggiungi tutti i dati richiesti",
    });
  } else {
    let name = "Simona";
    let password = "2345";
    let userAuth = { name: name, password: password };

    if (name == req.body.name && password == req.body.password) {
      req.session.user = userAuth;
      res.redirect("/private");
    } else {
      res.redirect("/warning");
    }
  }
  //res.render('signup')
});

//creo una funzione di controllo per proteggere dall'esterno la mia pagina privata
//se digito http://localhost:4040/private non devo entrare

function checkPage(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/warning");
  }
}

app.get("/private", checkPage, (req, res) => {
  res.render("private");
});

app.get("/warning", (req, res) => {
  res.render("warning");
});

//per il logout è necessario svuotare/annullare la sessione
app.get("/logout", (req, res) => {
  console.log("hai fatto logout");
  req.session = null;
  res.redirect("/signup");
});

app.listen(PORT, () => {
  console.log(`Porta del server attivo ${PORT}`);
});
