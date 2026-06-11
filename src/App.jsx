import { lazy, Suspense } from "react";

import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy load heavy sections
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Project'))
const Contact = lazy(() => import('./components/Contact'))
const Skills = lazy(() => import('./components/Skills'))
const Education = lazy(() => import('./components/Education'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className='bg-linear-to-br from-black via-purple-900 to-indigo-900'>

      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <Suspense fallback={<div className="text-white text-center">Loading About...</div>}>
        <section id="about">
          <About />
        </section>
      </Suspense>

      <Suspense fallback={<div className="text-white text-center">Loading Education...</div>}>
        <Education />
      </Suspense>

      <Suspense fallback={<div className="text-white text-center">Loading Skills...</div>}>
        <section id="skills">
          <Skills />
        </section>
      </Suspense>

      <Suspense fallback={<div className="text-white text-center">Loading Projects...</div>}>
        <section id="projects">
          <Projects />
        </section>
      </Suspense>

      <Suspense fallback={<div className="text-white text-center">Loading Contact...</div>}>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>


      <Footer />


    </div>
  )
}

export default App