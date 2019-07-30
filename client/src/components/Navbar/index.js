    
import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <p className="navbar-brand">Google Books</p>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <Router>
        <li className="nav-item active">
          <Link className="nav-link" to="/">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/saved">Saved</Link>
        </li>
        </Router>
      </ul>
    </div>
  </nav>)
}

export default Navbar;