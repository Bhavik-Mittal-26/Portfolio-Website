import { useMemo } from 'react'
import useTheme from '../hooks/useTheme'
import useScrollSpy from '../hooks/useScrollSpy'
import { scrollToId } from '../utils/scrollTo'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const ids = useMemo(() => links.map(l => l.id), [])
  const active = useScrollSpy(ids)
  const { theme, toggle } = useTheme()
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <img src="/assets/Profile.png" alt="Bhavik Mittal" width="28" height="28" style={{ borderRadius: '50%' }} />
          <span>Portfolio</span>
        </div>
        <div className="nav-links">
          {links.map(l => (
            <a
              key={l.id}
              className={`nav-link ${active === l.id ? 'active' : ''}`}
              href={`#${l.id}`}
              onClick={e => { e.preventDefault(); scrollToId(l.id) }}
            >{l.label}</a>
          ))}
        </div>
        <button className="toggle" onClick={toggle} aria-label="Toggle theme">
          <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </nav>
  )
}