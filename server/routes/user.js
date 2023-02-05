const express = require("express");
const router = express.Router();
const User = require("../schemas/User");
const auth = require("../middlewares/auth-middleware");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @route  GET /userdata
// @desc   Userdata
// @access Public
router.get("/userdata", auth, async (req, res) => {
  try {
    // auth 미들웨어에서 생성해준 req.user를 사용하여 DB에서 user 탐색
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

// @route  POST /login
// @desc   Login user
// @access Public
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // input에 입력한 email과 db의 email이 같은지 확인
    let user = await User.findOne({ email });

    // input에 입력한 email과 db의 email이 다르다면
    if (!user) {
      return res.status(400).json("이메일이 존재하지 않습니다.");
    } else {
      // 비밀번호 복호화
      const isEqualPw = await bcrypt.compare(password, user.password);

      // 복호화한 비밀번호가 맞다면
      if (isEqualPw) {
        return res.status(200).json({ msg: "로그인 성공!", user });
      } else {
        return res.status(404).json({ msg: "로그인 실패" });
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

// @route  POST /signup
// @desc   Register user
// @access Public
router.post("/signup", async (req, res) => {
  try {
    // req의 body 정보를 사용하려면 server.js에서 따로 설정을 해줘야함
    const { email, name, password } = req.body;

    // email을 비교하여 user가 이미 존재하는지 확인
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: [{ msg: "User already exists" }] });
    }

    // user에 email, password 값 할당
    user = new User({
      email,
      name,
      password,
    });

    // password를 암호화 하기
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // db에 user 저장
    await user.save();

    // json web token 생성 및 response
    const payload = {
      // json web token 으로 변환할 데이터 정보
      user: {
        id: user.id,
      },
    };

    // json web token 생성하여 send 해주기
    jwt.sign(
      payload, // 변환할 데이터
      "jwtSecret", // secret key 값
      { expiresIn: "1h" }, // token의 유효시간
      (error, token) => {
        if (error) throw error;
        res.send({ token }); // token 값 response 해주기
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
