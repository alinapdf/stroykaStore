import plusBlack from "./../../img/goods-page/plus-black.svg";
import minusBlack from "./../../img/goods-page/minus-black.svg";

const ButtonCounterInBasket = ({ count, increase, decrease, changeValue }) => {
  return (
    <div className="goods-list-item-btn-basket-counter">
      <button
        className="goods-list-item-btn-basket-counter-plus"
        onClick={increase}
      >
        <img src={plusBlack} alt="add" />
      </button>
      <input
        type="number"
        className="goods-list-item-btn-basket-counter-input"
        min="1"
        max="99"
        value={count}
        onChange={changeValue}
      />
      <button
        className="goods-list-item-btn-basket-counter-minus"
        onClick={decrease}
      >
        <img src={minusBlack} alt="remove" />
      </button>
    </div>
  );
};

export default ButtonCounterInBasket;
