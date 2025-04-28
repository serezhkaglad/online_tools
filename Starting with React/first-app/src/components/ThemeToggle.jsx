import { useState } from 'react'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`theme-container ${isDark ? 'dark' : 'light'}`}>
      <button onClick={() => setIsDark(!isDark)}>
        Toggle Theme
      </button>
    </div>
  )
}

export default ThemeToggle