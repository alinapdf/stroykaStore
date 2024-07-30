import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperContainElement from "./SwiperContainElement";
import { swiperContain } from "./SwiperContain";
const MySwiper = () => {
  return (
    <>
      <SwiperComponent
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        loop={true}
      >
        {swiperContain.map((swipe) => (
          <SwiperSlide key={swipe.header}>
            <SwiperContainElement
              header={swipe.header}
              text={swipe.text}
              img={swipe.img}
            />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <SwiperContainElement />
        </SwiperSlide> */}
      </SwiperComponent>
    </>
  );
};

export default MySwiper;
