import React, { useState } from "react";

function TodoForm({ refreshTodos }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    try {
      await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      setTitle("");
      refreshTodos();
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "5px", width: "70%" }}
      />
      <button type="submit" style={{ padding: "5px 10px", marginLeft: "5px" }}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
