import { CheckCircle2 } from "lucide-react"

export function AdmissionProcess() {
  const steps = [
    {
      step: "01",
      title: "Apply Online",
      description: "Submit your application form with academic transcripts and entrance exam scores.",
      timeline: "Rolling admissions",
    },
    {
      step: "02",
      title: "Entrance Exam",
      description: "Valid CAT/XAT/GMAT/CMAT score or appear for First Bridge Admission Test.",
      timeline: "Year-round",
    },
    {
      step: "03",
      title: "Personal Interview",
      description: "Face-to-face or virtual interview with our admission committee.",
      timeline: "Within 2 weeks",
    },
    {
      step: "04",
      title: "Group Discussion",
      description: "Participate in a group discussion to assess communication and teamwork skills.",
      timeline: "Same day as interview",
    },
    {
      step: "05",
      title: "Admission Offer",
      description: "Receive your admission decision and scholarship details.",
      timeline: "Within 1 week",
    },
    {
      step: "06",
      title: "Enrollment",
      description: "Complete enrollment formalities and secure your seat with fee payment.",
      timeline: "Within 2 weeks",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 mb-6">
            <span className="text-sm font-semibold text-[#00ff88]">ADMISSION PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Your Journey <span className="text-[#00ff88]">Starts Here</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A simple, transparent admission process designed to identify passionate and talented individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-[#00ff88]/50 transition-all duration-300 group"
            >
              <div className="absolute top-6 right-6 text-6xl font-black text-white/5 group-hover:text-[#00ff88]/10 transition-colors">
                {item.step}
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#00ff88]" />
                  <span className="text-sm font-bold text-[#00ff88]">{item.step}</span>
                </div>

                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>

                <div className="inline-block px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20">
                  <span className="text-xs font-semibold text-[#00ff88]">{item.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00ff88]/10 to-[#00cc6a]/10 border border-[#00ff88]/20">
            <CheckCircle2 className="w-5 h-5 text-[#00ff88]" />
            <span className="text-sm font-semibold text-gray-300">Applications for 2025 batch are now open!</span>
          </div>
        </div>
      </div>
    </section>
  )
}
