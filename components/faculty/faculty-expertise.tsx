import { Brain, TrendingUp, Globe, Lightbulb, Users, BarChart } from "lucide-react"

const expertiseAreas = [
  {
    icon: Brain,
    title: "Strategic Thinking",
    description: "Develop critical thinking and strategic decision-making skills through case studies and simulations",
  },
  {
    icon: TrendingUp,
    title: "Industry Insights",
    description: "Learn from real-world experiences and current industry trends from practicing professionals",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Gain international business knowledge from faculty with global corporate experience",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Foster entrepreneurial mindset and innovation through hands-on projects and mentorship",
  },
  {
    icon: Users,
    title: "Personalized Mentoring",
    description: "Benefit from small class sizes and one-on-one guidance for career development",
  },
  {
    icon: BarChart,
    title: "Data-Driven Approach",
    description: "Master analytics and data-driven decision making with cutting-edge tools and techniques",
  },
]

export function FacultyExpertise() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full">
            <span className="text-[#00ff88] text-sm font-bold tracking-wider">TEACHING EXCELLENCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            What Makes Our <span className="text-[#00ff88]">Faculty</span> Exceptional
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto text-pretty">
            A unique blend of academic rigor and practical industry experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-[#00ff88]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff88]/10"
              >
                <div className="w-12 h-12 bg-[#00ff88]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#00ff88]" />
                </div>
                <h3 className="text-xl font-black mb-2">{area.title}</h3>
                <p className="text-gray-400 leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
