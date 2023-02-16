const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const Nota = mongoose.model("basketteams");

router.get("/fans", (req, res) => {
  res.render("fans", {
    viewTitle: "squadre di basket fans",
  });
});

router.post("/fans", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  let nota = new Nota();
  nota.team = req.body.team;
  nota.town = req.body.town;
  nota.supporters = req.body.supporters;
  //   nota.mobile = req.body.mobile;
  //   nota.address = req.body.address;
  //   nota.text = req.body.text;
  nota.save((err, doc) => {
    if (!err) res.redirect("fanslist");
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Nota.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
    if (!err) {
      res.redirect("fanslist");
    } else {
      console.log("Errore durante l' update : " + err);
    }
  });
}

router.get("/fanslist", (req, res) => {
  Nota.find((err, docs) => {
    if (!err) {
      res.render("fanslist", {
        notalist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

router.get("/fans:id", (req, res) => {
  Nota.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("fans", {
        viewTitle: "Aggiornamento",
        nota: doc,
      });
    }
  });
});

router.get("fans/delete/:id", (req, res) => {
  Nota.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/fanslist");
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = router;
