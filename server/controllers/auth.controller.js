// npm modules
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");

// our modules
const User = require("../models/User.model");
const { secret } = require("../config/");

const login = async (req, res) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    if (!user.authenticate(req.body.password)) {
      return res.status(400).json({
        error: "Email and password don't match.",
      });
    }

    const token = jwt.sign({ _id: user._id }, secret);

    // console.log(user, token);

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isTeacher: user.isTeacher,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: "Could not sign in",
    });
  }
};

const logout = (req, res) => {};

const requireSignin = expressJWT({
  secret: secret,
  algorithms: ["HS256"],
  userProperty: "auth",
});

const hasAuthorization = (req, res, next) => {
  console.log(req.auth);
  const authorized =
    (req.profile && req.auth && req.profile._id == req.auth._id) ||
    (req.body && req.auth && req.body._id == req.auth._id);

  if (!authorized) {
    return res.status(401).json({
      error: "User is not authorized",
    });
  }

  next();
};

module.exports = { login, logout, requireSignin, hasAuthorization };
