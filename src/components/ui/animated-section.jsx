"use client"
import { motion } from "framer-motion"

/**
 * Scroll-triggered fade-up wrapper for page sections.
 * @param {string} className - Tailwind classes forwarded to the wrapper
 * @param {number} delay     - Optional stagger delay in seconds
 */
export default function AnimatedSection({ children, className = "", delay = 0 }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.section>
  )
}
