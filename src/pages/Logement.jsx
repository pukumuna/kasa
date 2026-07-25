import { Navigate, useParams } from 'react-router-dom'
import Carousel from '../components/Carousel.jsx'
import Rating from '../components/Rating.jsx'
import { locationsData } from '../data/locations.js'

const Logement = () => {
  const { id } = useParams()
  const location = locationsData.find((item) => item.id === id)

  if (!location) {
    return <Navigate to="/404" replace />
  }

  const hostParts = location.host.name.split(' ')
  const hostFirstName = hostParts.shift()
  const hostLastName = hostParts.join(' ')

  return (
    <article className="housing">
      <Carousel pictures={location.pictures} title={location.title} />

      <div className="housing__summary">
        <div className="housing__identity">
          <h1>{location.title}</h1>
          <p>{location.location}</p>

          <ul className="tags" aria-label="Caractéristiques">
            {location.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="housing__host-rating">
          <div className="host">
            <p>
              <span>{hostFirstName}</span>
              <span>{hostLastName}</span>
            </p>
            <img src={location.host.picture} alt={`Portrait de ${location.host.name}`} />
          </div>
          <Rating value={location.rating} />
        </div>
      </div>
      
    </article>
  )
}
export default Logement