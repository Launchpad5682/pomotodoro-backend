const { Todo } = require("../models/todo.model");
const _ = require("lodash");

const createTodo = async (req, res) => {
  const body = req.body;

  let newTodo = new Todo(body);

  try {
    newTodo = await newTodo.save();

    newTodo = _.pick(newTodo, [
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
      "username",
    ]);

    res.status(201).json({
      message: "Todo successfully created",
      body: { ...newTodo },
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
    });
  }
};

const updateTodo = async (req, res) => {
  const body = req.body;
  const { _id, ...todo } = body;

  try {
    let newTodo = await Todo.findOneAndUpdate(
      { _id },
      { ...todo },
      { new: true }
    );
    console.log(newTodo);

    if (newTodo) {
      newTodo = _.pick(newTodo, [
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
        "username",
      ]);
      res.status(204).json({
        message: "Todo successfully updated",
        body: { ...newTodo },
      });
    } else {
      res.status(400).json({
        message: "No todo found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Something went wrong",
    });
  }
};

const deleteTodo = async (req, res) => {
  const { _id } = req.body;
  try {
    const onDelete = await Todo.deleteOne({ _id });
    console.log(onDelete, "delete todo");
    res.status(200).json({
      message: "Successfully deleted",
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
    });
  }
};

module.exports = { createTodo, updateTodo, deleteTodo };
