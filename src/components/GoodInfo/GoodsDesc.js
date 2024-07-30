import "./GoodInfo.scss";

const GoodsDesc = ({ good }) => {
  if (!good) {
    return <p>Товар не найден</p>;
  }

  return (
    <>
      <section className="desc">
        <div className="container desc-border-container desc-container">
          <h2 className="desc-header">Описание</h2>
          <div className="desc-text">
            {good.desc.map((item, index) => (
              <div key={index} className="desc-section">
                <h3 className="desc-section-header">{item.descName}</h3>
                <p className="desc-section-text">{item.descText}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GoodsDesc;
