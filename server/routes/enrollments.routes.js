const router = require("express").Router();

const authCtrl = require("../controllers/auth.controller");
const courseCtrl = require("../controllers/course.controller");
const enrollmentCtrl = require("../controllers/enrollment.controller");

router
  .route("/api/enrollments")
  .post(authCtrl.requireSignin, enrollmentCtrl.createEnrollment);

router.route("/api/enrollments/:courseId").get().post();

// get user id from parameter
router.param("courseId", courseCtrl.courseByID);
router.param("enrollmentId", enrollmentCtrl.enrollmentByID);

module.exports = router;
