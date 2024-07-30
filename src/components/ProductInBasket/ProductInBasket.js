import g1 from "./../../img/goods/g1.png";
import Count from "./Count";
const ProductInBasket = ({ product, deleteGood, increase, decrease }) => {
  //   console.log(product.id);
  console.log(product.count);
  return (
    <>
      <li className="basket-contain-list-item">
        <div className="basket-contain-list-item-wrapper">
          <div className="basket-contain-list-item-wrapper-img">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="basket-contain-list-item-wrapper-info">
            <div className="basket-contain-list-item-wrapper-info-header">
              {product.name}
            </div>
            <div className="basket-contain-list-item-wrapper-info-price">
              {product.priceTotal}₽
            </div>
            <div className="basket-contain-list-item-wrapper-bottom-part-wrapper">
              <div className="basket-contain-list-item-wrapper-info-counter">
                <Count
                  count={product.count}
                  increase={increase}
                  decrease={decrease}
                  id={product.id}
                />
              </div>
              <button
                className="basket-contain-list-item-wrapper-info-delete"
                onClick={() => {
                  deleteGood(product.id);
                }}
              >
                Удалить товар
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProductInBasket;
