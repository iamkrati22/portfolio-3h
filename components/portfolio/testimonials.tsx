"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin } from "lucide-react"

export default function PortfolioTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Engineering Manager",
      company: "Cisco Systems",
      content:
        "Krati consistently delivers high-quality code and has significantly improved our microservice performance. Her attention to detail and problem-solving skills are exceptional.",
      avatar: "SC",
    },
    {
      name: "Rajesh Kumar",
      role: "Tech Lead",
      company: "Previous Team",
      content:
        "Working with Krati was a pleasure. She brought fresh perspectives to our DevOps processes and helped reduce deployment times dramatically.",
      avatar: "RK",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "Korn Ferry",
      content:
        "Krati's UX research skills and technical implementation made our project a huge success. She bridges the gap between design and development beautifully.",
      avatar: "ER",
    },
    {
      name: "Michael Thompson",
      role: "CTO",
      company: "Startup Client",
      content:
        "As a freelancer, Krati exceeded all expectations. Professional, timely, and delivered a scalable solution that transformed our business operations.",
      avatar: "MT",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-800/20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">$</span> cat testimonials.json
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-mono">What colleagues and clients say</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
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
              <span className="text-green-400 text-xs sm:text-sm ml-2">testimonials.json</span>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-green-400 text-base sm:text-lg mb-4">
                {"{"}
                <br />
                <span className="ml-4">"wall_of_love": [</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="ml-4 sm:ml-8"
                  >
                    <div className="bg-slate-800/50 p-4 sm:p-6 rounded-lg border border-slate-700/50 hover:border-green-500/30 transition-all duration-300">
                      <div className="text-green-400 text-sm sm:text-base mb-3">{"{"}</div>

                      <div className="ml-2 sm:ml-4 space-y-2 sm:space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                            {testimonial.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs sm:text-sm break-words">
                              <span className="text-blue-400">"author"</span>:{" "}
                              <span className="text-yellow-400">"{testimonial.name}"</span>,
                            </div>
                            <div className="text-xs sm:text-sm break-words">
                              <span className="text-blue-400">"role"</span>:{" "}
                              <span className="text-yellow-400">"{testimonial.role}"</span>,
                            </div>
                            <div className="text-xs sm:text-sm break-words">
                              <span className="text-blue-400">"company"</span>:{" "}
                              <span className="text-yellow-400">"{testimonial.company}"</span>,
                            </div>
                          </div>
                          <Linkedin size={16} className="text-blue-400 flex-shrink-0" />
                        </div>

                        <div className="text-xs sm:text-sm">
                          <span className="text-blue-400">"feedback"</span>:{" "}
                          <span className="text-yellow-400">"{testimonial.content}"</span>
                        </div>
                      </div>

                      <div className="text-green-400 text-sm sm:text-base mt-3">
                        {"}"}
                        {index < testimonials.length - 1 ? "," : ""}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

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
