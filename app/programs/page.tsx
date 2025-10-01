import { ProgramsHero } from "@/components/programs/programs-hero"
import { ProgramsOverview } from "@/components/programs/programs-overview"
import { ProgramDetails } from "@/components/programs/program-details"
import { AdmissionProcess } from "@/components/programs/admission-process"
import { ProgramsCTA } from "@/components/programs/programs-cta"

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ProgramsHero />
      <ProgramsOverview />
      <ProgramDetails />
      <AdmissionProcess />
      <ProgramsCTA />
    </main>
  )
}
