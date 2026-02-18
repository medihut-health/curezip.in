"use client"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/ui/animated-section"
import SectionHeader from "@/components/ui/section-header"
import { fadeInUp, staggerChildren } from "@/lib/motion-variants"

const COMPLIANCE_ITEMS = [
  {
    step: "01",
    title: "GMP‑Aligned Manufacturing",
    description:
      "Processes built around Good Manufacturing Practice principles to ensure consistent quality and safety in every single batch.",
  },
  {
    step: "02",
    title: "Robust Quality Control",
    description:
      "End‑to‑end quality checks from raw material to finished packs, supported by strong documentation and full traceability.",
  },
  {
    step: "03",
    title: "Partner‑Ready Compliance",
    description:
      "Transparent practices, audit‑ready documentation and a culture of continuous improvement for long‑term partnerships.",
  },
]

export default function QualitySection() {
  return (
    <AnimatedSection className="py-20 md:py-24 bg-[#f7fafd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Standards"
          title="Quality & Compliance"
          body="Every batch is manufactured under stringent quality systems aligned with national regulatory requirements and global expectations."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {COMPLIANCE_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="relative bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Large ghost step number */}
              <span className="absolute -bottom-3 -right-1 text-8xl font-black text-slate-50 select-none leading-none pointer-events-none">
                {item.step}
              </span>
              {/* Step dot */}
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B5ED7] text-white text-xs font-bold">
                  {i + 1}
                </span>
                <div className="h-px flex-1 bg-slate-100" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
