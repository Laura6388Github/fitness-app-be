const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const QuestionSchema = new mongoose.Schema({
  content: String,
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
