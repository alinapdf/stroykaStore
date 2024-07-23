import "./Goods.scss";
import { goodsList } from "./goodsList";
const Goods = () => {
  return (
    <>
      <section className="goods">
        <div className="container">
          <h2 className="goods-header">Все товары</h2>
          <ul className="goods-list">
            {goodsList.map((good) => {
              return (
                <li className="goods-list-item" key={good.id}>
                  <a href="#" className="goods-list-item-link">
                    <div className="goods-list-item-img">
                      <img src={good.img} alt="g1" />
                    </div>
                    <div className="goods-list-item-name">{good.name}</div>
                    <div className="goods-list-item-price">{good.price}</div>
                    <button className="goods-list-item-btn">В корзину</button>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Goods;
