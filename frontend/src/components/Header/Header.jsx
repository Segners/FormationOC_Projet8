import React from "react";
import { NavLink, Link } from "react-router";
import "../Css/style.css";
import logo from "../../assets/logo.svg";

// Composant fonctionnel pour l'affichage du header
function Header() {

  return (
    //</nav> Balise <nav> pour définir une navigation principale avec une classe CSS spécifique
    <nav className="navbar"> 

     {/* Utilisation de `Link` pour créer un lien vers la page d'accueil avec le logo */}
      <Link to="/" className="navbar__logo">

      {/* Affichage du logo avec une balise image et un attribut `alt` pour l'accessibilité */}
        <img src={logo} alt="Logo Kasa" />
      </Link>

         {/* Liste des liens de navigation */}
      <ul className="nav__menu">
        <li>
            {/* Utilisation de `NavLink` pour appliquer automatiquement une classe CSS (par exemple `active`) quand le lien est actif */}
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/a-propos">A propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
