import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-flow focus:px-4 focus:py-2 focus:text-deep focus:outline-none"
      >
        Saltar para conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
