"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

export default function PortfolioHero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-mono border border-green-500/30">
                <span className="text-green-400">$</span> whoami
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-6 font-mono"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Krati Jain
              <br />
              <span className="text-green-400">Software Engineer</span>
            </motion.h1>

            <motion.div
              className="text-xl text-slate-300 mb-8 font-mono"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <div className="text-green-400 mb-2">// Currently at Cisco Systems</div>
                <div className="text-slate-300">Building scalable solutions & optimizing systems</div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button
                className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-mono font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                ./connect <ArrowRight size={20} />
              </motion.button>

              <motion.button
                className="border border-green-500/50 hover:border-green-400 text-green-400 px-8 py-4 rounded-lg font-mono font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-green-500/10"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} /> resume.pdf
              </motion.button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:iamkrati22@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg text-slate-400 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 border border-slate-700/50 hover:border-green-500/50"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Terminal Style Profile */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl border border-green-500/30 p-6 font-mono">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-sm ml-2">profile.sh</span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="text-green-400">#!/bin/bash</div>
                <div className="text-slate-400"># Software Engineer Profile</div>
                <div className="text-white">
                  <span className="text-blue-400">name</span>=<span className="text-yellow-400">"Krati Jain"</span>
                </div>
                <div className="text-white">
                  <span className="text-blue-400">role</span>=
                  <span className="text-yellow-400">"Software Engineer"</span>
                </div>
                <div className="text-white">
                  <span className="text-blue-400">company</span>=
                  <span className="text-yellow-400">"Cisco Systems"</span>
                </div>
                <div className="text-white">
                  <span className="text-blue-400">location</span>=
                  <span className="text-yellow-400">"Bengaluru, India"</span>
                </div>
                <div className="text-white">
                  <span className="text-blue-400">experience</span>=<span className="text-yellow-400">"2+ years"</span>
                </div>
                <div className="text-slate-400"># Specializations</div>
                <div className="text-white">
                  <span className="text-blue-400">skills</span>=(
                  <span className="text-yellow-400">"Full-Stack" "DevOps" "System Design"</span>)
                </div>
                <div className="text-green-400 mt-4">echo "Ready to build amazing things!"</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
