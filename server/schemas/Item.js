const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  brand: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
