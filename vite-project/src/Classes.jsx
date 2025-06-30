import { motion } from 'framer-motion'
import { FaRegClock, FaUserAlt, FaLeaf } from 'react-icons/fa'
import ClassImage1 from './assets/class1.jpg'
import ClassImage2 from './assets/class2.jpg'
import ClassImage3 from './assets/class3.jpg'

const Classes = () => {
  const classTypes = [
    {
      id: 1,
      title: 'Hatha Yoga',
      description: 'Traditional yoga focusing on physical postures and breathing techniques.',
      duration: '60 mins',
      level: 'All Levels',
      image: ClassImage1
    },
    {
      id: 2,
      title: 'Vinyasa Flow',
      description: 'Dynamic sequence of poses synchronized with breath for fluid movement.',
      duration: '75 mins',
      level: 'Intermediate',
      image: ClassImage2
    },
    {
      id: 3,
      title: 'Restorative Yoga',
      description: 'Gentle practice using props to support deep relaxation and stress relief.',
      duration: '90 mins',
      level: 'Beginner',
      image: ClassImage3
    }
  ]

  const schedule = [
    { day: 'Monday', classes: ['Hatha Yoga - 7:00 AM', 'Vinyasa - 6:00 PM'] },
    { day: 'Tuesday', classes: ['Restorative - 9:00 AM', 'Hatha Yoga - 5:30 PM'] },
    { day: 'Wednesday', classes: ['Vinyasa - 7:00 AM', 'Hatha Yoga - 6:00 PM'] },
    { day: 'Thursday', classes: ['Restorative - 9:00 AM', 'Vinyasa - 5:30 PM'] },
    { day: 'Friday', classes: ['Hatha Yoga - 7:00 AM'] },
    { day: 'Saturday', classes: ['Vinyasa - 8:00 AM', 'Restorative - 10:00 AM'] },
    { day: 'Sunday', classes: ['Community Class - 9:00 AM'] }
  ]

  return (
    <div className="classes">
      <section className="classes-hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Classes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Find the perfect practice for your journey
        </motion.p>
      </section>

      <section className="class-types">
        <h2>Class Offerings</h2>
        <div className="class-grid">
          {classTypes.map((classItem) => (
            <motion.div
              key={classItem.id}
              className="class-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="class-image">
                <img src={classItem.image} alt={classItem.title} />
              </div>
              <div className="class-info">
                <h3>{classItem.title}</h3>
                <p>{classItem.description}</p>
                <div className="class-meta">
                  <span><FaRegClock /> {classItem.duration}</span>
                  <span><FaUserAlt /> {classItem.level}</span>
                </div>
                <button className="class-button">Learn More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="class-schedule">
        <h2>Weekly Schedule</h2>
        <div className="schedule-container">
          {schedule.map((day, index) => (
            <motion.div
              key={day.day}
              className="day-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{day.day}</h3>
              <ul>
                {day.classes.map((cls, i) => (
                  <li key={i}>
                    <FaLeaf /> {cls}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Classes