import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import headerLogo from "../assets/header_logo.jpg";

export default function Header() {
  const lienActif = ({ isActive }) =>
    `header__link ${isActive ? ' header__link--active' : ''}`

  return (
    <header className="header">
       
      <Logo srcLogo={headerLogo} />
      
      <nav className="header__nav" aria-label="Navigation principale">
        <NavLink to="/" end className={lienActif}>
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className={lienActif}>
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}
