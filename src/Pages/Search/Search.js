import { useFetch } from "../../Hooks/useFetch";
import { useLocation } from "react-router-dom";

import BlogList from "../../Components/BlogList/BlogList";

import "./Search.css";

function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:8000/bloglar?q=" + query;
  const { data, loading, error } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Search Results for: {query}</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error.message}</p>}
      {data && <BlogList blogs={data} />}
    </div>
  );
}

export default Search;
