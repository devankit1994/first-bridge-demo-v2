import { FacultyHero } from "@/components/faculty/faculty-hero"
import { FacultyGrid } from "@/components/faculty/faculty-grid"
import { FacultyExpertise } from "@/components/faculty/faculty-expertise"
import { FacultyCTA } from "@/components/faculty/faculty-cta"

export default function FacultyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FacultyHero />
      <FacultyGrid />
      <FacultyExpertise />
      <FacultyCTA />
    </main>
  )
}
