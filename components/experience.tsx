"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Software Developer Engineer",
      company: "Cisco Systems",
      location: "Bengaluru, IN",
      period: "08/2024 - Present",
      type: "Full-time",
      achievements: [
        "Revamped Spring Boot microservice health, boosting automation code coverage by 40%",
        "Optimized Kafka topic and consumer classification in Golang, reducing CPU usage by 15%",
        "Refined SQL queries to reduce database retrieval time by 30%",
      ],
    },
    {
      title: "Software Developer Engineer Intern",
      company: "Cisco Systems",
      location: "Bengaluru, IN",
      period: "01/2024 - 06/2024",
      type: "Internship",
      achievements: [
        "Replaced manual CLI setups with web-based GUI, cutting deployment time from 2 hours to 15 mins",
        "Implemented calendar-based reservation system, increasing resource utilization by 30%",
        "Improved VM allocation efficiency, decreasing idle resource time by 12 hours per week",
      ],
    },
    {
      title: "UX Design Intern",
      company: "Korn Ferry",
      location: "Remote",
      period: "06/2023 - 08/2023",
      type: "Internship",
      achievements: [
        "Created 20+ wireframes and prototypes, accelerating development processes",
        "Boosted user satisfaction by 15% through comprehensive UX initiatives",
        "Conducted 10+ UX interviews, yielding insights that improved usability",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Experience</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Building impactful solutions across different domains
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-emerald-400 to-purple-400"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full"></div>

              <div className="ml-16 bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-xl text-emerald-400 font-semibold">{exp.company}</p>
                  </div>

                  <div className="flex flex-col md:items-end mt-4 md:mt-0 space-y-2">
                    <div className="flex items-center text-slate-300">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-slate-300">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">{exp.type}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + achIndex * 0.1, duration: 0.5 }}
                      className="flex items-start text-slate-300"
                    >
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
