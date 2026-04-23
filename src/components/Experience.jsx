import { motion as Motion } from "framer-motion"

export default function Experience() {
    return (
        <Motion.section
            id="experience"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-24 bg-gray-950 text-white px-6 text-center"
        >
            <h2 className="text-4xl font-bold text-blue-500 mb-12">
                Professional Experience
            </h2>

            <div className="bg-black border border-gray-800 p-8 rounded-xl max-w-4xl mx-auto hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition">
                <h3 className="text-xl text-blue-400 font-semibold">
                    Junior Unity Developer — Abhiwan Technologies
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                    Developed cross-platform games for Android, iOS, and WebGL.
                    Implemented multiplayer systems using networking solutions,
                    integrated AR gameplay mechanics, optimized performance, and
                    collaborated with design and backend teams to deliver scalable
                    production-ready builds.
                </p>
            </div>
        </Motion.section>
    )
}