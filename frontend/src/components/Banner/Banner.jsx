import "../Css/style.css"; 
import React from "react"; 

// Composant `Banner` qui prend des props pour configurer son affichage
function Banner(props) { 

  // Style inline pour définir l'image d'arrière-plan dynamiquement en fonction de la prop `backgroundImage`
  const bannerStyle = {
    backgroundImage: `url(${props.backgroundImage})`,
  };

  return (
    <div className="banner" style={bannerStyle}>
      {/* Vérifie si `showText` est vrai pour afficher le texte */}
      {props.showText && (
        <>
          {/* Texte affiché avec une couche "arrière" pour des effets visuels */}
          <h1 className="h1__back">
            {props.text ? props.text : "Chez vous, partout et ailleurs"} 
            {/* Si `text` est défini, on l'affiche, sinon on affiche le texte par défaut */}
          </h1>
          {/* Texte affiché avec une couche "avant" pour complémenter l'effet visuel */}
          <h1 className="h1__front">
            {props.text ? props.text : "Chez vous, partout et ailleurs"}
          </h1>
        </>
      )}
    </div>
  );
}

export default Banner;