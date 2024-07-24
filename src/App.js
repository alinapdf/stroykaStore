import { Navbar } from "./components/Navbar/Navbar";
import "./common.scss";
import "./reset css/reset.css";

import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import GoodInfoPage from "./pages/GoodInfoPage";
const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <GoodInfoPage />
      <Footer />
    </>
  );
};

export default App;
