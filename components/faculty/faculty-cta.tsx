import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FacultyCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">
          Ready to Learn from the <span className="text-primary">Best?</span>
        </h2>
        <p className="text-xl text-gray-400 mb-10 text-pretty leading-relaxed">
          Join First Bridge and get mentored by industry leaders who are committed to your success. Our faculty doesn't
          just teach—they inspire, challenge, and transform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-primary to-[#00cc6a] hover:from-primary hover:to-primary text-black font-bold text-base px-8 py-6 rounded-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
            EXPLORE PROGRAMS
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white/20 hover:border-primary text-white font-bold text-base px-8 py-6 rounded-lg transition-all hover:bg-primary/10 bg-transparent"
          >
            SCHEDULE CAMPUS VISIT
          </Button>
        </div>
      </div>
    </section>
  )
}
