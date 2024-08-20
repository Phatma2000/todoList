import React from "react";
import Todo from "./Todo";

const TodoList = ({ todo, onRemoveTodo, onUpdate }) => {
  return (
    <div className="w-full mt-[50px]">
      {todo &&
        todo.map((todos) => (
          <Todo
            key={todos.id}
            todos={todos}
            removeTodoos={onRemoveTodo}
            onUpdate={onUpdate}
          />
        ))}
    </div>
  );
};

export default TodoList;
