"use client"

import Link from "next/link"
import { GraduationCap, Star, BookOpen, Trophy, Cpu, Users, Briefcase, Heart, Building, Globe, DollarSign, FileText } from "lucide-react"

const blocks = [
  {
    title: "PGP",
    description: "Post Graduate Program in Business Administration offering comprehensive management education.",
    icon: GraduationCap,
    href: "/pgp"
  },
  {
    title: "PGP X",
    description: "Executive Post Graduate Program designed for working professionals seeking advancement.",
    icon: Star,
    href: "/pgp-x"
  },
  {
    title: "Learning by Doing",
    description: "Hands-on learning approach through real-world projects and practical experiences.",
    icon: BookOpen,
    href: "/learning-by-doing"
  },
  {
    title: "Industry First",
    description: "Pioneering innovative methods and first-of-its-kind programs in business education.",
    icon: Trophy,
    href: "/industry-first"
  },
  {
    title: "AI Ready",
    description: "Curriculum integrated with AI technologies and data-driven decision making skills.",
    icon: Cpu,
    href: "/ai-ready"
  },
  {
    title: "Practitioner Faculty",
    description: "Expert faculty with extensive industry experience bringing real-world insights.",
    icon: Users,
    href: "/practitioner-faculty"
  },
  {
    title: "Career and Placement",
    description: "Dedicated career services ensuring excellent placement opportunities for graduates.",
    icon: Briefcase,
    href: "/career-and-placement"
  },
  {
    title: "Student Life",
    description: "Vibrant campus life with diverse activities, clubs, and student communities.",
    icon: Heart,
    href: "/student-life"
  },
  {
    title: "Campus",
    description: "State-of-the-art campus facilities designed for optimal learning and collaboration.",
    icon: Building,
    href: "/campus"
  },
  {
    title: "International",
    description: "Global exposure through international partnerships, exchanges, and collaborations.",
    icon: Globe,
    href: "/international"
  },
  {
    title: "Fees and Scholarships",
    description: "Transparent fee structure with various scholarship opportunities available.",
    icon: DollarSign,
    href: "/fees-and-scholarships"
  },
  {
    title: "Admission",
    description: "Streamlined admission process with multiple entry points and flexible requirements.",
    icon: FileText,
    href: "/admission"
  }
]

export function HomepageBlocksSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 animate-fade-in">
            Explore Our Programs & Facilities
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up">
            Discover what makes our business school unique through our comprehensive programs and world-class facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blocks.map((block, index) => {
            const Icon = block.icon
            return (
              <Link
                key={block.title}
                href={block.href}
                className="group block"
              >
                <div
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full hover:bg-white/10 hover:border-[#00ff88]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#00ff88]/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#00ff88]/10 rounded-full p-4 mb-6 group-hover:bg-[#00ff88]/20 transition-colors">
                      <Icon className="h-8 w-8 text-[#00ff88]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00ff88] transition-colors">
                      {block.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}