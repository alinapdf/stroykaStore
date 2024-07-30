import logoWhite from "./../../img/footer/logo-for-black.svg";
import visa from "./../../img/footer/visa-logo.svg";
import mastercard from "./../../img/footer/mastercard-logo.svg";
import maestro from "./../../img/footer/maestro-logo.svg";
import mir from "./../../img/footer/mir-logo.svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-main-part">
            <ul className="footer-main-part-links">
              <li className="footer-main-part-links-item">
                <a href="#" className="footer-main-part-links-item-link">
                  <div className="footer-main-part-links-item-logo">
                    <img src={logoWhite} alt="StroykaStore" />
                  </div>
                </a>
              </li>
              <li className="footer-main-part-links-item">
                <a href="#" className="footer-main-part-links-item-link">
                  <div className="footer-main-part-links-item-link-contact mail">
                    info@stroykastore.ru
                  </div>
                </a>
              </li>
              <li className="footer-main-part-links-item">
                <a href="#" className="footer-main-part-links-item-link">
                  <div className="footer-main-part-links-item-link-contact location">
                    Москва, ул. Камушкина 10
                  </div>
                </a>
              </li>
            </ul>
            <ul className="footer-main-part-pages">
              <li className="footer-main-part-pages-list">
                <ul className="footer-main-part-pages-list-list">
                  <li className="footer-main-part-pages-list-list-item">
                    <a
                      href="#"
                      className="footer-main-part-pages-list-list-item-link"
                    >
                      Личный кабинет
                    </a>
                  </li>
                  <li className="footer-main-part-pages-list-list-item">
                    <a
                      href="#"
                      className="footer-main-part-pages-list-list-item-link"
                    >
                      Заказы
                    </a>
                  </li>
                  <li className="footer-main-part-pages-list-list-item">
                    <a
                      href="#"
                      className="footer-main-part-pages-list-list-item-link"
                    >
                      Избранное
                    </a>
                  </li>
                  <li className="footer-main-part-pages-list-list-item">
                    <a
                      href="#"
                      className="footer-main-part-pages-list-list-item-link"
                    >
                      Корзина
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer-main-part-pages-list">
                <ul className="footer-main-part-pages-list-list">
                  <li className="footer-main-part-pages-list-list-item">
                    <a
                      href="#"
                      className="footer-main-part-pages-list-list-item-link"
                    >
                      Каталог
                    </a>
                  </li>
                  <li className="footer-main-part-pages-list-list-item">
                    <a
                      href="#"
                      className="footer-main-part-pages-list-list-item-link"
                    >
                      Акции
                    </a>
                  </li>
                  <li className="footer-main-part-pages-list-list-item">
                    <a
                      href="#"
                      className="footer-main-part-pages-list-list-item-link"
                    >
                      Бренды
                    </a>
                  </li>
                  <li className="footer-main-part-pages-list-list-item">
                    <a
                      href="#"
                      className="footer-main-part-pages-list-list-item-link"
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer-main-part-pages-list">
                <ul className="footer-main-part-pages-list-list">
                  <li className="footer-main-part-pages-list-list-item">
                    <a
                      href="#"
                      className="footer-main-part-pages-list-list-item-link"
                    >
                      Стать продавцом
                    </a>
                  </li>
                  <li className="footer-main-part-pages-list-list-item">
                    <a
                      href="#"
                      className="footer-main-part-pages-list-list-item-link"
                    >
                      Доставка
                    </a>
                  </li>
                  <li className="footer-main-part-pages-list-list-item">
                    <a
                      href="#"
                      className="footer-main-part-pages-list-list-item-link"
                    >
                      Возврат
                    </a>
                  </li>
                  <li className="footer-main-part-pages-list-list-item">
                    <a
                      href="#"
                      className="footer-main-part-pages-list-list-item-link"
                    >
                      Документация
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer-bottom-part">
            <div className="footer-bottom-part-rights">© СтройкаСтор</div>
            <div className="footer-bottom-part-payment-links">
              <ul className="footer-bottom-part-payment-links-list">
                <li className="footer-bottom-part-payment-links-list-item">
                  <a
                    href="#"
                    className="footer-bottom-part-payment-links-list-item-link"
                  >
                    <div className="footer-bottom-part-payment-links-list-item-link-img">
                      <img src={visa} alt="Visa" />
                    </div>
                  </a>
                </li>
                <li className="footer-bottom-part-payment-links-list-item">
                  <a
                    href="#"
                    className="footer-bottom-part-payment-links-list-item-link"
                  >
                    <div className="footer-bottom-part-payment-links-list-item-link-img">
                      <img src={mastercard} alt="Mastercard" />
                    </div>
                  </a>
                </li>
                <li className="footer-bottom-part-payment-links-list-item">
                  <a
                    href="#"
                    className="footer-bottom-part-payment-links-list-item-link"
                  >
                    <div className="footer-bottom-part-payment-links-list-item-link-img">
                      <img src={maestro} alt="Maestro" />
                    </div>
                  </a>
                </li>
                <li className="footer-bottom-part-payment-links-list-item">
                  <a
                    href="#"
                    className="footer-bottom-part-payment-links-list-item-link"
                  >
                    <div className="footer-bottom-part-payment-links-list-item-link-img">
                      <img src={mir} alt="Mir" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-bottom-part-made-by">
              Alina Khamova Frontend developer
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
