import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaYoutube />, url: "#" }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>SwatiSharma<span>Yoga</span></h3>
          <p>Finding balance in body, mind and spirit through the ancient practice of yoga.</p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                whileHover={{ y: -5, color: '#f5a25d' }}
                transition={{ duration: 0.2 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/classes">Classes</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li>123 Peaceful Lane</li>
            <li>Serenity Valley, SV 12345</li>
            <li>(123) 456-7890</li>
            <li>info@swatisharmayoga.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to receive updates and wellness tips</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" required />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Swati Sharma Yoga. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer