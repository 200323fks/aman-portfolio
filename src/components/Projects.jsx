import { motion as Motion } from "framer-motion"

export default function Projects() {
    const projects = [
        {
            title: "Trivial – Cross-Platform Quiz Game",
            desc: "Developed a scalable quiz game supporting Android, IOS & WebGL builds. Implemented dynamic question loading, real-time score system, UI optimization and ensured smooth cross-device compatibility.",
            tech: ["Unity", "C#", "WebGL", "Android", "IOS"],
            video: "https://drive.google.com/file/d/1TT2F1xjGdGBDCAsIxBFoaGEE5tOm1iXG/view",
            link: null
        },
        {
            title: "Echelon Tactics – Multiplayer AR Card Game",
            desc: "Built a real-time multiplayer AR strategy game using Photon networking. Designed synchronized gameplay systems, room management logic, and optimized AR tracking for stable performance.",
            tech: ["Unity", "AR Foundation", "Photon", "C#"],
            video: "https://drive.google.com/file/d/1RZq1YbhvoWqY4LJuOrqSufr5T--R1n1K/view",
            link: null
        },
        {
            title: "Strategy Prediction Game (Multiplayer + AI)",
            desc: "Created a competitive multiplayer game integrating AI-based prediction logic. Implemented matchmaking, real-time synchronization, backend API integration and gameplay performance tuning.",
            tech: ["Unity", "C#", "Photon", "REST API"],
            video: null,
            link: null
        },
        {
            title: "The Last Survivor – Roblox Multiplayer Zombie Game",
            desc: "Designed and developed a multiplayer survival shooter in Roblox featuring wave-based enemy spawning, damage systems, scalable game logic, and optimized real-time multiplayer gameplay mechanics.",
            tech: ["Roblox Studio", "Lua", "Multiplayer Systems", "Game Logic"],
            video: null,
            link: "https://www.roblox.com/games/91761444447467/The-Last-Survivor"
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
                    <div
                        key={i}
                        className="bg-gray-900 p-8 rounded-xl border border-gray-800 
                        hover:border-blue-500 hover:-translate-y-2 
                        hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] 
                        transition duration-300 text-left"
                    >
                        <h3 className="text-lg font-semibold text-blue-400 mb-3">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-black border border-blue-500 
                                    text-blue-400 px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 flex-wrap">

                            {project.video && (
                                <a
                                    href={project.video}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 
                                    px-5 py-2 rounded-lg text-sm font-semibold transition"
                                >
                                    ▶ Watch Demo
                                </a>
                            )}

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-green-600 hover:bg-green-700 
                                    px-5 py-2 rounded-lg text-sm font-semibold transition"
                                >
                                    ▶ Play Game
                                </a>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </Motion.section>
    )
}