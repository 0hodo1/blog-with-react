import "./BlogList.css";
import { Link } from "react-router-dom";

export default function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog.id} className="card">
          <h3>{blog.title}</h3>
          <p>{blog.readTime}</p>
          <div>{blog.content.substring(0, 100)} ...</div>
          <Link to={`/blog/${blog.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  );
}
