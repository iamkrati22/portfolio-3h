"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, User, Code, Mail } from "lucide-react"

export default function PortfolioHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "about", href: "#about", icon: User, prefix: "./", suffix: ".md" },
    { name: "skills", href: "#skills", icon: Code, prefix: "ls ", suffix: "/" },
    { name: "contact", href: "#contact", icon: Mail, prefix: "cat ", suffix: ".txt" },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-green-500/20 shadow-lg shadow-green-500/5"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with terminal styling */}
          <motion.div
            className="flex items-center gap-1 sm:gap-2 text-base sm:text-xl font-bold text-white font-mono"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="text-green-400"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              $
            </motion.span>
            <span className="text-white">krati</span>
            <span className="text-green-400 hidden xs:inline">@</span>
            <span className="text-blue-400 hidden xs:inline">portfolio</span>
            <motion.span
              className="text-green-400"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              _
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="group relative px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800/50 border border-transparent hover:border-green-500/30"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center gap-2 font-mono text-sm lg:text-base">
                  <motion.div className="text-green-400" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <item.icon size={16} />
                  </motion.div>
                  <span className="text-slate-400 group-hover:text-green-400 transition-colors">{item.prefix}</span>
                  <span className="text-white group-hover:text-green-400 transition-colors">{item.name}</span>
                  <span className="text-slate-400 group-hover:text-green-400 transition-colors">{item.suffix}</span>
                </div>

                {/* Terminal cursor effect */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-green-400 opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-1.5 text-white font-mono border border-slate-700 rounded-lg hover:border-green-500/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-1.5">
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
              <span className="text-xs text-green-400">{mobileMenuOpen ? "close" : "menu"}</span>
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 pb-3 border-t border-slate-700/50"
          >
            <div className="bg-slate-800/30 rounded-lg p-3 mt-3 border border-slate-700/50">
              <div className="flex items-center gap-2 mb-2 text-green-400 font-mono text-xs">
                <Code size={14} />
                <span>Navigation Menu</span>
              </div>

              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-700/30 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div className="text-green-400" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      <item.icon size={14} />
                    </motion.div>

                    <div className="font-mono text-xs">
                      <span className="text-slate-400 group-hover:text-green-400 transition-colors">{item.prefix}</span>
                      <span className="text-white group-hover:text-green-400 transition-colors">{item.name}</span>
                      <span className="text-slate-400 group-hover:text-green-400 transition-colors">{item.suffix}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-3 pt-2 border-t border-slate-700/50">
                <div className="text-xs text-slate-500 font-mono">
                  <span className="text-green-400">$</span> Ready to explore portfolio
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
