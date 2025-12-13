import { Navigation } from "@/components/navigation"
import { Star, Users, Clock, Target, Award, CheckCircle, Briefcase, TrendingUp, Rocket, Brain, Layout, Building } from "lucide-react"

export default function PGPXPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/90 z-10" />
          <img src="/professional-indian-male-professor-in-business-att.jpg" alt="Executive Program" className="w-full h-full object-cover opacity-40" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary mb-8 animate-pulse">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">
                One-Year Executive Track
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 text-balance bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              PGP X — One-Year Post Graduate Program in Management
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed text-pretty">
              An accelerated, industry-first management program designed exclusively for professionals with 3+ years of work experience who want to transition into higher-responsibility roles across product, strategy, business leadership, and global functions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/25">
                Apply Now
              </button>
              <button className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts & Who Is It For */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Program Overview</h2>
            <p className="text-gray-400 text-lg max-w-xl">Designed for experienced professionals aiming for career acceleration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Eligibility */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white">Eligibility</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5" />
                  <span className="text-gray-300 text-lg">Minimum 3 years of full-time work experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5" />
                  <span className="text-gray-300 text-lg">Bachelor’s degree in any discipline</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5" />
                  <span className="text-gray-300 text-lg">Ideal for professionals aiming for career acceleration or role transitions</span>
                </li>
              </ul>
            </div>

            {/* Who Is It Designed For */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <Users className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who Is It Designed For?</h3>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5" />
                  <span className="text-gray-300">Move into product, strategy, and business leadership roles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5" />
                  <span className="text-gray-300">Transition from specialist tracks into management positions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5" />
                  <span className="text-gray-300">Accelerate career into roles with larger scope and decision-making</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5" />
                  <span className="text-gray-300">Build cross-functional fluency (business + tech + leadership)</span>
                </li>
              </ul>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-primary text-sm font-medium">
                  This is not a foundational program — it is a career accelerator for working professionals.
                </p>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                <Clock className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Duration: 1 Year Full Time</h3>
                <p className="text-gray-400">Intensive 3-term structure</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-colors">
                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-3 block">Term 1</span>
                <h4 className="text-white font-bold mb-2">Foundations</h4>
                <p className="text-gray-400 text-sm">Core business mastery, strategic thinking, leadership foundations</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-colors">
                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-3 block">Term 2</span>
                <h4 className="text-white font-bold mb-2">Advanced & Cross-Functional</h4>
                <p className="text-gray-400 text-sm">Advanced topics & cross-functional problem solving</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-colors">
                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-3 block">Term 3</span>
                <h4 className="text-white font-bold mb-2">Applied Leadership</h4>
                <p className="text-gray-400 text-sm">Applied leadership studio + 3-month capstone or internship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialisations */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Specialisations</h2>
              <p className="text-gray-400 text-lg">Career tracks designed for the modern economy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Product Leadership & Growth Strategy",
              "Business Strategy & Transformation",
              "AI-Driven Decision Making for Managers",
              "GCC Leadership (Finance / Operations)",
              "Startup Leadership & Innovation",
              "Applied Finance",
              "Commercial & Revenue Leadership"
            ].map((track, index) => (
              <div key={index} className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                  <Target className="h-5 w-5 text-primary group-hover:text-black" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{track}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,136,0.05),transparent_50%)] opacity-60" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Program Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Executive-Focused Curriculum</h3>
              <p className="text-gray-400">Designed specifically for learners with prior work experience — fast-paced, application-heavy, and rooted in real business challenges.</p>
            </div>

            {/* Highlight 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Leadership & Decision-Making</h3>
              <p className="text-gray-400">Advanced coursework in strategic thinking, influence, cross-functional leadership, and stakeholder management.</p>
            </div>

            {/* Highlight 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Industry Practitioners as Faculty</h3>
              <p className="text-gray-400">CXOs, founders, senior operators, and experts from global firms teach through real cases from their careers.</p>
            </div>

            {/* Highlight 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Layout className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Applied Leadership Studio</h3>
              <p className="text-gray-400">A signature component where students lead a live business challenge with a partner company.</p>
            </div>

            {/* Highlight 5 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Accelerated Career Transition</h3>
              <p className="text-gray-400">Dedicated pathways for moving into mid-level management, not entry-level roles.</p>
            </div>

            {/* Highlight 6 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Capstone / Internship</h3>
              <p className="text-gray-400">A leadership-oriented project or internship (3 months) to demonstrate capability in real business environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <TrendingUp className="w-96 h-96 text-white" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Career Pathways</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Product Lead / Senior Product Analyst",
                  "Strategy Manager / Transformation Lead",
                  "Program Manager / Business Operations Manager",
                  "Revenue & Commercial Strategy Manager",
                  "FP&A Manager / Business Finance Partner",
                  "Innovation, Venture, or Founder’s Office roles"
                ].map((role, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-gray-200 font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Admissions Process</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A streamlined journey for experienced professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0" />

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group relative z-10">
              <div className="h-24 w-24 rounded-full bg-[#111] border border-primary/20 flex items-center justify-center mb-8 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all duration-500 relative">
                <div className="h-20 w-20 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Layout className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-black font-bold flex items-center justify-center text-sm shadow-lg">1</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Online Application</h3>
              <p className="text-gray-400">Detailed work profile and resume review.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group relative z-10">
              <div className="h-24 w-24 rounded-full bg-[#111] border border-primary/20 flex items-center justify-center mb-8 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all duration-500 relative">
                <div className="h-20 w-20 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-black font-bold flex items-center justify-center text-sm shadow-lg">2</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Personal Interview</h3>
              <p className="text-gray-400">Leadership readiness assessed.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group relative z-10">
              <div className="h-24 w-24 rounded-full bg-[#111] border border-primary/20 flex items-center justify-center mb-8 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all duration-500 relative">
                <div className="h-20 w-20 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-black font-bold flex items-center justify-center text-sm shadow-lg">3</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Selection</h3>
              <p className="text-gray-400">Scholarships available for select experienced candidates.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}