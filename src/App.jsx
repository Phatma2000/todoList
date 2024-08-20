import { useState, useEffect } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import ConfirmationModal from "./components/ConfirmationModal"; // Import the modal

function App() {
  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [notification, setNotification] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const createTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  const confirmDelete = (todoId) => {
    setTodoToDelete(todoId);
    setShowModal(true);
  };

  const removeTodo = () => {
    setTodo(todo.filter((todo) => todo.id !== todoToDelete));
    setShowModal(false);
    setTodoToDelete(null);
    showNotification("Data is deleted");
  };

  const onUpdate = (newTodo) => {
    const updateTodo = todo.map((todos) =>
      todos.id !== newTodo.id ? todos : newTodo
    );
    setTodo(updateTodo);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  return (
    <div className="App">
      <div className="bg-gray-700 text-white w-2/3 h-full text-center p-4 mt-4 mb-8">
        TODO LIST
      </div>
      <div className="main">
        {notification && (
          <div className="notification bg-green-500 text-white p-2 mb-4">
            {notification}
          </div>
        )}
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList
          todo={todo}
          onRemoveTodo={confirmDelete}
          onUpdate={onUpdate}
        />
      </div>

      <ConfirmationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={removeTodo}
      />
    </div>
  );
}

export default App;
