import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout.jsx'
import Accueil from './pages/Accueil.jsx'
import Logement from './pages/Logement.jsx'
import About from './pages/About.jsx'
import Error404 from './pages/Error404.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}
