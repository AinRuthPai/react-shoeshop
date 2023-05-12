const express = require("express");
const router = express.Router();
const Item = require("../schemas/Item");

router.get("/", async (req, res) => {
  try {
    const item = await Item.find(req.item);
    res.json(item);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

router.post("/additem", async (req, res) => {
  try {
    // req의 body 정보를 사용하려면 server.js에서 따로 설정을 해줘야함
    const { title, content, brand, price } = req.body;

    // email을 비교하여 user가 이미 존재하는지 확인
    let item = await Item.findOne({ title });

    if (item) {
      return res.status(400).json({ error: [{ msg: "User already exists" }] });
    }

    // user에 email, password 값 할당
    item = new Item({
      title,
      content,
      brand,
      price,
    });
    // db에 user 저장
    await item.save();

    res.send("Success create item!");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
