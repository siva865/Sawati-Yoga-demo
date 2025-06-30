import { motion } from 'framer-motion'
import { FaYinYang, FaHandsHelping, FaMedal } from 'react-icons/fa'
import AboutImage from './assets/about.jpg'

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Philosophy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connecting body, mind and spirit through authentic yoga practice
          </motion.p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-image">
            <img src={AboutImage} alt="Swati Sharma" />
          </div>
          <div className="about-text">
            <h2>Meet Swati Sharma</h2>
            <p>
              With over 15 years of experience in yoga instruction, Swati Sharma brings a unique
              blend of traditional Hatha yoga and modern therapeutic techniques to her classes.
              Certified by the Yoga Alliance International, she specializes in helping students
              of all levels find balance and inner peace.
            </p>
            <p>
              Swati's journey began in Rishikesh, India, where she trained under renowned masters.
              Her teaching philosophy emphasizes mindfulness, proper alignment, and adapting
              practice to individual needs.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <motion.div
              className="value-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaYinYang className="value-icon" />
              <h3>Balance</h3>
              <p>We believe in harmonizing physical postures with breath and meditation.</p>
            </motion.div>
            <motion.div
              className="value-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaHandsHelping className="value-icon" />
              <h3>Community</h3>
              <p>Our studio is a welcoming space for practitioners of all levels.</p>
            </motion.div>
            <motion.div
              className="value-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FaMedal className="value-icon" />
              <h3>Excellence</h3>
              <p>We maintain the highest standards in yoga instruction and studio facilities.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About