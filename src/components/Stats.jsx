import { motion as Motion } from "framer-motion"
import { useEffect, useState } from "react"

function Counter({ target }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const duration = 2000
        const increment = target / (duration / 16)

        const timer = setInterval(() => {
            start += increment
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)

        return () => clearInterval(timer)
    }, [target])

    return <span>{count}</span>
}

export default function Stats() {

    const stats = [
        { number: 4, suffix: "+", label: "Projects Completed" },
        { number: 10, suffix: "+", label: "Months Experience" },
        { number: 3, suffix: "+", label: "Multiplayer Systems Built" },
        { number: 5, suffix: "+", label: "Cross-Platform Deployments" }
    ]

    return (
        <section className="py-20 bg-gray-950 text-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

                {stats.map((item, i) => (
                    <Motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-black border border-gray-800 rounded-xl p-8 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition"
                    >
                        <h3 className="text-4xl font-bold text-blue-500 mb-2">
                            <Counter target={item.number} />
                            {item.suffix}
                        </h3>

                        <p className="text-gray-400 text-sm">
                            {item.label}
                        </p>
                    </Motion.div>
                ))}

            </div>
        </section>
    )
}