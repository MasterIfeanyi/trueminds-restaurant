// import { useThemeContext } from '@/context/ThemeContext'

export default function Home() {
  // const { theme, toggleTheme } = useThemeContext()

  return (
    <div>
      <h1>Home</h1>
      <p>Theme: {}</p>
      <button onClick={() => console.log("safe")}>Toggle theme</button>
    </div>
  )
}
