import g1 from "./../../img/goods/g1.png";
import plusBlack from "./../../img/goods-page/plus-black.svg";
import minusBlack from "./../../img/goods-page/minus-black.svg";
import { useParams } from "react-router-dom";
import { goodsList } from "../Goods/goodsList";
import "./GoodInfo.scss";
const GoodInfo = () => {
  const { id } = useParams();
  const good = goodsList[id];
  return (
    <>
      <section className="good-info">
        <div className="container">
          <div className="good-info-wrapper">
            <div className="good-info-wrapper-img">
              <img src={good.img} alt={good.name} />
            </div>
            <div className="good-info-wrapper-text">
              <h1 className="good-info-wrapper-text-header">{good.name}</h1>
              <div className="good-info-wrapper-text-status">В наличии</div>
              <div className="good-info-wrapper-text-price">{good.price}</div>
              <div className="good-info-wrapper-basket-wrapper">
                <button className="good-info-wrapper-basket-wrapper-btn">
                  В корзину
                </button>
                <div className="good-info-wrapper-basket-wrapper-counter">
                  <div className="good-info-wrapper-basket-wrapper-counter-plus">
                    <img src={plusBlack} alt="Добавить" />
                  </div>
                  <input
                    type="text"
                    className="good-info-wrapper-basket-wrapper-counter-input"
                    placeholder="1"
                  />
                  <div className="good-info-wrapper-basket-wrapper-counter-minus">
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
