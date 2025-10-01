import { Briefcase, Target, Users2, Camera, Award } from "lucide-react"

export function CareerSection() {
  const features = [
    {
      icon: Briefcase,
      title: "Extended Industry Internships",
      description: "Long-term, high-impact roles in corporates and startups",
    },
    {
      icon: Target,
      title: "Live Consulting Projects",
      description: "Assignments with real businesses from Term 1",
    },
    {
      icon: Users2,
      title: "CXO Mentor Connect",
      description: "One-on-one guidance from top industry leaders",
    },
    {
      icon: Camera,
      title: "LinkedIn & Personal Branding Suite",
      description: "Professional headshot, CV redesign, and video resume",
    },
    {
      icon: Award,
      title: "VIP Industry Conference Access",
      description: "Premium access to NASSCOM, TiE, Startup India, and more",
    },
  ]

  return (
    <section id="career" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88] mb-6">
            <span className="text-[#00ff88] text-xs font-bold tracking-wider uppercase">Career Accelerator</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-balance">
            Career Focus with{" "}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00d4aa] bg-clip-text text-transparent">
              Live Projects
            </span>{" "}
            & Extended Internships
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto text-pretty">
            From Day 1, work on live consulting projects with real businesses, get mentored by CXOs, and secure
            long-term high-impact roles
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00ff88]/10"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]" />
              <div className="w-14 h-14 rounded-xl bg-[#00ff88]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-[#00ff88]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
