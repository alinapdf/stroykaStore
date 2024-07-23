import React, { useRef } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Comments.module.scss";
import "./Comments.scss";
import com1 from "./../../img/comments/com11.png";
import quoters from "./../../img/comments/quoters.svg";
import { commentsList } from "./commentsList";
import CommentsElement from "./CommentsElement";

const Comments = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className="comments">
        <div className="container">
          <div className="comments-top-part">
            <h2 className="comments-top-part-header">Отзывы</h2>
            <div className="comments-top-part-navigation">
              <div
                ref={prevRef}
                className={`swiper-button-prev ${styles.customPrevButton}`}
              />
              <div
                ref={nextRef}
                className={`swiper-button-next ${styles.customNextButton}`}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="window-container">
        <SwiperComponent
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={16}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className={styles.mySwiper}
        >
          <div className="container-window">
            {commentsList.map((comment) => {
              return (
                <SwiperSlide className={styles.swiperItem} key={comment.id}>
                  <CommentsElement
                    avatar={comment.avatar}
                    alt={comment.name}
                    name={comment.name}
                    text={comment.commentText}
                    date={comment.commentDate}
                  />
                </SwiperSlide>
              );
            })}
          </div>
        </SwiperComponent>
      </div>
    </>
  );
};

export default Comments;
