import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Project'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="font-sans bg-gray-900 text-white w-full">
      <Header />
      <Hero/>
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>

    </>
  )
}

export default App
