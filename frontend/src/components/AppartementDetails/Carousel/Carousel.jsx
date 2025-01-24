import React, { useState } from "react";
import "../../style.css"; 

// Composant Carousel prenant en props les images et un titre
function Carousel({ pictures, title }) { 
  
  // État pour suivre l'index de l'image actuellement affichée
  const [currentImgIndex, setImgIndex] = useState(0); 

  // Fonction pour passer à l'image suivante.
  const handleNext = () => {
      // Passe à l'image suivante. Revient au début si on dépasse la dernière image
    setImgIndex((imgIndex) => (imgIndex + 1) % pictures.length); 
  };

  // Fonction pour revenir à l'image précédente.
  const handlePrevious = () => {
    setImgIndex(
       // Revient à l'image précédente. Passe à la dernière si on est au début
      (imgIndex) => (imgIndex - 1 + pictures.length) % pictures.length
    ); 
   
  };

  return (
    <div className="carousel">
      {/* Affiche les flèches de navigation uniquement si plusieurs images sont disponibles */}
      {pictures.length > 1 && (
        <div
          // Flèche pour revenir à l'image précédente.
          onClick={handlePrevious} 
          className="carousel__button carousel__button--prev"
        >
          <i className="fa-solid fa-chevron-left"></i> {/* Icône de flèche gauche */}
        </div>
      )}

      {/* Affiche l'image actuelle avec une description */}
      <img
        src={pictures[currentImgIndex]}
        // Texte alternatif pour l'accessibilité
        alt={`${title} - image ${currentImgIndex + 1}`} 
        className="carousel__image"
      />

      {/* Flèche pour passer à l'image suivante, affichée si plusieurs images sont disponibles */}
      {pictures.length > 1 && (
        <div
          onClick={handleNext}
          className="carousel__button carousel__button--next"
        >
          <i className="fa-solid fa-chevron-right"></i> {/* Icône de flèche droite */}
        </div>
      )}

      {/* Indicateur du numéro de l'image actuelle (1 / N) */}
      {pictures.length > 1 && (
        <div className="carousel__indicator">
          {/* Affiche le numéro de l'image actuelle et le total */}
          {currentImgIndex + 1} / {pictures.length} 
        </div>
      )}
    </div>
  );
}

export default Carousel;
