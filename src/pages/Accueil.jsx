import Banner from '../components/Banner.jsx'
import Galerie from '../components/Galerie.jsx'
import { locationsData } from '../data/locations.js'
import homeBanner from '../assets/home_banner.jpg'

const Accueil = () => {
  return (
    <>
      <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
      <Galerie locations={locationsData} />
    </>
  )
}
export default Accueil