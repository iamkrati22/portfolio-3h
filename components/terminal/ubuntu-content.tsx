"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface UbuntuTerminalContentProps {
  section: string
  isTyping: boolean
}

export default function UbuntuTerminalContent({ section, isTyping }: UbuntuTerminalContentProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const content = {
    welcome: `
╔══════════════════════════════════════════════════════════════╗
║                    Welcome to Krati's Terminal               ║
║                                                              ║
║  Software Engineer | Full-Stack Developer | DevOps Expert   ║
║                                                              ║
║  Type 'help' to see available commands                      ║
║  Type 'about' to learn more about me                        ║
╚══════════════════════════════════════════════════════════════╝

> System Status: Online
> Current Location: Bengaluru, India
> Role: Software Developer Engineer @ Cisco Systems
> Specialization: Building scalable solutions that matter

Available sections: about | skills | experience | projects | contact
    `,
    about: `
User Profile: Krati Jain
─────────────────────────────────────────────────────────────

🎓 Education:
   B.Tech Computer Science Engineering
   Jaypee University of Engineering & Technology (2020-2024)
   GPA: 8.0/10

💼 Current Role:
   Software Developer Engineer @ Cisco Systems
   Location: Bengaluru, India
   Duration: August 2024 - Present

🚀 Journey:
   Started from curiosity, evolved through trial and learning.
   Passionate about creating scalable solutions and optimizing
   systems that power modern applications.

🏆 Notable Achievements:
   • Google WE Scholar 2021 (Top 200/27,643 applicants)
   • Ericsson Empowering Girl Scholarship Recipient
   • Runner-up at JUET Builds Hackathon 2022

📈 Impact Metrics:
   • 40% boost in automation code coverage
   • 30% reduction in database query time
   • 15% CPU usage optimization in production systems

Philosophy: "Building the future, one line of code at a time"
    `,
    skills: `
Technical Skills Matrix
─────────────────────────────────────────────────────────────

Programming Languages:
├── Python          ████████████████████ Expert
├── JavaScript      ███████████████████  Advanced
├── TypeScript      ██████████████████   Advanced
├── C++             ████████████████     Intermediate
├── Java            ███████████████      Intermediate
└── Go              ██████████████       Intermediate

Web Development:
├── React.js        ████████████████████ Expert
├── Node.js         ███████████████████  Advanced
├── Express.js      ██████████████████   Advanced
├── Flask           ████████████████     Intermediate
├── Spring Boot     ███████████████      Intermediate
└── HTML/CSS        ████████████████████ Expert

Databases & Storage:
├── MongoDB         ███████████████████  Advanced
├── PostgreSQL      ██████████████████   Advanced
├── MySQL           ████████████████     Intermediate
├── Redis           ███████████████      Intermediate
└── DynamoDB        ██████████████       Intermediate

DevOps & Cloud:
├── Docker          ███████████████████  Advanced
├── Kubernetes      ██████████████████   Advanced
├── AWS             ████████████████     Intermediate
├── Jenkins         ███████████████      Intermediate
└── Ansible         ██████████████       Intermediate

Specializations:
• Microservices Architecture
• System Performance Optimization  
• Full-Stack Development
• UX Research & Design
• Automation & CI/CD
    `,
    experience: `
Professional Experience
─────────────────────────────────────────────────────────────

[CURRENT] Software Developer Engineer
Company: Cisco Systems | Location: Bengaluru, IN
Duration: August 2024 - Present
─────────────────────────────────────────────────────────────
• Revamped Spring Boot microservice health monitoring
  → Achieved 40% boost in automation code coverage
  → Enhanced code maintainability through design patterns

• Optimized Kafka topic and consumer classification (Golang)
  → Reduced CPU usage by 15% during traffic spikes
  → Implemented intelligent consumption strategies

• Enhanced database performance through SQL optimization
  → Cut query execution time by 30%
  → Improved overall system responsiveness

[INTERNSHIP] Software Developer Engineer Intern  
Company: Cisco Systems | Location: Bengaluru, IN
Duration: January 2024 - June 2024
─────────────────────────────────────────────────────────────
• Developed web-based GUI replacing manual CLI setups
  → Reduced deployment time from 2 hours to 15 minutes
  → Streamlined developer workflow significantly

• Built calendar-based VM reservation system
  → Increased resource utilization by 30%
  → Reduced project delays by 25%

• Optimized virtual machine allocation algorithms
  → Decreased idle resource time by 12 hours/week
  → Boosted system throughput by 20%

[INTERNSHIP] UX Design Intern
Company: Korn Ferry | Location: Remote
Duration: June 2023 - August 2023
─────────────────────────────────────────────────────────────
• Created 20+ wireframes and prototypes
  → Accelerated development processes
  → Improved design-to-development handoff

• Conducted comprehensive UX research
  → Boosted user satisfaction by 15%
  → Led 10+ user interviews for insights

• Guided product direction through data-driven decisions
  → Enhanced usability across multiple touchpoints
    `,
    projects: `
Featured Projects Portfolio
─────────────────────────────────────────────────────────────

[01] Training & Placement Portal
Tech Stack: React.js | Node.js | MongoDB | Material-UI
─────────────────────────────────────────────────────────────
Description: Comprehensive platform automating placement 
processes for 1000+ students and TnP coordinators.

Key Achievements:
• 20% improvement in user engagement
• Loading times reduced to 1/4th of existing system
• Role-based access control implementation
• Cross-validation system for data integrity

Impact: Streamlined placement management for entire university

[02] VM Management System  
Tech Stack: React | Express.js | PostgreSQL | Docker
─────────────────────────────────────────────────────────────
Description: Web-based GUI with calendar reservations 
replacing manual command-line setups.

Key Achievements:
• Deployment time: 2 hours → 15 minutes
• Resource utilization increased by 30%
• Idle time reduced by 12 hours/week
• Developer productivity boost of 20%

Impact: Revolutionized infrastructure management workflow

[03] Microservice Performance Optimizer
Tech Stack: Spring Boot | Kafka | Golang | SQL
─────────────────────────────────────────────────────────────
Description: Enhanced microservice architecture through 
automation and design pattern implementation.

Key Achievements:
• 40% boost in automation code coverage
• 15% reduction in CPU usage
• 30% faster query execution
• Improved system scalability

Impact: Production-level performance optimization

[04] UX Research Platform
Tech Stack: React | TypeScript | Figma API | Node.js
─────────────────────────────────────────────────────────────
Description: Comprehensive UX research tools with wireframing 
and user interview management capabilities.

Key Achievements:
• 15% increase in user satisfaction
• 20+ wireframes and prototypes created
• Streamlined research-to-design pipeline
• Data-driven design decisions

Impact: Enhanced product development lifecycle

Repository: github.com/kratijain | Portfolio: kratijain.dev
    `,
    contact: `
Contact Information
─────────────────────────────────────────────────────────────

📧 Email:
   Primary: iamkrati22@gmail.com
   Response Time: Within 24 hours

📱 Phone:
   Mobile: +91 70074 40611
   Available: 9 AM - 6 PM IST (Mon-Fri)

🌍 Location:
   Current: Bengaluru, Karnataka, India
   Open to: Remote opportunities worldwide

💼 Professional Networks:
   LinkedIn: linkedin.com/in/kratijain
   GitHub: github.com/kratijain
   Portfolio: kratijain.dev
   LeetCode: leetcode.com/kratijain
   Codeforces: codeforces.com/profile/kratijain

🚀 Current Status:
   ✅ Open to new opportunities
   ✅ Available for freelance projects
   ✅ Interested in collaboration
   ✅ Mentoring junior developers

💡 Best Ways to Reach Me:
   1. Email for formal inquiries
   2. LinkedIn for professional networking
   3. GitHub for technical discussions

Let's build something amazing together! 🚀

Response guaranteed within 24 hours for all serious inquiries.
    `,
  }

  const currentContent = content[section as keyof typeof content] || ""

  useEffect(() => {
    if (isTyping && currentContent) {
      setDisplayedText("")
      setCurrentIndex(0)
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev < currentContent.length) {
            setDisplayedText(currentContent.slice(0, prev + 1))
            return prev + 1
          } else {
            clearInterval(timer)
            return prev
          }
        })
      }, 10)

      return () => clearInterval(timer)
    } else if (!isTyping && currentContent) {
      setDisplayedText(currentContent)
    }
  }, [section, isTyping, currentContent])

  // Only render if there's content to show and it's not the welcome section
  if (!currentContent || section === "welcome") return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="font-mono text-xs sm:text-sm text-green-400 whitespace-pre-wrap overflow-x-auto"
    >
      {displayedText}
      {isTyping && (
        <motion.span
          className="inline-block w-2 h-4 bg-green-400 ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        />
      )}
    </motion.div>
  )
}
