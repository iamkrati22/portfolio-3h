"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Training & Placement Portal",
      description:
        "A comprehensive platform automating placement processes for 1000+ students with role-based access control.",
      tech: ["React", "Node.js", "MongoDB", "Material-UI"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "VM Management System",
      description:
        "Web-based GUI replacing manual CLI setups, featuring calendar-based reservations and resource optimization.",
      tech: ["React", "Express.js", "PostgreSQL", "Docker"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Microservice Optimizer",
      description:
        "Enhanced Spring Boot microservice performance through automation and design pattern implementation.",
      tech: ["Spring Boot", "Kafka", "Golang", "SQL"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "UX Research Platform",
      description: "Comprehensive UX research tools with wireframing capabilities and user interview management.",
      tech: ["React", "TypeScript", "Figma API", "Node.js"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      color: "from-pink-500 to-purple-500",
    },
  ]

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Some things I've built recently</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a
                      href={project.github}
                      className="p-2 bg-slate-900/80 rounded-lg text-white hover:bg-slate-800 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github size={16} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="p-2 bg-slate-900/80 rounded-lg text-white hover:bg-slate-800 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
