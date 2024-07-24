import GoodItem from "./GoodItem";
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
                <GoodItem
                  id={good.id}
                  img={good.img}
                  name={good.name}
                  price={good.price}
                  key={good.id}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Goods;
