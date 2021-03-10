const express = require("express");
const mongoose = require("mongoose");
// const passport = require("passport");

const url = "mongodb://127.0.0.1:27017/elearning";

const app = express();

app.use(express.json());

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("db success");
}).on("error", (err) => {
  console.log("db error", err);
});

// const Student = mongoose.model("Student");
// const Teacher = mongoose.model("Teacher");
require("./models/User");
// require("./models/Teacher");
// require("./models/Student");

require("./config/passport");

app.use(require("./routes"));

// course
// app.get("/api/courses", (req, res) => {});

app.listen("3000");
