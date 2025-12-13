"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  accentColor: string
  setAccentColor: (color: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [accentColor, setAccentColor] = useState("#06b6d4")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const savedAccentColor = localStorage.getItem("accentColor")

    if (savedTheme) {
      setTheme(savedTheme)
    }
    if (savedAccentColor) {
      setAccentColor(savedAccentColor)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  useEffect(() => {
    if (!mounted) return

    document.documentElement.style.setProperty("--accent-color", accentColor)
    localStorage.setItem("accentColor", accentColor)
  }, [accentColor, mounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const value = {
    theme,
    toggleTheme,
    accentColor,
    setAccentColor,
  }

  // Prevent flash of unstyled content
  if (!mounted) {
    return null
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
