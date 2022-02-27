import { Link } from "react-router-dom";
import "./Navbar.css";

import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Hodo Blog</h1>
        </Link>
        <SearchBar />
        <Link to="/create">New Article</Link>
      </nav>
    </div>
  );
}

export default Navbar;
