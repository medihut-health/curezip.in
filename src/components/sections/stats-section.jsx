"use client"
import { useRef, useState, useEffect } from "react"
import CountUp from "react-countup"
import { motion, useInView } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/motion-variants"

const STATS = [
  { end: 40,  suffix: "+",  label: "Products",           desc: "Across key therapeutic areas" },
  { end: 10,  suffix: "+",  label: "States Covered",      desc: "Nationwide distribution reach" },
  { end: 150, suffix: "+",  label: "Healthcare Partners", desc: "Hospitals, clinics & distributors" },
  { end: 100, suffix: "K+", label: "Patients Helped",     desc: "And growing every month" },
]

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [started, setStarted] = useState(false)

  useEffect(() => { if (inView) setStarted(true) }, [inView])

  return (
    <section ref={ref} className="py-20 md:py-24 bg-[#0B5ED7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-200">
            Impact at a Glance
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
            Numbers That Tell Our Story
          </h2>
        </div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-blue-500/40 rounded-3xl overflow-hidden ring-1 ring-blue-500/30"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="flex flex-col items-center text-center px-6 py-10 bg-[#0B5ED7] hover:bg-[#0a52c0] transition-colors"
            >
              <span className="text-4xl sm:text-5xl font-extrabold text-white tabular-nums">
                {started ? (
                  <CountUp start={0} end={stat.end} duration={2.5} suffix={stat.suffix} useEasing />
                ) : `0${stat.suffix}`}
              </span>
              <span className="mt-2 text-sm font-bold text-blue-100">{stat.label}</span>
              <span className="mt-1 text-xs text-blue-200/70 max-w-[130px] leading-relaxed">{stat.desc}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
