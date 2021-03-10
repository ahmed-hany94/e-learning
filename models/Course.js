const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: slug, id, description, rating
const courseSchema = mongoose.Schema(
  {
    courseTitle: String,
    students: [String],
    teachers: [String],
  },
  { timestamps: true }
);

courseSchema.methods.toJSON = function () {
  return {
    courseTitle: this.courseTitle,
    students: this.students,
    teachers: this.teachers,
  };
};

module.exports = mongoose.model("Course", courseSchema);
