"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Linkedin } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"
import SectionHeader from "@/components/ui/section-header"
import { fadeIn, staggerChildren } from "@/lib/motion-variants"

const TEAM = [
  { name: "Mr. Gaurav Singh",   title: "Managing Director",   image: "/team/Gaurav_Singh.jpg",   mail: "", linkedin: "" },
  { name: "Mr. Abhishek Kumar", title: "Director",            image: "",                          mail: "", linkedin: "" },
  { name: "Mr. Amit Kumar",     title: "Marketing Head",      image: "/team/Amit_Kumar.jpg",      mail: "", linkedin: "" },
  { name: "Dr. Pranay Pandey",  title: "Product Consultant",  image: "/team/Pranay_Pandey.jpeg",  mail: "", linkedin: "" },
  { name: "Mrs. Monika Singh",  title: "HR Head",             image: "/team/monika.jpeg",         mail: "", linkedin: "" },
  { name: "Miss. Priya Bharti", title: "IT Consultant",       image: "",                          mail: "", linkedin: "" },
]

function TeamCard({ member }) {
  return (
    <motion.div
      variants={fadeIn}
      className="group relative flex-shrink-0 w-[160px] lg:w-[210px] snap-start rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Photo */}
      <div className="aspect-square overflow-hidden bg-slate-100">
        <Image
          src={member.image || "/default-user.jpg"}
          alt={member.name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-slate-800 leading-snug">{member.name}</h3>
        <p className="text-xs text-[#0B5ED7] mt-0.5 font-medium">{member.title}</p>

        {/* Social icons — slide up on hover */}
        <div className="flex gap-2 mt-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            href={member.mail ? `mailto:${member.mail}` : "#"}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B5ED7]/10 text-[#0B5ED7] hover:bg-[#0B5ED7] hover:text-white transition-colors"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="h-3.5 w-3.5" />
          </Link>
          <Link
            href={member.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B5ED7]/10 text-[#0B5ED7] hover:bg-[#0B5ED7] hover:text-white transition-colors"
            aria-label={`LinkedIn profile of ${member.name}`}
          >
            <Linkedin className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function TeamSection() {
  return (
    <AnimatedSection className="py-20 md:py-24 bg-[#f7fafd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The People"
          title="Our Team"
          body="The management team of CureZip Pharma came together with a shared mission to serve humanity — always eager to discover new possibilities and adopt innovative approaches."
        />

        <motion.div
          className="flex gap-4 lg:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {TEAM.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B5ED7] hover:underline underline-offset-4"
          >
            Meet the full team →
          </Link>
        </div>
      </div>
    </AnimatedSection>
  )
}
