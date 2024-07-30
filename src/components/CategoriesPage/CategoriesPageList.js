import GoodItem from "../Goods/GoodItem";
import "./CategoriesPageList.scss";
import { goodsList } from "../Goods/goodsList";
import { Link } from "react-router-dom";
import ButtonToHome from "../ButtonToHome/ButtonToHome";
const CategoriesPageList = () => {
  return (
    <>
      <section className="categories-page-list">
        <div className="container">
          <div className="categories-page-list-header-wrapper">
            <Link to="/">
              <ButtonToHome />
            </Link>

            <h1 className="categories-page-list-header">Сухие смеси</h1>
          </div>

          <ul className="categories-page-list-list">
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

export default CategoriesPageList;
