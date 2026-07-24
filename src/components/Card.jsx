import { Link } from 'react-router-dom'

const Card = ({ logement }) => {
  return (
    <article className="card">
      <Link to={`/logement/${logement.id}`} className="card__link">
        <img src={logement.cover} alt="location" className="card__image" />
        <div className="card__overlay" />
        <h2 className="card__title">{logement.title}</h2>
      </Link>
    </article>
  )
}
export default Card
