"use client"
import HeroSection         from "@/components/sections/hero-section"
import VisionSection       from "@/components/sections/vision-section"
import SegmentsSection     from "@/components/sections/segments-section"
import ValuesSection       from "@/components/sections/values-section"
import BrandSection        from "@/components/sections/brand-section"
import QualitySection      from "@/components/sections/quality-section"
import TeamSection         from "@/components/sections/team-section"
import StatsSection        from "@/components/sections/stats-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import CtaSection          from "@/components/sections/cta-section"
import ScrollToTop         from "@/components/ui/scroll-to-top"

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <SegmentsSection />
      <ValuesSection />
      <BrandSection />
      <QualitySection />
      <TeamSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
      <ScrollToTop />
    </>
  )
}

