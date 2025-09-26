import React, { useEffect, useState } from "react";
import TodoForm from "./components/ToDoForm";
import TodoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos
  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/todos");
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  // Update todo
  const updateTodo = async (id, updatedFields) => {
    try {
      await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFields),
      });
      fetchTodos();
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "DELETE",
      });
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>My ToDo App</h1>
      <TodoForm refreshTodos={fetchTodos} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
