"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code, Database, Cloud, Palette } from "lucide-react"

export default function PortfolioSkills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState(0)

  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "Go"],
    },
    {
      title: "Web Dev",
      icon: Palette,
      skills: ["React.js", "Node.js", "Express.js", "Flask", "Spring Boot", "HTML/CSS"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "DynamoDB"],
    },
    {
      title: "DevOps",
      icon: Cloud,
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Ansible"],
    },
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-slate-900/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">$</span> skills --list
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-mono">Technologies I work with</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-lg border transition-all duration-300 font-mono text-sm sm:text-base ${
                  activeCategory === index
                    ? "bg-green-500/20 border-green-500/50 text-green-400"
                    : "bg-slate-800/50 border-slate-700/50 text-slate-400 hover:border-slate-600 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon size={16} className="sm:w-5 sm:h-5" />
                <span className="hidden xs:inline sm:inline">{category.title}</span>
                <span className="xs:hidden sm:hidden">{category.title.slice(0, 4)}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-700/50"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-4 sm:mb-6 font-mono">
              {skillCategories[activeCategory].title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-slate-900/50 p-3 sm:p-4 rounded-lg border border-slate-700/30 hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full group-hover:animate-pulse flex-shrink-0"></div>
                    <span className="text-white font-mono group-hover:text-green-400 transition-colors text-sm sm:text-base break-words">
                      {skill}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
