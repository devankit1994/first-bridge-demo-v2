import { BookOpen, Award, CheckCircle } from "lucide-react"

export function AcademicSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88] mb-6">
            <span className="text-[#00ff88] text-xs font-bold tracking-wider uppercase">Academic Excellence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-balance">
            Academic Edge &{" "}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00d4aa] bg-clip-text text-transparent">
              Micro-Credentials
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]" />
            <div className="w-14 h-14 rounded-xl bg-[#00ff88]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7 text-[#00ff88]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Top-Tier Faculty</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Drawn from top B-Schools with unparalleled industry experience
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Contemporary curriculum aligned with high-demand job roles</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Learning by implementing cross-functional projects</span>
              </li>
            </ul>
          </div>

          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]" />
            <div className="w-14 h-14 rounded-xl bg-[#00ff88]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7 text-[#00ff88]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Industry Certifications</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">Micro-credentials that matter in the job market</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Google Cloud AI & AWS Data Analytics certifications</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Tableau, Power BI, and advanced analytics training</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
