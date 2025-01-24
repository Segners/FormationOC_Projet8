import { useEffect, useState } from "react";
import "../style.css"; 
import Appartement from "../Appartement/Appartement";

// Composant qui affiche une liste d'appartements
function AppartementList() { 
  // État pour stocker les données des appartements
  const [appartements, setAppartements] = useState([]); 
    // État pour indiquer si les données sont en cours de chargement
  const [loading, setLoading] = useState(true); 
  // État pour stocker les éventuelles erreurs lors de la récupération des données
  const [error, setError] = useState(null); 

  useEffect(() => {
    // Appel à l'API pour récupérer la liste des appartements
    fetch("http://localhost:8080/api/properties")
      .then((response) => {
        if (!response.ok) {
            // Throw une erreur si la réponse du serveur n'est pas correcte
          throw new Error("Erreur de récupération des données"); 
        }
         // Convertit la réponse en JSON
        return response.json();
      })
      .then((data) => {
        // Stocke les données récupérées dans l'état `appartements`
        setAppartements(data); 
        // Arrête le chargement
        setLoading(false); 
      })

      .catch((error) => {
        if (error.message === "Failed to fetch") { 
          // Message d'erreur spécifique pour un échec de connexion
          setError("Impossible de charger les appartements."); 
        } else {
           // Stocke tout autre message d'erreur
          setError(error.message); 
        }
        // Arrête le chargement même en cas d'erreur
        setLoading(false); 
      });
  }, []); // Le tableau de dépendances vide assure que l'effet s'exécute une seule fois au montage

  if (loading) {
    // Affiche un message de chargement tant que les données ne sont pas encore disponibles
    return <div className="apartment__loading">Chargement...</div>;
  }

  if (error) {
    // Affiche un message d'erreur en cas de problème lors de la récupération des données
    return <div className="apartment__error">Erreur : {error}</div>;
  }

  return (
    <div className="apartment__grid">
      {appartements.map((appartement) => (  
        // Affiche un composant `Apartment` pour chaque appartement
        <Appartement key={appartement.id} apartment={appartement} /> 
      ))}
    </div>
  );
}

export default AppartementList;
