import "./Brands.scss";
import { brandsList } from "./brandsList";
const Brands = () => {
  return (
    <>
      <section className="brands">
        <div className="container">
          <div className="brands-top-part">
            <h2 className="brands-top-part-header">Популярные бренды</h2>
            <a href="#" className="brands-top-part-link">
              Все бренды
            </a>
          </div>
          <ul className="brands-bottom-part">
            {brandsList.map((brand) => {
              return (
                <li className="brands-bottom-part-item" key={brand.id}>
                  <a href="#" className="brands-bottom-part-link">
                    <div className="brands-bottom-part-item-img">
                      <img src={brand.img} alt={brand.name} />
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

export default Brands;
