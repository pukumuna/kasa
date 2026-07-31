export default function Rating({ etoiles }) {
  const nombre = Number(etoiles)

  return (
    <div className="nbEtoiles" aria-label={`Note : ${nombre} sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`nbEtoiles__star ${star <= nombre ? ' nbEtoiles__star--active' : ''}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  )
}
