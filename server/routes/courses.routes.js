const router = require("express").Router();

const userCtrl = require("../controllers/user.controller");
const authCtrl = require("../controllers/auth.controller");
const courseCtrl = require("../controllers/course.controller");

// get all courses
// router.route("/api/courses").get(courseCtrl.getCourses);

// teacher create course
// router
//   .route("/api/courses/by/:userId")
//   .get(
//     authCtrl.requireSignin,
//     authCtrl.hasAuthorization,
//     userCtrl.isTeacher,
//     courseCtrl.getCoursesByTeacher
//   )
//   .post(
//     authCtrl.requireSignin,
//     authCtrl.hasAuthorization,
//     userCtrl.isTeacher,
//     courseCtrl.createCourse
//   )
//   .put(
//     authCtrl.requireSignin,
//     authCtrl.hasAuthorization,
//     userCtrl.isTeacher,
//     courseCtrl.updateCourseByTeacher
//   )
//   .delete(
//     authCtrl.requireSignin,
//     authCtrl.hasAuthorization,
//     userCtrl.isTeacher,
//     courseCtrl.removeCourseByID
//   );

// add lesson to course
// router
//   .route("/api/courses/:courseId/lessons")
//   .get(
//     authCtrl.requireSignin,
//     authCtrl.hasAuthorization,
//     courseCtrl.isTeacher,
//     courseCtrl.getLesson
//   )
//   .post(
//     authCtrl.requireSignin,
//     authCtrl.hasAuthorization,
//     courseCtrl.isTeacher,
//     courseCtrl.createLesson
//   )
//   .put(
//     authCtrl.requireSignin,
//     authCtrl.hasAuthorization,
//     courseCtrl.isTeacher,
//     courseCtrl.updateLesson
//   )
//   .delete(
//     authCtrl.requireSignin,
//     authCtrl.hasAuthorization,
//     courseCtrl.isTeacher,
//     courseCtrl.removeLesson
//   );

// get user id from parameter
router.param("courseId", courseCtrl.courseByID);
router.param("userId", userCtrl.userByID);

module.exports = router;
