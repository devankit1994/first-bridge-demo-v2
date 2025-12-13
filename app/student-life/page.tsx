import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Heart,
  Sparkles,
  Trophy,
  CalendarDays,
  Users,
  Mic,
  Briefcase,
  Megaphone,
  BadgeDollarSign,
  Settings,
  Code2,
  BarChart3,
  CreditCard,
  MapPin,
  Dumbbell,
  Coffee,
  Building2,
  TicketCheck,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export default function StudentLifePage() {
  const eventPillars = [
    {
      title: "Business fests & case competitions",
      icon: Trophy,
      description: "Compete with peers, solve real business cases, and present like a professional."
    },
    {
      title: "Hackathons, sprints & innovation challenges",
      icon: Sparkles,
      description: "Build, iterate, and pitch — fast. Learn what execution under pressure feels like."
    },
    {
      title: "Guest lectures from startup founders & corporate leaders",
      icon: Mic,
      description: "Hear directly from builders and decision-makers shaping modern business."
    },
    {
      title: "Exclusive invites to marquee industry conferences and ecosystem events",
      icon: Briefcase,
      description: "Step into rooms where the industry meets — and start building your network early."
    }
  ]

  const clubs = [
    { title: "Marketing Club", icon: Megaphone },
    { title: "Finance Club", icon: BadgeDollarSign },
    { title: "Operations Club", icon: Settings },
    { title: "Product & Tech Club", icon: Code2 },
    { title: "Analytics & Data Club", icon: BarChart3 }
  ]

  const cardAccess = [
    { title: "Sports & fitness facilities", icon: Dumbbell },
    { title: "Co-working and creativity spaces", icon: Building2 },
    { title: "Cafés, restaurants & clubs", icon: Coffee },
    { title: "Recreation zones & lifestyle hubs in Gurgaon", icon: MapPin }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero / Snapshot */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary/5 to-black/90 z-10" />
          <img
            src="/modern-business-school-campus-with-students-collab.jpg"
            alt="Student Life"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,136,0.10),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_50%)]" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-28 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/50 mb-8 animate-pulse">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">
                Student Life Snapshot
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-balance bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              A campus experience designed to build skills, networks, and unforgettable memories.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
              Student life at Firstbridge blends industry exposure, vibrant campus culture, and curated
              experiences across Gurgaon. It’s energetic, competitive, connected, and built to shape
              confident, well-rounded professionals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
              <div className="bg-[#111]/80 backdrop-blur-sm border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <CalendarDays className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Events & Exposure</h3>
                <p className="text-gray-400">
                  Compete, host, pitch, showcase, and network — every month brings a new opportunity.
                </p>
              </div>

              <div className="bg-[#111]/80 backdrop-blur-sm border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Users className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Student Clubs</h3>
                <p className="text-gray-400">
                  Workshops, simulations, speaker sessions, competitions, and student-led projects.
                </p>
              </div>

              <div className="bg-[#111]/80 backdrop-blur-sm border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <CreditCard className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">The Firstbridge Card</h3>
                <p className="text-gray-400">
                  The city becomes your extended campus — learn, unwind, network, and explore.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admission"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/25"
              >
                See Admissions
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/campus"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300"
              >
                Explore Campus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Where Learning Extends Beyond the Classroom */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-radial-primary-10 opacity-50" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-primary text-xs font-bold tracking-wider uppercase">
                  Beyond the Classroom
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight text-balance">
                Where Learning Extends Beyond the Classroom
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                Student life at Firstbridge is designed as a high-energy ecosystem — where campus
                culture meets industry access. You’ll build confidence, communication, and leadership
                through experiences that feel real because they are.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "Energetic",
                    desc: "A vibrant, always-on campus with something new to join every month."
                  },
                  {
                    title: "Competitive",
                    desc: "Events and challenges that push you to raise your standards."
                  },
                  {
                    title: "Connected",
                    desc: "Peers, mentors, alumni, and ecosystem access — built into the journey."
                  },
                  {
                    title: "Career-Shaping",
                    desc: "Skills, networks, and stories you’ll carry into interviews and roles."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  >
                    <div className="h-px w-full bg-gradient-to-r from-primary/40 to-transparent mb-5" />
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4">A month at Firstbridge</h3>
                  <p className="text-gray-400 mb-8">
                    You’ll compete, host, pitch, showcase, and network — with curated touchpoints
                    across Gurgaon’s ecosystem.
                  </p>

                  <div className="space-y-4">
                    {[
                      { label: "Campus events & competitions", icon: Trophy },
                      { label: "Clubs & student-led projects", icon: Users },
                      { label: "Industry sessions & talks", icon: Mic },
                      { label: "City access with the Firstbridge Card", icon: CreditCard }
                    ].map((row, index) => {
                      const Icon = row.icon
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
                        >
                          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-gray-200 font-medium">{row.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events, Competitions & Industry Exposure */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(0,255,136,0.06),transparent_55%)] opacity-80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Events, Competitions & Industry Exposure
              </h2>
              <p className="text-gray-400 text-lg">
                The fastest way to grow is to ship work in public — and keep showing up where the
                industry is.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/20">
              <TicketCheck className="h-5 w-5 text-primary" />
              <span className="text-gray-300 font-medium">Every month brings a new opportunity</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Featured (left) */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <CalendarDays className="w-48 h-48 text-white" />
              </div>

              <div className="relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <CalendarDays className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">You’ll show up. Often.</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  From pitch nights to case comps to closed-door conferences — student life is a
                  rhythm of high-quality reps that build confidence and a strong network.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
                  <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-2">
                    What it feels like
                  </p>
                  <p className="text-gray-300">
                    A calendar that’s busy for the right reasons — and a community that pushes you to
                    level up.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillars (right) */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {eventPillars.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="bg-[#111] border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Student Clubs */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-primary text-xs font-bold tracking-wider uppercase">Student Clubs</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Build real managerial skills — together
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                These clubs organise workshops, simulations, speaker sessions, competitions, and
                student-led projects that build real managerial skills.
              </p>

              <div className="bg-[#111] border border-white/10 rounded-3xl p-7">
                <p className="text-gray-400 leading-relaxed">
                  Expect student leadership roles, cross-functional collaboration, and plenty of
                  opportunities to create work you can showcase.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {clubs.map((club, index) => {
                  const Icon = club.icon
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                    >
                      <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{club.title}</h3>
                      <p className="text-gray-400">
                        Workshops, simulations, speaker sessions, competitions, and student-led projects.
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Student-led, outcome-driven</h4>
                    <p className="text-gray-300">
                      Host events. Run competitions. Build projects. Lead teams. This is where you practice being
                      the kind of manager you want to become.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firstbridge Card */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_60%,rgba(0,255,136,0.06),transparent_60%)] opacity-80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <CreditCard className="h-4 w-4 text-primary" />
                <span className="text-primary text-xs font-bold tracking-wider uppercase">
                  The Firstbridge Card
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight text-balance">
                Your Access to the City
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                A standout feature of student life. The Firstbridge Card gives students exclusive access and
                special discounts across Gurgaon — transforming the city into an extended campus.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {cardAccess.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-5 rounded-3xl bg-[#111] border border-white/10 hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-gray-200 font-medium">{item.title}</span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-10 bg-primary/5 border border-primary/20 rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Extended campus, real life</h4>
                    <p className="text-gray-300">
                      Learn, unwind, network, and explore — the city becomes part of your education.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Mock */}
            <div className="w-full lg:w-[440px]">
              <div className="bg-gradient-to-br from-primary/20 via-white/5 to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-primary/10">
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-white font-bold leading-tight">Firstbridge Card</p>
                        <p className="text-gray-400 text-sm">Gurgaon Access</p>
                      </div>
                    </div>
                    <div className="h-10 w-14 rounded-xl bg-white/10 border border-white/10" />
                  </div>

                  <div className="space-y-3 mb-10">
                    <div className="h-3 w-44 bg-white/10 rounded-full" />
                    <div className="h-3 w-64 bg-white/10 rounded-full" />
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">Member</p>
                      <p className="text-white font-semibold">Firstbridge Student</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs uppercase tracking-wider">Access</p>
                      <p className="text-white font-semibold">Campus • City • Ecosystem</p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-3 text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">
                      Exclusive access and special discounts across key lifestyle hubs
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-[#111] border border-white/10 rounded-3xl p-7">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <TicketCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Designed for exploration</h4>
                    <p className="text-gray-400">
                      The Firstbridge Card transforms Gurgaon into a living lab — for experiences, exposure,
                      and community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Micro CTA */}
          <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors duration-300">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-gray-300 font-medium">
                Student life that builds confidence — and creates memories worth keeping.
              </span>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}