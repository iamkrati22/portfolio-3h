"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "Go"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Web Development",
      skills: ["React.js", "Node.js", "Express.js", "Flask", "Spring Boot", "HTML/CSS"],
      color: "from-emerald-400 to-green-400",
    },
    {
      title: "Databases & Testing",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Cypress", "Selenium"],
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Grafana", "Ansible"],
      color: "from-orange-400 to-red-400",
    },
  ]

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.5,
                    }}
                    className="flex items-center space-x-3 group"
                  >
                    <motion.div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-slate-300 group-hover:text-white transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
