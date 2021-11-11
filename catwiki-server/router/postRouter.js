const express = require("express");
const {
  createPost,
  modifyPost,
  getPost,
  deletePost,
} = require("../controller/postRouter");

const router = express.Router();

router.get("/", getPost);
router.post("/", createPost);
router.put("/", modifyPost);
router.delete("/", deletePost);

module.exports = router;
