import "./Search.scss";
import { Link } from "react-router-dom";
const SearchResults = ({ results, onItemClick }) => {
  if (results.length === 0) {
    return <div className="search-results-no-goods">Товары не найдены</div>;
  }
  return (
    <>
      <div className="search-results">
        {results.map((item) => (
          <Link
            to={`/goods-info-page/${item.id}`}
            key={item.id}
            className="search-result-item"
            onClick={onItemClick}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default SearchResults;
