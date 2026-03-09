import { useEffect, useMemo } from 'react'
import useScrollSpy from './hooks/useScrollSpy'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Hackathons from './sections/Hackathons'
import Publications from './sections/Publications'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'

export default function App() {
  const ids = useMemo(() => ['hero','about','skills','projects','experience','hackathons','certificates','publications','education','contact'], [])
  const active = useScrollSpy(ids)
  useEffect(() => {
    const name = 'Bhavik Mittal'
    const titles = {
      hero: `Portfolio • ${name}`,
      about: `About • ${name}`,
      skills: `Skills • ${name}`,
      projects: `Projects • ${name}`,
      experience: `Experience • ${name}`,
      hackathons: `Hackathons • ${name}`,
      publications: `Publications • ${name}`,
      education: `Education • ${name}`,
      certificates: `Certificates • ${name}`,
      contact: `Contact • ${name}`
    }
    document.title = titles[active] || `Portfolio • ${name}`
  }, [active])
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Hackathons />
        <Certificates />
        <Publications />
        <Education />
        <Contact />
      </main>
      <footer className="footer">© 2025 @ Bhavik Mittal</footer>
    </div>
  )
}
