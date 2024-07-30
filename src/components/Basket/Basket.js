import "./Basket.scss";
import ButtonToHome from "../ButtonToHome/ButtonToHome";
import { Link } from "react-router-dom";
// import { goodsList } from "../Goods/goodsList";
import { productInBasketList } from "../ProductInBasket/productInBasketList";
import { useState } from "react";
import ProductInBasket from "../ProductInBasket/ProductInBasket";
const Basket = () => {
  console.log(productInBasketList);
  const [basket, setBasket] = useState(productInBasketList);

  const deleteGood = (id) => {
    console.log("delete", id);
    const index = productInBasketList.findIndex((product) => product.id === id);
    if (index !== -1) {
      productInBasketList.splice(index, 1);
    }
    setBasket((prevS) => {
      return prevS.filter((product) => {
        return id !== product.id;
      });
    });

    if (productInBasketList.length === 0) {
      return (
        <>
          <div className="no-goods-in-busket">В корзине пусто!</div>
        </>
      );
    }
  };

  const increase = (id) => {
    setBasket((prevS) => {
      return prevS.map((good) => {
        if (good.id === id) {
          const newCount = good.count + 1;
          const newPriceTotal = newCount * good.price;
          console.log(newCount);
          console.log(newPriceTotal);
          return {
            ...good,
            count: newCount,
            priceTotal: newPriceTotal,
          };
        }
        return good;
      });
    });
  };

  const decrease = (id) => {
    setBasket((prevS) => {
      return prevS.map((good) => {
        if (good.id === id && good.count > 1) {
          const newCount = good.count - 1;
          const newPriceTotal = newCount * good.price;
          return {
            ...good,
            count: newCount,
            priceTotal: newPriceTotal,
          };
        }
        return good;
      });
    });
  };

  console.log(productInBasketList);

  const goods = basket.map((good) => {
    console.log("good", good);
    return (
      <ProductInBasket
        key={good.id}
        product={good}
        deleteGood={deleteGood}
        increase={increase}
        decrease={decrease}
      />
    );
  });

  return (
    <>
      <section className="basket">
        <div className="basket-header-wrapper">
          <Link to="/">
            <ButtonToHome />
          </Link>

          <h1 className="basket-header">Корзина</h1>
        </div>
        <div className="container">
          <div className="basket-wrapper">
            <div className="basket-wrapper-result">
              <div className="basket-wrapper-result-header">Итого</div>
              <div className="basket-wrapper-result-info-wrapper">
                <div className="basket-wrapper-result-info-wrapper-name">
                  Количество товара
                </div>
                <div className="basket-wrapper-result-info-wrapper-amount">
                  3 шт.
                </div>
              </div>
              <div className="basket-wrapper-result-info-wrapper">
                <div className="basket-wrapper-result-info-wrapper-name">
                  Товаров на сумму
                </div>
                <div className="basket-wrapper-result-info-wrapper-amount">
                  3 160 ₽
                </div>
              </div>
              <div className="basket-wrapper-result-btn-wrapper">
                <button className="basket-wrapper-result-btn">
                  Оформить заказ
                </button>
              </div>
              <div className="basket-wrapper-result-info">
                <p className="basket-wrapper-result-info-text one-deliver">
                  Можно сделать заказ только от одного поставщика
                </p>
                <p className="basket-wrapper-result-info-text delivery">
                  Доставка осуществляется курьерами поставщика или службой
                  курьеров Достависта. Также товар можно забрать самостоятельно
                  от поставщика
                </p>
                <p className="basket-wrapper-result-info-text box">
                  Точная сумма доставки будет определена после после
                  подтверждения заказа
                </p>
              </div>
            </div>
            <div className="basket-contain">
              {productInBasketList.length === 0 ? (
                <div className="no-goods-in-busket">В корзине пусто!</div>
              ) : (
                <ul className="basket-contain-list">
                  {/* <ProductInBasket /> */}
                  {goods}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Basket;
