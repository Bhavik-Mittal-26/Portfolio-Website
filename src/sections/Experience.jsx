import { motion } from 'framer-motion'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Experience</motion.h2>
        <p className="section-sub">Roles and responsibilities</p>
        <div className="timeline">
          {experience.map((e, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="card" style={{ padding: 16 }}>
                <strong>{e.role}</strong> • {e.company} • {e.period}
                <p style={{ margin: '8px 0 0', color: 'var(--muted)' }}>{e.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}