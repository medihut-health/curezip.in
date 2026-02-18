"use client"
import { motion } from "framer-motion"
import { HeartPulse, Award, Microscope } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"
import SectionHeader from "@/components/ui/section-header"
import { fadeInUp, staggerChildren } from "@/lib/motion-variants"

const VALUES = [
  {
    icon: HeartPulse,
    title: "Patient-Centric",
    body: "We put patients at the centre of everything we do, ensuring our medicines improve and transform lives.",
    accent: "from-rose-400 to-rose-500",
    iconColor: "text-rose-500",
    iconBg: "bg-rose-50",
  },
  {
    icon: Award,
    title: "Excellence",
    body: "We strive for excellence in quality, safety, efficacy, reliability and innovation across every product.",
    accent: "from-amber-400 to-amber-500",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
  },
  {
    icon: Microscope,
    title: "Innovation",
    body: "We continuously innovate to develop better treatments and improve healthcare outcomes for all.",
    accent: "from-blue-500 to-blue-700",
    iconColor: "text-[#0B5ED7]",
    iconBg: "bg-blue-50",
  },
]

function ValueCard({ icon: Icon, title, body, accent, iconColor, iconBg }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/95 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />
      <div className="flex items-start gap-4">
        <div className={`mt-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg} ring-1 ring-slate-200/70`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">{body}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ValuesSection() {
  return (
    <AnimatedSection className="relative overflow-hidden py-20 md:py-24 bg-[#f7fafd]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(54,116,181,0.18),_transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Core Values"
          title="What Drives Us"
          body="At CureZip Pharma, our values guide everything — from research and development to manufacturing and distribution."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {VALUES.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
