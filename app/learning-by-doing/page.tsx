import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookOpen, Presentation, LayoutDashboard, Box, Megaphone, Layers, GitBranch, Briefcase, Target, Zap, CheckCircle, ArrowRight } from "lucide-react"

export default function LearningByDoingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/90 z-10" />
          <img src="/modern-university-faculty-teaching-in-high-tech-cl.jpg" alt="Learning by Doing" className="w-full h-full object-cover opacity-40" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary mb-8 animate-pulse">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">
                Pedagogy
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-balance bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Learning by Doing
            </h1>

            <p className="text-2xl md:text-3xl font-bold text-primary mb-8 max-w-3xl mx-auto">
              Real work. Real briefs. Real outcomes.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
              This is management education built for the real world. Move beyond theory and build a portfolio of tangible work.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Build Your Portfolio</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every module ends with something you can show. Don't just learn it—prove it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Presentation, title: "Presentations", desc: "Pitch decks and business proposals" },
              { icon: LayoutDashboard, title: "Dashboards", desc: "Data visualization and analytics" },
              { icon: Box, title: "Product Mockups", desc: "Prototypes and wireframes" },
              { icon: Megaphone, title: "Campaigns", desc: "Marketing strategies and creatives" },
              { icon: Layers, title: "Strategy Decks", desc: "Go-to-market and growth plans" },
              { icon: GitBranch, title: "Process Maps", desc: "Operations and workflow optimization" }
            ].map((item, index) => (
              <div key={index} className="bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,255,136,0.05),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Learn Through Immersion</h2>
              <p className="text-gray-400 text-lg max-w-xl">We replace textbooks with real-world context.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Briefcase className="w-32 h-32 text-white" />
              </div>
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Live Projects</h3>
                <p className="text-gray-400 leading-relaxed">
                  Work on active challenges from partner companies. Deliver solutions that get implemented, not just graded.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="w-32 h-32 text-white" />
              </div>
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Real Problem Statements</h3>
                <p className="text-gray-400 leading-relaxed">
                  Tackle ambiguous, complex problems sourced directly from industry leaders and startups.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen className="w-32 h-32 text-white" />
              </div>
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Case Immersions</h3>
                <p className="text-gray-400 leading-relaxed">
                  Deep-dive into historical and contemporary business cases to understand decision-making frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Conclusion Section */}
      <section className="py-24 bg-primary text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)] opacity-50" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            Work for Real Outcomes
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto opacity-90">
            This is management education built for the real world. Ready to start building?
          </p>
          <button className="px-10 py-5 bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 shadow-2xl hover:shadow-xl flex items-center gap-2 mx-auto">
            Apply Now <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

    </main>
  )
}