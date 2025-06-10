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
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      style={{ zIndex: 100 }} // Ensure highest z-index
    >
      <motion.button
        onClick={onToggle}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-xl border transition-all duration-300 ${
          isTerminalMode
            ? "bg-black/40 border-cyan-500/30 text-cyan-400"
            : "bg-white/10 border-purple-500/30 text-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div animate={{ rotate: isTerminalMode ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isTerminalMode ? <Monitor size={20} /> : <Terminal size={20} />}
        </motion.div>
        <span className="font-medium text-sm">{isTerminalMode ? "Portfolio Mode" : "Terminal Mode"}</span>
      </motion.button>
    </motion.div>
  )
}
