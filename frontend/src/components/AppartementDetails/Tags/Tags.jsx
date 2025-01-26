import "../../Css/style.css";

// Composant Tags qui reçoit un tableau de tags en props.
function Tags({ tags }) { 

  // Vérification si les tags ne sont pas valides ou si le tableau est vide.
  if (!Array.isArray(tags) || tags.length === 0) {

    // Retourne un message indiquant qu'aucun tag n'est disponible.
    return <div className="tags">Aucun tag disponible</div>; 
  }
  
  return (
    <div className="tags">
      {/* Itération sur chaque tag et rendu sous forme de div avec une classe CSS spécifique */}
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag} {/* Contenu du tag */}
        </div>
      ))}
    </div>
  );
}

export default Tags;

