import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Content from './components/Content'
import Header from './components/Header'
import './App.css'

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = ()=>{
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
  }
  return (
    <>
      <div className={`app theme`}>
        <Header theme={theme} toggleTheme={toggleTheme}></Header>
        <Content theme={theme}></Content>
      </div>
    </>
  )
}

export default App
