export default function Rating({ value }) {
  const rating = Number(value)

  return (
    <div className="rating" aria-label={`Note : ${rating} sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`rating__star${star <= rating ? ' rating__star--active' : ''}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  )
}
