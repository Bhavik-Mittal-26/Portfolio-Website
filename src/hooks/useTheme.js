import { useEffect, useState } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const initial = saved || 'light'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))
  return { theme, toggle }
}