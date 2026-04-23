import { useState, useEffect } from "react"

export default function Navbar() {
    const [active, setActive] = useState("home")

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skills", "projects", "experience", "contact"]
            const scrollPosition = window.scrollY + 150

            sections.forEach((section) => {
                const element = document.getElementById(section)
                if (element) {
                    if (
                        scrollPosition >= element.offsetTop &&
                        scrollPosition < element.offsetTop + element.offsetHeight
                    ) {
                        setActive(section)
                    }
                }
            })
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const linkClass = (section) =>
        active === section
            ? "text-blue-500 font-semibold"
            : "hover:text-blue-400 transition"

    return (
        <nav className="fixed w-full bg-black/80 backdrop-blur-md text-white z-50 shadow-lg">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-500">
                    Aman Sharma
                </h1>

                <ul className="hidden md:flex gap-8">
                    <li><a href="#home" className={linkClass("home")}>Home</a></li>
                    <li><a href="#about" className={linkClass("about")}>About</a></li>
                    <li><a href="#skills" className={linkClass("skills")}>Skills</a></li>
                    <li><a href="#projects" className={linkClass("projects")}>Projects</a></li>
                    <li><a href="#experience" className={linkClass("experience")}>Experience</a></li>
                    <li><a href="#contact" className={linkClass("contact")}>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}