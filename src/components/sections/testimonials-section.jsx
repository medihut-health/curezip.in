"use client"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/ui/animated-section"
import SectionHeader from "@/components/ui/section-header"
import { fadeInUp, staggerChildren } from "@/lib/motion-variants"

const TESTIMONIALS = [
  {
    name: "Dr. Amit Anand",
    role: "MBBS, MD",
    location: "New Delhi",
    initials: "AA",
    color: "bg-violet-100 text-violet-700",
    quote: "Curezip's medicines are very efficacious and pocket friendly.",
  },
  {
    name: "Dr. V. P. Singh",
    role: "MBBS, D.O. & M.S",
    location: "Uttar Pradesh",
    initials: "VS",
    color: "bg-amber-100 text-amber-700",
    quote:
      "Profoundly pleased with ZIPCLAVE-625 and PARADOWN-SP, as well as the professionalism of the CureZip team.",
  },
  {
    name: "Dr. Urmila Singh",
    role: "MBBS",
    location: "Bihar",
    initials: "US",
    color: "bg-rose-100 text-rose-700",
    quote:
      "CARNYME Q-10 demonstrates notable efficacy in alleviating muscular cramps and pre-stress conditions.",
  },
  {
    name: "Dr. Nivedita Bharti",
    role: "MBBS, MS & Gynae FMAS",
    location: "New Delhi",
    initials: "NB",
    color: "bg-emerald-100 text-emerald-700",
    quote:
      "CARNYME Q-10 & ZIPNEXA MF are economically accessible for patients, demonstrating commendable efficacy.",
  },
  {
    name: "Dr. Ashok Kumar",
    role: "MBBS, D.Ortho, D.N.B Ortho",
    location: "New Delhi",
    initials: "AK",
    color: "bg-sky-100 text-sky-700",
    quote: "NAVAVIT & TBR HEAL FORTE are best in domain and pocket-friendly products.",
  },
  {
    name: "Dr. Ravindra Kumar",
    role: "MBBS, M.S.",
    location: "Ranchi, Jharkhand",
    initials: "RK",
    color: "bg-orange-100 text-orange-700",
    quote:
      "CARNYME Q-10 is a very good product. The efficiency is excellent and the company representatives are outstanding.",
  },
]

/* Star row — always 5 filled stars */
function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t, index }) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="flex flex-col bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <Stars />
      <p className="text-sm md:text-base text-gray-700 leading-relaxed flex-grow mb-6">
        "{t.quote}"
      </p>
      {/* Author row */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${t.color}`}>
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900 leading-tight">{t.name}</p>
          <p className="text-xs text-gray-500 mt-0.5">{t.role} · {t.location}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  return (
    <AnimatedSection className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Healthcare Professionals Say"
          body="Trusted and recommended by doctors and specialists across the country."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
