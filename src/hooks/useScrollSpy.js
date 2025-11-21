import { useEffect, useState } from 'react'

export default function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const handler = () => {
      let current = ids[0]
      const scrollPos = window.scrollY + 120
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (!el) return
        if (el.offsetTop <= scrollPos) current = id
      })
      setActive(current)
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [ids])
  return active
}