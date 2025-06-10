"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: "40+", label: "Automation Coverage Boost", suffix: "%" },
    { number: "95+", label: "Client Satisfaction", suffix: "%" },
    { number: "2+", label: "Years of Experience", suffix: "" },
  ]

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Services */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Full-Stack Development</h3>
                  <p className="text-slate-400">End-to-end web applications</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">DevOps & Cloud</h3>
                  <p className="text-slate-400">Scalable infrastructure solutions</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-purple-500 rounded"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">System Optimization</h3>
                  <p className="text-slate-400">Performance & efficiency improvements</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">About me</h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              I started my software journey from curiosity. Through trial, I learned to love the process of creating
              from scratch. Since then, software development as it fulfills my love for learning and building things.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-400 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-slate-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Currently at Cisco Systems, I focus on optimizing microservices, reducing deployment times, and building
              scalable solutions that make a real impact.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
