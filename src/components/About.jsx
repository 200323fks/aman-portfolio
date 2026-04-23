import { motion as Motion } from "framer-motion"

export default function About() {
    return (
        <Motion.section
            id="about"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-24 bg-gray-950 text-white px-6 text-center"
        >
            <h2 className="text-4xl font-bold text-blue-500 mb-8">
                About Me
            </h2>

            <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Results-driven Junior Unity Developer with hands-on experience
                building cross-platform games using Unity and C#. Specialized in
                multiplayer systems, AR gameplay features, UI integration, and
                performance optimization. Passionate about creating scalable,
                immersive, and production-ready game experiences.
            </p>
        </Motion.section>
    )
}