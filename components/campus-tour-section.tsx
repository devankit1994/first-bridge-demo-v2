"use client"

import { Button } from "@/components/ui/button"
import { Building2, Wifi, FlaskConical, Sparkles } from "lucide-react"

export function CampusTourSection() {
  return (
    <section id="campus" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35] mb-6">
            <span className="text-[#ff6b35] text-xs font-bold tracking-wider uppercase">Virtual Campus Tour</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-balance">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] bg-clip-text text-transparent">Modern</span>{" "}
            Campus
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto text-pretty">
            Take a virtual tour of India's most innovative business school campus designed as a co-working space in
            Downtown Gurgaon
          </p>
        </div>

        {/* Main Video */}
        <div className="mb-12 rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-[#ff6b35] transition-all duration-300 group">
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
            <img
              src="/modern-business-school-campus-interior-with-studen.jpg"
              alt="Campus Tour"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold mb-2">🏢 Complete Campus Experience</h3>
              <p className="text-gray-300 text-sm">
                Discover our modern facilities, co-working spaces, innovation studios, and smart classrooms
              </p>
            </div>
          </div>
        </div>

        {/* Campus Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-[#ff6b35]/5 border border-[#ff6b35]/20 rounded-xl hover:border-[#ff6b35] transition-all hover:-translate-y-2">
            <div className="w-16 h-16 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center mb-4 mx-auto">
              <Building2 className="w-8 h-8 text-[#ff6b35]" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#ff6b35]">Downtown Location</h3>
            <p className="text-gray-400 text-sm">Close to Cyberhub & corporate offices</p>
          </div>

          <div className="text-center p-6 bg-[#ff6b35]/5 border border-[#ff6b35]/20 rounded-xl hover:border-[#ff6b35] transition-all hover:-translate-y-2">
            <div className="w-16 h-16 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-8 h-8 text-[#ff6b35]" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#ff6b35]">Co-working Design</h3>
            <p className="text-gray-400 text-sm">Modern collaborative spaces</p>
          </div>

          <div className="text-center p-6 bg-[#ff6b35]/5 border border-[#ff6b35]/20 rounded-xl hover:border-[#ff6b35] transition-all hover:-translate-y-2">
            <div className="w-16 h-16 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center mb-4 mx-auto">
              <FlaskConical className="w-8 h-8 text-[#ff6b35]" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#ff6b35]">Innovation Labs</h3>
            <p className="text-gray-400 text-sm">Fully equipped with latest tech</p>
          </div>

          <div className="text-center p-6 bg-[#ff6b35]/5 border border-[#ff6b35]/20 rounded-xl hover:border-[#ff6b35] transition-all hover:-translate-y-2">
            <div className="w-16 h-16 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center mb-4 mx-auto">
              <Wifi className="w-8 h-8 text-[#ff6b35]" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#ff6b35]">Smart Infrastructure</h3>
            <p className="text-gray-400 text-sm">AI-powered learning environments</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-[#1a1a1a] to-[#0d1117] border border-gray-800 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Want to Visit in Person?</h3>
          <p className="text-gray-400 mb-6 text-lg">
            Book a personal campus tour and experience our facilities firsthand
          </p>
          <Button className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] hover:from-[#ff7b45] hover:to-[#ffa32e] text-black font-bold text-base px-8 py-6 rounded-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#ff6b35]/30">
            BOOK CAMPUS VISIT
          </Button>
        </div>
      </div>
    </section>
  )
}
