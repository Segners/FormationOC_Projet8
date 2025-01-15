import React from "react";
import { NavLink, Link } from "react-router";
import "../style.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img src={logo} alt="Logo Kasa" />
      </Link>
      <ul className="nav__menu">
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/a-propos">À propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
