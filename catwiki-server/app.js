const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;

dotenv.config();
const app = express();

const server = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("데이터베이스가 연결되었습니다.");

    app.use(morgan("dev"));
    app.use(cookieParser(process.env.COOKIE_SECRETE));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const sessionRouter = require("./router/sessionRouter");
    const postRouter = require("./router/postRouter");

    app.use("/session", sessionRouter); // 로그인 관련 라우터
    app.use("/post", postRouter); // 게시글 관련 라우터

    // 존재하지 않는 라우터일 경우
    app.use((req, res, next) => {
      const err = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
      err.status = 404;
      next(err);
    });

    // 에러 핸들링
    app.use((err, req, res, next) => {
      // 인자 순서는 무조건 err, req, res, next 이어야 한다. 안쓰더라도 무조건 인자 넣어야함
      res.status(err.status || 500).send({
        statusCode: err.status || 500,
        message: "에러가 발생했습니다.",
      });
      return console.log(err.message);
    });

    app.listen(PORT, () => {
      console.log(`${PORT}포트가 연결되었습니다.`);
    });
  } catch (err) {
    console.log(err);
  }
};

server();

/**
 * 질문1. console.log(process.env.COOKIE_SECRETE); 콘솔에 process.env가 찍히는데 위험요소는 없는지?
 */
