import plusBlack from "./../../img/goods-page/plus-black.svg";
import minusBlack from "./../../img/goods-page/minus-black.svg";
const ButtonCounterInBasket = () => {
  return (
    <>
      <button className="goods-list-item-btn-basket-counter">
        <div className="goods-list-item-btn-basket-counter-plus">
          <img src={plusBlack} alt="add" />
        </div>
        <input
          type="text"
          className="goods-list-item-btn-basket-counter-input"
        />
        <div className="goods-list-item-btn-basket-counter-minus">
          <img src={minusBlack} alt="remove" />
        </div>
      </button>
    </>
  );
};

export default ButtonCounterInBasket;
