import "./Blog.css";

import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";

import React from "react";

function Blog() {
  const { id } = useParams();
  const url = "http://localhost:8000/bloglar/" + id;

  const { data: blog, loading, error } = useFetch(url);

  return (
    <div className="blog">
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {blog && (
        <>
          <h2 className="page-title">{blog.baslik}</h2>
          <p className="time">{blog.okunmaSuresi} okunma süresi</p>
          <ul>
            {blog.kategoriler.map((kat) => (
              <li key={kat}>{kat}</li>
            ))}
          </ul>
          <p className="info">{blog.icerik}</p>
        </>
      )}
    </div>
  );
}

export default Blog;
