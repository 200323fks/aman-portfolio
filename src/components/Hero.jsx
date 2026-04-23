import { motion as Motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"

export default function Hero() {
    return (
        <Motion.section
            id="home"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white px-6"
        >
            <h1 className="text-5xl md:text-7xl font-bold">
                Hi, I'm <span className="text-blue-500">Aman Sharma</span>
            </h1>

            <p className="mt-6 text-xl text-gray-400 max-w-2xl">
                <Typewriter
                    words={[
                        "Junior Unity Developer",
                        "Multiplayer Systems Specialist",
                        "AR Game Developer",
                        "Cross-Platform Game Builder"
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </p>

            <div className="mt-8 flex gap-6 flex-wrap justify-center">
                <a
                    href="#projects"
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition shadow-lg shadow-blue-500/30"
                >
                    View Projects
                </a>

                <a
                    href="/AmanSharma_Resume.pdf"
                    download
                    className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition"
                >
                    Download Resume
                </a>
            </div>
        </Motion.section>
    )
}