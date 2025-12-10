import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Briefcase } from "lucide-react"

export default function CareerPlacementPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10" />
          <img src="/placeholder-user.jpg" alt="Career" className="w-full h-full object-cover opacity-40" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88] mb-8">
              <Briefcase className="h-4 w-4 text-[#00ff88]" />
              <span className="text-[#00ff88] text-xs font-bold tracking-wider uppercase">
                Career Services
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-12 text-balance">
              Career and Placement
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
              Comprehensive career support ensuring excellent placement opportunities and professional growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">100% Placement</h3>
                <p className="text-gray-400">Guaranteed job offers</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Top Companies</h3>
                <p className="text-gray-400">Fortune 500 recruiters</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Average Package</h3>
                <p className="text-gray-400">₹12 LPA starting salary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}