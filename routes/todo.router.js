const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middlewares/authenticateUser");
const { createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller");

/**Get all the todos from the specific user */
router.get("/todos/:username", authenticateUser, (req, res) => {
  const { username } = req.params;
  res.status(200).json({
    hello: "world",
  });
});

router.post("/todo", authenticateUser, createTodo);

router.put("/todo", authenticateUser, updateTodo);

router.delete("/todo", authenticateUser, deleteTodo);

module.exports = router;
