import logoWhite from "./../../img/footer/logo-for-black.svg";
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
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
