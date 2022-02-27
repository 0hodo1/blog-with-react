import { Link } from "react-router-dom";
import "./Navbar.css";

import React from "react";
import SearchBar from "../SearchBar/SearchBar";

import { useTheme } from "../../Hooks/useTheme";

function Navbar() {
  const { bgColor } = useTheme();
  return (
    <div className="navbar" style={{ backgroundColor: bgColor }}>
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
