import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  const variants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  }

  return (
    <motion.div
      className="mobile-menu"
      initial="closed"
      animate={isMenuOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="mobile-menu-container">
        <div className="mobile-menu-close" onClick={toggleMenu}>
          <FaTimes />
        </div>
        <ul className="mobile-nav-menu">
          <li className="mobile-nav-item" onClick={toggleMenu}>
            <Link to="/" className="mobile-nav-links">
              Home
            </Link>
          </li>
          <li className="mobile-nav-item" onClick={toggleMenu}>
            <Link to="/about" className="mobile-nav-links">
              About
            </Link>
          </li>
          <li className="mobile-nav-item" onClick={toggleMenu}>
            <Link to="/classes" className="mobile-nav-links">
              Classes
            </Link>
          </li>
          <li className="mobile-nav-item" onClick={toggleMenu}>
            <Link to="/contact" className="mobile-nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default MobileMenu