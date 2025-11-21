import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill all fields')
      return
    }
    setStatus('Thank you, your message has been recorded')
  }
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-sub">Get in touch</p>
        <div className="contact-grid">
          <form className="card" onSubmit={onSubmit} style={{ padding: 16 }}>
            <input className="input" name="name" placeholder="Name" value={form.name} onChange={onChange} />
            <div style={{ height: 12 }} />
            <input className="input" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} />
            <div style={{ height: 12 }} />
            <textarea className="textarea" name="message" placeholder="Message" rows="5" value={form.message} onChange={onChange} />
            <div style={{ height: 12 }} />
            <button className="btn" type="submit">Send</button>
            {status && <div style={{ marginTop: 10, color: 'var(--muted)' }}>{status}</div>}
          </form>
          <div className="card" style={{ padding: 16 }}>
            <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
              <a className="btn secondary" href="https://github.com/Bhavik-Mittal-26" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn secondary" href="https://www.linkedin.com/in/bhavik-mittal-632264291/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn secondary" href="mailto:26bmittal@gmail.com">Email</a>
              <a className="btn secondary" href="/assets/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}