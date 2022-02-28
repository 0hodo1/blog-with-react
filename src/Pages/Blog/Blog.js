import "./Blog.css";

import { useParams } from "react-router-dom";
// import { useFetch } from "../../Hooks/useFetch";

import { useTheme } from "../../Hooks/useTheme";

import { useState, useEffect } from "react";
import { db } from "../../Firebase/config";
import { doc, getDoc } from "firebase/firestore";

function Blog() {
  const { id } = useParams();
  // const url = "http://localhost:8000/bloglar/" + id;

  // const { data: blog, loading, error } = useFetch(url);

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const ref = doc(db, "bloglar", id);

    getDoc(ref).then((doc) => {
      if (doc.exists) {
        setLoading(false);
        setBlog(doc.data());
      } else {
        setLoading(false);
        setError("Veriye erişilemedi");
      }
    });
  }, [id]);

  const { mode } = useTheme();

  return (
    <div className={`blog ${mode}`}>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {blog && (
        <>
          <h2 className="page-title">{blog.title}</h2>
          <p className="time">{blog.readTime} okunma süresi</p>
          <ul>
            {blog.categories.map((kat) => (
              <li key={kat}>{kat}</li>
            ))}
          </ul>
          <p className="info">{blog.content}</p>
        </>
      )}
    </div>
  );
}

export default Blog;
