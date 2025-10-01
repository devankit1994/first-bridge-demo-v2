import { Award, Calendar, DollarSign, Users } from "lucide-react"

export function ProgramDetails() {
  const details = [
    {
      icon: Calendar,
      title: "Program Structure",
      items: [
        "4 semesters over 2 years",
        "Trimester-based academic calendar",
        "6-month extended internship in Year 2",
        "Capstone project with industry partner",
        "Flexible elective choices",
      ],
    },
    {
      icon: Award,
      title: "Eligibility & Selection",
      items: [
        "Bachelor's degree in any discipline",
        "Minimum 50% aggregate marks",
        "Valid CAT/XAT/GMAT/CMAT score",
        "Personal interview and group discussion",
        "Work experience preferred but not mandatory",
      ],
    },
    {
      icon: DollarSign,
      title: "Investment & Scholarships",
      items: [
        "Program fee: ₹12-15 lakhs (total)",
        "Up to 25% merit-based scholarships",
        "Need-based financial assistance",
        "Education loan facilitation",
        "Flexible payment plans available",
      ],
    },
    {
      icon: Users,
      title: "Career Support",
      items: [
        "Dedicated placement cell",
        "100+ recruiting companies",
        "Average package: ₹12-18 LPA",
        "Highest package: ₹35+ LPA",
        "Lifetime career support",
      ],
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 mb-6">
            <span className="text-sm font-semibold text-[#ff6b35]">PROGRAM DETAILS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Everything You <span className="text-[#ff6b35]">Need to Know</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {details.map((detail, index) => {
            const Icon = detail.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#00ff88]" />
                  </div>
                  <h3 className="text-2xl font-black">{detail.title}</h3>
                </div>

                <ul className="space-y-3">
                  {detail.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
