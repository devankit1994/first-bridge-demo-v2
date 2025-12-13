"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, BookOpen, Trophy, Cpu, Users } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10" />
        <img src="/modern-business-school-campus-with-students-collab.jpg" alt="Campus" className="w-full h-full object-cover opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary mb-8 animate-fade-in">
            <span className="text-primary text-xs font-bold tracking-wider uppercase">
              India's Most Dynamic Business School
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-12 animate-fade-in-up text-balance">
            Shaping Tomorrow's Leaders Through{" "}
            <span className="bg-gradient-to-r from-primary to-[#00d4aa] bg-clip-text text-transparent">
              Innovation
            </span>{" "}
            and Excellence
          </h1>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in-up">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all hover:scale-105">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Learning By Doing</h3>
              <p className="text-gray-400 text-sm">Hands-on experience through live projects and internships.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all hover:scale-105">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Industry First</h3>
              <p className="text-gray-400 text-sm">Pioneering approaches in business education.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all hover:scale-105">
              <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">AI / Tech Advantage</h3>
              <p className="text-gray-400 text-sm">Cutting-edge AI and technology integration.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all hover:scale-105">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Practitioner Faculty</h3>
              <p className="text-gray-400 text-sm">Expert faculty with real-world industry experience.</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up text-pretty">
            Top-of-the-line faculty with contemporary AI, Data & Communication curriculum. Learn by doing with live
            projects and extended internships in Downtown Gurgaon's corporate hub.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up">
            <Button
              onClick={() => scrollToSection("programs")}
              className="bg-gradient-to-r from-primary to-[#00d4aa] hover:from-[#00ff99] hover:to-[#00e4ba] text-black font-bold text-base px-8 py-6 rounded-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30 group"
            >
              EXPLORE PROGRAMS
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("campus")}
              variant="outline"
              className="border-2 border-gray-700 hover:border-primary text-white font-bold text-base px-8 py-6 rounded-lg transition-all hover:scale-105 bg-transparent group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              CAMPUS TOUR
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center animate-fade-in-up">
            <div>
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">100+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Industry Partners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">25%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Merit Scholarships</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">1st</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Launch Batch</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">New</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Campus Opening</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  )
}
