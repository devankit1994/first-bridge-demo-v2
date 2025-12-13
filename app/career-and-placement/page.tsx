import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Briefcase,
  CheckCircle2,
  ClipboardCheck,
  FolderKanban,
  Sparkles,
  Target,
  TrendingUp,
  Wrench
} from "lucide-react"

const stats = [
  {
    label: "India startup jobs by 2030",
    value: "50M+",
    description: "New roles expected to be created across the ecosystem.",
    icon: TrendingUp
  },
  {
    label: "New GCC roles projected",
    value: "1.3M",
    description: "Incremental roles expected to be added in the coming years.",
    icon: Target
  },
  {
    label: "GCC workforce size",
    value: "3.5M",
    description: "Projected total professionals across GCCs.",
    icon: Briefcase
  }
]

const alignmentPillars = [
  {
    title: "Hiring competencies",
    description: "Role-based capabilities mapped to real job scorecards.",
    icon: CheckCircle2
  },
  {
    title: "Industry tools",
    description: "Learn the stacks teams actually use to ship outcomes.",
    icon: Wrench
  },
  {
    title: "Assessment formats",
    description: "Case, assignment, and interview formats recruiters expect.",
    icon: ClipboardCheck
  },
  {
    title: "Portfolio-ready projects",
    description: "Work you can show: scoped, measurable, and outcomes-first.",
    icon: FolderKanban
  }
]

const careerTracks = [
  "Product Management",
  "Product Growth & Monetization",
  "Strategy & Consulting",
  "Marketing & Brand",
  "Performance & Growth Marketing",
  "B2B Sales & Revenue",
  "Operations & Program Management",
  "AI / Analytics for Business",
  "GCC Roles (Finance / Operations)",
  "Corporate Finance & FP&A",
  "Business Development & Partnerships",
  "Founder’s Office / Chief of Staff"
]

export default function CareerPlacementPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary/5 to-black/90 z-10" />
          <img
            src="/modern-business-school-campus-with-students-collab.jpg"
            alt="Career and Placements"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/50 mb-8 animate-pulse">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">Career & Placements</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 text-balance bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Designed with industry at the centre.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed text-pretty">
              Firstbridge’s placement ecosystem is designed backward from the roles companies hire for. Every project,
              every module, every assessment, every internship, and every specialisation is aligned to real hiring
              funnels. By the time you’re in the placement cycle, you’re stepping into roles you’ve already trained for.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/25">
                Explore Career Tracks
              </button>
              <button className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300">
                Placement Ecosystem
              </button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {alignmentPillars.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Emerging career paths */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-radial-primary-10 opacity-40" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-5">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-primary text-xs font-bold tracking-wider uppercase">Emerging career paths</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                Aligned with the fastest-growing career paths.
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                India’s startup ecosystem is expected to create over 50 million new jobs by 2030, while Global Capability
                Centres (GCCs) are projected to add 1.3 million new roles, taking the sector to nearly 3.5 million
                professionals. Firstbridge prepares students for the roles where opportunity is expanding the fastest.
              </p>
            </div>

            <div className="w-full lg:w-[420px] bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-lg">
              <div className="absolute -top-14 -right-16 opacity-10">
                <TrendingUp className="w-56 h-56 text-white" />
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-3">What this means for you</h3>
                <p className="text-gray-400 leading-relaxed">
                  You don’t just “learn management.” You train for the hiring funnels where demand is accelerating — with
                  the same tools, competencies, and evaluation formats companies use.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    "Tracks mapped to real job families",
                    "Projects designed like hiring assignments",
                    "Internship depth that converts into offers"
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-gray-300">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.label}
                  className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between gap-6 mb-8">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-black text-white tracking-tight">{s.value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{s.label}</div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{s.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Career tracks */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,136,0.06),transparent_55%)] opacity-70" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-14">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Career Tracks Aligned to Real Roles
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Choose from 12 industry-defined pathways in Product, Strategy, Marketing, Sales, Operations, AI/Analytics,
                GCC roles, Finance and more.
              </p>
            </div>

            <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-primary/5 border border-primary/20">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-gray-300 font-medium">Each track maps directly to hiring outcomes</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-start gap-5 mb-10">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">12 pathways. One purpose.</h3>
                  <p className="text-gray-400">
                    Make your learning plan legible to recruiters: skill signals, tool fluency, assessment readiness, and
                    a portfolio that shows outcomes.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {careerTracks.map((track) => (
                  <div
                    key={track}
                    className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/40 rounded-2xl p-5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-gray-200 font-semibold">{track}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-3">The alignment model</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Every pathway is reverse-engineered from how companies evaluate candidates — not just what they say they
                  want.
                </p>

                <div className="space-y-4">
                  {alignmentPillars.map((p) => {
                    const Icon = p.icon
                    return (
                      <div
                        key={p.title}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
                      >
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-white font-bold">{p.title}</div>
                          <div className="text-gray-400 text-sm leading-relaxed">{p.description}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-2xl bg-primary/15 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Outcome: placement-ready by design</h4>
                    <p className="text-gray-300 leading-relaxed">
                      When placements begin, you’re not “preparing.” You’re executing — with role-specific muscle memory.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="mt-16">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>
        </div>
      </section>

      {/* Advantage: 6-month internship */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,255,136,0.05),transparent_55%)] opacity-70" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">Advantage</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">6 month internship</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              A six-month internship creates depth, not just exposure. Students deliver meaningful outcomes, companies
              see real performance, and genuine learning takes root.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 bg-[#111] border border-white/10 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-start gap-5 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Depth over exposure</h3>
                  <p className="text-gray-400 leading-relaxed">
                    You’re evaluated on outcomes — not attendance. That’s how real offers are earned.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Students", text: "Own scoped deliverables with measurable impact." },
                  { title: "Companies", text: "See performance over time — not a one-day interview." },
                  { title: "Learning", text: "Build repeatable skills through real constraints." }
                ].map((i) => (
                  <div key={i.title} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="text-white font-bold">{i.title}</div>
                    <div className="text-gray-400 mt-1">{i.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-10 relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="absolute -bottom-28 -right-20 opacity-10">
                <FolderKanban className="w-72 h-72 text-white" />
              </div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-8">How it compounds</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    {
                      step: "Month 1–2",
                      title: "Ramp & tool fluency",
                      description: "Role onboarding, tool stacks, execution rhythm."
                    },
                    {
                      step: "Month 3–4",
                      title: "Ownership",
                      description: "Lead a defined workstream with stakeholder reviews."
                    },
                    {
                      step: "Month 5–6",
                      title: "Outcomes",
                      description: "Deliver measurable impact and present a portfolio artifact."
                    }
                  ].map((card) => (
                    <div
                      key={card.step}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="text-primary font-bold text-sm uppercase tracking-wider mb-2">{card.step}</div>
                      <div className="text-white font-bold text-lg mb-2">{card.title}</div>
                      <div className="text-gray-400 text-sm leading-relaxed">{card.description}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-primary/5 border border-primary/20 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-gray-200 font-medium">Internship outcomes feed directly into the placement funnel.</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    Projects → Signals → Interviews → Offers
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA band */}
          <div className="mt-16">
            <div className="bg-[#111] border border-white/10 rounded-3xl p-10 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Briefcase className="w-80 h-80 text-white" />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Built to convert effort into offers.</h3>
                  <p className="text-gray-400 max-w-2xl">
                    From day one, your learning artifacts are designed to become proof of capability in the hiring
                    funnel.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/25">
                    Apply Now
                  </button>
                  <button className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300">
                    Talk to Admissions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}