"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"
import { fadeInUp } from "@/lib/motion-variants"

const CONTACT_CHIPS = [
  { icon: Phone, label: "+91-9431943147",       href: "tel:+919431943147" },
  { icon: Mail,  label: "contactus@curezip.in", href: "mailto:contactus@curezip.in" },
]

export default function CtaSection() {
  return (
    <AnimatedSection className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-[#0B5ED7] px-8 py-16 md:px-16 md:py-20 text-center shadow-xl shadow-blue-200"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Soft inner glow blobs */}
          <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          {/* Dot grid texture */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-blue-200 mb-4">
              Become a Partner
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-5 max-w-3xl mx-auto">
              Ready to Bring Better
              <span className="block text-blue-100">Medicines to More Patients?</span>
            </h2>
            <p className="text-base md:text-lg text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our growing network of hospitals, clinics and distributors. Let's make affordable,
              quality healthcare accessible across India together.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-bold text-[#0B5ED7] hover:bg-blue-50 shadow-lg transition-all duration-200"
              >
                Contact Our Team
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-all duration-200"
              >
                Explore Products
              </Link>
            </div>

            {/* Contact chips */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {CONTACT_CHIPS.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100 hover:text-white hover:border-white/40 transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
