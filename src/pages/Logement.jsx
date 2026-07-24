import { Link, useParams } from 'react-router-dom'

export default function Logement() {
  const { id } = useParams()

  return (
    <section>
      <h1>Détail du logement</h1>

      <p>Identifiant du logement : {id}</p>

      <Link to="/">Retour à l'accueil</Link>
    </section>
  )
}