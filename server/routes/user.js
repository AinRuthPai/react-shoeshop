const express = require("express");
const router = express.Router();
const User = require("../schemas/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

router.get("/userdata", async (req, res) => {
  try {
    const user = await User.find(req.user).select("email");
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: [{ msg: "User already exists" }] });
    }

    user = new User({
      email,
      password,
    });

    // const salt = await bcrypt.genSalt(5);
    // user.password = await bcrypt.hash(password, salt);

    await user.save();

    // const payload = {
    //   user: {
    //     id: user.id,
    //   },
    // };
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
