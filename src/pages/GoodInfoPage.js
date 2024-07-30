import { useParams } from "react-router-dom";
import GoodInfo from "../components/GoodInfo/GoodInfo";
import GoodsDesc from "../components/GoodInfo/GoodsDesc";
import { goodsList } from "../components/Goods/goodsList";

const GoodInfoPage = () => {
  const { id } = useParams();
  const good = goodsList.find((good) => good.id === parseInt(id));
  return (
    <>
      <GoodInfo />
      <GoodsDesc good={good} />
    </>
  );
};

export default GoodInfoPage;
