import { Link } from "react-router-dom";
import { useState } from "react";
import ButtonAddToBusket from "../Buttons/ButtonAddToBasket";
import ButtonCounterInBasket from "../Buttons/ButtonCounterInBasket";
const GoodItem = ({ id, img, name, price }) => {
  const [goodButton, setGoodButton] = useState(true);
  const changeGoodBtn = () => {
    setGoodButton(false);
  };
  return (
    <>
      <li className="goods-list-item">
        <Link to={`/goods-info-page/${id}`} className="goods-list-item-link">
          <div className="goods-list-item-img">
            <img src={img} alt={name} />
          </div>
          <div className="goods-list-item-name">{name}</div>
          <div className="goods-list-item-price">{price}</div>
        </Link>
        {goodButton ? (
          <ButtonAddToBusket onClick={changeGoodBtn} />
        ) : (
          <ButtonCounterInBasket />
        )}
      </li>
    </>
  );
};

export default GoodItem;
