import { motion as Motion } from "framer-motion"

export default function Contact() {
    return (
        <Motion.section
            id="contact"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-24 bg-gray-950 text-white px-6 text-center"
        >
            <h2 className="text-4xl font-bold text-blue-500 mb-12">
                Contact
            </h2>

            <div className="space-y-6 text-gray-400 text-lg max-w-xl mx-auto">

                <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <a
                        href="mailto:amansharma230702@gmail.com"
                        className="hover:text-blue-400 transition"
                    >
                        amansharma230702@gmail.com
                    </a>
                </div>

                <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <a
                        href="tel:+919084989714"
                        className="hover:text-blue-400 transition"
                    >
                        +91 90849 89714
                    </a>
                </div>

                <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p>Meerut, Uttar Pradesh, India</p>
                </div>

                <div className="pt-4 border-t border-gray-800 space-y-3">
                    <a
                        href="https://www.linkedin.com/in/aman-sharma-2b6725243/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:text-blue-300 transition"
                    >
                        🔗 LinkedIn Profile
                    </a>

                    <a
                        href="https://github.com/200323fks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:text-blue-300 transition"
                    >
                        💻 GitHub Profile
                    </a>
                </div>
            </div>
        </Motion.section>
    )
}