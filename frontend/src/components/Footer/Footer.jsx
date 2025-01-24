import React from "react";
import "../style.css";
import footerlogo from "../../assets/footerlogo.svg"; 


// Composant pour  afficher le footer
function Footer() { 
  return (
   //Conteneur principal du footer avec une classe CSS spécifique
    <div className="footer"> 

      {/* Conteneur pour le logo. */}
      <div className="footer__logo">
        {/* Affichage du logo du site avec une balise image. 
            Utilisation de l'attribut `alt` pour l'accessibilité. */}
        <img src={footerlogo} alt="Logo Kasa" />
      </div>
      {/* Texte de copyright pour indiquer les droits réservés. */}
      <h2>© 2020 Kasa. All rights reserved</h2> 
    </div>
  );
}

export default Footer; 

