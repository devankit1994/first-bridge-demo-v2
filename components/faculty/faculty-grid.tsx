import { Briefcase, GraduationCap } from "lucide-react"

const facultyMembers = [
  {
    name: "Dr. Rajesh Kumar",
    title: "Dean & Professor of Strategy",
    image: "/professional-indian-male-professor-in-business-att.jpg",
    expertise: ["Corporate Strategy", "Innovation Management", "Digital Transformation"],
    credentials: "PhD from IIM Ahmedabad, Former VP at McKinsey & Company",
    experience: "28 years",
  },
  {
    name: "Dr. Priya Sharma",
    title: "Professor of Marketing",
    image: "/professional-indian-female-professor-in-business-a.jpg",
    expertise: ["Digital Marketing", "Consumer Behavior", "Brand Management"],
    credentials: "PhD from London Business School, Ex-CMO at Unilever",
    experience: "22 years",
  },
  {
    name: "Dr. Amit Patel",
    title: "Professor of Finance",
    image: "/professional-indian-male-finance-professor.jpg",
    expertise: ["Investment Banking", "Financial Analytics", "Risk Management"],
    credentials: "PhD from Wharton, Former MD at Goldman Sachs",
    experience: "25 years",
  },
  {
    name: "Dr. Sneha Reddy",
    title: "Professor of Entrepreneurship",
    image: "/professional-indian-female-entrepreneur-professor.jpg",
    expertise: ["Startup Strategy", "Venture Capital", "Innovation"],
    credentials: "PhD from Stanford GSB, Serial Entrepreneur & Angel Investor",
    experience: "20 years",
  },
  {
    name: "Dr. Vikram Singh",
    title: "Professor of Operations",
    image: "/professional-indian-male-operations-professor.jpg",
    expertise: ["Supply Chain", "Operations Analytics", "Lean Management"],
    credentials: "PhD from MIT Sloan, Ex-COO at Amazon India",
    experience: "24 years",
  },
  {
    name: "Dr. Ananya Gupta",
    title: "Professor of Technology Management",
    image: "/professional-indian-female-technology-professor.jpg",
    expertise: ["AI & ML", "Product Management", "Tech Strategy"],
    credentials: "PhD from Carnegie Mellon, Former Director at Google",
    experience: "18 years",
  },
]

export function FacultyGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Meet Our <span className="text-primary">Distinguished Faculty</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto text-pretty">
            Industry veterans and academic scholars committed to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={faculty.image || "/placeholder.svg"}
                  alt={faculty.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black mb-1">{faculty.name}</h3>
                <p className="text-primary font-semibold mb-4">{faculty.title}</p>

                {/* Credentials */}
                <div className="flex items-start gap-2 mb-4 text-sm text-gray-400">
                  <GraduationCap className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                  <p className="leading-relaxed">{faculty.credentials}</p>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <Briefcase className="w-4 h-4 text-brand-orange" />
                  <span className="text-gray-400">{faculty.experience} of experience</span>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {faculty.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-semibold text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
