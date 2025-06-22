"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function PortfolioContact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
    try {
      emailjs.init(publicKey)
      console.log("EmailJS initialized successfully")
    } catch (error) {
      console.error("EmailJS initialization error:", error)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")
    setStatusMessage("")

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_6ot04al"
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_r6h5zue"


    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Krati Jain",
          reply_to: formData.email,
        }
      )

      if (result.status === 200) {
        setSubmitStatus("success")
        setStatusMessage("Message sent successfully! I'll get back to you within 24 hours.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
      setStatusMessage("Failed to send message. Please try again or contact me directly.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Reset status when user starts typing again
    if (submitStatus !== "idle") {
      setSubmitStatus("idle")
      setStatusMessage("")
    }
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
      value: "github.com/iamkrati22",
      href: "https://github.com/iamkrati22",
    },
    {
      key: "linkedin",
      value: "linkedin.com/in/iamkrati22",
      href: "https://www.linkedin.com/in/iamkrati22/",
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">$</span> ./contact.sh
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-mono">
            Let's connect and build something amazing
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info Terminal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-xl border border-green-500/30 p-4 sm:p-6 lg:p-8 font-mono overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-xs sm:text-sm ml-2">contact.sh</span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="text-green-400 text-base sm:text-lg mb-3 sm:mb-4">#!/bin/bash</div>
                <div className="text-slate-400 text-sm sm:text-base"># Contact Information</div>

                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <div className="text-white text-sm sm:text-base break-all">
                      <span className="text-blue-400">{item.key}</span>=
                      <span className="text-yellow-400">
                        "
                        <a href={item.href} className="hover:text-green-400 transition-colors cursor-pointer break-all">
                          {item.value}
                        </a>
                        "
                      </span>
                    </div>
                  </motion.div>
                ))}

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-700/50">
                  <div className="text-slate-400 text-sm sm:text-base"># Status</div>
                  <div className="text-white text-sm sm:text-base break-words">
                    <span className="text-blue-400">status</span>=
                    <span className="text-green-400">"Available for opportunities"</span>
                  </div>
                  <div className="text-white text-sm sm:text-base break-words">
                    <span className="text-blue-400">response_time</span>=
                    <span className="text-green-400">"Within 24 hours"</span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <div className="text-green-400 text-sm sm:text-base break-words">
                    echo "Let's build something amazing together!"
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-xl border border-green-500/30 p-4 sm:p-6 lg:p-8 font-mono overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-xs sm:text-sm ml-2">send-message.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="text-green-400 text-base sm:text-lg mb-3 sm:mb-4">#!/bin/bash</div>
                <div className="text-slate-400 text-sm sm:text-base"># Send Message Script</div>

                <div>
                  <div className="text-white mb-2 text-sm sm:text-base break-words">
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
                    disabled={isLoading}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-green-400 placeholder-slate-500 focus:border-green-500/50 focus:outline-none transition-colors font-mono text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <div className="text-white mb-2 text-sm sm:text-base break-words">
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
                    disabled={isLoading}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-green-400 placeholder-slate-500 focus:border-green-500/50 focus:outline-none transition-colors font-mono text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <div className="text-white mb-2 text-sm sm:text-base break-words">
                    <span className="text-blue-400">read</span> -p{" "}
                    <span className="text-yellow-400">"Enter your message: "</span> message
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-green-400 placeholder-slate-500 focus:border-green-500/50 focus:outline-none transition-colors resize-none font-mono text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="text-slate-400 text-sm sm:text-base"># Execute send message</div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 disabled:cursor-not-allowed text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-mono font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base"
                  whileHover={!isLoading ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                >
                  {isLoading ? (
                    <Loader2 size={16} className="sm:w-5 sm:h-5 animate-spin" />
                  ) : (
                    <Send size={16} className="sm:w-5 sm:h-5" />
                  )}
                  {isLoading ? "Sending..." : "./send-message.sh"}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-xs sm:text-sm"
                  >
                    <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                    {statusMessage}
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-xs sm:text-sm"
                  >
                    <AlertCircle size={14} className="sm:w-4 sm:h-4" />
                    {statusMessage}
                  </motion.div>
                )}

                {submitStatus === "idle" && (
                  <div className="text-green-400 text-xs sm:text-sm break-words">
                    echo "Message sent successfully! Response within 24 hours."
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
