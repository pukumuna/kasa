 

import { Link } from 'react-router-dom'

export default function Accueil() {
  return (
    <section>
      <h1>Page d'accueil</h1>

      <p>Bienvenue sur la version minimale de Kasa.</p>

      <Link to="/logement/123">
        Voir le logement numéro 123
      </Link>
    </section>
  )
}