"use client"

import * as React from "react"

type ComponentTheme = "dark" | "light"

type ComponentThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: ComponentTheme
}

type ComponentThemeProviderState = {
  theme: ComponentTheme
  setTheme: (theme: ComponentTheme) => void
}

const initialState: ComponentThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
}

const ComponentThemeProviderContext = React.createContext<ComponentThemeProviderState>(initialState)

export function ComponentThemeProvider({
  children,
  defaultTheme = "dark",
  ...props
}: ComponentThemeProviderProps) {
  const [theme, setTheme] = React.useState<ComponentTheme>(defaultTheme)
  const [forceUpdate, setForceUpdate] = React.useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const value = {
    theme,
    setTheme: (newTheme: ComponentTheme) => {
      console.log(`Theme changing from ${theme} to ${newTheme}`)
      setTheme(newTheme)
      setForceUpdate(prev => prev + 1) // Принудительный рере-рендер
      
      // Принудительно обновляем DOM немедленно
      if (containerRef.current) {
        if (newTheme === "dark") {
          containerRef.current.classList.add("dark")
        } else {
          containerRef.current.classList.remove("dark")
        }
        // Принудительно перерисовываем
        containerRef.current.style.display = 'none'
        containerRef.current.offsetHeight // trigger reflow
        containerRef.current.style.display = ''
      }
    },
  }

  React.useEffect(() => {
    console.log(`Theme updated to: ${theme}`)
    if (containerRef.current) {
      if (theme === "dark") {
        containerRef.current.classList.add("dark")
      } else {
        containerRef.current.classList.remove("dark")
      }
    }
  }, [theme])

  return (
    <ComponentThemeProviderContext.Provider {...props} value={value}>
      <div 
        ref={containerRef}
        key={`theme-${theme}-${forceUpdate}`}
        className={theme === "dark" ? "dark" : ""}
        data-theme={theme}
      >
        {children}
      </div>
    </ComponentThemeProviderContext.Provider>
  )
}

export const useComponentTheme = () => {
  const context = React.useContext(ComponentThemeProviderContext)

  if (context === undefined)
    throw new Error("useComponentTheme must be used within a ComponentThemeProvider")

  return context
}
