import { useState } from 'react'

export default function Carousel({ pictures, title }) {
  const [indice, setIndice] = useState(0)
  const plusieurs = pictures.length > 1
  //Valeur initiale de index = 0 :
  const previous = () => {
    setIndice((index) => (index === 0 ? pictures.length - 1 : index - 1))}

  const next = () => {
    setIndice((index) => (index === pictures.length - 1 ? 0 : index + 1))}

  return (
    <section className="carousel" aria-label={`Photos de ${title}`}>
      <img src={pictures[indice]}
        alt={`${title} — photo ${indice + 1} sur ${pictures.length}`}
        className="carousel__image"
      />

      {plusieurs && (
        <>
          <button className="carousel__arrow carousel__arrow--left" onClick={previous} 
                  aria-label="Photo précédente">
            ‹
          </button>
          <button className="carousel__arrow carousel__arrow--right" onClick={next} 
                  aria-label="Photo suivante">
            ›
          </button>
          <span className="carousel__counter">{indice + 1}/{pictures.length}</span>
        </>
      )}
    </section>
  )
}
