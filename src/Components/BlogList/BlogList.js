import "./BlogList.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../Hooks/useTheme";

import DeleteIcon from "../../Assets/delete.svg";

import { db } from "../../Firebase/config";
import { doc, deleteDoc, collection } from "firebase/firestore";

export default function BlogList({ blogs }) {
  const { mode } = useTheme();

  const handleDelete = async (id) => {
    console.log(id);

    const ref = doc(db, "bloglar", id);

    await deleteDoc(ref);
  };

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
          <img
            className="delete"
            onClick={() => handleDelete(blog.id)}
            src={DeleteIcon}
            alt="Delete Article"
          />
        </div>
      ))}
    </div>
  );
}
