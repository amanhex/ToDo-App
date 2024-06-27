import { useState } from "react";
import AppName from "./components/AppName";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todoItemsList, setTodoItemsList] = useState([]);

  const addNewItems = (itemName, itemDate) => {
    setTodoItemsList((currItem) => [
      ...currItem,
      { name: itemName, dueDate: itemDate },
    ]);
  };

  return (
    <>
      <AppName />
      <TodoForm handleNewItem={addNewItems} />
      <TodoList todoItemsList={todoItemsList} />
    </>
  );
}

export default App;
