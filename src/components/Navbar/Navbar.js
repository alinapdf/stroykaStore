import logo from "./../../img/nav/Logo.svg";
import searchBtn from "./../../img/nav/search-icon.svg";
import basketIcon from "./../../img/nav/basket-icon.svg";
import "./Navbar.scss";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-wrapper">
          <a className="nav-wrapper-logo">
            <img src={logo} alt="StroykaStore" />
          </a>
          <div className="nav-wrapper-right-part">
            <button className="nav-wrapper-right-part-catalog">Каталог</button>
            <form action="#" className="nav-wrapper-right-part-search">
              <input
                className="nav-wrapper-right-part-search-input"
                type="text"
                placeholder="Поиск"
              />
              <button className="nav-wrapper-right-part-search-btn">
                <img src={searchBtn} alt="search" />
              </button>
            </form>
            <Link to="/basket-page">
              <button className="nav-wrapper-right-part-basket">
                <div className="nav-wrapper-right-part-basket-img">
                  <img src={basketIcon} alt="basketIcon" />
                </div>
                <div className="nav-wrapper-right-part-basket-text">
                  Корзина
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
