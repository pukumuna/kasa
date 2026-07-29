import { Navigate, useParams } from 'react-router-dom'
import Carousel from '../components/Carousel.jsx'
import Collapse from '../components/Collapse.jsx'
import Rating from '../components/Rating.jsx'
import { locationsData } from '../data/locations.js'

const Logement = () => {
  const { id } = useParams()
  const location = locationsData.find((element) => element.id === id)

  if (!location) {
    return <Navigate to="/404" replace />
  }

  const hostName = location.host.name.split(' ')
  const hostFirstName = hostName.shift()
  const hostLastName = hostName.join(' ')

  return (
    <article className="location">
      <Carousel pictures={location.pictures} title={location.title} />

      <div className="location__summary">
        <div className="loaction__identity">
          <h1>{location.title}</h1>
          <p>{location.location}</p>

          <ul className="tags" aria-label="Caractéristiques">
            {location.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="location__host-rating">
          <div className="host">
            <p>
              <span>{hostFirstName}</span>
              <span>{hostLastName}</span>
            </p>
            <img src={location.host.picture} alt={`Portrait de ${location.host.name}`} />
          </div>
          <Rating etoiles={location.rating} />
        </div>
      </div>

      <div className="location__details">
        <Collapse title="Description">
          <p>{location.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul className="equipment-list">
            {location.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </article>
  )
}
export default Logement