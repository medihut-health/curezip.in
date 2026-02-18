"use client"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/motion-variants"

/**
 * Consistent section heading used across all home-page sections.
 * @param {string}  eyebrow - Small label above the title
 * @param {string}  title   - Main heading text
 * @param {string}  body    - Optional supporting paragraph
 * @param {"left"|"center"} align
 * @param {boolean} dark    - Invert colours for dark backgrounds
 */
export default function SectionHeader({ eyebrow, title, body, align = "center", dark = false }) {
  const centered = align === "center"

  return (
    <motion.div
      className={`flex flex-col mb-12 md:mb-14 ${centered ? "items-center text-center" : "items-start text-left"}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {eyebrow && (
        <span className={`text-xs font-bold tracking-[0.2em] uppercase mb-3 ${dark ? "text-blue-400" : "text-[#0B5ED7]"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-extrabold leading-tight ${dark ? "text-white" : "text-gray-900"}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-12 rounded-full ${dark ? "bg-blue-500" : "bg-[#0B5ED7]"} ${centered ? "mx-auto" : ""}`} />
      {body && (
        <p className={`mt-5 text-base md:text-lg max-w-3xl leading-relaxed ${dark ? "text-slate-400" : "text-gray-600"}`}>
          {body}
        </p>
      )}
    </motion.div>
  )
}
