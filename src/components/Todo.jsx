import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
const Todo = ({ todos, removeTodoos, onUpdate }) => {
  const [editable, setEditable] = useState(false);
  const [editTodo, setEditTodo] = useState(todos.content);
  const removeTodos = () => {
    removeTodoos(todos.id);
  };

  const updateTodo = () => {
    const request = {
      id: todos.id,
      content: editTodo,
    };
    onUpdate(request);
    setEditable(false);
  };

  return (
    <div className="flex flex-row items-center justify-between border border-1 border-gray-400 p-3 mt-4">
      <div>
        {editable ? (
          <input
            type="text"
            placeholder="Enter Todo"
            className="todo-input w-[380px]"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : (
          todos.content
        )}
      </div>
      <div className="flex">
        <IoIosRemoveCircle
          className="todo-icons text-red-600"
          onClick={removeTodos}
        />

        {editable ? (
          <FaCheck className="todo-icons text-green-500" onClick={updateTodo} />
        ) : (
          <FaEdit
            className="todo-icons text-[gold]"
            onClick={() => setEditable(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
