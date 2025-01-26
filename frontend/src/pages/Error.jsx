import { Link } from 'react-router'
import "../components/Css/style.css"

function Error() {
  return (
    <>
      <div className='error-container' role='alert'>
        <h4>404</h4>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </>
  )
}

export default Error