import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Education from "./components/Education"


function App() {

  return (
    <div className='bg-gradient-to-br from-black via-purple-900 to-indigo-900'>

      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <Education />

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default App
