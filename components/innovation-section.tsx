import { Lightbulb, DollarSign, Rocket } from "lucide-react"

export function InnovationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88] mb-6">
            <span className="text-[#00ff88] text-xs font-bold tracking-wider uppercase">
              Innovation & Entrepreneurship
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-balance">
            Turn Your Ideas into{" "}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00d4aa] bg-clip-text text-transparent">Reality</span>
          </h2>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]" />
            <div className="w-14 h-14 rounded-xl bg-[#00ff88]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-7 h-7 text-[#00ff88]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation Studio Access</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tools, kits, and software for design thinking and prototyping
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]" />
            <div className="w-14 h-14 rounded-xl bg-[#00ff88]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <DollarSign className="w-7 h-7 text-[#00ff88]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Venture Fund</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Seed grants of ₹50k–₹1L for student startups</p>
          </div>

          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]" />
            <div className="w-14 h-14 rounded-xl bg-[#00ff88]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Rocket className="w-7 h-7 text-[#00ff88]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Startup Apprenticeships</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Work alongside founders in fast-growing ventures</p>
          </div>
        </div>
      </div>
    </section>
  )
}
