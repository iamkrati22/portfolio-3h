"use client"

import { motion } from "framer-motion"
import { Monitor, Terminal } from "lucide-react"

interface ModeToggleProps {
  isTerminalMode: boolean
  onToggle: () => void
}

export default function ModeToggle({ isTerminalMode, onToggle }: ModeToggleProps) {
  return (
    <motion.div
      className="fixed top-20 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      style={{ zIndex: 100 }}
    >
      <motion.button
        onClick={onToggle}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-xl border transition-all duration-300 font-mono text-sm ${
          isTerminalMode
            ? "bg-black/40 border-cyan-500/30 text-cyan-400"
            : "bg-slate-800/40 border-green-500/30 text-green-400"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div animate={{ rotate: isTerminalMode ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isTerminalMode ? <Monitor size={16} /> : <Terminal size={16} />}
        </motion.div>
        <span className="hidden sm:inline">{isTerminalMode ? "GUI" : "CLI"}</span>
      </motion.button>
    </motion.div>
  )
}
