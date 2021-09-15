const mongoose = require("mongoose");

const EnrollmentSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.ObjectId, ref: "Course" },
    student: { type: mongoose.Schema.ObjectId, ref: "User" },
    lessonStatus: [
      {
        lesson: { type: mongoose.Schema.ObjectId, ref: "Lesson" },
        complete: Boolean,
      },
    ],
    completed: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enrollment", EnrollmentSchema);
