"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap } from "lucide-react"

export function ProgramsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <GraduationCap className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">WORLD-CLASS PROGRAMS</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Transform Your Career with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00cc6a]">
            Industry-Ready
          </span>{" "}
          Programs
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Choose from our carefully designed programs that blend academic excellence with real-world industry
          experience. Each program is crafted to prepare you for leadership roles in the modern business landscape.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-gradient-to-r from-primary to-[#00cc6a] hover:from-primary hover:to-primary text-black font-bold text-base px-8 py-6 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
            EXPLORE PROGRAMS
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white/20 hover:border-primary text-white hover:text-primary font-bold text-base px-8 py-6 rounded-lg transition-all hover:scale-105 bg-transparent"
          >
            DOWNLOAD BROCHURE
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { value: "2 Years", label: "Program Duration" },
            { value: "100+", label: "Industry Partners" },
            { value: "25%", label: "Merit Scholarships" },
            { value: "₹12-18L", label: "Average Package" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
