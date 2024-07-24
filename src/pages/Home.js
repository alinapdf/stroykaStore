import MySwiper from "./../components/Swiper/Swiper";
import Categories from "./../components/Categories/Categories";
import Goods from "./../components/Goods/Goods";
import Brands from "./../components/Brands/Brands";
import Comments from "./../components/Comments/Comments";
import About from "./../components/About/About";
const Home = () => {
  return (
    <>
      <MySwiper />
      <Categories />
      <Goods />
      <Brands />
      <Comments />
      <About />
    </>
  );
};

export default Home;
