import Card from './Card.jsx'

const Galerie = ({ locations }) => { /* Accueil : locations={locationsData} */ 
  return (
    <section className="gallery" aria-label="Galerie des logements">
      {locations.map((location) => 
        <Card key={location.id} logement={location} />
      )}
    </section>
  )
}
export default Galerie