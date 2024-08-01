import plus from "./../../img/goods-page/plus-black.svg";
import minus from "./../../img/goods-page/minus-black.svg";
const Count = ({ count, increase, decrease, id, changeValue }) => {
  return (
    <>
      <button
        className="basket-contain-list-item-wrapper-info-counter-plus"
        onClick={() => {
          increase(id);
        }}
      >
        <img src={plus} alt="add" />
      </button>
      <input
        type="number"
        className="basket-contain-list-item-wrapper-info-counter-input"
        min="1"
        max="99"
        value={count}
        onChange={(e) => {
          changeValue(id, +e.target.value);
        }}
      />
      <button
        className="basket-contain-list-item-wrapper-info-counter-minus"
        onClick={() => decrease(id)}
      >
        <img src={minus} alt="remove" />
      </button>
    </>
  );
};

export default Count;
