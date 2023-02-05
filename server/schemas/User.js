const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
