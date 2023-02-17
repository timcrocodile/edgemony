const express = require("express");
const router = express.Router();

const Subscriber = require("../models/subcribers");

//prelevo tutti i dati
router.get("/", async (req, res) => {
  try {
    const sub = await Subscriber.find();
    res.json(sub);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getSub, (req, res) => {
  res.json(res.sub);
});

router.post("/", async (req, res) => {
  const sub = new Subscriber({
    name: req.body.name,
    channel: req.body.channel,
  });

  try {
    const newSub = await sub.save();
    res.status(201).json(newSub);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//modifica
router.put("/:id", getSub, async (req, res) => {
  if (req.body.name != null) {
    res.sub.name = req.body.name;
  }
  if (req.body.channel != null) {
    res.sub.channel = req.body.channel;
  }
  try {
    const subUpdate = await res.sub.save();
    res.json(subUpdate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//cancella
router.delete("/:id", getSub, async (req, res) => {
  try {
    await res.sub.remove();
    res.json({ message: "utente cancellato" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//middleware per la ricerca dell' utente secondo id
async function getSub(req, res, next) {
  let sub;
  try {
    sub = await Subscriber.findById(req.params.id);
    if (sub == null) {
      return res.status(404).json({ message: "Utente non trovato" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.sub = sub;
  next();
}

module.exports = router;
