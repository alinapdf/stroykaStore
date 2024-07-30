import { swiperContain } from "./SwiperContain";
import "./../Swiper/Swiper.scss";
const SwiperContainElement = (props) => {
  return (
    <>
      <div className="swiper-contain-wrapper">
        <h1 className="swiper-contain-wrapper-header">{props.header}</h1>
        <div className="swiper-contain-wrapper-text">{props.text}</div>
        <button className="swiper-contain-wrapper-btn">Подробнее</button>
      </div>
      <div className="swiper-contain-img">
        <img src={props.img} alt="" />
      </div>
    </>
  );
};

export default SwiperContainElement;
