const BasketResult = ({ total }) => {
  return (
    <>
      <div className="basket-wrapper-result">
        <div className="basket-wrapper-result-header">Итого</div>
        <div className="basket-wrapper-result-info-wrapper">
          <div className="basket-wrapper-result-info-wrapper-name">
            Количество товара
          </div>
          <div className="basket-wrapper-result-info-wrapper-amount">
            {total.count} шт.
          </div>
        </div>
        <div className="basket-wrapper-result-info-wrapper">
          <div className="basket-wrapper-result-info-wrapper-name">
            Товаров на сумму
          </div>
          <div className="basket-wrapper-result-info-wrapper-amount">
            {total.price} ₽
          </div>
        </div>
        <div className="basket-wrapper-result-btn-wrapper">
          <button className="basket-wrapper-result-btn">Оформить заказ</button>
        </div>
        <div className="basket-wrapper-result-info">
          <p className="basket-wrapper-result-info-text one-deliver">
            Можно сделать заказ только от одного поставщика
          </p>
          <p className="basket-wrapper-result-info-text delivery">
            Доставка осуществляется курьерами поставщика или службой курьеров
            Достависта. Также товар можно забрать самостоятельно от поставщика
          </p>
          <p className="basket-wrapper-result-info-text box">
            Точная сумма доставки будет определена после после подтверждения
            заказа
          </p>
        </div>
      </div>
    </>
  );
};

export default BasketResult;
