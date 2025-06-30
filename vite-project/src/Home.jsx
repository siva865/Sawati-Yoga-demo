import { motion } from 'framer-motion'
import { FaLeaf, FaHeartbeat, FaPeace } from 'react-icons/fa'
import HeroImage from './assets/hero.jpg'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Find Your Balance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the path to wellness with Swati Sharma Yoga
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Join Today
          </motion.button>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="Yoga pose" />
        </div>
      </section>

      <section className="benefits">
        <h2>Benefits of Yoga</h2>
        <div className="benefits-grid">
          <motion.div
            className="benefit-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaLeaf className="benefit-icon" />
            <h3>Mindfulness</h3>
            <p>Connect with your inner self and find peace in the present moment.</p>
          </motion.div>
          <motion.div
            className="benefit-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaHeartbeat className="benefit-icon" />
            <h3>Health</h3>
            <p>Improve flexibility, strength, and overall physical well-being.</p>
          </motion.div>
          <motion.div
            className="benefit-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaPeace className="benefit-icon" />
            <h3>Harmony</h3>
            <p>Balance your body, mind, and spirit for a harmonious life.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home