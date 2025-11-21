import { motion } from 'framer-motion'
import { certificates } from '../data/certificates'

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Certificates</motion.h2>
        <p className="section-sub">Achievements and credentials</p>
        <div className="grid skills-grid">
          {certificates.map(c => (
            <div key={c.title} className="card skill">
              <img src={c.logo} alt={c.title} width={28} height={28} onError={e => { e.currentTarget.src = '/assets/placeholder.svg' }} />
              <div>
                <strong>{c.title}</strong>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{c.issuer} • {c.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}