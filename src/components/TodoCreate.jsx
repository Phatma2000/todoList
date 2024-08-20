import React, { useState } from "react";

const TodoCreate = ({ onCreateTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const clearInput = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 99999999999),
      content: newTodo,
    };

    onCreateTodo(request);
    clearInput();
  };
  return (
    <div className="todo-create mt-6">
      <input
        type="text"
        placeholder="Enter Todo"
        className="todo-input"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={createTodo} className="todo-create-button">
        Add todo
      </button>
    </div>
  );
};

export default TodoCreate;
