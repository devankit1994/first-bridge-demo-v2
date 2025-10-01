"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

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
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88] mb-8 animate-fade-in">
            <span className="text-[#00ff88] text-xs font-bold tracking-wider uppercase">
              India's Most Dynamic Business School
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 animate-fade-in-up text-balance">
            Modern Dynamic Campus with{" "}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00d4aa] bg-clip-text text-transparent">
              Unparalleled
            </span>{" "}
            Industry Connect
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed animate-fade-in-up text-pretty">
            Top-of-the-line faculty with contemporary AI, Data & Communication curriculum. Learn by doing with live
            projects and extended internships in Downtown Gurgaon's corporate hub.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up">
            <Button
              onClick={() => scrollToSection("programs")}
              className="bg-gradient-to-r from-[#00ff88] to-[#00d4aa] hover:from-[#00ff99] hover:to-[#00e4ba] text-black font-bold text-base px-8 py-6 rounded-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#00ff88]/30 group"
            >
              EXPLORE PROGRAMS
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("campus")}
              variant="outline"
              className="border-2 border-gray-700 hover:border-[#00ff88] text-white font-bold text-base px-8 py-6 rounded-lg transition-all hover:scale-105 bg-transparent group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              CAMPUS TOUR
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#00ff88] mb-2">100+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Industry Partners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#00ff88] mb-2">25%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Merit Scholarships</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#00ff88] mb-2">1st</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Launch Batch</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#00ff88] mb-2">New</div>
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
