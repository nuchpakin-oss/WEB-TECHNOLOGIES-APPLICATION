import React from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

const NavbarComponent = ({ cartCount = 0 }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">HOME</Link>
        <Link to="/">COLLECTIONS</Link>
      </div>

      <div className="nav-center">
        <Link to="/">
          <img src="/src/assets/Logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/">Men</Link>
        <Link to="/">Women</Link>

        <img
          src="/src/assets/icon.png"
          alt="Search"
          className="nav-icon"
        />

        {/* Cart */}
        <Link to="/cart" className="cart-link">
          <img src="/src/assets/Bag_alt.png" alt="Cart" className="nav-icon" />
          <span className="cart-count">{cartCount}</span>
        </Link>

        {/* Profile */}
        <Link to="/profile">
          <img
            src="/src/assets/Login.png"
            alt="Profile"
            className="profile-icon"
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavbarComponent;