import Item from "./Item";

const TodoList = ({ todoItemsList, onDeleteClick }) => {
  return (
    <>
      <div className="item-container">
        {todoItemsList.map((item) => (
          <Item
            itemName={item.name}
            itemDueDate={item.dueDate}
            onDeleteClick={onDeleteClick}
            key={item.name}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
