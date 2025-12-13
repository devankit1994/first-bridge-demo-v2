import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GraduationCap, Users, Clock, Target, Zap, Globe, Award, CheckCircle, Briefcase, TrendingUp, Cpu, DollarSign } from "lucide-react"

export default function PGPPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary/5 to-black/90 z-10" />
          <img src="/modern-business-school-campus-interior-with-studen.jpg" alt="Campus Interior" className="w-full h-full object-cover opacity-30" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/50 mb-8 animate-pulse">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">
                Post Graduate Program
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-12 text-balance bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Post Graduate Program in Management (PGP)
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
              A 2-year, industry-driven management program designed to prepare graduates for high-impact roles across product, strategy, operations, marketing, finance, and global business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/25">
                Apply Now
              </button>
              <button className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-radial-primary-10 opacity-50" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Quick Facts</h2>
              <p className="text-gray-400 text-lg max-w-xl">Everything you need to know about the program structure and requirements.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Eligibility - Spans 5 columns */}
            <div className="md:col-span-5 bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group shadow-lg">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Users className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Eligibility</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5" />
                  <span className="text-gray-300 text-lg">Bachelor's degree in any discipline</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5" />
                  <span className="text-gray-300 text-lg">Final-year students may apply</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5" />
                  <span className="text-gray-300 text-lg">No prior work experience required <span className="text-gray-500 text-sm block mt-1">(0–2 years preferred)</span></span>
                </li>
              </ul>
            </div>

            {/* Duration - Spans 7 columns */}
            <div className="md:col-span-7 bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group shadow-lg">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Clock className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Duration & Structure</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-24 pt-1">
                    <span className="text-3xl font-black text-white">02</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider block">Years</span>
                  </div>
                  <div className="flex-grow pt-2">
                    <div className="h-px w-full bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">Year 1</span>
                        <p className="text-gray-300">Business foundations, applied projects, and intensive industry modules.</p>
                      </div>
                      <div>
                        <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">Year 2</span>
                        <p className="text-gray-300">Specialisations, career tracks, 6-month internship, and global opportunities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialisations - Full Width */}
            <div className="md:col-span-12 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-15 transition-opacity">
                <Target className="w-64 h-64 text-white" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Target className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Specialisations (Career Tracks)</h3>
                    <p className="text-gray-400 mt-1">Choose from 12 contemporary tracks designed for the modern economy</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    "Product & Growth",
                    "Business & Strategy Consulting",
                    "AI, Data & BI for Managers",
                    "B2B Sales Leadership",
                    "D2C Growth & Category Management",
                    "Startup Leadership & Innovation",
                    "GCC Finance & GCC Operations"
                  ].map((track, index) => (
                    <div key={index} className="bg-white/5 hover:bg-white/15 border border-white/5 hover:border-primary/50 rounded-xl p-4 transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                      <span className="text-gray-300 font-medium">{track}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,136,0.05),transparent_50%)] opacity-60" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Zap className="h-7 w-7 text-primary group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Learn by Doing</h3>
              <p className="text-gray-400">Live projects, case immersions, simulations, and company problem statements built into every term.</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Award className="h-7 w-7 text-primary group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Industry-First Curriculum</h3>
              <p className="text-gray-400">Modules designed in collaboration with recruiters and aligned to real job descriptions.</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Cpu className="h-7 w-7 text-primary group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The AI Advantage</h3>
              <p className="text-gray-400">Analytics, automation, and GenAI tools integrated across courses to make you tech-fluent as a manager.</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Briefcase className="h-7 w-7 text-primary group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Practitioner Faculty</h3>
              <p className="text-gray-400">Learn from experienced operators, industry leaders, and senior professionals who bring real-world context into every class.</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="h-7 w-7 text-primary group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">6-Month Internship</h3>
              <p className="text-gray-400">A structured, full-time internship in the second year to build experience and confidence.</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Globe className="h-7 w-7 text-primary group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Opportunities</h3>
              <p className="text-gray-400">International immersions, partner-school interactions, and optional semester-abroad pathways.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.05),transparent_70%)]" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Admissions Process</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A streamlined journey to join the next generation of business leaders.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="h-24 w-24 rounded-full bg-[#111] border border-primary/20 flex items-center justify-center mb-8 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all duration-500 relative z-10">
                  <div className="h-20 w-20 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-black font-bold flex items-center justify-center text-sm shadow-lg">1</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Online Application</h3>
                <p className="text-gray-400 leading-relaxed">Submit your academic details and profile through our secure portal.</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="h-24 w-24 rounded-full bg-[#111] border border-primary/20 flex items-center justify-center mb-8 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all duration-500 relative z-10">
                  <div className="h-20 w-20 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-black font-bold flex items-center justify-center text-sm shadow-lg">2</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Personal Interview</h3>
                <p className="text-gray-400 leading-relaxed">A one-on-one interaction to understand your aspirations and potential.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="h-24 w-24 rounded-full bg-[#111] border border-primary/20 flex items-center justify-center mb-8 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all duration-500 relative z-10">
                  <div className="h-20 w-20 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-black font-bold flex items-center justify-center text-sm shadow-lg">3</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Selection & Offer</h3>
                <p className="text-gray-400 leading-relaxed">Merit-based selection with scholarship opportunities for eligible candidates.</p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors duration-300">
              <DollarSign className="h-5 w-5 text-primary" />
              <span className="text-gray-300 font-medium">Scholarships available for select candidates</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}