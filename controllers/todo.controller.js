const { Todo } = require("../models/todo.model");
const _ = require("lodash");
const mongoose = require("mongoose");
const catchError = require("../utils/catchError");

const getTodos = (req, res, next) => {
  catchError(next, async () => {
    const userID = req.userID;
    try {
      const todos = await Todo.find({ userID });

      res.status(200).json({
        todos,
      });
    } catch (error) {}
  });
};

const createTodo = (req, res, next) => {
  catchError(next, async () => {
    const body = req.body;
    const _id = req.userID;

    try {
      const newTodo = new Todo({
        ...body.todo,
        userID: mongoose.Types.ObjectId(_id),
      });
      newTodo.save();

      const todo = _.pick(newTodo, [
        "_id",
        "title",
        "description",
        "focusTime",
        "shortBreakTime",
        "longBreakTime",
        "timerMode",
        "breakCount",
        "timeStamp",
        "completed",
      ]);

      res.status(201).json({
        message: "Todo successfully created",
        todo,
      });
    } catch (error) {
      res.status(400).json({
        message: "Something went wrong",
      });
    }
  });
};

const updateTodo = async (req, res, next) => {
  catchError(next, async () => {
    const body = req.body;
    const { todo } = body;

    try {
      const updatedTodo = _.pick(todo, [
        "title",
        "description",
        "focusTime",
        "shortBreakTime",
        "longBreakTime",
        "timerMode",
        "breakCount",
        "timeStamp",
        "completed",
      ]);

      const newTodo = await Todo.findOneAndUpdate(
        { _id: todo._id },
        updatedTodo
      );

      const updatedNewTodo = _.pick(todo, [
        "_id",
        "title",
        "description",
        "focusTime",
        "shortBreakTime",
        "longBreakTime",
        "timerMode",
        "breakCount",
        "timeStamp",
        "completed",
      ]);

      res.status(200).json({
        message: "Todo successfully updated",
        todo: updatedNewTodo,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Something went wrong",
      });
    }
  });
};

const deleteTodo = (req, res, next) => {
  catchError(next, async () => {
    const { todoID } = req.params;
    try {
      const onDelete = await Todo.deleteOne({ _id: todoID });

      res.status(204).json({
        message: "Successfully deleted",
      });
    } catch (error) {
      res.status(400).json({
        message: "Something went wrong",
      });
    }
  });
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
