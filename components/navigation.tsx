"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const isHomePage = pathname === "/"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight hover:opacity-80 transition-opacity">
            First <span className="text-[#00ff88]">Bridge</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/programs" className="text-sm font-medium text-gray-400 hover:text-[#00ff88] transition-colors">
              Programs
            </Link>
            <Link href="/faculty" className="text-sm font-medium text-gray-400 hover:text-[#00ff88] transition-colors">
              Faculty
            </Link>
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-sm font-medium text-gray-400 hover:text-[#00ff88] transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("campus")}
                  className="text-sm font-medium text-gray-400 hover:text-[#00ff88] transition-colors"
                >
                  Campus
                </button>
                <button
                  onClick={() => scrollToSection("career")}
                  className="text-sm font-medium text-gray-400 hover:text-[#00ff88] transition-colors"
                >
                  Career
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/#experience"
                  className="text-sm font-medium text-gray-400 hover:text-[#00ff88] transition-colors"
                >
                  Experience
                </Link>
                <Link
                  href="/#campus"
                  className="text-sm font-medium text-gray-400 hover:text-[#00ff88] transition-colors"
                >
                  Campus
                </Link>
                <Link
                  href="/#career"
                  className="text-sm font-medium text-gray-400 hover:text-[#00ff88] transition-colors"
                >
                  Career
                </Link>
              </>
            )}
          </div>

          <Button
            onClick={() => (isHomePage ? scrollToSection("apply") : (window.location.href = "/#apply"))}
            className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] hover:from-[#ff7b45] hover:to-[#ffa32e] text-black font-bold text-sm px-6 py-2 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b35]/30"
          >
            APPLY NOW
          </Button>
        </div>
      </div>
    </nav>
  )
}
