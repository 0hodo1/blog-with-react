import "./Home.css";

import { useFetch } from "../../Hooks/useFetch";
import BlogList from "../../Components/BlogList/BlogList";

import { db } from "../../Firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

function Home() {
  // const { data, error, loading } = useFetch("http://localhost:8000/bloglar");
  // console.log(data);

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const ref = collection(db, "bloglar");

    getDocs(ref)
      .then((snap) => {
        if (snap.empty) {
          setError("No documents found!");
          setLoading(false);
        } else {
          let result = [];
          snap.forEach((doc) => {
            result.push({ id: doc.id, ...doc.data() });
          });

          setData(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {error && <p className="error">Has an error</p>}
      {loading && <p className="loading">Loading...</p>}
      {data && <BlogList blogs={data} />}
    </div>
  );
}

export default Home;
