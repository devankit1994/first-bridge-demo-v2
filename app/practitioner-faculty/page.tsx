import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import {
  Users,
  BriefcaseBusiness,
  Building2,
  Layers,
  Bot,
  Globe2,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from "lucide-react"

const facultyCompanySignals = ["BCG", "Amazon", "Adobe", "Unilever", "High-growth startups", "Global firms"]

const foundations = [
  "Problem Solving & Decision Sciences",
  "Marketing, Growth & Brand Building",
  "Product & Business Strategy",
  "Finance, FP&A & Unit Economics",
  "Operations, SCM & Service Delivery",
  "Managerial Communication & Influence"
]

const studios = [
  "Live projects with startups and corporates",
  "Product teardown labs & growth experiments",
  "Market entry strategy drills",
  "Revenue, pricing & commercial workshops",
  "Operational design & process mapping",
  "Financial modelling & business analytics cases"
]

const tools = [
  "GenAI for research, writing, ideation & analysis",
  "Business analytics & dashboarding",
  "SQL-lite & data interpretation",
  "Modern productivity + collaboration stacks",
  "Automation tools for marketing, ops, and finance"
]

const specialisations = [
  "Product & Growth",
  "Strategy & Consulting",
  "AI & Business Intelligence",
  "Marketing & Growth Analytics",
  "Applied finance",
  "B2B Sales",
  "D2C Sales Leadership",
  "Customer Success & Partnerships",
  "Startup leadership & Founder’s Office",
  "GCC Finance",
  "GCC Operations"
]

export default function PractitionerFacultyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary/5 to-black/90 z-10" />
          <img
            src="/professional-indian-female-professor-in-business-a.jpg"
            alt="Practitioner faculty"
            className="w-full h-full object-cover opacity-35"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-28 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/50 mb-8 animate-pulse">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">Practitioner Faculty</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 text-balance bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Learn from people who’ve done the work you aspire to do.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed text-pretty">
              Your faculty includes founders, product leaders, CXOs, and specialists from high-growth startups and global
              firms. They bring decades of experience from companies like BCG, Amazon, Adobe, Unilever, and fast-scaling
              Indian startups. Every session blends academic clarity with practical wisdom through lessons from people
              who’ve been there, done that.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
              {facultyCompanySignals.map((label) => (
                <div
                  key={label}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm hover:border-primary/40 hover:bg-white/10 transition-colors"
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 text-left">
              <div className="bg-[#111] border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <BriefcaseBusiness className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Operators, not observers</h3>
                <p className="text-gray-400 leading-relaxed">
                  Learn from leaders who’ve shipped products, scaled teams, and owned outcomes — not just frameworks.
                </p>
              </div>

              <div className="bg-[#111] border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Sparkles className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Clarity + craft</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every session blends academic clarity with practical wisdom, grounded in real stories and decisions.
                </p>
              </div>

              <div className="bg-[#111] border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Building2 className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Built for modern companies</h3>
                <p className="text-gray-400 leading-relaxed">
                  The curriculum is engineered backwards from what teams actually use, and what roles hire for.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pgp"
                className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/25 inline-flex items-center justify-center gap-2"
              >
                Explore PGP <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pgp-x"
                className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Explore PGP X <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Snapshot */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-radial-primary-10 opacity-40" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Curriculum Snapshot</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                A management curriculum rebuilt for the modern business world.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 w-fit">
              <Layers className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">Three Layers</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Big statement */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                  <Bot className="h-4 w-4 text-primary" />
                  <span className="text-gray-200 text-xs font-semibold tracking-wider uppercase">
                    Made for Industry • Delivered through Action • Powered by AI
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight text-balance">
                  Career preparation disguised as a curriculum.
                </h3>

                <p className="text-gray-300 leading-relaxed text-lg">
                  A curriculum that teaches you what industry actually uses, makes you fluent in AI, and prepares you
                  for meaningful careers — from day one. The Firstbridge curriculum has been engineered backwards starting
                  from the roles companies hire for, the skills they expect on day one, and the tools their teams
                  actually use.
                </p>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Practical, applied, problem-solving first",
                    "Deeply integrated with real business work",
                    "Built around modern tools and AI workflows",
                    "Designed to match job roles and expectations"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Short explainer */}
            <div className="lg:col-span-5 bg-[#111] border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <h4 className="text-2xl font-bold text-white mb-4">How learning works here</h4>
              <p className="text-gray-400 leading-relaxed mb-6">
                This is not classroom learning. This is career preparation designed to build confidence through
                repetition, feedback, and real deliverables.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Start with roles", text: "Understand what companies hire for, and what day-one skills look like." },
                  { label: "Learn by building", text: "Work on briefs, cases, decks, dashboards, models, mockups, and flows." },
                  { label: "Graduate job-ready", text: "Specialisations include role-specific projects and interview prep." }
                ].map((row) => (
                  <div key={row.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="text-primary text-xs font-bold tracking-wider uppercase mb-2">{row.label}</div>
                    <div className="text-gray-200 leading-relaxed">{row.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Layers */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(0,255,136,0.06),transparent_55%)] opacity-70" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Three Layers. One Transformational Journey.</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              The essentials, taught through real briefs — plus applied studios and AI fluency integrated everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Layer 1 */}
            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <Layers className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <div className="h-10 w-10 rounded-full bg-primary text-black font-black flex items-center justify-center">1</div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Business Foundations — Built for the Modern Manager</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                The essentials, taught through real briefs rather than textbooks. You learn by using them.
              </p>

              <div className="space-y-3">
                {foundations.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Layer 2 */}
            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <BriefcaseBusiness className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <div className="h-10 w-10 rounded-full bg-primary text-black font-black flex items-center justify-center">2</div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Applied Learning Studios — Learn by Doing</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                The signature Firstbridge experience. Real companies, real problems, real deliverables.
              </p>

              <div className="space-y-3 mb-6">
                {studios.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
                <p className="text-gray-200 leading-relaxed">
                  Each studio ends with something you can show: decks, dashboards, models, mockups, flows, pitches — and
                  outcomes like market traction, revenue, and growth.
                </p>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <Bot className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <div className="h-10 w-10 rounded-full bg-primary text-black font-black flex items-center justify-center">3</div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">AI, Data & Industry Tools — Integrated Everywhere</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                AI is part of every subject, with specialized AI courses too. You learn to work with AI as a manager.
              </p>

              <div className="space-y-3">
                {tools.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialisations */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,255,136,0.05),transparent_55%)] opacity-70" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Career-Aligned Specialisations</h2>
              <p className="text-gray-400 text-lg max-w-3xl">
                Choose from high-growth tracks, each custom-designed to map to real job roles.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-gray-200 text-xs font-semibold tracking-wider uppercase">Role-specific outcomes</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {specialisations.map((track) => (
                  <div
                    key={track}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 rounded-2xl p-4 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="text-gray-200 font-medium">{track}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <p className="text-gray-200 leading-relaxed">
                  Each track includes role-specific projects, company assessments, and interview preparation tied to that
                  field.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Designed to be showable</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                You don’t just learn concepts — you build proof. Your portfolio grows with every studio, track project,
                and assessment.
              </p>

              <div className="space-y-4">
                {[
                  "Decks, dashboards, and models",
                  "Pitches, flows, and mockups",
                  "Growth experiments and teardowns",
                  "Commercial and operational playbooks"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Merge + Global Exposure */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Where classroom and industry merge</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Apply what you learn inside companies, and broaden your worldview through global exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <BriefcaseBusiness className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">6-Month Internship (PGP) / Leadership Capstone (PGP X)</h3>
              <p className="text-gray-400 leading-relaxed">
                Where learning becomes performance. You apply everything you’ve learned inside a company or through a
                leadership project — with faculty and industry mentors guiding you.
              </p>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Globe2 className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Exposure</h3>
              <p className="text-gray-400 leading-relaxed">
                International immersions, partner school modules, industry visits, and global case rooms give you the
                worldview required for modern business careers.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl opacity-60" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div>
                  <div className="text-primary text-xs font-bold tracking-wider uppercase mb-3">Faculty x Curriculum</div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3 text-balance">
                    Learn from practitioners. Graduate as one.
                  </h3>
                  <p className="text-gray-400 text-lg max-w-2xl">
                    The fastest path to confidence is building real work with people who’ve already done it at the
                    highest levels.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/programs"
                    className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/25 inline-flex items-center justify-center gap-2"
                  >
                    View Programs <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/admission"
                    className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300 inline-flex items-center justify-center gap-2"
                  >
                    Admissions <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}