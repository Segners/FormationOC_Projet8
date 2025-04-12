import "../Css/style.css";
import { Link } from "react-router-dom";


function Appartement({ apartment }) {
  return (
    <Link className="apartment__card" to={`/logement/${apartment.id}`}>
      <img src={apartment.cover} alt={apartment.title} />
      <h3>{apartment.title}</h3>
    </Link>
  );
}

export default Appartement;
