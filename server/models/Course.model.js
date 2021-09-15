const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  // prev, next
});

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    description: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
    },
    teacher: { type: mongoose.Schema.ObjectId, ref: "User" },
    lessons: [lessonSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
