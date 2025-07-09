"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/90 dark:bg-gray-900/80 dark:border-gray-700/50 dark:hover:bg-gray-900/90"
      aria-label="Toggle theme"
    >
      <div className="relative">
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-yellow-500 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
        ) : (
          <Moon className="h-5 w-5 text-gray-900 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
        )}
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
    </button>
  )
}
