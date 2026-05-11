import { motion } from "framer-motion"

export default function Skills() {

    const skillCategories = {
        Languages: [
            { name: "C#", level: 90 },
            { name: "JavaScript (Basic)", level: 60 },
            { name: "SQL", level: 70 }
        ],
        Tools: [
            { name: "Unity Editor", level: 95 },
            { name: "Git & GitHub", level: 80 },
            { name: "Visual Studio", level: 85 },
            { name: "Postman", level: 70 },
            { name: "Figma (Basic)", level: 55 }
        ],
        Technologies: [
            { name: "Unity 2D / 3D", level: 92 },
            { name: "AR Foundation", level: 80 },
            { name: "Photon Multiplayer", level: 85 },
            { name: "REST APIs", level: 75 },
            { name: "WebGL Deployment", level: 80 },
            { name: "Android & iOS Build Pipeline", level: 85 },
            { name: "Performance Optimization", level: 82 }
        ]
    }

    return (
        <motion.section
            id="skills"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-24 bg-black text-white px-6"
        >
            <h2 className="text-4xl font-bold text-blue-500 text-center mb-16">
                Technical Skills
            </h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {Object.entries(skillCategories).map(([category, skills], i) => (
                    <div
                        key={i}
                        className="bg-gray-900 p-8 rounded-xl border border-gray-800 
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] 
                        transition"
                    >
                        <h3 className="text-xl text-blue-400 font-semibold mb-6 text-center">
                            {category}
                        </h3>

                        <div className="space-y-5">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>

                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <motion.div
                                            className="bg-blue-500 h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}