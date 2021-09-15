const jwt = require("jsonwebtoken");
const { secret } = require("../config");
const errorHandler = require("../helpers/errorhandler");
const User = require("../models/User.model");

// middlewares
const userByID = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    req.profile = user;
    next();
  } catch (err) {
    console.log(err);
  }
};

const isTeacher = (req, res, next) => {
  const isTeacher = req.profile && req.profile.isTeacher;

  if (!isTeacher) {
    return res.status(403).json({
      error: "User in not a teacher",
    });
  }

  next();
};

// /api/users
const register = async (req, res) => {
  try {
    let user = new User(req.body);
    await user.save();

    return res.status(200).json({ message: "Successfully signed up!" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    let users = await User.find({});

    if (!users) {
      return res.status(404).json({ error: "No users found." });
    }

    return res.status(200).json({ users });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// /api/users/me
const getUser = async (req, res) => {
  try {
    let user = await User.findById(req.auth._id);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isTeacher: user.isTeacher,
    });
  } catch (err) {
    console.log(err);
  }
};

// /:userID
const getUserByID = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

const updateUserByID = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const removeUserByID = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  register,
  getAllUsers,
  getUser,
  getUserByID,
  updateUserByID,
  removeUserByID,
  userByID,
  isTeacher,
};
