import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Classes from './Classes'
import Contact from './Contact'
import Navbar from './Navbar'
import MobileMenu from './Mobilenav'
import Footer from './Footer'
import './global.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Router>
      <div className="app">
        <Navbar toggleMenu={toggleMenu} />
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className={`content ${isMenuOpen ? 'menu-open' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App