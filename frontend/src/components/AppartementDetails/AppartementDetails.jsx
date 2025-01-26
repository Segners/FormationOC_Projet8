import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../Css/style.css";
import Carousel from "./Carousel/Carousel";
import Collapse from "../Collapse/Collapse";
import Host from "./Host/Host";
import Tags from "./Tags/Tags";
import Rating from "./Rating/Rating";
import Error from "../../pages/Error";

function AppartementDetails() {
  // Récupère l'identifiant de l'appartement depuis l'URL
  const { rentalId } = useParams(); 
  // État pour stocker les données de l'appartement
  const [apartment, setApartment] = useState(null);
  // État pour indiquer si les données sont en cours de chargement
  const [loading, setLoading] = useState(true);
   // État pour gérer les erreurs lors de la récupération des données
  const [error, setError] = useState(null);

  // Recuperation de l'appartement via API
  useEffect(() => {

    // Appel API
    fetch(`http://localhost:8080/api/properties/${rentalId}`)
    
      .then((response) => {
        // Vérifie si la réponse n'est pas "ok"
        if (!response.ok) {
          // Génère une erreur
          throw new Error("Erreur de récupération des données.");
        }
        // Convertit la réponse en JSON
        return response.json();
      })
      
      .then((data) => {
        // Stocke les données de l'appartement dans l'état
        setApartment(data);
        // Le chargement est terminé
        setLoading(false);
      })
      .catch((err) => {
        // Gère les erreurs
        setError(err.message);
        // Le chargement est terminé
        setLoading(false);
      });
  }, [rentalId]);

   // Si les données sont en cours de chargement, afficher un message d'attente
  if (loading) {
    return <div className="apartment__loading">Chargement...</div>;
  }
  // Affiche  la page d'erreur si une erreur s'est produite ou si l'appartement n'existe pas
  if (error || !apartment) {
    return <Error />;
  }

  return (
    // Ajout du carousel, details et  du collapse
    <div className="details-container">
       {/* Composant Carousel pour afficher les images de l'appartement */}
      <Carousel pictures={apartment.pictures} />
      <div className="apartmentDetails">
        <div className="apartmentDetails__NameLocationTags">
          {/* Titre de l'appartement */}
          <h2>{apartment.title}</h2>
          {/* Lieu de l'appartement */}
          <h3>{apartment.location}</h3>
          {/* Tags associés */}
          <Tags tags={apartment.tags} />
        </div>
        <div className="apartmentDetails__HostRating">
             {/* Informations sur l'hôte */}
          <Host name={apartment.host.name} picture={apartment.host.picture} />
             {/* Note de l'appartement */}
          <Rating rating={apartment.rating} />
        </div>
      </div>

      <div className="apartmentCollapse">
         {/* Composant Collapse pour la description */}
        <Collapse title="Description">{apartment.description}</Collapse>
         {/* Composant Collapse pour les équipements */}
        <Collapse title="Équipements">
          {apartment.equipments.map((equip, index) => (
            // Liste des équipements.
            <li key={index}>{equip}</li> 
          ))}
        </Collapse>
      </div>
    </div>
  );
}

export default AppartementDetails;
