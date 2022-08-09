const mongoose = require("mongoose");
const { Schema } = mongoose;
const _ = require("lodash");

const todoSchema = new Schema({
  title: String,
  description: String,
  focusTime: Number,
  shortBreakTime: Number,
  longBreakTime: Number,
  timerMode: { type: String, enum: ["focus", "short", "long"] },
  breakCount: Number,
  timeStamp: Number,
  completed: Boolean,
  username: String,
});

const Todo = new mongoose.model("Todo", todoSchema);

module.exports = { Todo };
