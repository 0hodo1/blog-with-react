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
