const mongoose = require("mongoose");
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const dataSchema = mongoose.Schema({
  date: {
    type: String,

    required: true,
    default: today.toLocaleDateString(),
  },
  profit: {
    type: Array,
    default: [],
  },
  capital: {
    type: Array,
    default: [],
  },
  drawdown: {
    type: Array,
    default: [],
  },
  email: {
    type: String,
  },
  //   array: {
  //     type: String,
  //     default: "",
  //   },
});

module.exports = mongoose.model("Data", dataSchema);
