"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-slate-800/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">What I Do Best</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Turning complex problems into elegant solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Backend Engineering",
              description: "Building robust APIs and microservices with Python, Node.js, and Spring Boot",
              icon: "🚀",
            },
            {
              title: "Frontend Development",
              description: "Creating responsive web applications with React, TypeScript, and modern frameworks",
              icon: "💻",
            },
            {
              title: "Cloud & DevOps",
              description: "Deploying scalable infrastructure with AWS, Docker, and Kubernetes",
              icon: "☁️",
            },
            {
              title: "Database Design",
              description: "Optimizing data storage with MongoDB, PostgreSQL, and Redis",
              icon: "🗄️",
            },
            {
              title: "System Optimization",
              description: "Improving performance, reducing costs, and enhancing user experience",
              icon: "⚡",
            },
            {
              title: "UX Research",
              description: "Conducting user interviews and creating wireframes for better products",
              icon: "🎨",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
