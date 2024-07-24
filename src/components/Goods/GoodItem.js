const GoodItem = (good) => {
  return (
    <>
      <li className="goods-list-item">
        <a href="#" className="goods-list-item-link">
          <div className="goods-list-item-img">
            <img src={good.img} alt={good.name} />
          </div>
          <div className="goods-list-item-name">{good.name}</div>
          <div className="goods-list-item-price">{good.price}</div>
          <button className="goods-list-item-btn">В корзину</button>
        </a>
      </li>
    </>
  );
};

export default GoodItem;
