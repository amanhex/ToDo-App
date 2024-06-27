const Item = ({ itemName, itemDueDate, onDeleteClick }) => {
  return (
    <>
      <div className="item">
        <div className="item-name">{itemName}</div>
        <div className="item-date">{itemDueDate}</div>
        <button
          type="button"
          className="delete-button"
          onClick={() => onDeleteClick(itemName)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Item;
