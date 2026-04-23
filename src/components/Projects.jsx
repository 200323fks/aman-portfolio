import { motion as Motion } from "framer-motion"

export default function Projects() {

    const projects = [
        {
            title: "Trivial – Cross-Platform Quiz Game",
            desc: "Developed a scalable quiz-based game deployed on Android and WebGL. Implemented dynamic question loading system, score persistence, optimized UI responsiveness, and reduced load time through performance tuning.",
            tech: ["Unity", "C#", "WebGL", "Android", "UI Optimization"]
        },
        {
            title: "Echelon Tactics – Multiplayer AR Card Game",
            desc: "Engineered a real-time multiplayer AR strategy game using Photon networking and AR Foundation. Built synchronized card mechanics, real-time room management, stable AR object tracking, and optimized gameplay latency.",
            tech: ["Unity", "C#", "Photon", "AR Foundation", "Android"]
        },
        {
            title: "Strategy Prediction Game (Multiplayer + AI)",
            desc: "Designed a competitive multiplayer game integrating AI-based decision logic. Implemented matchmaking systems, player synchronization, REST API integration, and improved runtime performance.",
            tech: ["Unity", "C#", "Photon", "REST API", "Multiplayer"]
        },
        {
            title: "Roblox Zombie Survival Game",
            desc: "Created a multiplayer survival experience featuring wave-based enemy spawning, scalable damage systems, and interactive environments. Optimized server-side performance for smoother gameplay.",
            tech: ["Roblox Studio", "Lua", "Multiplayer Systems"]
        }
    ]

    return (
        <Motion.section
            id="projects"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-24 bg-black text-white px-6 text-center"
        >
            <h2 className="text-4xl font-bold text-blue-500 mb-12">
                Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {projects.map((project, i) => (
                    <Motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 p-8 rounded-xl border border-gray-800 
                        hover:border-blue-500 hover:-translate-y-2 
                        hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] 
                        transition duration-300 text-left"
                    >
                        <h3 className="text-lg font-semibold text-blue-400 mb-4">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </Motion.div>
                ))}
            </div>
        </Motion.section>
    )
}