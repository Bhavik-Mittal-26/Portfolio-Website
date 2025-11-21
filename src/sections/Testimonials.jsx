import { useEffect, useState } from 'react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 4000)
    return () => clearInterval(id)
  }, [])
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-sub">Feedback from peers and clients</p>
        <div className="card carousel">
          <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {testimonials.map((t, i) => (
              <div key={i} className="carousel-item">
                <div className="container" style={{ maxWidth: 800 }}>
                  <p style={{ fontSize: 18, lineHeight: 1.6 }}>&ldquo;{t.text}&rdquo;</p>
                  <div style={{ marginTop: 12, color: 'var(--muted)' }}>{t.name} • {t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}