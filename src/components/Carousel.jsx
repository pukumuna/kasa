<<<<<<< HEAD
import { useState } from 'react'

export default function Carousel({ pictures, title }) {
  const [current, setCurrent] = useState(0)
  const hasSeveral = pictures.length > 1

  const previous = () => {
    setCurrent((index) => (index === 0 ? pictures.length - 1 : index - 1))}

  const next = () => {
    setCurrent((index) => (index === pictures.length - 1 ? 0 : index + 1))}

  return (
    <section className="carousel" aria-label={`Photos de ${title}`}>
      <img src={pictures[current]}
        alt={`${title} — photo ${current + 1} sur ${pictures.length}`}
        className="carousel__image"
      />

      {hasSeveral && (
        <>
          <button className="carousel__arrow carousel__arrow--left" onClick={previous} 
                  aria-label="Photo précédente">
            ‹
          </button>
          <button className="carousel__arrow carousel__arrow--right" onClick={next} 
                  aria-label="Photo suivante">
            ›
          </button>
          <span className="carousel__counter">{current + 1}/{pictures.length}</span>
        </>
      )}
    </section>
  )
}
=======
import { useState } from 'react'

export default function Carousel({ pictures, title }) {
  const [current, setCurrent] = useState(0)
  const hasSeveral = pictures.length > 1

  const previous = () => {
    setCurrent((index) => (index === 0 ? pictures.length - 1 : index - 1))}

  const next = () => {
    setCurrent((index) => (index === pictures.length - 1 ? 0 : index + 1))}

  return (
    <section className="carousel" aria-label={`Photos de ${title}`}>
      <img src={pictures[current]}
        alt={`${title} — photo ${current + 1} sur ${pictures.length}`}
        className="carousel__image"
      />

      {hasSeveral && (
        <>
          <button className="carousel__arrow carousel__arrow--left" onClick={previous} 
                  aria-label="Photo précédente">
            ‹
          </button>
          <button className="carousel__arrow carousel__arrow--right" onClick={next} 
                  aria-label="Photo suivante">
            ›
          </button>
          <span className="carousel__counter">{current + 1}/{pictures.length}</span>
        </>
      )}
    </section>
  )
}
>>>>>>> 6f21324a53620c4f761d5e352b58394b8791b794
