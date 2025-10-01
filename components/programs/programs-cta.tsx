import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function ProgramsCTA() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00ff88]/20 via-gray-900 to-[#ff6b35]/20 border border-white/10 p-12 md:p-16">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ready to <span className="text-[#00ff88]">Transform</span> Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join India's most dynamic business school and start your journey towards becoming a future-ready business
              leader.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] hover:from-[#00ff88] hover:to-[#00ff88] text-black font-bold text-base px-8 py-6 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#00ff88]/30">
                APPLY NOW
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white/20 hover:border-[#ff6b35] text-white hover:text-[#ff6b35] font-bold text-base px-8 py-6 rounded-lg transition-all hover:scale-105 bg-transparent"
              >
                <Download className="mr-2 w-5 h-5" />
                DOWNLOAD BROCHURE
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4">Have questions? We're here to help!</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                <a href="mailto:admissions@firstbridge.edu" className="text-[#00ff88] hover:underline font-semibold">
                  admissions@firstbridge.edu
                </a>
                <span className="hidden sm:block text-gray-600">|</span>
                <a href="tel:+911234567890" className="text-[#00ff88] hover:underline font-semibold">
                  +91 123 456 7890
                </a>
                <span className="hidden sm:block text-gray-600">|</span>
                <button className="text-[#00ff88] hover:underline font-semibold">Schedule Campus Visit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
