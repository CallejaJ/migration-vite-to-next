"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Evitar hidration mismatch
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    setIsDarkMode(savedTheme === "dark")
  }, [])

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement
      if (isDarkMode) {
        root.classList.add("dark-mode")
        localStorage.setItem("theme", "dark")
      } else {
        root.classList.remove("dark-mode")
        localStorage.setItem("theme", "light")
      }
    }
  }, [isDarkMode, mounted])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Evitar renderizar hasta que el componente esté montado
  if (!mounted) {
    return <div className="w-10 h-10 rounded-lg bg-gray-100 animate-pulse"></div>
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 flex items-center justify-center group"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative">
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-500 transition-transform duration-300 group-hover:scale-110" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600 transition-transform duration-300 group-hover:scale-110" />
        )}
      </div>
    </button>
  )
}

export default ThemeToggle
