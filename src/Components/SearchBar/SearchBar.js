import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./SearchBar.css";

export default function SearchBar() {
  const [word, setWord] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${word}`);
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search"
          id="search"
          type="text"
          onChange={(e) => setWord(e.target.value)}
        />
      </form>
    </div>
  );
}
