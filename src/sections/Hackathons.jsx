import { motion } from 'framer-motion'
import { hackathons } from '../data/hackathons'

export default function Hackathons() {
  return (
    <section id="hackathons" className="section">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Hackathons</motion.h2>
        <p className="section-sub">Competitions and achievements</p>
        <div className="grid projects-grid">
          {hackathons.map(h => (
            <div key={h.title} className="card" style={{ overflow: 'hidden' }}>
              <img src={h.image} alt={h.title} className="project-img" loading="lazy" onError={e => { e.currentTarget.src = '/assets/placeholder.svg' }} />
              <div style={{ padding: 16 }}>
                <strong>{h.title}</strong>
                <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>{h.organizer} • {h.year}</p>
                <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>{h.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
