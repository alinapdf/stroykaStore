import GoodItem from "./GoodItem";
import "./Goods.scss";
import { goodsList } from "./goodsList";
const Goods = () => {
  console.log(goodsList);
  return (
    <>
      <section className="goods">
        <div className="container">
          <h2 className="goods-header">Все товары</h2>
          <ul className="goods-list">
            {goodsList.map((good, index) => {
              console.log(good.count);
              return (
                <GoodItem
                  id={good.id}
                  img={good.img}
                  name={good.name}
                  priceTotal={good.priceTotal}
                  key={good.id}
                  index={index}
                  price={good.price}
                  count={good.count}
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
