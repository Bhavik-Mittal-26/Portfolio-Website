import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>About</motion.h2>
        <p className="section-sub">Short bio</p>
        <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
          <motion.div className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ padding: 24 }}>
            <p>Software Developer skilled in Web Development, AI, and Cloud Technologies with hands-on experience building production-ready applications using React.js, Node.js, Express, MongoDB, Firebase, and Python.</p>
            <p>Developed multi-agent automation systems and AI-driven healthcare platforms with optimized performance, secure authentication, and containerized deployments using Docker.</p>
            <p>Certified Azure AI Engineer Associate and Meta Front-End Developer with strong expertise in SQL, Data Science, and system design.</p>
            <p>Recognized for delivering scalable solutions, improving efficiency by up to 90%, and leading end-to-end development from UI design to backend architecture.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}