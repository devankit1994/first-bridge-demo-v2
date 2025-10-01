"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert(`Thank you! We'll contact you soon at ${email}`)
      setEmail("")
    }
  }

  return (
    <section id="apply" className="py-32 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff88_1px,transparent_1px),linear-gradient(to_bottom,#00ff88_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-6 text-balance">
          Ready to{" "}
          <span className="bg-gradient-to-r from-[#00ff88] to-[#00d4aa] bg-clip-text text-transparent">Bridge</span>{" "}
          Your Future?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto text-pretty">
          Join First Bridge Business School - where modern campus meets unparalleled industry connect. Launch your
          career with India's most dynamic business school.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white/10 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#00ff88] h-14 px-6 rounded-lg"
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-[#00ff88] to-[#00d4aa] hover:from-[#00ff99] hover:to-[#00e4ba] text-black font-bold px-8 h-14 rounded-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#00ff88]/30 group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </div>
    </section>
  )
}
