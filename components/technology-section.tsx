import { Laptop, Brain, Wrench, BarChart3 } from "lucide-react"

export function TechnologySection() {
  const techFeatures = [
    {
      icon: Laptop,
      title: "Business Laptop",
      description: "High-performance, preloaded with MS Office 365, Tableau, Grammarly Premium, Power BI",
    },
    {
      icon: Brain,
      title: "Generative AI Toolkit",
      description: "Microsoft Copilot Pro, Notion AI, Canva Pro, Grammarly Premium, Jasper AI and more",
    },
    {
      icon: Wrench,
      title: "Professional Tech Stack",
      description: "Figma, Miro, Da Vinci Resolve - industry-standard tools",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "AI, Tech, and Data science embedded across all courses",
    },
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-primary" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary mb-6">
            <span className="text-primary text-xs font-bold tracking-wider uppercase">AI-First Education</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-balance">
            Technology{" "}
            <span className="bg-gradient-to-r from-primary to-[#00d4aa] bg-clip-text text-transparent">
              Advantage
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto text-pretty">
            Get equipped with industry-grade tools and AI-powered learning from Day 1
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
