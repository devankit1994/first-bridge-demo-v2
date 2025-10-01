import { Users, Sparkles, Rocket } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88] mb-6">
            <span className="text-[#00ff88] text-xs font-bold tracking-wider uppercase">Student Experience</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-balance">
            Designed for{" "}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00d4aa] bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto text-pretty">
            Modern campus designed as a co-working space in Downtown Gurgaon, close to Cyberhub and corporate offices
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00ff88]/10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]" />
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-[#00ff88]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-[#00ff88]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Modern Campus</h3>
              <p className="text-gray-400 leading-relaxed">
                Designed as a co-working space, in Downtown Gurgaon, close to Cyberhub and other corporate offices
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00ff88]/10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]" />
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-[#00ff88]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-[#00ff88]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Student Clubs & Events</h3>
              <p className="text-gray-400 leading-relaxed">
                Giving opportunity for students to work together and learn through collaborative experiences
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00ff88]/10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]" />
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-[#00ff88]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-[#00ff88]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Dynamic Activities</h3>
              <p className="text-gray-400 leading-relaxed">
                Outbound activities and learning excursions to enhance practical knowledge and teamwork
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
