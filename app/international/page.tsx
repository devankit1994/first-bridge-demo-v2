import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  CheckCircle,
  Compass,
  Globe,
  GraduationCap,
  Landmark,
  Network,
  Users,
  type LucideIcon
} from "lucide-react"

type Pathway = {
  title: string
  subtitle: string
  icon: LucideIcon
  points: string[]
  highlight?: string
}

const pathways: Pathway[] = [
  {
    title: "Global Immersions",
    subtitle: "Short, high-intensity international study experiences at international locations",
    icon: Compass,
    points: [
      "Visit international campuses and innovation hubs",
      "Work on cross-cultural business cases",
      "Explore how strategy, product, finance, and operations differ across markets"
    ],
    highlight:
      "Focused, transformational, and designed to give you real global perspective."
  },
  {
    title: "Semester Abroad (Exchange Term)",
    subtitle: "Spend a term at a partner institution abroad with credit transfer.",
    icon: GraduationCap,
    points: [
      "Attend courses alongside international students",
      "Get exposure to new teaching styles and global business culture",
      "Access to international career services and networks",
      "Building friendships and connections across continents"
    ]
  },
  {
    title: "Faculty Residencies from Global Universities",
    subtitle:
      "International faculty visit Firstbridge through structured residencies, bringing world-class teaching directly to campus.",
    icon: Users,
    points: [
      "Courses delivered by professors from partner universities",
      "Joint seminars & masterclasses",
      "Research and industry interactions",
      "Mentorship for students pursuing global pathways"
    ],
    highlight: "This ensures students experience global education without even leaving campus."
  }
]

export default function InternationalPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary/5 to-black/90 z-10" />
          <img
            src="/modern-business-school-campus-with-students-collab.jpg"
            alt="International"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,255,136,0.10),transparent_45%)] z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.06),transparent_40%)] z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/50 mb-8 animate-pulse">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">
                International
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 text-balance bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Global exposure designed for a global career.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
              Business today is borderless, and your learning should be too.
              Firstbridge’s international ecosystem gives students the opportunity
              to experience global markets, global teaching, and global ways of
              thinking — from short-term immersions to semester-long exchanges and
              visiting faculty from leading institutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/25">
                Explore Pathways
              </button>
              <button className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300">
                View Global Calendar
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16">
              <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Compass className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Immersions</h3>
                <p className="text-gray-400 leading-relaxed">
                  High-intensity study experiences at international locations.
                </p>
              </div>

              <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <GraduationCap className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Exchange Term</h3>
                <p className="text-gray-400 leading-relaxed">
                  A semester abroad with credit transfer at partner institutions.
                </p>
              </div>

              <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Network className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Faculty</h3>
                <p className="text-gray-400 leading-relaxed">
                  Visiting residencies that bring world-class teaching to campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(0,255,136,0.08),transparent_60%)] opacity-70" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <Landmark className="h-4 w-4 text-primary" />
                <span className="text-primary text-xs font-bold tracking-wider uppercase">
                  Global Ecosystem
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
                Learn like the world works.
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Firstbridge’s international ecosystem is designed to build true
                global fluency: how markets behave, how teams operate across
                cultures, and how leaders make decisions in different business
                environments. Your education extends far beyond Gurgaon.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="absolute -top-16 -right-20 opacity-10">
                  <Globe className="w-72 h-72 text-white" />
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Markets",
                      description:
                        "Observe how strategy and execution shift across geographies."
                    },
                    {
                      title: "Methods",
                      description:
                        "Experience diverse teaching styles and global classroom culture."
                    },
                    {
                      title: "Mindset",
                      description:
                        "Build cross-cultural communication and leadership confidence."
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all"
                    >
                      <div className="h-1 w-10 bg-gradient-to-r from-primary to-transparent rounded-full mb-4" />
                      <h3 className="text-white font-bold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,136,0.06),transparent_50%)] opacity-70" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              International Pathways
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              From immersive study trips to a full exchange term and faculty
              residencies, choose the global exposure that matches your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pathways.map((p, idx) => {
              const Icon = p.icon
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="w-48 h-48 text-white" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white leading-tight">
                          {p.title}
                        </h3>
                        <p className="text-gray-400 mt-2 leading-relaxed">
                          {p.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {p.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                          <p className="text-gray-300 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>

                    {p.highlight ? (
                      <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-5">
                        <p className="text-primary font-medium leading-relaxed">
                          {p.highlight}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Flow */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,255,136,0.05),transparent_55%)] opacity-70" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              How your global journey unfolds
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A clean, guided experience — designed to be practical, career-relevant,
              and easy to plan around your academic schedule.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  title: "Choose your pathway",
                  description:
                    "Pick immersions, an exchange term, or global faculty experiences aligned to your goals.",
                  icon: Globe,
                  step: 1
                },
                {
                  title: "Prepare with support",
                  description:
                    "Get academic guidance, cultural readiness, and learning outcomes mapped to your curriculum.",
                  icon: Users,
                  step: 2
                },
                {
                  title: "Return with perspective",
                  description:
                    "Apply what you learned through cases, projects, and career conversations powered by global context.",
                  icon: ArrowRight,
                  step: 3
                }
              ].map((s, i) => {
                const Icon = s.icon
                return (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="h-24 w-24 rounded-full bg-[#111] border border-primary/20 flex items-center justify-center mb-8 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all duration-500 relative z-10">
                      <div className="h-20 w-20 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-black font-bold flex items-center justify-center text-sm shadow-lg">
                        {s.step}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{s.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.06),transparent_65%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-lg">
            <div className="absolute -top-24 -right-24 opacity-10">
              <Globe className="w-80 h-80 text-white" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-5">
                  <Network className="h-4 w-4 text-primary" />
                  <span className="text-primary text-xs font-bold tracking-wider uppercase">
                    Global Advantage
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Build a career that travels well.
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Whether you want international exposure, global networks, or a stronger
                  cross-cultural edge — your pathway starts here.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/25">
                  Talk to Admissions
                </button>
                <button className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300">
                  Explore Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}