import { useRef } from "react";

const TodoForm = ({ handleNewItem }) => {
  const todoItemName = useRef();
  const todoItemDate = useRef();
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoItemName.current.value;
    const todoDate = todoItemDate.current.value;
    todoItemName.current.value = "";
    todoItemDate.current.value = "";
    handleNewItem(todoName, todoDate);
  };

  return (
    <>
      <form>
        <input
          type="text"
          ref={todoItemName}
          className="input-text"
          placeholder="Enter To Do Here"
          required
        />
        <input type="date" ref={todoItemDate} className="input-date" required />
        <button onClick={handleAddButtonClicked}>Add</button>
      </form>
    </>
  );
};

export default TodoForm;
