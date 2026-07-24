import Banner from '../components/Banner.jsx'
import aboutBanner from '../assets/about_banner.jpg'

export default function About() {
  return (
    <>
      <Banner image={aboutBanner} />
      <div className="about">
        "Affichage Propriétés locations"
      </div>
    </>
  )
}
