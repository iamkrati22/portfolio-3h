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
        "Comprehensive platform automating placement processes for 1000+ students with role-based access control.",
      tech: ["React", "Node.js", "MongoDB", "Material-UI"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      demo: "#",
      color: "from-blue-500 to-purple-500",
      metrics: ["20% ↑ Engagement", "75% ↓ Load Time", "1000+ Students"],
      features: ["Real-time Analytics", "Role-based Access", "Automated Workflows", "Data Visualization"],
    },
    {
      title: "VM Management System",
      description:
        "Web-based GUI replacing manual CLI setups with calendar-based reservations and resource optimization.",
      tech: ["React", "Express.js", "PostgreSQL", "Docker"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      demo: "#",
      color: "from-green-500 to-teal-500",
      metrics: ["87% ↓ Deploy Time", "30% ↑ Utilization", "12hrs ↓ Idle"],
      features: ["Calendar Integration", "Resource Optimization", "Automated Deployment", "Usage Analytics"],
    },
    {
      title: "Microservice Optimizer",
      description:
        "Enhanced Spring Boot microservice performance through automation and design pattern implementation.",
      tech: ["Spring Boot", "Kafka", "Golang", "SQL"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      demo: "#",
      color: "from-orange-500 to-red-500",
      metrics: ["40% ↑ Coverage", "15% ↓ CPU Usage", "30% ↓ Query Time"],
      features: ["Performance Monitoring", "Auto-scaling", "Health Checks", "Metrics Dashboard"],
    },
    {
      title: "UX Research Platform",
      description: "Comprehensive UX research tools with wireframing capabilities and user interview management.",
      tech: ["React", "TypeScript", "Figma API", "Node.js"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      demo: "#",
      color: "from-pink-500 to-purple-500",
      metrics: ["15% ↑ Satisfaction", "20+ Wireframes", "10+ Interviews"],
      features: ["Wireframe Tools", "User Testing", "Data Analytics", "Collaboration Hub"],
    },
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-slate-800/20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            Interactive Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">
            Explore my projects with interactive previews and detailed insights
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
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
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
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
                    <div className="flex gap-3 sm:gap-4">
                      <motion.a
                        href={project.demo}
                        className="p-3 sm:p-4 bg-purple-500 rounded-xl text-white hover:bg-purple-600 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play size={20} className="sm:w-6 sm:h-6" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        className="p-3 sm:p-4 bg-slate-700 rounded-xl text-white hover:bg-slate-600 transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} className="sm:w-6 sm:h-6" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="p-3 sm:p-4 bg-green-500 rounded-xl text-white hover:bg-green-600 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} className="sm:w-6 sm:h-6" />
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Quick Actions */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
                    <motion.button
                      className="p-1.5 sm:p-2 bg-black/80 backdrop-blur-sm rounded-lg text-white hover:bg-black/60 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={14} className="sm:w-4 sm:h-4" />
                    </motion.button>
                    <motion.button
                      className="p-1.5 sm:p-2 bg-black/80 backdrop-blur-sm rounded-lg text-white hover:bg-black/60 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code size={14} className="sm:w-4 sm:h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors break-words">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Interactive Metrics */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metric}
                        className="text-center p-1.5 sm:p-2 bg-purple-500/10 rounded-lg border border-purple-500/20"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-purple-300 text-xs font-medium break-words">{metric}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features List */}
                  <motion.div
                    className="mb-3 sm:mb-4 overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: hoveredProject === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-1 sm:space-y-2 pt-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-white">Key Features:</h4>
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                          <span className="break-words">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Tech Stack with Interactive Pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs sm:text-sm cursor-pointer"
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
                className={`absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Play size={20} className="sm:w-6 sm:h-6" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Interactive Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { label: "Projects", value: "15+", icon: "🚀" },
            { label: "Technologies", value: "25+", icon: "⚡" },
            { label: "Users", value: "1000+", icon: "👥" },
            { label: "Performance", value: "40%", icon: "📈" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 sm:p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl sm:text-4xl mb-1 sm:mb-2">{stat.icon}</div>
              <div className="text-xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm break-words">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
