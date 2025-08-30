"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"

import { useComponentTheme } from "./component-theme-provider"

interface ComponentThemeToggleProps {
  className?: string
  showLabel?: boolean
  size?: "sm" | "md" | "lg"
}

function ComponentThemeToggle({ className, showLabel = false, size = "md" }: ComponentThemeToggleProps) {
  const { theme, setTheme } = useComponentTheme()

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log(`Switching from ${theme} to ${newTheme}`);
    setTheme(newTheme);
  }

  const buttonStyle = {
    // Темная тема: темно-серый фон с светлой границей
    // Светлая тема: белый фон с серой границей
    backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff", // shadcn card colors
    borderColor: theme === "dark" ? "#475569" : "#e2e8f0", // shadcn border colors  
    color: theme === "dark" ? "#f8fafc" : "#0f172a", // shadcn foreground
    transition: "all 0.2s ease",
    borderWidth: "1px",
    borderStyle: "solid",
    // Hover эффекты
    ':hover': {
      backgroundColor: theme === "dark" ? "#334155" : "#f8fafc"
    }
  };

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-9 w-9",
    lg: "h-10 w-10"
  }

  const iconSizeClasses = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  }

  return (
    <button
      onClick={toggleTheme}
      style={buttonStyle}
      className={`
        relative inline-flex items-center justify-center rounded-lg text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm
        ${sizeClasses[size]}
        ${className}
      `}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <MoonIcon className={`${iconSizeClasses[size]}`} strokeWidth={2} />
      ) : (
        <SunIcon className={`${iconSizeClasses[size]}`} strokeWidth={2} />
      )}
      {showLabel && (
        <span className="sr-only">
          {theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
        </span>
      )}
    </button>
  )
}

export { ComponentThemeToggle }
export default ComponentThemeToggle
