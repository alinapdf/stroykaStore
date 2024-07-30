import { Link } from "react-router-dom";
import { useState } from "react";
import ButtonAddToBusket from "../Buttons/ButtonAddToBasket";
import ButtonCounterInBasket from "../Buttons/ButtonCounterInBasket";
import { productInBasketList } from "../ProductInBasket/productInBasketList";
const GoodItem = ({ id, img, name, priceTotal, count, price }) => {
  const [goodButton, setGoodButton] = useState(true);
  // const changeGoodBtn = () => {
  //   setGoodButton(false);
  // };

  const handleAddToBasket = () => {
    const product = {
      id,
      img,
      name,
      price,
      priceTotal,
      count,
    };
    productInBasketList.push(product);
    setGoodButton(false);
  };
  console.log(productInBasketList);

  return (
    <>
      <li className="goods-list-item">
        <Link to={`/goods-info-page/${id}`} className="goods-list-item-link">
          <div className="goods-list-item-img">
            <img src={img} alt={name} />
          </div>
          <div className="goods-list-item-name">{name}</div>
          <div className="goods-list-item-price">{price}₽</div>
        </Link>
        {goodButton ? (
          <ButtonAddToBusket onClick={handleAddToBasket} />
        ) : (
          <ButtonCounterInBasket />
        )}
      </li>
    </>
  );
};

export default GoodItem;
