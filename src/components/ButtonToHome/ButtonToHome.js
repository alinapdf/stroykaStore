import "./ButtonToHome.scss";
import arrowBack from "./../../img/slider/arrow-prew-svg.svg";
const ButtonToHome = () => {
  return (
    <>
      <div className="button-to-home">
        <img src={arrowBack} alt="back" />
      </div>
    </>
  );
};

export default ButtonToHome;
