import { useState, useEffect } from "react";
import AppName from "./components/AppName";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import GreetMsg from "./components/GreetMsg";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [todoItemsList, setTodoItemsList] = useState(() => {
    const storedTodoItems = JSON.parse(localStorage.getItem("todoItems"));
    return storedTodoItems || [];
  });

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItemsList));
  }, [todoItemsList]);

  const addNewItems = (itemName, itemDate) => {
    setTodoItemsList((currItem) => [
      ...currItem,
      { name: itemName, dueDate: itemDate },
    ]);
  };

  const deleteItem = (itemName) => {
    const newTodoItemsList = todoItemsList.filter(
      (item) => item.name != itemName
    );
    setTodoItemsList(newTodoItemsList);
  };

  return (
    <>
      <AppName />
      <TodoForm handleNewItem={addNewItems} />
      <TodoList todoItemsList={todoItemsList} onDeleteClick={deleteItem} />
      {todoItemsList.length == 0 ? <GreetMsg /> : null}
      <Footer />
    </>
  );
}

export default App;
