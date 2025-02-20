import "./Categories.scss";
import { categoriesList } from "./categoriesList";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <>
      <section className="categories">
        <div className="container">
          <div className="categories-top-part-wrapper">
            <h2 className="categories-top-part-wrapper-header">
              Популярные категории
            </h2>
            <Link to="/categories" className="categories-top-part-wrapper-link">
              Все категории
            </Link>
          </div>
          <ul className="categories-bottom-part-wrapper">
            {categoriesList.map((category) => {
              return (
                <li
                  className="categories-bottom-part-wrapper-item"
                  key={category.id}
                >
                  <a
                    href="#"
                    className="categories-bottom-part-wrapper-item-link"
                  >
                    <div className="categories-bottom-part-wrapper-item-name">
                      {category.name}
                    </div>
                    <div className="categories-bottom-part-wrapper-item-img">
                      <img src={category.img} alt="cat1" />
                    </div>
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

export default Categories;
