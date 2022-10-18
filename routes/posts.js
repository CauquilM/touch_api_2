const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// OK
router.get("/", async (req, res) => {
  try {
    // works
    const posts = await Post.find();
    console.log(posts);
    res.status(200);
    res.send(posts);
  } catch (err) {
    // probably works
    console.log("test");
    res.status(403);
    res.send(`Fail to get posts => ${err}`);
  }
});

module.exports = router;
