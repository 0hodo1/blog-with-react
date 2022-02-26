import "./Home.css";

import { useFetch } from "../../Hooks/useFetch";
import BlogList from "../../Components/BlogList/BlogList";

function Home() {
  const { data, error, loading } = useFetch("http://localhost:8000/bloglar");
  console.log(data);
  return (
    <div className="home">
      {error && <p className="error">Has an error</p>}
      {loading && <p className="loading">Loading...</p>}
      {data && <BlogList blogs={data} />}
    </div>
  );
}

export default Home;
