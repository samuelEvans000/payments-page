/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./navbar.css";
import search from "../../images/search.png";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="navbar-logo">EDYODA</button>
        <div className="navbar-dropdown">
          <button className="navbar-button">Course</button>
          <div className="navbar-dropdown-content">
            <a className="course-button">Course 1</a>
            <a className="course-button">Course 2</a>
            <a className="course-button">Course 3</a>
          </div>
        </div>
        <div className="navbar-dropdown">
          <button className="navbar-button">Programs</button>
          <div className="navbar-dropdown-content">
            <a className="course-button">Program 1</a>
            <a className="course-button">Program 2</a>
            <a className="course-button">Program 3</a>
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <button className="navbar-search-icon" onClick={handleSearchIconClick}>
          <img src={search}></img>
        </button>
        {searchOpen && (
          <input
            type="text"
            className="navbar-search-bar"
            placeholder="Search..."
          />
        )}
        <button className="navbar-button">Login</button>
        <button className="joinnow">Join Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
