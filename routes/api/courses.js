const router = require("express").Router();
const auth = require("../auth");
const User = require("../../models/User");
const Course = require("../../models/Course");

router.post("/create", auth.required, (req, res, next) => {
  // if user is teacher
  User.findById(req.payload.id)
    .then((user) => {
      if (user.role !== "TEACHER") {
        return res
          .status(401)
          .json({ errors: { role: "you are not a teacher" } });
      }

      const { courseTitle } = req.body;
      const course = new Course({
        courseTitle: courseTitle,
        teachers: user._id,
      });

      course
        .save()
        .then(() => {
          return res.json({ course: course.toJSON() });
        })
        .catch((err) => console.log(err));
    })
    .catch(next);
});

// student enrolls in a course
router.post("/enroll", auth.required, (req, res, next) => {
  // if user is teacher
  User.findById(req.payload.id)
    .then((user) => {
      if (!user.role === "STUDENT") {
        return res
          .status(401)
          .json({ errors: { role: "you are not a student" } });
      }

      const { courseTitle } = req.body;
      Course.findOneAndUpdate(
        { courseTitle: courseTitle },
        { $addToSet: { students: user._id } }
      )
        .then((course) => {
          return res.json({ course: course.toJSON() });
        })
        .catch((err) => console.log(err));
    })
    .catch(next);
});

// get all courses
router.get("/", (req, res) => {
  Course.find({})
    .then((courses) => {
      console.log(courses);
      if (courses) {
        res.json(courses);
      } else {
        res.json({});
      }
    })
    .catch((err) => console.log(err));
});

module.exports = router;
