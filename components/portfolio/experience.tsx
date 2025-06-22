"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase } from "lucide-react"

export default function PortfolioExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Software Developer Engineer",
      company: "Cisco Systems",
      location: "Bengaluru, IN",
      period: "Aug 2024 - Present",
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
      period: "Jan 2024 - Jun 2024",
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
      period: "Jun 2023 - Aug 2023",
      type: "Internship",
      achievements: [
        "Created 20+ wireframes and prototypes, accelerating development processes",
        "Boosted user satisfaction by 15% through comprehensive UX initiatives",
        "Conducted 10+ UX interviews, yielding insights that improved usability",
      ],
    },
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-slate-900/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <span className="text-green-400 text-xs sm:text-sm font-mono">Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">$</span> cat experience.json
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-mono">
            Professional journey and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/80 backdrop-blur-sm rounded-xl border border-green-500/30 p-4 sm:p-6 lg:p-8 font-mono overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-xs sm:text-sm ml-2">experience.json</span>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-green-400 text-base sm:text-lg mb-4">
                {"{"}
                <br />
                <span className="ml-4">"professional_experience": [</span>
              </div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="ml-4 sm:ml-8 relative"
                >
                  <div className="bg-slate-800/50 p-4 sm:p-6 rounded-lg border border-slate-700/50 hover:border-green-500/30 transition-all duration-300">
                    <div className="text-white mb-4">
                      <div className="text-green-400 text-base sm:text-lg">{"{"}</div>
                      <div className="ml-2 sm:ml-4 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                        <div className="break-words">
                          <span className="text-blue-400">"position"</span>:{" "}
                          <span className="text-yellow-400">"{exp.title}"</span>,
                        </div>
                        <div className="break-words">
                          <span className="text-blue-400">"company"</span>:{" "}
                          <span className="text-yellow-400">"{exp.company}"</span>,
                        </div>
                        <div className="break-words">
                          <span className="text-blue-400">"location"</span>:{" "}
                          <span className="text-yellow-400">"{exp.location}"</span>,
                        </div>
                        <div className="break-words">
                          <span className="text-blue-400">"period"</span>:{" "}
                          <span className="text-yellow-400">"{exp.period}"</span>,
                        </div>
                        <div className="break-words">
                          <span className="text-blue-400">"type"</span>:{" "}
                          <span className="text-yellow-400">"{exp.type}"</span>,
                        </div>
                        <div>
                          <span className="text-blue-400">"achievements"</span>: [
                          <div className="ml-2 sm:ml-4 space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="text-yellow-400 break-words text-xs sm:text-sm">
                                "{achievement}"{achIndex < exp.achievements.length - 1 ? "," : ""}
                              </div>
                            ))}
                          </div>
                          ]
                        </div>
                      </div>
                      <div className="text-green-400 text-base sm:text-lg">
                        {"}"}
                        {index < experiences.length - 1 ? "," : ""}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="text-green-400 text-base sm:text-lg">
                <span className="ml-4">]</span>
                <br />
                {"}"}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
