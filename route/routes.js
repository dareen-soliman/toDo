const express = require("express");
const { createTodo, getTodos, updateTodo, deleteTodo } = require("../controller/toDoController.js");

const router = express.Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
