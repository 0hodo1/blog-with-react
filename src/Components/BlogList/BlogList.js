import "./BlogList.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../Hooks/useTheme";

export default function BlogList({ blogs }) {
  const { mode } = useTheme();

  if (blogs.length === 0) {
    return <h2 className="error">No articles found</h2>;
  }

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog.id} className={`card ${mode}`}>
          <h3>{blog.title}</h3>
          <p>{blog.readTime}</p>
          <div>{blog.content.substring(0, 100)} ...</div>
          <Link to={`/blog/${blog.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  );
}
