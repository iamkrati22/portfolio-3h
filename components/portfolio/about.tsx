"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { User } from "lucide-react"

export default function PortfolioAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    "Google WE Scholar 2021 (Top 200/27,643)",
    "Ericsson Empowering Girl Scholarship",
    "Runner-up JUET Builds Hackathon 2022",
    "40% boost in automation coverage",
    "30% reduction in query execution time",
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <span className="text-green-400 text-xs sm:text-sm font-mono">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">$</span> cat about.md
          </h2>
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
              <span className="text-green-400 text-xs sm:text-sm ml-2">about.md</span>
            </div>

            <div className="space-y-4 sm:space-y-6 text-white text-sm sm:text-base">
              <div>
                <h3 className="text-green-400 text-lg sm:text-xl mb-2 sm:mb-3"># About Me</h3>
                <p className="text-slate-300 leading-relaxed">
                  Software Engineer passionate about building scalable solutions. Currently at Cisco Systems, focusing
                  on microservice optimization and system performance improvements.
                </p>
              </div>

              <div>
                <h3 className="text-green-400 text-lg sm:text-xl mb-2 sm:mb-3"># Education</h3>
                <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg border border-slate-700/50">
                  <div className="text-white text-sm sm:text-base">B.Tech Computer Science Engineering</div>
                  <div className="text-slate-400 text-xs sm:text-sm break-words">
                    Jaypee University of Engineering & Technology (2020-2024)
                  </div>
                  <div className="text-green-400 text-sm sm:text-base">GPA: 8.0/10</div>
                </div>
              </div>

              <div>
                <h3 className="text-green-400 text-lg sm:text-xl mb-2 sm:mb-3"># Key Achievements</h3>
                <div className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3 text-slate-300 text-sm sm:text-base"
                    >
                      <span className="text-green-400 mt-1 flex-shrink-0">•</span>
                      <span className="break-words">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
