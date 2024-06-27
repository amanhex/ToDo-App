import Item from "./Item";

const TodoList = ({ todoItemsList }) => {
  return (
    <>
      <div className="item-container">
        {todoItemsList.map((item) => (
          <Item
            itemName={item.name}
            itemDueDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
