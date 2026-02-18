"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/ui/animated-section"
import SectionHeader from "@/components/ui/section-header"
import { fadeInUp, scaleIn } from "@/lib/motion-variants"

export default function VisionSection() {
  return (
    <AnimatedSection className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionHeader
              eyebrow="Who We Are"
              title="Our Vision"
              align="left"
            />
            <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed">
              <p>
                We are dedicated to fulfilling the promise of human potential — in all places, in all aspects and
                stages of life. We believe health is the key to that promise.
              </p>
              <p>
                Because at our healthiest, we can achieve anything. That is why our pursuit of helping people
                achieve their best health at every life stage will never end.
              </p>
            </div>

            {/* Highlight pill */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-blue-50 border border-blue-100 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#0B5ED7] flex-shrink-0" />
              <p className="text-sm font-semibold text-[#0B5ED7]">
                "Caring Beyond Healthcare" — Our guiding principle
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative w-full h-[280px] sm:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/image2.png"
              alt="CureZip vision"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
            {/* Est. badge overlay */}
            <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 text-center shadow-md">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Est.</p>
              <p className="text-2xl font-extrabold text-[#0B5ED7] leading-none">2020</p>
            </div>
          </motion.div>

        </div>
      </div>
    </AnimatedSection>
  )
}
