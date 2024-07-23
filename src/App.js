import { Navbar } from "./components/Navbar/Navbar";
import "./common.scss";
import "./reset css/reset.css";
import MySwiper from "./components/Swiper/Swiper";
import Categories from "./components/Categories/Categories";
import Goods from "./components/Goods/Goods";
import Brands from "./components/Brands/Brands";
import Comments from "./components/Comments/Comments";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <MySwiper />
      <Categories />
      <Goods />
      <Brands />
      <Comments />
      <About />
      <Footer />
    </>
  );
};

export default App;
