import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Trophy, Building2, FileText, CheckCircle2, ArrowRight, Target, FolderKanban, BadgeCheck } from "lucide-react"

export default function IndustryFirstPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary/10 to-black/90 z-10" />
          <img
            src="/modern-business-school-campus-with-students-collab.jpg"
            alt="Students collaborating"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-28 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/50 mb-8 animate-pulse">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">Industry first</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 text-balance bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Industry first
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed text-pretty">
              Designed around what companies actually hire for.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/25 inline-flex items-center justify-center gap-2">
                Explore Programs
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300">
                Download Curriculum Snapshot
              </button>
            </div>

            {/* Proof points */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-[#111]/80 backdrop-blur border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-gray-400 font-medium">Built with recruiters</span>
                </div>
                <div className="text-4xl font-black text-white leading-none">80+</div>
                <p className="text-gray-400 mt-2 leading-relaxed">Firms partnered directly with us to shape what we teach.</p>
              </div>

              <div className="bg-[#111]/80 backdrop-blur border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-gray-400 font-medium">Reverse engineered roles</span>
                </div>
                <div className="text-4xl font-black text-white leading-none">300+</div>
                <p className="text-gray-400 mt-2 leading-relaxed">Management job descriptions synthesised into a skills map.</p>
              </div>

              <div className="bg-[#111]/80 backdrop-blur border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-gray-400 font-medium">Outcome</span>
                </div>
                <div className="text-4xl font-black text-white leading-none">Hire-ready</div>
                <p className="text-gray-400 mt-2 leading-relaxed">By the time you graduate, you’re ready to be hired.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-radial-primary-10 opacity-40" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
                Designed for the job — not the classroom.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                We partnered directly with <span className="text-gray-200 font-semibold">80+ firms</span> that recruit for business roles. Our curriculum is based on a synthesis of{" "}
                <span className="text-gray-200 font-semibold">300+ management job descriptions</span> — worked backward to build the skills, projects, and assessments they expect.
                By the time you graduate, you’re hire-ready.
              </p>

              <div className="space-y-4">
                {[
                  "Curriculum mapped to what recruiters screen for.",
                  "Projects designed to simulate real role responsibilities.",
                  "Assessments that validate job-readiness (not just attendance)."
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <BadgeCheck className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">The Industry-First Method</h3>
                      <p className="text-gray-400 mt-1">Built backward from hiring expectations</p>
                    </div>
                  </div>

                  <ol className="space-y-6">
                    {[
                      {
                        title: "Partnered with recruiters",
                        desc: "We worked directly with 80+ firms that actively hire for business roles."
                      },
                      {
                        title: "Synthesised job requirements",
                        desc: "300+ job descriptions distilled into a clear, role-aligned competency map."
                      },
                      {
                        title: "Built the learning stack",
                        desc: "Skills, projects, and assessments designed to match what employers expect."
                      },
                      {
                        title: "Graduate hire-ready",
                        desc: "You don’t just learn — you demonstrate capability in a job-relevant way."
                      }
                    ].map((step, idx) => (
                      <li key={step.title} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-10 rounded-full bg-primary text-black font-black flex items-center justify-center shadow-lg">
                            {idx + 1}
                          </div>
                          {idx !== 3 ? <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-transparent mt-3" /> : null}
                        </div>
                        <div className="pt-1.5">
                          <div className="text-white font-bold text-lg">{step.title}</div>
                          <div className="text-gray-400 leading-relaxed">{step.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Outcome</p>
                    <p className="text-gray-200 leading-relaxed">
                      By graduation, you’ll have a recruiter-aligned toolkit:{" "}
                      <span className="text-white font-semibold">skills</span> that map to roles,{" "}
                      <span className="text-white font-semibold">projects</span> that prove impact, and{" "}
                      <span className="text-white font-semibold">assessments</span> that validate readiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What this unlocks */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,136,0.06),transparent_55%)] opacity-70" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">What this means for you</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                A curriculum that feels like the job — because it was designed from the job.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Role-aligned skill building</h3>
              <p className="text-gray-400 leading-relaxed">
                Learn the competencies recruiters screen for — and build confidence through repeated, structured application.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <FolderKanban className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Projects that prove capability</h3>
              <p className="text-gray-400 leading-relaxed">
                Work on projects designed to mirror real business problems — so your work becomes your proof.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Assessments built for outcomes</h3>
              <p className="text-gray-400 leading-relaxed">
                Validate your readiness with structured evaluations aligned to hiring expectations — not just theory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(0,255,136,0.06),transparent_65%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Trophy className="w-72 h-72 text-white" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-2xl">
                <p className="text-primary text-sm font-bold tracking-wider uppercase mb-3">Industry-first promise</p>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">By the time you graduate, you’re hire-ready.</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Built from recruiter partnerships and real job descriptions — worked backward into skills, projects, and assessments that employers expect.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/25">
                  Apply Now
                </button>
                <button className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300">
                  View Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}