// import { useThemeContext } from '@/context/ThemeContext'

export default function Home() {
  // const { theme, toggleTheme } = useThemeContext()

  return (
    <div>
      <h1 className="flex flex-col text-green-500">Home</h1>
      <p>Theme: {}</p>
      <button onClick={() => console.log("safe")}>Toggle theme</button>
    </div>
  )
}
