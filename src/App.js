import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import "./common.scss";
import "./reset css/reset.css";

import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import GoodInfoPage from "./pages/GoodInfoPage";
import Categories from "./pages/CategoriesPage";
import BasketPage from "./pages/BasketPage";
import CategoriesPageList from "./components/CategoriesPage/CategoriesPageList";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goods-info-page/:id" element={<GoodInfoPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoriesPageList />} />
          <Route path="/basket-page" element={<BasketPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
