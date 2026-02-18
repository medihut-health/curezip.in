"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Pill, Bone, Baby } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"
import SectionHeader from "@/components/ui/section-header"
import { fadeInUp, staggerChildren } from "@/lib/motion-variants"

const SEGMENTS = [
  {
    num: "01",
    icon: Pill,
    title: "General & Internal Medicine",
    body: "Evidence-based formulations for common acute and chronic conditions managed in OPD and IPD settings.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    accent: "group-hover:border-violet-200",
  },
  {
    num: "02",
    icon: Bone,
    title: "Orthopaedics & Pain Management",
    body: "Supportive therapy for bone health, joint care and musculoskeletal pain backed by clinical experience.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    accent: "group-hover:border-amber-200",
  },
  {
    num: "03",
    icon: Baby,
    title: "Women's Health & Gynaecology",
    body: "Nutraceutical and prescription support for women's health, fertility and hormonal balance.",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    accent: "group-hover:border-rose-200",
  },
]

export default function SegmentsSection() {
  return (
    <AnimatedSection className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Focused Therapeutic Segments"
          body="A robust and growing portfolio across key specialties designed to support everyday clinical practice."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {SEGMENTS.map((seg) => {
            const Icon = seg.icon
            return (
              <motion.div
                key={seg.title}
                variants={fadeInUp}
                className={`group relative flex flex-col bg-white border border-slate-200 ${seg.accent} rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden`}
              >
                {/* Ghost number */}
                <span className="absolute top-4 right-5 text-7xl font-black text-slate-50 select-none leading-none pointer-events-none">
                  {seg.num}
                </span>

                {/* Icon */}
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${seg.iconBg} mb-5`}>
                  <Icon className={`h-5 w-5 ${seg.iconColor}`} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">{seg.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">{seg.body}</p>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-[#0B5ED7] group-hover:gap-2.5 transition-all"
                >
                  Explore products <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
