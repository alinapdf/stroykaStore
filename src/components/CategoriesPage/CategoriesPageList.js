import GoodItem from "../Goods/GoodItem";
import "./CategoriesPageList.scss";
import { goodsList } from "../Goods/goodsList";
import { Link } from "react-router-dom";
import ButtonToHome from "../ButtonToHome/ButtonToHome";
import { useParams } from "react-router-dom";

const CategoriesPageList = () => {
  const { id } = useParams();
  const filteredGoods = goodsList.filter((good) => good.category === id);
  return (
    <>
      <section className="categories-page-list">
        <div className="container">
          <div className="categories-page-list-header-wrapper">
            <Link to="/">
              <ButtonToHome />
            </Link>

            <h1 className="categories-page-list-header">
              Все товары категории "{id}"
            </h1>
          </div>
          {filteredGoods.length === 0 ? (
            <div className="no-goods-message">
              Товары данной категории не найдены
            </div>
          ) : (
            <ul className="categories-page-list-list">
              {filteredGoods.map((good) => {
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
          )}
        </div>
      </section>
    </>
  );
};

export default CategoriesPageList;
