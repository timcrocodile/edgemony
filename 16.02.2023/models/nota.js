const mongoose = require("mongoose");

var notaSchema = new mongoose.Schema({
  team: {
    type: String,
  },
  city: {
    type: String,
  },
  supporters: {
    type: String,
  },
  //   mobile: {
  //     type: String,
  //   },
  //   address: {
  //     type: String,
  //   },
  //   text: {
  //     type: String,
  //   },
});

mongoose.model("soccerteams", notaSchema);
