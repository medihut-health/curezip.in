"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"
import SectionHeader from "@/components/ui/section-header"
import { fadeInUp, scaleIn } from "@/lib/motion-variants"

const BRAND_POINTS = [
  "Founded in 2020 with a mission-first approach",
  "Gurugram-based, serving patients across India",
  "GMP-aligned manufacturing for every formulation",
  "Expanding reach in key developing markets",
]

export default function BrandSection() {
  return (
    <AnimatedSection className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Image */}
          <motion.div
            className="relative w-full h-[280px] sm:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/team/team7.JPG"
              alt="CureZip Pharma facility"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            {/* Location badge */}
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
              <p className="text-xs text-slate-500 font-medium">Headquarters</p>
              <p className="text-sm font-bold text-slate-800">Gurugram, Haryana 🇮🇳</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="order-1 lg:order-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionHeader
              eyebrow="The Brand"
              title="Built on Trust, Driven by Purpose"
              align="left"
            />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              <span className="font-semibold text-gray-800">"Caring Beyond Healthcare"</span> has always been and will
              continue to be our driving intent — making world-class, affordable medicines accessible to all.
            </p>

            <ul className="space-y-3">
              {BRAND_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0B5ED7] flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </AnimatedSection>
  )
}
