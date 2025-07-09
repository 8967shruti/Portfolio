"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function AnimatedBackground() {
  const { theme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <div className="fixed inset-0 z-0 overflow-hidden transition-all duration-1000">
      {/* Base Background */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
            : "bg-gradient-to-br from-gray-50 via-white to-blue-50"
        }`}
      ></div>

      {/* Subtle Animated Gradient Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isDark
            ? "bg-gradient-to-r from-purple-900/10 via-blue-900/5 to-transparent"
            : "bg-gradient-to-r from-purple-100/30 via-blue-100/20 to-transparent"
        } animate-gradient-shift`}
      ></div>

      {/* Main Mouse Spotlight */}
      <div
        className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full transition-all duration-500 ease-out pointer-events-none"
        style={{
          background: isDark
            ? `radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)`
            : `radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)`,
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
        }}
      ></div>

      {/* Secondary Spotlight */}
      <div
        className="absolute w-96 h-96 lg:w-[500px] lg:h-[500px] rounded-full pointer-events-none animate-pulse"
        style={{
          background: isDark
            ? `radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 80%)`
            : `radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, rgba(6, 182, 212, 0.02) 50%, transparent 80%)`,
          left: "20%",
          top: "30%",
          transform: "translate(-50%, -50%)",
          filter: "blur(80px)",
          animationDuration: "4s",
        }}
      ></div>

      {/* Third Spotlight */}
      <div
        className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full pointer-events-none animate-pulse"
        style={{
          background: isDark
            ? `radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, rgba(147, 51, 234, 0.04) 50%, transparent 80%)`
            : `radial-gradient(circle, rgba(6, 182, 212, 0.03) 0%, rgba(147, 51, 234, 0.02) 50%, transparent 80%)`,
          right: "15%",
          bottom: "20%",
          transform: "translate(50%, 50%)",
          filter: "blur(70px)",
          animationDuration: "6s",
          animationDelay: "2s",
        }}
      ></div>

      {/* Subtle Grid Pattern */}
      <div className={`absolute inset-0 transition-all duration-1000 ${isDark ? "opacity-[0.02]" : "opacity-[0.03]"}`}>
        <div
          className={`h-full w-full ${
            isDark
              ? "bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)]"
          } bg-[size:100px_100px]`}
        ></div>
      </div>

      {/* Professional Accent Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-full h-px ${
            isDark
              ? "bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              : "bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
          } animate-pulse`}
          style={{ animationDuration: "3s" }}
        ></div>

        <div
          className={`absolute bottom-0 left-0 w-full h-px ${
            isDark
              ? "bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
              : "bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          } animate-pulse`}
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  )
}
