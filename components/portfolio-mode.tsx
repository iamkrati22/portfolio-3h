"use client"

import { motion } from "framer-motion"
import PortfolioHeader from "./portfolio/header"
import PortfolioHero from "./portfolio/hero"
import PortfolioAbout from "./portfolio/about"
import PortfolioSkills from "./portfolio/skills"
import PortfolioExperience from "./portfolio/experience"
import PortfolioProjects from "./portfolio/projects"
// import PortfolioTestimonials from "./portfolio/testimonials"
import PortfolioContact from "./portfolio/contact"
import PortfolioFooter from "./portfolio/footer"

export default function PortfolioMode() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen"
      style={{ position: "relative", zIndex: 10 }}
    >
      <PortfolioHeader />
      <main>
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioSkills />
        <PortfolioExperience />
        <PortfolioProjects />
        {/* <PortfolioTestimonials /> */}
        <PortfolioContact />
      </main>
      <PortfolioFooter />
    </motion.div>
  )
}
