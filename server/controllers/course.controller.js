const Course = require("../models/Course.model");
const errorHandler = require("./../helpers/errorhandler");

// middlewares
const courseByID = async (req, res, next, id) => {
  try {
  } catch (err) {}
};

const isTeacher = (req, res) => {};

// /api/courses
const getCourses = async (req, res) => {
  try {
  } catch (err) {}
};

// api/courses/:userID
const getCoursesByTeacher = async (req, res) => {
  try {
  } catch (err) {}
};

const createCourseByTeacher = async (req, res) => {
  try {
  } catch (err) {}
};

const updateCourseByTeacher = async (req, res) => {
  try {
  } catch (err) {}
};

const removeCourseByTeacher = async (req, res) => {
  try {
  } catch (err) {}
};

// api/courses/:courseID/lessons
const createLesson = async (req, res) => {
  try {
  } catch (err) {}
};

module.exports = {
  getCourses,
  getCoursesByTeacher,
  createCourseByTeacher,
  updateCourseByTeacher,
  removeCourseByTeacher,
  createLesson,
  courseByID,
  isTeacher,
};
