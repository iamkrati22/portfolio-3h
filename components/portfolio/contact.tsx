"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send } from "lucide-react"

export default function PortfolioContact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      key: "email",
      value: "iamkrati22@gmail.com",
      href: "mailto:iamkrati22@gmail.com",
    },
    {
      key: "phone",
      value: "+91 70074 40611",
      href: "tel:+917007440611",
    },
    {
      key: "location",
      value: "Bengaluru, India",
      href: "#",
    },
    {
      key: "github",
      value: "github.com/kratijain",
      href: "#",
    },
    {
      key: "linkedin",
      value: "linkedin.com/in/kratijain",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">$</span> ./contact.sh
          </h2>
          <p className="text-xl text-slate-300 font-mono">Let's connect and build something amazing</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Terminal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-xl border border-green-500/30 p-8 font-mono"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-sm ml-2">contact.sh</span>
              </div>

              <div className="space-y-4">
                <div className="text-green-400 text-lg mb-4">#!/bin/bash</div>
                <div className="text-slate-400"># Contact Information</div>

                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <div className="text-white">
                      <span className="text-blue-400">{item.key}</span>=
                      <span className="text-yellow-400">
                        "
                        <a href={item.href} className="hover:text-green-400 transition-colors cursor-pointer">
                          {item.value}
                        </a>
                        "
                      </span>
                    </div>
                  </motion.div>
                ))}

                <div className="mt-6 pt-4 border-t border-slate-700/50">
                  <div className="text-slate-400"># Status</div>
                  <div className="text-white">
                    <span className="text-blue-400">status</span>=
                    <span className="text-green-400">"Available for opportunities"</span>
                  </div>
                  <div className="text-white">
                    <span className="text-blue-400">response_time</span>=
                    <span className="text-green-400">"Within 24 hours"</span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-green-400">echo "Let's build something amazing together!"</div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-xl border border-green-500/30 p-8 font-mono"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-sm ml-2">send-message.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-green-400 text-lg mb-4">#!/bin/bash</div>
                <div className="text-slate-400"># Send Message Script</div>

                <div>
                  <div className="text-white mb-2">
                    <span className="text-blue-400">read</span> -p{" "}
                    <span className="text-yellow-400">"Enter your name: "</span> name
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-green-400 placeholder-slate-500 focus:border-green-500/50 focus:outline-none transition-colors font-mono"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <div className="text-white mb-2">
                    <span className="text-blue-400">read</span> -p{" "}
                    <span className="text-yellow-400">"Enter your email: "</span> email
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-green-400 placeholder-slate-500 focus:border-green-500/50 focus:outline-none transition-colors font-mono"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <div className="text-white mb-2">
                    <span className="text-blue-400">read</span> -p{" "}
                    <span className="text-yellow-400">"Enter your message: "</span> message
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-green-400 placeholder-slate-500 focus:border-green-500/50 focus:outline-none transition-colors resize-none font-mono"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="text-slate-400"># Execute send message</div>
                <motion.button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-mono font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  ./send-message.sh
                </motion.button>

                <div className="text-green-400 text-sm">
                  echo "Message sent successfully! Response within 24 hours."
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
