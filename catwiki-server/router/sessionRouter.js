const express = require("express");
const {
  localLogin,
  kakaoLogin,
  googleLogin,
  naverLogin,
  logout,
} = require("../controller/sessionRouter");

const router = express.Router();

router.post("/local", localLogin);
router.post("/kakao", kakaoLogin);
router.post("/google", googleLogin);
router.post("/naver", naverLogin);
router.post("/logout", logout);

module.exports = router;
