import Banner from '../components/Banner.jsx'
import Collapse from '../components/Collapse.jsx'
import aboutBanner from '../assets/about_banner.jpg'

const values = [
  {
    title: 'Fiabilité',
    content:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    title: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    content:
      'La qualité du service est au cœur de notre engagement. Nos équipes vous accompagnent pour que chaque interaction soit fluide et agréable.',
  },
  {
    title: 'Sécurité',
    content:
      'La sécurité est une priorité. Chaque logement et chaque profil font l’objet de vérifications afin de garantir une expérience sereine.',
  },
]

export default function About() {
  return (
    <>
      <Banner image={aboutBanner} />
      <div className="about">
        {values.map((value) => (
          <Collapse key={value.title} title={value.title}>
            <p>{value.content}</p>
          </Collapse>
        ))}
      </div>
    </>
  )
}
