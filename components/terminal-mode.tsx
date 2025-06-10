"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import UbuntuTerminalHeader from "./terminal/ubuntu-header"
import UbuntuTerminalContent from "./terminal/ubuntu-content"
import UbuntuTerminalInput from "./terminal/ubuntu-input"

export default function TerminalMode() {
  const [currentDirectory, setCurrentDirectory] = useState("/home/krati")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [currentSection, setCurrentSection] = useState("welcome")
  const [fileSystem, setFileSystem] = useState({
    "/home/krati": {
      type: "directory",
      contents: ["Documents", "Projects", "Skills", "resume.pdf", ".bashrc"],
    },
    "/home/krati/Documents": {
      type: "directory",
      contents: ["about.txt", "experience.md", "achievements.txt"],
    },
    "/home/krati/Projects": {
      type: "directory",
      contents: ["placement-portal", "vm-manager", "microservice-optimizer", "ux-platform"],
    },
    "/home/krati/Skills": {
      type: "directory",
      contents: ["programming.json", "web-dev.json", "databases.json", "devops.json"],
    },
  })
  const [isTyping, setIsTyping] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  const ubuntuCommands = {
    help: "Show available commands",
    ls: "List directory contents",
    cd: "Change directory",
    pwd: "Print working directory",
    cat: "Display file contents",
    tree: "Display directory tree",
    whoami: "Display current user",
    neofetch: "Display system information",
    clear: "Clear terminal screen",
    history: "Show command history",
    about: "Display about information",
    skills: "Show technical skills",
    experience: "Show work experience",
    projects: "Display projects",
    contact: "Get contact information",
    sudo: "Execute commands as superuser",
    ps: "Show running processes",
    top: "Display system processes",
    uname: "System information",
    date: "Display current date and time",
    uptime: "Show system uptime",
  }

  const executeCommand = (command: string) => {
    const cmd = command.toLowerCase().trim()
    const args = cmd.split(" ")
    const baseCmd = args[0]

    setCommandHistory((prev) => [...prev, `${currentDirectory}$ ${command}`])

    if (baseCmd === "help") {
      setCommandHistory((prev) => [
        ...prev,
        "Available Commands:",
        "─────────────────────────────────────────────────────────────",
        "",
        "System Commands:",
        "  ls              List directory contents",
        "  cd <dir>        Change directory",
        "  pwd             Print working directory",
        "  cat <file>      Display file contents",
        "  tree            Display directory tree",
        "  clear           Clear terminal screen",
        "",
        "System Info:",
        "  whoami          Display current user",
        "  neofetch        Display system information",
        "  uname           System information",
        "  date            Display current date and time",
        "  uptime          Show system uptime",
        "  ps              Show running processes",
        "  history         Show command history",
        "",
        "Portfolio Commands:",
        "  about           Display about information",
        "  skills          Show technical skills",
        "  experience      Show work experience",
        "  projects        Display projects",
        "  contact         Get contact information",
        "",
        "Fun Commands:",
        "  sudo <cmd>      Execute commands as superuser",
        "",
        "Type any command to get started!",
      ])
      return
    }

    if (baseCmd === "clear") {
      setCommandHistory([])
      setCurrentSection("welcome")
      return
    }

    if (baseCmd === "ls") {
      const path = args[1] || currentDirectory
      const dir = fileSystem[path as keyof typeof fileSystem]
      if (dir && dir.type === "directory") {
        setCommandHistory((prev) => [...prev, dir.contents.join("  ")])
      } else {
        setCommandHistory((prev) => [...prev, `ls: cannot access '${path}': No such file or directory`])
      }
      return
    }

    if (baseCmd === "cd") {
      const newPath = args[1]
      if (!newPath || newPath === "~") {
        setCurrentDirectory("/home/krati")
      } else if (newPath === "..") {
        const pathParts = currentDirectory.split("/")
        pathParts.pop()
        setCurrentDirectory(pathParts.join("/") || "/")
      } else {
        const fullPath = newPath.startsWith("/") ? newPath : `${currentDirectory}/${newPath}`
        if (fileSystem[fullPath as keyof typeof fileSystem]) {
          setCurrentDirectory(fullPath)
        } else {
          setCommandHistory((prev) => [...prev, `cd: no such file or directory: ${newPath}`])
        }
      }
      return
    }

    if (baseCmd === "pwd") {
      setCommandHistory((prev) => [...prev, currentDirectory])
      return
    }

    if (baseCmd === "whoami") {
      setCommandHistory((prev) => [...prev, "krati"])
      return
    }

    if (baseCmd === "date") {
      setCommandHistory((prev) => [...prev, new Date().toString()])
      return
    }

    if (baseCmd === "uptime") {
      setCommandHistory((prev) => [...prev, "up 2 years, building amazing software"])
      return
    }

    if (baseCmd === "uname") {
      setCommandHistory((prev) => [...prev, "Linux krati-portfolio 5.15.0-ubuntu #1 SMP x86_64 GNU/Linux"])
      return
    }

    if (baseCmd === "ps") {
      setCommandHistory((prev) => [
        ...prev,
        "PID TTY          TIME CMD",
        "1234 pts/0    00:00:01 portfolio",
        "5678 pts/0    00:00:02 creativity",
        "9012 pts/0    00:00:03 innovation",
      ])
      return
    }

    if (baseCmd === "history") {
      setCommandHistory((prev) => [...prev, ...commandHistory.map((cmd, index) => `${index + 1}  ${cmd}`)])
      return
    }

    if (baseCmd === "tree") {
      setCommandHistory((prev) => [
        ...prev,
        "/home/krati",
        "├── Documents/",
        "│   ├── about.txt",
        "│   ├── experience.md",
        "│   └── achievements.txt",
        "├── Projects/",
        "│   ├── placement-portal/",
        "│   ├── vm-manager/",
        "│   ├── microservice-optimizer/",
        "│   └── ux-platform/",
        "├── Skills/",
        "│   ├── programming.json",
        "│   ├── web-dev.json",
        "│   ├── databases.json",
        "│   └── devops.json",
        "├── resume.pdf",
        "└── .bashrc",
      ])
      return
    }

    if (baseCmd === "neofetch") {
      setCommandHistory((prev) => [
        ...prev,
        "                   -`                    krati@portfolio",
        "                  .o+`                   ----------------",
        "                 `ooo/                   OS: Ubuntu 22.04 LTS",
        "                `+oooo:                  Host: Portfolio System",
        "               `+oooooo:                 Kernel: 5.15.0-portfolio",
        "               -+oooooo+:                Uptime: 2 years",
        "             `/:-:++oooo+:               Packages: 1337 (apt)",
        "            `/++++/+++++++:              Shell: bash 5.1.16",
        "           `/++++++++++++++:             Resolution: ∞x∞",
        "          `/+++ooooooooo+++/             DE: Custom Portfolio",
        "         ./ooosssso++osssssso+`          WM: Creativity Manager",
        "        .oossssso-````/ossssss+`         Theme: Dark Professional",
        "       -osssssso.      :ssssssso.        Icons: Lucide React",
        "      :osssssss/        osssso+++.       Terminal: Interactive",
        "     /ossssssss/        +ssssooo/-       CPU: Intel Innovation i9",
        "   `/ossssso+/:-        -:/+osssso+-     Memory: ∞ GB",
        "  `+sso+:-`                 `.-/+oso:",
        " `++:.                           `-/+/",
        " .`                                 `/",
      ])
      return
    }

    if (baseCmd === "cat") {
      const filename = args[1]
      if (filename === "about.txt") {
        setCommandHistory((prev) => [
          ...prev,
          "# About Krati Jain",
          "",
          "Software Engineer passionate about building scalable solutions.",
          "Currently working at Cisco Systems, focusing on microservice",
          "optimization and system performance improvements.",
          "",
          "Education: B.Tech CSE from JUET (2020-2024)",
          "GPA: 8.0/10",
          "",
          "Achievements:",
          "- Google WE Scholar 2021 (Top 200/27,643)",
          "- Ericsson Empowering Girl Scholarship",
          "- Runner-up JUET Builds Hackathon 2022",
        ])
        return
      }
      if (filename === "resume.pdf") {
        setCommandHistory((prev) => [...prev, "📄 Opening resume.pdf... (Binary file - use 'download' command)"])
        return
      }
      setCommandHistory((prev) => [...prev, `cat: ${filename}: No such file or directory`])
      return
    }

    if (baseCmd === "sudo") {
      if (args[1] === "rm" && args[2] === "-rf" && args[3] === "/") {
        setCommandHistory((prev) => [
          ...prev,
          "Nice try! 😄",
          "But I'm not going to delete my portfolio.",
          "Try 'sudo make-me-a-sandwich' instead!",
        ])
        return
      }
      if (args.slice(1).join(" ") === "make-me-a-sandwich") {
        setCommandHistory((prev) => [...prev, "🥪 Here's your sandwich! Enjoy coding!"])
        return
      }
      setCommandHistory((prev) => [...prev, "[sudo] password for krati: "])
      setTimeout(() => {
        setCommandHistory((prev) => [...prev, "Sorry, try again."])
      }, 1000)
      return
    }

    // Legacy commands for compatibility
    if (baseCmd in ubuntuCommands && ["about", "skills", "experience", "projects", "contact"].includes(baseCmd)) {
      setCurrentSection(baseCmd)
      setIsTyping(true)
      setTimeout(() => setIsTyping(false), 1000)
      return
    }

    if (baseCmd === "") {
      return
    }

    setCommandHistory((prev) => [...prev, `Command '${baseCmd}' not found. Type 'help' for available commands.`])
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-900 relative overflow-hidden"
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 40 }}
    >
      <div className="min-h-screen p-4 flex items-center justify-center relative z-10">
        <div className="w-full max-w-6xl h-[90vh] bg-slate-900/90 backdrop-blur-xl border border-green-500/30 rounded-xl overflow-hidden shadow-2xl">
          <UbuntuTerminalHeader />

          <div ref={terminalRef} className="h-full overflow-y-auto p-6 pb-20 font-mono">
            {/* Welcome Message */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 mb-4">
              Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-portfolio x86_64)
              <br />
              <br />* Documentation: https://krati-portfolio.dev
              <br />* Management: https://github.com/kratijain
              <br />* Support: https://linkedin.com/in/kratijain
              <br />
              <br />
              Last login: {new Date().toLocaleString()} from creative-mind
              <br />
            </motion.div>

            {/* Command History */}
            <div className="space-y-1 mb-4">
              {commandHistory.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-sm ${
                    line.includes("$") ? "text-green-400" : line.includes("error") ? "text-red-400" : "text-white"
                  }`}
                >
                  {line}
                </motion.div>
              ))}
            </div>

            {/* Current Section Content */}
            <UbuntuTerminalContent section={currentSection} isTyping={isTyping} />
          </div>

          <UbuntuTerminalInput
            onExecuteCommand={executeCommand}
            availableCommands={Object.keys(ubuntuCommands)}
            currentDirectory={currentDirectory}
          />
        </div>
      </div>
    </motion.div>
  )
}
