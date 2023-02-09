const express = require("express");
const router = express.Router();
const Item = require("../schemas/Item");

router.get("/item", async (req, res) => {
  try {
    const { title, content, brand, price } = req.body;
    const item = await Item.find({ title });
    res.json(item);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
