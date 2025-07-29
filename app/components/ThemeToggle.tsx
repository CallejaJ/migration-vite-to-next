"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Evitar hydration mismatch
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      if (isDarkMode) {
        root.classList.add("dark-mode");
        root.classList.add("dark"); // Para compatibilidad con shadcn/ui
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark-mode");
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkMode, mounted]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Evitar renderizar hasta que el componente esté montado
  if (!mounted) {
    return (
      <div className='w-10 h-10 rounded-lg bg-gray-100 animate-pulse'></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-10 h-10 rounded-lg transition-all duration-300 flex items-center justify-center group
        ${
          isDarkMode
            ? "bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-800/50 hover:border-purple-600/70 hover:shadow-lg hover:shadow-purple-500/25"
            : "bg-gray-100 hover:bg-gray-200 border border-gray-200"
        }
      `}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className='relative'>
        {isDarkMode ? (
          <Sun className='w-5 h-5 text-yellow-400 transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-300' />
        ) : (
          <Moon className='w-5 h-5 text-gray-600 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-800' />
        )}
      </div>

      {/* Efecto de glow sutil en modo oscuro */}
      {isDarkMode && (
        <div className='absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      )}
    </button>
  );
};

export default ThemeToggle;
