import React from "react";
import "../../style.css";

// Composant Host recevant le nom complet et l'image de l'hôte en props
function Host({ name, picture }) { 

  // Sépare le nom complet en prénom et nom en se basant sur l'espace
  const [firstName, lastName] = name.split(" "); 

  return (
    <div className="host">
      {/* Conteneur pour afficher le prénom et le nom */}
      <div className="host-name">
         {/* Affiche le prénom */}
        <div className="host-firstname">{firstName}</div> 
         {/* Affiche le nom */}
        <div className="host-lastname">{lastName}</div> 
      </div>

      {/* Affiche l'image de l'hôte avec une description pour l'accessibilité */}
      <img src={picture} alt={name} className="host-picture" />
    </div>
  );
}

export default Host; 
