import { useState } from "react";
import { useParams } from "react-router-dom";
import { goodsList } from "../Goods/goodsList";
import "./GoodInfo.scss";
import { Link } from "react-router-dom";
import { productInBasketList } from "../ProductInBasket/productInBasketList";
import plusBlack from "./../../img/goods-page/plus-black.svg";
import minusBlack from "./../../img/goods-page/minus-black.svg";

const GoodInfo = () => {
  const { id } = useParams();
  const good = goodsList[id];

  // Добавлено состояние для отслеживания количества товара и состояния кнопки
  const [itemCount, setItemCount] = useState(1);
  const [goodButton, setGoodButton] = useState(true);

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
        img: good.img, // Исправлено
        name: good.name, // Исправлено
        price: good.price, // Исправлено
        priceTotal: itemCount * good.price, // Исправлено
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

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      setItemCount(value);
    }
  };

  return (
    <>
      <section className="good-info">
        <div className="container">
          <Link to="/" className="good-info-back-to-home">
            На главную
          </Link>
          <div className="good-info-wrapper">
            <div className="good-info-wrapper-img">
              <img src={good.img} alt={good.name} />
            </div>
            <div className="good-info-wrapper-text">
              <h1 className="good-info-wrapper-text-header">{good.name}</h1>
              <div className="good-info-wrapper-text-status">В наличии</div>
              <div className="good-info-wrapper-text-price">{good.price}₽</div>
              <div className="good-info-wrapper-basket-wrapper">
                <button
                  className="good-info-wrapper-basket-wrapper-btn"
                  onClick={handleAddToBasket}
                >
                  В корзину
                </button>
                <div className="good-info-wrapper-basket-wrapper-counter">
                  <div
                    className="good-info-wrapper-basket-wrapper-counter-plus"
                    onClick={increase}
                  >
                    <img src={plusBlack} alt="Добавить" />
                  </div>
                  <input
                    type="number"
                    className="good-info-wrapper-basket-wrapper-counter-input"
                    value={itemCount}
                    onChange={handleInputChange}
                    min="1"
                  />
                  <div
                    className="good-info-wrapper-basket-wrapper-counter-minus"
                    onClick={decrease}
                  >
                    <img src={minusBlack} alt="Убрать" />
                  </div>
                </div>
              </div>
              <div className="good-info-wrapper-text-delivery-info">
                <div className="good-info-wrapper-text-delivery-info-deliver">
                  Поставщик: Аксон
                </div>
                <div className="good-info-wrapper-text-delivery-info-information">
                  Доставка осуществляется курьерами поставщика или службой
                  курьеров Достависта. Также товар можно забрать самостоятельно
                  от поставщика
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoodInfo;
