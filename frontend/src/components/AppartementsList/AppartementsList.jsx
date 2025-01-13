import { useEffect, useState } from 'react';
import '../style.css';
import Apartment from '../Appartement/Appartement';

function ApartmentList() {
  const [appartements, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/properties') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur de récupération des données');
        }
        return response.json();
      })
      .then((data) => {
        setApartments(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="apartment__loading">Chargement...</div>;
  }

  if (error) {
    return <div className="apartment__error">Erreur : {error}</div>;
  }

  return (
    <div className="apartment__grid">
      {appartements.map((appartement) => (
        <Apartment key={appartement.id} apartment={appartement} />
      ))}
    </div>
  );
}

export default ApartmentList;

