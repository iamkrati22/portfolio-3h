"use client"

import { motion } from "framer-motion"
import { Minimize2, Maximize2, X } from "lucide-react"

export default function TerminalHeader() {
  return (
    <div className="flex items-center justify-between p-4 bg-black/40 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
      </div>

      <motion.div
        className="text-cyan-400 font-mono text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        krati@portfolio:~$ Interactive Terminal Portfolio
      </motion.div>

      <div className="flex items-center gap-2">
        <motion.button
          className="text-slate-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Minimize2 size={16} />
        </motion.button>
        <motion.button
          className="text-slate-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Maximize2 size={16} />
        </motion.button>
        <motion.button
          className="text-slate-400 hover:text-red-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={16} />
        </motion.button>
      </div>
    </div>
  )
}
