import Logo from './Logo.jsx'
import footerLogo from "../assets/footer_logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo srcLogo={footerLogo} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
