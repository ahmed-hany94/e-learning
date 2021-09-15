const router = require("express").Router();

const authCtrl = require("../controllers/auth.controller");
const userCtrl = require("../controllers/user.controller");

// User
router.route("/api/users").get(userCtrl.getAllUsers).post(userCtrl.register);

router.route("/api/users/me").get(authCtrl.requireSignin, userCtrl.getUser);

router
  .route("/api/users/:userId")
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.getUserByID);
//   .put(
//     authCtrl.requireSignin,
//     authCtrl.hasAuthorization,
//     userCtrl.updateUserByID
//   )
//   .delete(
//     authCtrl.requireSignin,
//     authCtrl.hasAuthorization,
//     userCtrl.removeUserByID
//   );

// Auth
router
  .route("/api/auth")
  /*.get(authCtrl.requireSignin, authCtrl.hasAuthorization, authCtrl.logout)*/
  .post(authCtrl.login);

// get user id from parameter
router.param("userId", userCtrl.userByID);

module.exports = router;
