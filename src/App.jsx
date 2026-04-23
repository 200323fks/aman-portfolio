import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Stats from "./components/Stats"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="bg-black text-white">
            <Navbar />
            <Hero />
            <About />
            <Stats/>
            <Skills />
            <Projects />
            <Experience />
            <Education/>
            <Contact />
            <Footer/>
        </div>
    )
}

export default App