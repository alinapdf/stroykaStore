import "./Basket.scss";
import ButtonToHome from "../ButtonToHome/ButtonToHome";
import { Link } from "react-router-dom";
// import { goodsList } from "../Goods/goodsList";
import { productInBasketList } from "../ProductInBasket/productInBasketList";
import { useState } from "react";
import ProductInBasket from "../ProductInBasket/ProductInBasket";
import BasketResult from "./BasketResult";
import { useEffect } from "react";

const Basket = () => {
  const [basket, setBasket] = useState(productInBasketList); //список товаров в корзинне
  const [total, setTotal] = useState({ price: 0, count: 0 });

  const calculateTotal = (basket) => {
    const totalPrice = basket.reduce((prevS, current) => {
      return prevS + current.priceTotal;
    }, 0);
    const totalCount = basket.reduce((prevS, current) => {
      return prevS + current.count;
    }, 0);
    setTotal({ price: totalPrice, count: totalCount });
  };

  useEffect(() => {
    calculateTotal(basket);
  }, [basket]);

  const deleteGood = (id) => {
    // console.log("delete", id);
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

  const changeValue = (id, value) => {
    setBasket((basket) => {
      return basket.map((good) => {
        if (good.id === id) {
          return {
            ...good,
            count: value,
            priceTotal: value * good.price,
          };
        }
        return good;
      });
    });
  };

  console.log(productInBasketList);

  const goods = basket.map((good) => {
    console.log("goodINBASKET", good); //////////////////////////////
    return (
      <ProductInBasket
        key={good.id}
        product={good}
        deleteGood={deleteGood}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
    );
  });

  console.log("goods", goods);

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
            <BasketResult total={total} />
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
