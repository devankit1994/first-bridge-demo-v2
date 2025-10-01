import { Globe, GraduationCap, Trophy, Languages } from "lucide-react"

export function GlobalExposureSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88] mb-6">
            <span className="text-[#00ff88] text-xs font-bold tracking-wider uppercase">Global Exposure</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-balance">
            Global &{" "}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00d4aa] bg-clip-text text-transparent">
              Cross-Industry
            </span>{" "}
            Exposure
          </h2>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]" />
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#00ff88]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 text-[#00ff88]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Merit Scholarships</h3>
                <p className="text-gray-400 text-sm">Up to 25% of tuition for deserving students</p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]" />
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#00ff88]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-[#00ff88]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">International Immersion Trip</h3>
                <p className="text-gray-400 text-sm">1 week industry tour to Singapore/Dubai/Europe</p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]" />
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#00ff88]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6 text-[#00ff88]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Global Case Competitions</h3>
                <p className="text-gray-400 text-sm">Fully sponsored for selected teams</p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]" />
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#00ff88]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Languages className="w-6 h-6 text-[#00ff88]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Foreign Language Programs</h3>
                <p className="text-gray-400 text-sm">Mandarin, Spanish, or Japanese</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
