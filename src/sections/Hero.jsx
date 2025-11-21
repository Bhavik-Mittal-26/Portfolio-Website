import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="container">
        <div className="hero">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="hero-title">Bhavik Mittal</h1>
            <div className="social" aria-label="Social links">
              <a href="https://www.linkedin.com/in/bhavik-mittal-632264291/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5A2.5 2.5 0 114.99 8.5 2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05a4.16 4.16 0 013.75-2.06C19.86 8.64 21 10.28 21 13.19V21h-4v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43V21H10V9z" fill="currentColor"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Bhavik-Mittal-26" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5a11.5 11.5 0 00-3.64 22.42c.58.11.79-.25.79-.56v-2.06c-3.19.69-3.86-1.37-3.86-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.11-.77.41-1.27.74-1.56-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.44-2.27 1.16-3.07-.12-.29-.5-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.48 3.15-1.17 3.15-1.17.61 1.58.23 2.75.11 3.04.72.8 1.16 1.82 1.16 3.07 0 4.39-2.69 5.35-5.25 5.63.42.36.8 1.07.8 2.17v3.22c0 .32.21.68.8.56A11.5 11.5 0 0012 .5z" fill="currentColor"/></svg>
                <span>GitHub</span>
              </a>
              <a href="mailto:26bmittal@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/></svg>
                <span>Email</span>
              </a>
              <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2h7l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm7 1v4h4" fill="currentColor"/></svg>
                <span>Resume</span>
              </a>
            </div>
            <p className="hero-sub">Web Developer • Frontend • Backend</p>
            <div className="hero-actions">
              <a className="btn" href="#projects">View Projects</a>
              <a className="btn secondary" href="#contact">Contact Me</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="card" style={{ padding: 24, display: 'flex', justifyContent: 'center' }}>
            <picture>
              <source srcSet="/assets/Profile.png" />
              <img src="/assets/placeholder.svg" alt="Bhavik Mittal" className="avatar" />
            </picture>
          </motion.div>
        </div>
      </div>
    </section>
  )
}