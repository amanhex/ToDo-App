const Item = ({ itemName, itemDueDate, onDeleteClick }) => {
  return (
    <>
      <div className="item">
        <div>{itemName}</div>
        <div>{itemDueDate}</div>
        <button
          type="button"
          className="button"
          onClick={() => onDeleteItem(itemName)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Item;
