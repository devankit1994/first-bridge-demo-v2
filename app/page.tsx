import { HeroSection } from "@/components/hero-section"
import { HomepageBlocksSection } from "@/components/homepage-blocks-section"
import { ExperienceSection } from "@/components/experience-section"
import { CareerSection } from "@/components/career-section"
import { TechnologySection } from "@/components/technology-section"
import { GlobalExposureSection } from "@/components/global-exposure-section"
import { AcademicSection } from "@/components/academic-section"
import { InnovationSection } from "@/components/innovation-section"
import { CampusTourSection } from "@/components/campus-tour-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <HomepageBlocksSection />
      <ExperienceSection />
      <CareerSection />
      <TechnologySection />
      <GlobalExposureSection />
      <AcademicSection />
      <InnovationSection />
      <CampusTourSection />
      <CTASection />
    </main>
  )
}
