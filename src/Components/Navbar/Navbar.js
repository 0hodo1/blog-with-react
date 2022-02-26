import { Link } from "react-router-dom";
import "./Navbar.css";

import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Hodo Blog</h1>
        </Link>
        <Link to="/create">New Article</Link>
      </nav>
    </div>
  );
}

export default Navbar;
