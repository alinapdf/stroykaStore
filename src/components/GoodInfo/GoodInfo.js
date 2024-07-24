import g1 from "./../../img/goods/g1.png";
import plusBlack from "./../../img/goods-page/plus-black.svg";
import minusBlack from "./../../img/goods-page/minus-black.svg";
import "./GoodInfo.scss";
const GoodInfo = () => {
  return (
    <>
      <section className="good-info">
        <div className="container">
          <div className="good-info-wrapper">
            <div className="good-info-wrapper-img">
              <img src={g1} alt="g1" />
            </div>
            <div className="good-info-wrapper-text">
              <h1 className="good-info-wrapper-text-header">
                Шпатлевка масляно-клеевая 3кг Л-С
              </h1>
              <div className="good-info-wrapper-text-status">В наличии</div>
              <div className="good-info-wrapper-text-price">212 ₽</div>
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
                    value="1"
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
