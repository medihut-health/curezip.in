"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Truck, Stethoscope } from "lucide-react"

/* ── Data ─────────────────────────────────────────────────── */
const HERO_STATS = [
  { value: "40+",  label: "Formulations" },
  { value: "10+",  label: "States" },
  { value: "150+", label: "Partners" },
  { value: "GMP",  label: "Certified" },
]

const TRUST_BADGES = [
  { icon: ShieldCheck, text: "Quality‑driven manufacturing" },
  { icon: Truck,       text: "Robust supply chain" },
  { icon: Stethoscope, text: "Clinically backed products" },
]

/* ── Sub-components ───────────────────────────────────────── */
function HeroBadge() {
  return (
    <motion.div
      className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 mb-7 text-sm font-semibold text-[#0B5ED7]"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      Trusted Pharmaceutical Manufacturer
    </motion.div>
  )
}

function HeroHeadline() {
  return (
    <motion.h1
      className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-6"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      Caring Beyond{" "}
      <span className="text-[#0B5ED7]">Healthcare,</span>
      <br />
      Delivering{" "}
      <span className="text-[#0B5ED7]">Reliable Medicines.</span>
    </motion.h1>
  )
}

function HeroSubcopy() {
  return (
    <motion.p
      className="text-base md:text-lg text-slate-500 mb-10 max-w-lg leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
    >
      CureZip Pharma partners with distributors, hospitals and healthcare
      professionals to make world‑class, affordable medicines accessible across India.
    </motion.p>
  )
}

function HeroCTAs() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-3 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <Link
        href="/contact"
        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B5ED7] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-200 hover:bg-[#0846a5] transition-all duration-200"
      >
        Partner With Us
        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
      <Link
        href="/products"
        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-base font-medium text-slate-700 hover:border-[#0B5ED7] hover:text-[#0B5ED7] transition-all duration-200"
      >
        View Product Portfolio
      </Link>
    </motion.div>
  )
}

function HeroStats() {
  return (
    <motion.div
      className="grid grid-cols-4 gap-4 pt-8 border-t border-slate-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.65 }}
    >
      {HERO_STATS.map(({ value, label }) => (
        <div key={label} className="text-center">
          <p className="text-xl sm:text-2xl font-extrabold text-slate-900">{value}</p>
          <p className="text-[11px] uppercase tracking-widest text-slate-400 mt-0.5">{label}</p>
        </div>
      ))}
    </motion.div>
  )
}

function HeroImagePanel() {
  return (
    <motion.div
      className="hidden lg:flex relative items-center justify-end"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
    >
      {/* Soft blue glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-100/80 blur-3xl pointer-events-none -z-10" />

      {/* Main image */}
      <div className="relative w-[400px] xl:w-[460px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-100">
        <Image
          src="/main.png"
          alt="CureZip Pharma medicines"
          fill
          sizes="460px"
          className="object-cover"
          priority
        />
        {/* Subtle bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />

        {/* Floating pill */}
        <motion.div
          className="absolute bottom-5 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-100 px-4 py-3 shadow-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex -space-x-2 flex-shrink-0">
            {["/team/Gaurav_Singh.jpg", "/team/Amit_Kumar.jpg", "/team/Pranay_Pandey.jpeg"].map((src, i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                <Image src={src} alt="" width={32} height={32} className="object-cover h-full w-full" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">150+ Healthcare Partners</p>
            <p className="text-[11px] text-slate-400">Across 10+ states in India</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function TrustStrip() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
          <p className="text-xs font-bold tracking-[0.18em] text-slate-400 uppercase whitespace-nowrap">
            Trusted by Professionals Nationwide
          </p>
          <div className="hidden sm:block h-px flex-1 bg-slate-100 mx-6" />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TRUST_BADGES.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-600"
              >
                <Icon className="h-3.5 w-3.5 text-[#0B5ED7]" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Main export ──────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <>
      {/* Hero — pure white with a light blue radial wash */}
      <section className="relative flex items-center min-h-[92vh] overflow-hidden bg-white">
        {/* Radial blue wash top-left */}
        <div className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-blue-50 blur-3xl pointer-events-none" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left — text */}
              <div>
                <HeroBadge />
                <HeroHeadline />
                <HeroSubcopy />
                <HeroCTAs />
                <HeroStats />
              </div>
              {/* Right — image */}
              <HeroImagePanel />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />
    </>
  )
}
