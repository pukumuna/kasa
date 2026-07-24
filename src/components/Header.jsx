import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const lienActif = ({ isActive }) =>
    isActive
      ? 'header__link header__link--active'
      : 'header__link'

  return (
    <header className="header">
      <Link
        to="/"
        className="header__logo"
        aria-label="Retour à l'accueil"
      >
        Kasa
      </Link>

      <nav
        className="header__nav"
        aria-label="Navigation principale"
      >
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