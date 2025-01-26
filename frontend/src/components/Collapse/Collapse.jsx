import { useState } from "react"; 
import "../Css/style.css";
import React from "react";

  // Composant Collapse avec titre et children en props
function Collapse({ title, children }) { 

// État pour savoir si le contenu est ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false); 
  
  const toggleCollapse = () => {
       // Inverse l'état actuel pour ouvrir ou fermer la section
    setIsOpen(!isOpen); 
  };

  return (
    // Ajout dynamique de la classe `open` en fonction de l'état `isOpen`
    <div className={`collapse ${isOpen ? "open" : ""}`}> 

     {/* Section d'en-tête contenant le titre et le bouton d'ouverture/fermeture */}
      <div className="collapse-header">
        <h3 className="collapse-title">{title}</h3>
        
        <div  
          // La classe `open` change l'orientation de l'icône pour indiquer l'état
          className={`collapse-chevron ${isOpen ? "open" : ""}`} 
          // Gestionnaire d'événements pour ouvrir ou fermer la section
          onClick={toggleCollapse} 
        >
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      </div>

      {/* Le contenu est affiché ou masqué selon la classe `open` */}
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {/* Les éléments enfants passés dans le composant sont rendus ici */}
        {children} 
      </div>
    </div>
  );
}

export default Collapse; 

