import { useParams } from "react-router-dom";
import "./styles.scss";

const SearchResultPage = () => {
  const params = useParams();
  return (
    <div>
      <h1>Search Result</h1>
      {/* show search param  */}
      <p>{params.query}</p>
    </div>
  );
};

export default SearchResultPage;
