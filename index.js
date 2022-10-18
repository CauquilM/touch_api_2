const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

const posts = require("./routes/posts");

app.use("/posts", posts);

mongoose.connect(
  "mongodb+srv://MatDev:LgfC8my3rxllpe3X@cluster0.7cwnoib.mongodb.net/shadowdb?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () =>
    console.log(
      `Connection ${new Date().getHours()}:${new Date().getMinutes()}`
    )
);
app.listen(process.env.PORT || 4000);
