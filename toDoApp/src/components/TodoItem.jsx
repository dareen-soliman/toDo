import { useState, useEffect } from "react";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  // Keep newTitle in sync with latest todo.title
  useEffect(() => {
    setNewTitle(todo.title);
  }, [todo.title]);

  const handleUpdate = async () => {
    if (newTitle.trim() === "") return;
    await updateTodo(todo._id, { title: newTitle });
    setIsEditing(false);
  };

  const handleCheckboxChange = () => {
    updateTodo(todo._id, { completed: !todo.completed });
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {/* Bigger Checkbox */}
      <input
        type="checkbox"
        checked={!!todo.completed}
        onChange={handleCheckboxChange}
        style={{ width: "20px", height: "20px" }}
      />

      {/* Title / Input field */}
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleUpdate();
            if (e.key === "Escape") setIsEditing(false);
          }}
          autoFocus
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)}>{todo.title}</span>
      )}

      {/* Delete button */}
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
