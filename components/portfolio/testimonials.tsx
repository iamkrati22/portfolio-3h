"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Linkedin, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function PortfolioTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Mohammad Shavez Alam",
      role: "Founder & CEO",
      company: "High On Diet LLP | Ascend Digital Solutions",
      content:
        "I have had the pleasure of working closely with Krati on multiple projects at Ascend Digital Solutions, and her contributions have consistently exceeded expectations. As a highly skilled software developer, Krati has demonstrated not only her deep expertise in coding but also a remarkable ability to deliver outstanding results, even under tight deadlines. Her technical proficiency, combined with her strong problem-solving skills, makes her an invaluable asset to any team.",
      avatar: "MS",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Senior Engineering Manager",
      company: "Cisco Systems",
      content:
        "Krati consistently delivers high-quality code and has significantly improved our microservice performance. Her attention to detail and problem-solving skills are exceptional.",
      avatar: "SC",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Tech Lead",
      company: "Previous Team",
      content:
        "Working with Krati was a pleasure. She brought fresh perspectives to our DevOps processes and helped reduce deployment times dramatically.",
      avatar: "RK",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-800/30 via-purple-900/20 to-slate-800/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <span className="text-green-400 text-xs sm:text-sm font-mono">Wall of Love</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 font-mono">
            <span className="text-green-400">$</span> cat testimonials.json
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-300 font-mono max-w-3xl mx-auto leading-relaxed px-4">
            What colleagues and clients say about working together
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-green-500/20 p-4 sm:p-6 lg:p-8 xl:p-10 font-mono overflow-hidden shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-xs sm:text-sm ml-2 sm:ml-3 font-medium">testimonials.json</span>
            </div>

            {/* JSON Structure */}
            <div className="space-y-6 sm:space-y-8">
              <div className="text-green-400 text-base sm:text-lg mb-4 sm:mb-6">
                {"{"}
                <br />
                <span className="ml-4 sm:ml-6">"wall_of_love": [</span>
              </div>

              {/* Testimonials Cards - Carousel on mobile, Grid on desktop */}
              <div className="relative">
                {/* Mobile Carousel */}
                <div className="block lg:hidden">
                  <div className="relative overflow-hidden rounded-xl">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="w-full"
                    >
                      <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-4 sm:p-6 rounded-xl border border-slate-600/50 hover:border-green-500/40 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/10 min-h-[350px] sm:min-h-[400px] flex flex-col">
                        {/* Quote Icon */}
                        <div className="flex justify-between items-start mb-3 sm:mb-4">
                          <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-green-400/60" />
                          <div className="flex gap-1">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="mb-4 sm:mb-6 flex-1">
                          <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed font-mono">
                            "{testimonials[currentIndex].content}"
                          </p>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-600/50 mt-auto">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm shadow-lg flex-shrink-0">
                            {testimonials[currentIndex].avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-semibold text-xs sm:text-sm font-mono truncate">
                              {testimonials[currentIndex].name}
                            </h4>
                            <p className="text-green-400 text-xs font-mono truncate">
                              {testimonials[currentIndex].role}
                            </p>
                            <p className="text-slate-400 text-xs font-mono truncate">
                              {testimonials[currentIndex].company}
                            </p>
                          </div>
                          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer flex-shrink-0" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <motion.button
                        onClick={prevTestimonial}
                        className="p-2 bg-slate-800/50 border border-slate-600/50 rounded-full text-slate-400 hover:text-green-400 hover:border-green-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>

                      {/* Dots Indicator */}
                      <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentIndex
                                ? "bg-green-400 w-6"
                                : "bg-slate-600 hover:bg-slate-500"
                            }`}
                          />
                        ))}
                      </div>

                      <motion.button
                        onClick={nextTestimonial}
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
                <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 lg:p-8 rounded-xl border border-slate-600/50 hover:border-green-500/40 transition-all duration-300 h-full backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/10 min-h-[400px] flex flex-col">
                        {/* Quote Icon */}
                        <div className="flex justify-between items-start mb-4">
                          <Quote className="w-6 h-6 text-green-400/60" />
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="mb-6 flex-1">
                          <p className="text-slate-300 text-sm lg:text-base leading-relaxed font-mono">
                            "{testimonial.content}"
                          </p>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-4 pt-4 border-t border-slate-600/50 mt-auto">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg flex-shrink-0">
                            {testimonial.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-semibold text-sm font-mono truncate">
                              {testimonial.name}
                            </h4>
                            <p className="text-green-400 text-xs font-mono truncate">
                              {testimonial.role}
                            </p>
                            <p className="text-slate-400 text-xs font-mono truncate">
                              {testimonial.company}
                            </p>
                          </div>
                          <Linkedin className="w-5 h-5 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer flex-shrink-0" />
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

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-8 sm:mt-12"
          >
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.hash = '#contact';
                }
              }}
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-green-500/10 border border-green-500/30 rounded-full hover:bg-green-500/20 transition-all duration-300 cursor-pointer group"
            >
              <span className="text-green-400 text-xs sm:text-sm font-mono">Want to join the wall?</span>
              <span className="text-green-400 text-xs sm:text-sm font-mono group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
