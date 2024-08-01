import { Link } from "react-router-dom";
import { useState } from "react";
import ButtonAddToBusket from "../Buttons/ButtonAddToBasket";
import ButtonCounterInBasket from "../Buttons/ButtonCounterInBasket";
import { productInBasketList } from "../ProductInBasket/productInBasketList";

const GoodItem = ({ id, img, name, price, count }) => {
  const [goodButton, setGoodButton] = useState(true);
  const [itemCount, setItemCount] = useState(count);

  const handleAddToBasket = () => {
    const existingProduct = productInBasketList.find(
      (product) => product.id === id
    );

    if (existingProduct) {
      existingProduct.count += itemCount;
      existingProduct.priceTotal =
        existingProduct.count * existingProduct.price;
    } else {
      const product = {
        id,
        img,
        name,
        price,
        priceTotal: itemCount * price,
        count: itemCount,
      };
      productInBasketList.push(product);
    }

    setGoodButton(false);
  };

  const increase = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    setItemCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const changeValue = (value) => {
    setItemCount(value >= 1 ? value : 1);
  };

  console.log(itemCount);

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
          <ButtonCounterInBasket
            count={itemCount}
            increase={increase}
            decrease={decrease}
            changeValue={(e) => changeValue(Number(e.target.value))}
          />
        )}
      </li>
    </>
  );
};

export default GoodItem;
