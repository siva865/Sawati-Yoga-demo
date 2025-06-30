import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          SwatiSharma<span>Yoga</span>
        </Link>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/classes" className="nav-links">
              Classes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar