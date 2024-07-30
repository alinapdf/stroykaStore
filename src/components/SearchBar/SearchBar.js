import searchBtn from "./../../img/nav/search-icon.svg";
import { useState } from "react";
import { useEffect } from "react";
import { goodsList } from "../Goods/goodsList";
import SearchResults from "./SeacrResults";
import "./Search.scss";

const SearchBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [input, setInput] = useState("");
  const [filteredGoods, setFilteredGoods] = useState([]);

  const changeInput = (e) => {
    setInput(e.target.value);
    setShowSearchBar(true);
  };

  const clearInput = () => {
    setInput("");
    setShowSearchBar(false);
  };

  useEffect(() => {
    if (input === "") {
      setFilteredGoods([]);
      setShowSearchBar(false);
    } else {
      setFilteredGoods(
        goodsList.filter((item) =>
          item.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
  }, [input]);

  return (
    <>
      <div className="nav-wrapper-right-part-search">
        <input
          className="nav-wrapper-right-part-search-input"
          type="text"
          placeholder="Поиск"
          value={input}
          onChange={changeInput}
        />
        <button className="nav-wrapper-right-part-search-btn">
          <img src={searchBtn} alt="search" />
        </button>
        {showSearchBar && (
          <SearchResults results={filteredGoods} onItemClick={clearInput} />
        )}
      </div>
    </>
  );
};

export default SearchBar;
