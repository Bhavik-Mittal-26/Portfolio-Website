import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Projects</motion.h2>
        <p className="section-sub">Selected work</p>
        <div className="grid projects-grid">
          {projects.map(p => (
            <motion.div key={p.title} className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img className="project-img" src={p.image} alt={p.title} loading="lazy" />
              <div style={{ padding: 16 }}>
                <h3 style={{ margin: '0 0 8px' }}>{p.title}</h3>
                <p style={{ margin: '0 0 12px', color: 'var(--muted)' }}>{p.description}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                  {p.stack.map(s => (
                    <span key={s} style={{ padding: '6px 10px', borderRadius: 999, border: '1px solid var(--border)', fontSize: 12 }}>{s}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <a className="btn secondary" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a className="btn" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}