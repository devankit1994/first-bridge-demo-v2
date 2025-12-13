import { BookOpen, Briefcase, Globe, Lightbulb } from "lucide-react"

export function ProgramsOverview() {
  const programs = [
    {
      icon: BookOpen,
      title: "PGDM in Business Management",
      duration: "2 Years Full-Time",
      description:
        "A comprehensive program designed to build strong business fundamentals with specializations in Marketing, Finance, HR, and Operations.",
      highlights: [
        "Live consulting projects with Fortune 500 companies",
        "6-month extended internship program",
        "Industry mentorship from C-suite executives",
        "International immersion opportunities",
      ],
      color: "primary",
    },
    {
      icon: Briefcase,
      title: "PGDM in Digital Business",
      duration: "2 Years Full-Time",
      description:
        "Master the digital economy with cutting-edge curriculum in digital marketing, e-commerce, analytics, and technology management.",
      highlights: [
        "Hands-on experience with AI/ML tools",
        "Digital transformation case studies",
        "Startup incubation support",
        "Industry certifications included",
      ],
      color: "brand-orange",
    },
    {
      icon: Globe,
      title: "PGDM in Global Business",
      duration: "2 Years Full-Time",
      description:
        "Prepare for international careers with focus on global trade, cross-cultural management, and international business strategy.",
      highlights: [
        "Study abroad semester options",
        "Global business simulation projects",
        "International faculty and guest lectures",
        "Foreign language training",
      ],
      color: "primary",
    },
    {
      icon: Lightbulb,
      title: "PGDM in Innovation & Entrepreneurship",
      duration: "2 Years Full-Time",
      description:
        "Turn your ideas into successful ventures with comprehensive training in startup creation, funding, and scaling.",
      highlights: [
        "Seed funding opportunities",
        "Mentorship from successful entrepreneurs",
        "Access to state-of-the-art incubation center",
        "Pitch competitions and investor connects",
      ],
      color: "brand-orange",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary">OUR PROGRAMS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Choose Your <span className="text-primary">Path to Success</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each program is designed with industry input to ensure you graduate with skills that employers actually
            need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon

            const isPrimary = program.color === "primary"
            const isBrandOrange = program.color === "brand-orange"

            const color = isPrimary ? "var(--primary)" : isBrandOrange ? "var(--brand-orange)" : program.color
            const softBg = isPrimary
              ? "color-mix(in srgb, var(--primary) 12%, transparent)"
              : isBrandOrange
                ? "color-mix(in srgb, var(--brand-orange) 12%, transparent)"
                : `${program.color}20`

            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                  style={{ backgroundColor: color }}
                />

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: softBg }}
                >
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>

                <h3 className="text-2xl font-black mb-2">{program.title}</h3>
                <div className="text-sm font-semibold mb-4" style={{ color }}>
                  {program.duration}
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">{program.description}</p>

                <div className="space-y-3">
                  {program.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="mt-8 text-sm font-bold hover:gap-3 flex items-center gap-2 transition-all group-hover:translate-x-1"
                  style={{ color }}
                >
                  LEARN MORE
                  <span>→</span>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
