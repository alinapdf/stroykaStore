import "./Basket.scss";
import plus from "./../../img/goods-page/plus-black.svg";
import minus from "./../../img/goods-page/minus-black.svg";
import g1 from "./../../img/goods/g1.png";
import ButtonToHome from "../ButtonToHome/ButtonToHome";
import { Link } from "react-router-dom";
const Basket = () => {
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
              <ul className="basket-contain-list">
                <li className="basket-contain-list-item">
                  <div className="basket-contain-list-item-wrapper">
                    <div className="basket-contain-list-item-wrapper-img">
                      <img src={g1} alt="g1" />
                    </div>
                    <div className="basket-contain-list-item-wrapper-info">
                      <div className="basket-contain-list-item-wrapper-info-header">
                        Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1
                        рулон)
                      </div>
                      <div className="basket-contain-list-item-wrapper-info-price">
                        449 ₽
                      </div>
                      <div className="basket-contain-list-item-wrapper-bottom-part-wrapper">
                        <div className="basket-contain-list-item-wrapper-info-counter">
                          <button className="basket-contain-list-item-wrapper-info-counter-plus">
                            <img src={plus} alt="add" />
                          </button>
                          <input
                            type="text"
                            className="basket-contain-list-item-wrapper-info-counter-input"
                          />
                          <button className="basket-contain-list-item-wrapper-info-counter-minus">
                            <img src={minus} alt="remove" />
                          </button>
                        </div>
                        <button className="basket-contain-list-item-wrapper-info-delete">
                          Удалить товар
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Basket;
