import React from 'react';
import "../Css/style.css";

  // Composant qui accepte une propriété `children` (le contenu à afficher à l'intérieur du Wrapper)
function Wrapper({children}) {

  return (
     // Retourne un div avec la classe CSS 'wrapper' et insère tout ce qui est passé en tant que `children`
     // children est un concept spécial dans React
    <div className='wrapper'>{children}</div>
  );
}

export default Wrapper;
