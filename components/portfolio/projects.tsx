"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Play, Code, Eye } from "lucide-react"

export default function PortfolioProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Training & Placement Portal",
      description:
        "A comprehensive platform automating placement processes for 1000+ students with role-based access control and real-time analytics.",
      tech: ["React", "Node.js", "MongoDB", "Material-UI"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      demo: "#",
      color: "from-blue-500 to-purple-500",
      metrics: ["20% ↑ User Engagement", "75% ↓ Loading Time", "1000+ Students"],
      features: ["Real-time Analytics", "Role-based Access", "Automated Workflows", "Data Visualization"],
    },
    {
      title: "VM Management System",
      description:
        "Web-based GUI replacing manual CLI setups, featuring calendar-based reservations and intelligent resource optimization.",
      tech: ["React", "Express.js", "PostgreSQL", "Docker"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      demo: "#",
      color: "from-green-500 to-teal-500",
      metrics: ["87% ↓ Deployment Time", "30% ↑ Resource Utilization", "12hrs ↓ Idle Time"],
      features: ["Calendar Integration", "Resource Optimization", "Automated Deployment", "Usage Analytics"],
    },
    {
      title: "Microservice Optimizer",
      description:
        "Enhanced Spring Boot microservice performance through automation and design pattern implementation with real-time monitoring.",
      tech: ["Spring Boot", "Kafka", "Golang", "SQL"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      demo: "#",
      color: "from-orange-500 to-red-500",
      metrics: ["40% ↑ Code Coverage", "15% ↓ CPU Usage", "30% ↓ Query Time"],
      features: ["Performance Monitoring", "Auto-scaling", "Health Checks", "Metrics Dashboard"],
    },
    {
      title: "UX Research Platform",
      description:
        "Comprehensive UX research tools with wireframing capabilities, user interview management, and data-driven insights.",
      tech: ["React", "TypeScript", "Figma API", "Node.js"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      demo: "#",
      color: "from-pink-500 to-purple-500",
      metrics: ["15% ↑ User Satisfaction", "20+ Wireframes", "10+ Interviews"],
      features: ["Wireframe Tools", "User Testing", "Data Analytics", "Collaboration Hub"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-800/20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">Interactive Projects</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore my projects with interactive previews and detailed insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
                {/* Project Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Interactive Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.demo}
                        className="p-4 bg-purple-500 rounded-xl text-white hover:bg-purple-600 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play size={24} />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        className="p-4 bg-slate-700 rounded-xl text-white hover:bg-slate-600 transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={24} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="p-4 bg-green-500 rounded-xl text-white hover:bg-green-600 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={24} />
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.button
                      className="p-2 bg-black/80 backdrop-blur-sm rounded-lg text-white hover:bg-black/60 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={16} />
                    </motion.button>
                    <motion.button
                      className="p-2 bg-black/80 backdrop-blur-sm rounded-lg text-white hover:bg-black/60 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code size={16} />
                    </motion.button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                  {/* Interactive Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metric}
                        className="text-center p-2 bg-purple-500/10 rounded-lg border border-purple-500/20"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-purple-300 text-xs font-medium">{metric}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features List */}
                  <motion.div
                    className="mb-4 overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: hoveredProject === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-2 pt-2">
                      <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-2 text-slate-400 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Tech Stack with Interactive Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm cursor-pointer"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(168, 85, 247, 0.3)",
                          color: "white",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Action Button */}
              <motion.button
                className={`absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Play size={24} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Interactive Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: "Projects Completed", value: "15+", icon: "🚀" },
            { label: "Technologies Used", value: "25+", icon: "⚡" },
            { label: "Users Impacted", value: "1000+", icon: "👥" },
            { label: "Performance Boost", value: "40%", icon: "📈" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
