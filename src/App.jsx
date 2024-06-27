import { useState, useEffect } from "react";
import AppName from "./components/AppName";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import GreetMsg from "./components/GreetMsg";
import Footer from "./components/Footer";
import "./App.css";

const MAX_LOCAL_STORAGE_SIZE = 20 * 1024 * 1024;

function App() {
  const [todoItemsList, setTodoItemsList] = useState(() => {
    const storedTodoItems = JSON.parse(localStorage.getItem("todoItems"));
    return storedTodoItems || [];
  });

  useEffect(() => {
    const serializedTodoItems = JSON.stringify(todoItemsList);
    const currentStorageSize = serializedTodoItems.length * 2;

    if (currentStorageSize > MAX_LOCAL_STORAGE_SIZE) {
      alert("Storage limit exceeded. Clearing localStorage.");
      localStorage.clear();
      return;
    }

    localStorage.setItem("todoItems", serializedTodoItems);
  }, [todoItemsList]);

  const addNewItems = (itemName, itemDate) => {
    setTodoItemsList((currItem) => [
      ...currItem,
      { name: itemName, dueDate: itemDate },
    ]);
  };

  const deleteItem = (itemName) => {
    const newTodoItemsList = todoItemsList.filter(
      (item) => item.name !== itemName
    );
    setTodoItemsList(newTodoItemsList);
  };

  return (
    <>
      <AppName />
      <TodoForm handleNewItem={addNewItems} />
      <TodoList todoItemsList={todoItemsList} onDeleteClick={deleteItem} />
      {todoItemsList.length === 0 ? <GreetMsg /> : null}
      <Footer />
    </>
  );
}

export default App;
