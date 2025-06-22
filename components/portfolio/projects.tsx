"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Play, Code, Eye, Terminal, Zap, Users, TrendingUp, ArrowRight, FolderOpen, ChevronLeft, ChevronRight } from "lucide-react"

export default function PortfolioProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("all")
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Training & Placement Portal",
      shortTitle: "Placement Portal",
      description:
        "Comprehensive platform automating placement processes for 1000+ students with role-based access control and real-time analytics.",
      longDescription: "A full-stack web application that revolutionized the placement process at universities. Features include automated workflow management, real-time analytics dashboard, role-based access control, and comprehensive reporting system.",
      tech: ["React", "Node.js", "MongoDB", "Material-UI", "Express", "JWT"],
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/iamkrati22",
      live: "https://github.com/iamkrati22",
      demo: "https://github.com/iamkrati22",
      category: "web",
      color: "from-blue-500 via-purple-500 to-indigo-600",
      accent: "blue",
      metrics: [
        { label: "User Engagement", value: "20% ↑", icon: TrendingUp },
        { label: "Load Time", value: "75% ↓", icon: Zap },
        { label: "Active Users", value: "1000+", icon: Users }
      ],
      features: ["Real-time Analytics", "Role-based Access", "Automated Workflows", "Data Visualization", "Email Notifications", "Report Generation"],
      challenges: ["Scalability for 1000+ users", "Real-time data synchronization", "Complex role management"],
      solutions: ["Implemented Redis caching", "WebSocket for real-time updates", "RBAC with JWT tokens"]
    },
    {
      id: 2,
      title: "VM Management System",
      shortTitle: "VM Manager",
      description:
        "Web-based GUI replacing manual CLI setups with calendar-based reservations and intelligent resource optimization.",
      longDescription: "An enterprise-grade virtual machine management system that transformed infrastructure deployment from manual CLI operations to a streamlined web interface with calendar-based reservations.",
      tech: ["React", "Express.js", "PostgreSQL", "Docker", "Redis", "WebSocket"],
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/iamkrati22",
      live: "https://github.com/iamkrati22",
      demo: "https://github.com/iamkrati22",
      category: "devops",
      color: "from-green-500 via-emerald-500 to-teal-600",
      accent: "green",
      metrics: [
        { label: "Deploy Time", value: "87% ↓", icon: Zap },
        { label: "Utilization", value: "30% ↑", icon: TrendingUp },
        { label: "Idle Time", value: "12hrs ↓", icon: Users }
      ],
      features: ["Calendar Integration", "Resource Optimization", "Automated Deployment", "Usage Analytics", "Cost Tracking", "Backup Management"],
      challenges: ["Complex VM orchestration", "Resource conflict resolution", "Real-time monitoring"],
      solutions: ["Custom scheduling algorithm", "Conflict detection system", "WebSocket-based monitoring"]
    },
    {
      id: 3,
      title: "Microservice Optimizer",
      shortTitle: "Micro Optimizer",
      description:
        "Enhanced Spring Boot microservice performance through automation, design patterns, and intelligent monitoring.",
      longDescription: "A comprehensive microservice optimization platform that improved system performance through intelligent monitoring, automated scaling, and performance pattern implementation.",
      tech: ["Spring Boot", "Kafka", "Golang", "SQL", "Docker", "Kubernetes"],
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/iamkrati22",
      live: "https://github.com/iamkrati22",
      demo: "https://github.com/iamkrati22",
      category: "backend",
      color: "from-orange-500 via-red-500 to-pink-600",
      accent: "orange",
      metrics: [
        { label: "Code Coverage", value: "40% ↑", icon: TrendingUp },
        { label: "CPU Usage", value: "15% ↓", icon: Zap },
        { label: "Query Time", value: "30% ↓", icon: Zap }
      ],
      features: ["Performance Monitoring", "Auto-scaling", "Health Checks", "Metrics Dashboard", "Alert System", "Load Balancing"],
      challenges: ["Distributed system monitoring", "Performance bottleneck detection", "Auto-scaling logic"],
      solutions: ["Custom metrics collection", "ML-based anomaly detection", "Intelligent scaling algorithms"]
    },
    {
      id: 4,
      title: "UX Research Platform",
      shortTitle: "UX Platform",
      description:
        "Comprehensive UX research tools with wireframing capabilities, user interview management, and data-driven insights.",
      longDescription: "A complete UX research platform that streamlines the entire research process from wireframing to user testing, providing data-driven insights for product development.",
      tech: ["React", "TypeScript", "Figma API", "Node.js", "PostgreSQL", "Chart.js"],
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/iamkrati22",
      live: "https://github.com/iamkrati22",
      demo: "https://github.com/iamkrati22",
      category: "design",
      color: "from-pink-500 via-purple-500 to-violet-600",
      accent: "pink",
      metrics: [
        { label: "User Satisfaction", value: "15% ↑", icon: TrendingUp },
        { label: "Wireframes", value: "20+", icon: Users },
        { label: "Interviews", value: "10+", icon: Users }
      ],
      features: ["Wireframe Tools", "User Testing", "Data Analytics", "Collaboration Hub", "Prototype Builder", "Insight Dashboard"],
      challenges: ["Complex user flow mapping", "Real-time collaboration", "Data visualization"],
      solutions: ["Interactive flow builder", "WebSocket collaboration", "Custom chart components"]
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", icon: FolderOpen },
    { id: "web", label: "Web Apps", icon: Code },
    { id: "devops", label: "DevOps", icon: Terminal },
    { id: "backend", label: "Backend", icon: Zap },
    { id: "design", label: "UX/Design", icon: Eye },
  ]

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  const goToProject = (index: number) => {
    setCurrentProjectIndex(index)
  }

  // Reset carousel index when filter changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setCurrentProjectIndex(0)
  }

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-800/30 via-purple-900/20 to-slate-800/30 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <span className="text-green-400 text-xs sm:text-sm font-mono">Featured Projects</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 font-mono">
            <span className="text-green-400">$</span> ls projects/
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-300 font-mono max-w-4xl mx-auto leading-relaxed px-4">
            Exploring innovative solutions through code, design, and engineering
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleTabChange(category.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 font-mono text-xs sm:text-sm ${
                activeTab === category.id
                  ? "bg-green-500/20 border-green-500/50 text-green-400"
                  : "bg-slate-800/50 border-slate-600/50 text-slate-300 hover:border-green-500/30 hover:text-green-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Cards - Carousel on mobile, Grid on desktop */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-green-500/20 p-4 sm:p-6 lg:p-8 xl:p-10 font-mono overflow-hidden shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-xs sm:text-sm ml-2 sm:ml-3 font-medium">projects.json</span>
            </div>

            {/* JSON Structure */}
            <div className="space-y-6 sm:space-y-8">
              <div className="text-green-400 text-base sm:text-lg mb-4 sm:mb-6">
                {"{"}
                <br />
                <span className="ml-4 sm:ml-6">"featured_projects": [</span>
              </div>

              <div className="relative">
                {/* Mobile Carousel */}
                <div className="block lg:hidden">
                  <div className="relative overflow-hidden rounded-xl">
                    <motion.div
                      key={`${activeTab}-${currentProjectIndex}`}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="w-full"
                    >
                      <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-4 sm:p-6 rounded-xl border border-slate-600/50 hover:border-green-500/40 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/10 min-h-[450px] sm:min-h-[500px] flex flex-col">
                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors font-mono break-words">
                              {filteredProjects[currentProjectIndex].title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 flex-wrap">
                              <span className="px-2 py-1 bg-slate-700/50 rounded text-xs font-mono">
                                {filteredProjects[currentProjectIndex].category.toUpperCase()}
                              </span>
                              <span className="text-green-400">•</span>
                              <span className="font-mono truncate">{filteredProjects[currentProjectIndex].shortTitle}</span>
                            </div>
                          </div>
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${filteredProjects[currentProjectIndex].color} flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg flex-shrink-0 ml-2`}>
                            {filteredProjects[currentProjectIndex].id}
                          </div>
                        </div>

                        {/* Project Description */}
                        <div className="mb-4 sm:mb-6 flex-1">
                          <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed font-mono">
                            {selectedProject === filteredProjects[currentProjectIndex].id ? filteredProjects[currentProjectIndex].longDescription : filteredProjects[currentProjectIndex].description}
                          </p>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                          {filteredProjects[currentProjectIndex].metrics.map((metric, metricIndex) => (
                            <motion.div
                              key={metric.label}
                              className="text-center p-2 sm:p-3 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-green-500/30 transition-all duration-300"
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mx-auto mb-1" />
                              <div className="text-green-400 text-xs sm:text-sm font-bold font-mono">{metric.value}</div>
                              <div className="text-slate-400 text-xs font-mono leading-tight">{metric.label}</div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-4 sm:mb-6">
                          <h4 className="text-white text-xs sm:text-sm font-semibold mb-2 sm:mb-3 font-mono">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {filteredProjects[currentProjectIndex].tech.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className="px-2 sm:px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-mono border border-slate-600/30 hover:border-green-500/50 hover:text-green-400 transition-all duration-300 cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-4 border-t border-slate-600/50 mt-auto">
                          <motion.a
                            href={filteredProjects[currentProjectIndex].github}
                            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 hover:text-white transition-all duration-300 text-xs sm:text-sm font-mono flex-1 sm:flex-none"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                            Code
                          </motion.a>
                          <motion.a
                            href={filteredProjects[currentProjectIndex].live}
                            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300 text-xs sm:text-sm font-mono border border-green-500/30 flex-1 sm:flex-none"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                            Live
                          </motion.a>
                          <motion.a
                            href={filteredProjects[currentProjectIndex].demo}
                            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300 text-xs sm:text-sm font-mono border border-blue-500/30 flex-1 sm:flex-none"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                            Demo
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <motion.button
                        onClick={prevProject}
                        className="p-2 bg-slate-800/50 border border-slate-600/50 rounded-full text-slate-400 hover:text-green-400 hover:border-green-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>

                      {/* Dots Indicator */}
                      <div className="flex gap-2">
                        {filteredProjects.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToProject(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentProjectIndex
                                ? "bg-green-400 w-6"
                                : "bg-slate-600 hover:bg-slate-500"
                            }`}
                          />
                        ))}
                      </div>

                      <motion.button
                        onClick={nextProject}
                        className="p-2 bg-slate-800/50 border border-slate-600/50 rounded-full text-slate-400 hover:text-green-400 hover:border-green-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="group"
                      onMouseEnter={() => setSelectedProject(project.id)}
                      onMouseLeave={() => setSelectedProject(null)}
                    >
                      <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 lg:p-8 rounded-xl border border-slate-600/50 hover:border-green-500/40 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/10 min-h-[500px] flex flex-col">
                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors font-mono break-words">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-slate-400 flex-wrap">
                              <span className="px-2 py-1 bg-slate-700/50 rounded text-xs font-mono">
                                {project.category.toUpperCase()}
                              </span>
                              <span className="text-green-400">•</span>
                              <span className="font-mono truncate">{project.shortTitle}</span>
                            </div>
                          </div>
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0 ml-2`}>
                            {project.id}
                          </div>
                        </div>

                        {/* Project Description */}
                        <div className="mb-6 flex-1">
                          <p className="text-slate-300 text-sm lg:text-base leading-relaxed font-mono">
                            {selectedProject === project.id ? project.longDescription : project.description}
                          </p>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {project.metrics.map((metric, metricIndex) => (
                            <motion.div
                              key={metric.label}
                              className="text-center p-3 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-green-500/30 transition-all duration-300"
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <metric.icon className="w-5 h-5 text-green-400 mx-auto mb-1" />
                              <div className="text-green-400 text-sm font-bold font-mono">{metric.value}</div>
                              <div className="text-slate-400 text-xs font-mono">{metric.label}</div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-6">
                          <h4 className="text-white text-sm font-semibold mb-3 font-mono">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-mono border border-slate-600/30 hover:border-green-500/50 hover:text-green-400 transition-all duration-300 cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-4 border-t border-slate-600/50 mt-auto">
                          <motion.a
                            href={project.github}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 hover:text-white transition-all duration-300 text-sm font-mono"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </motion.a>
                          <motion.a
                            href={project.live}
                            className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300 text-sm font-mono border border-green-500/30"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live
                          </motion.a>
                          <motion.a
                            href={project.demo}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300 text-sm font-mono border border-blue-500/30"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Play className="w-4 h-4" />
                            Demo
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* JSON Closing */}
              <div className="text-green-400 text-base sm:text-lg">
                <span className="ml-4 sm:ml-6">]</span>
                <br />
                {"}"}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {[
            { label: "Projects Built", value: "15+", icon: FolderOpen, color: "text-blue-400" },
            { label: "Technologies", value: "25+", icon: Zap, color: "text-green-400" },
            { label: "Users Impacted", value: "1000+", icon: Users, color: "text-purple-400" },
            { label: "Performance Gain", value: "40%", icon: TrendingUp, color: "text-orange-400" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 sm:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 ${stat.color}`} />
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1 font-mono">{stat.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.a
            href="https://github.com/iamkrati22"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-green-500/10 border border-green-500/30 rounded-full hover:bg-green-500/20 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-green-400 text-sm sm:text-lg font-mono">View All Projects</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}