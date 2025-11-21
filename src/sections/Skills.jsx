import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Skills</motion.h2>
        <p className="section-sub">Technologies</p>
        <div className="grid skills-grid">
          {skills.map(s => (
            <motion.div key={s.name} className="card skill" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src={s.icon} alt={s.name} width={28} height={28} />
              <span>{s.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}