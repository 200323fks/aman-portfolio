import { motion as Motion } from "framer-motion"

export default function Education() {
    return (
        <Motion.section
            id="education"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-24 bg-black text-white px-6 text-center"
        >
            <h2 className="text-4xl font-bold text-blue-500 mb-12">
                Education
            </h2>

            <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-xl border border-gray-800 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition text-left">

                <h3 className="text-xl font-semibold text-blue-400">
                    Master of Computer Applications (MCA)
                </h3>

                <p className="text-gray-400 mt-2">
                    Focused on Software Development, Game Programming, Data Structures & OOP Concepts.
                </p>

                <p className="text-gray-500 mt-2 text-sm">
                    Graduation Year: 2025
                </p>
            </div>
        </Motion.section>
    )
}