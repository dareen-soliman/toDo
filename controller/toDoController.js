const ToDo = require("../model/toDo.js");

// POST: Add a new todo
const createTodo = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) return res.status(400).json({ error: "Title is required" });

        const todo = new ToDo({ title });
        await todo.save();
        res.status(201).json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET: Get all todos
const getTodos = async (req, res) => {
    try {
        const todos = await ToDo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// PUT: Update a todo
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await ToDo.findByIdAndUpdate(
            id,
            { ...req.body, updatedAt: Date.now() },
            { new: true }
        );
        if (!todo) return res.status(404).json({ error: "Todo not found" });
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE: Remove a todo
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await ToDo.findByIdAndDelete(id);
        if (!todo) return res.status(404).json({ error: "Todo not found" });
        res.json({ message: "Todo deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
