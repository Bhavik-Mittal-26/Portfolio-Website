import { motion } from 'framer-motion'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Education</motion.h2>
        <p className="section-sub">Academic background</p>
        <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
          {education.map((e, i) => (
            <div key={i} className="card" style={{ padding: 16 }}>
              <strong>{e.degree}</strong>
              <p style={{ margin: '6px 0 0' }}>{e.school}</p>
              <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>{e.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}