import { useRef } from "react";

const TodoForm = ({ handleNewItem }) => {
  const todoItemName = useRef();
  const todoItemDate = useRef();
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoItemName.current.value;
    const todoDate = todoItemDate.current.value;
    if (todoName && todoDate) {
      todoItemName.current.value = "";
      todoItemDate.current.value = "";
      handleNewItem(todoName, todoDate);
    } else if (!todoName) {
      alert("Enter the To Do Item");
    } else {
      alert("Enter the To Do Date");
    }
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
        <button
          type="submit"
          className="add-button"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
