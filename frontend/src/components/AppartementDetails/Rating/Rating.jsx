import React from "react";
import "../../Css/style.css";


// Composant Rating qui reçoit une note en props
function Rating({ rating }) { 

  // Tableau pour stocker les couleurs des étoiles (rouge ou gris)
  const stars = []; 

  // Boucle pour générer 5 étoiles, selon la note reçue
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // Si l'indice est inférieur ou égal à la note, l'étoile est rouge
      stars.push("red"); 
    } else {
      // Sinon, l'étoile est grise
      stars.push("gray"); 
    }
  }

  return (
    <div className="rating">
      {/* Génère les icônes d'étoiles avec les classes dynamiques en fonction de la couleur */}
      {stars.map((color, index) => (
        <i key={index} className={`fa-solid fa-star ${color}-star`}></i>
      ))}
    </div>
  );
}

export default Rating;
