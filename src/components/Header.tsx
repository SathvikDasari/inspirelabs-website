import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/images/sitelogo1.png" alt="InspireLabs Logo" className="logo-img" />
        </Link>
        <nav className="main-nav">
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          <Link to="/get-involved" className={`nav-link ${location.pathname === '/get-involved' ? 'active' : ''}`}>Get Involved</Link>
          <Link to="/our-work" className={`nav-link ${location.pathname === '/our-work' ? 'active' : ''}`}>Our Work</Link>
          <Link to="/programs" className={`nav-link ${location.pathname === '/programs' ? 'active' : ''}`}>Programs</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

