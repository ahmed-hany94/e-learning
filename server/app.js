const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const url = "mongodb://127.0.0.1:27017/elearning";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    // credentials: true,
  })
);

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

app.use("/", require("./routes/users.routes"));
app.use("/", require("./routes/courses.routes"));
// app.use("/", require("./routes/enrollments.routes"));

app.listen("6969", () => {
  console.log("listening on http://localhost:6969");
});
