const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middlewares/authenticateUser");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

/**Get all the todos from the specific user */
router.get("/todos", authenticateUser, getTodos);

router.post("/todo", authenticateUser, createTodo);

router.put("/todo", authenticateUser, updateTodo);

router.delete("/todo/:todoID", authenticateUser, deleteTodo);

module.exports = router;
