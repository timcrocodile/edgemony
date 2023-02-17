const express = require("express");
let routerLibri = express.Router();

//const mongoose = require('mongoose');

//const Libro = mongoose.model('libroModel');

routerLibri.get("/", (req, res) => {
  res.render("addupbook", {
    viewTitle: "Inserisci un libro",
  });
});

routerLibri.get("/listBook", (req, res) => {
  res.render("listBook", {
    viewTitle: "vedi i libri",
  });
});

routerLibri.post("/", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  let nota = new Nota();
  nota.tite = req.body.title;
  nota.author = req.body.author;
  nota.pages = req.body.pages;
  nota.price = req.body.price;
  //   nota.address = req.body.address;
  //   nota.text = req.body.text;
  nota.save((err, doc) => {
    if (!err) res.redirect("listBook");
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Nota.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
    if (!err) {
      res.redirect("listBook");
    } else {
      console.log("Errore durante l' update : " + err);
    }
  });
}

routerLibri.get("/delete/:id", (req, res) => {
  Nota.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/listBook");
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = routerLibri;
