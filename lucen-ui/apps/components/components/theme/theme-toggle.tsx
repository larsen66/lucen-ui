"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"

import { useTheme } from "./theme-provider"

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
  size?: "sm" | "md" | "lg"
}

function ThemeToggle({ className, showLabel = false, size = "md" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-9 w-9", 
    lg: "h-10 w-10"
  }

  const iconSizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
        ${sizeClasses[size]}
        ${className}
      `}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <SunIcon className={`${iconSizeClasses[size]} rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`} />
      <MoonIcon className={`${iconSizeClasses[size]} absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`} />
      {showLabel && (
        <span className="sr-only">
          {theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
        </span>
      )}
    </button>
  )
}

export { ThemeToggle }
export default ThemeToggle
