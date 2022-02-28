import "./Create.css";

import { useState, useRef, useEffect } from "react";
import { useFetch } from "../../Hooks/useFetch";
import { useHistory } from "react-router-dom";

import { db } from "../../Firebase/config";
import { collection, addDoc } from "firebase/firestore";

function Create() {
  const { postData, data, error } = useFetch(
    "http://localhost:8000/bloglar",
    "POST"
  );

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [readTime, setReadTime] = useState("");

  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const categoryInput = useRef(null);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(title, content, readTime, categories);

    // postData({ title, categories, content, readTime: readTime + " dakika" });

    const doc = { title, categories, content, readTime: readTime + " minutes" };

    const ref = collection(db, "bloglar");

    try {
      await addDoc(ref, { ...doc });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const yKat = newCategory.trim();
    if (yKat && !categories.includes(yKat)) {
      setCategories((oKat) => [...oKat, newCategory]);
      setNewCategory("");
      categoryInput.current.focus();
    }
  };

  // useEffect(() => {
  //   if (data) {
  //     history.push("/");
  //   }
  // }, [data, history]);

  return (
    <div className="create">
      <h2 className="page-title">Add New Article</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <span>Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Categories:</span>
          <div className="categories">
            <input
              type="text"
              onChange={(e) => setNewCategory(e.target.value)}
              value={newCategory}
              ref={categoryInput}
            />
            <button onClick={handleAdd} className="btnAdd btn">
              Add
            </button>
          </div>
        </label>
        <p>
          Categories:{" "}
          <span className="list">
            {categories.map((i) => (
              <em key={i}>{i}, </em>
            ))}
          </span>
        </p>
        <label>
          <span>Content:</span>
          <textarea
            rows={5}
            onChange={(e) => setContent(e.target.value)}
            value={content}
            required
          ></textarea>
        </label>
        <label>
          <span>Read Time:</span>
          <input
            type="number"
            onChange={(e) => setReadTime(e.target.value)}
            value={readTime}
            required
          />
        </label>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
}

export default Create;
