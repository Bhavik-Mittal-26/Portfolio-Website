import { motion } from 'framer-motion'
import { publications } from '../data/publications'

export default function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Publications</motion.h2>
        <p className="section-sub">Research and writing</p>
        <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
          {publications.map((p, i) => (
            <div key={i} className="card" style={{ padding: 16 }}>
              <strong>{p.title}</strong>
              <p style={{ margin: '6px 0 0' }}>{p.venue}</p>
              <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>{p.date} • {p.type}</p>
              <p style={{ margin: '10px 0 0', color: 'var(--muted)' }}>{p.details}</p>
              {p.url && (
                <div style={{ marginTop: 12 }}>
                  <a className="btn" href={p.url} target="_blank" rel="noreferrer">View Publication</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
