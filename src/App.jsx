import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout.jsx'
import Accueil from './pages/Accueil.jsx'
<<<<<<< HEAD
import Logement from './pages/Logement.jsx'
import About from './pages/About.jsx'
=======
import About from './pages/About.jsx'
import Logement from './pages/Logement.jsx'
>>>>>>> 6f21324a53620c4f761d5e352b58394b8791b794
import Error404 from './pages/Error404.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Accueil />} />
<<<<<<< HEAD
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/a-propos" element={<About />} />
=======
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
>>>>>>> 6f21324a53620c4f761d5e352b58394b8791b794
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 6f21324a53620c4f761d5e352b58394b8791b794
