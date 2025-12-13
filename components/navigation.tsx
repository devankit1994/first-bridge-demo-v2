"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [aboutHovered, setAboutHovered] = useState(false);
  const [programsHovered, setProgramsHovered] = useState(false);
  const [admissionsHovered, setAdmissionsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const isHomePage = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight hover:opacity-80 transition-opacity"
          >
            First <span className="text-primary">Bridge</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {/* About us dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutHovered(true)}
              onMouseLeave={() => setAboutHovered(false)}
            >
              <Link
                href="#"
                className="text-sm font-medium text-gray-400 hover:text-primary transition-colors flex items-center cursor-pointer"
              >
                About us <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {aboutHovered && (
                <div className="absolute top-full left-0 bg-black/95 backdrop-blur-xl border border-white/10 rounded-md py-2 min-w-[200px] transition-all duration-200 z-50">
                  <Link
                    href="/campus"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    Campus
                  </Link>
                  <Link
                    href="/faculty"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    Faculty
                  </Link>
                  <Link
                    href="/faculty"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    Managing Board
                  </Link>
                </div>
              )}
            </div>

            {/* Programs dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsHovered(true)}
              onMouseLeave={() => setProgramsHovered(false)}
            >
              <Link
                href="#"
                className="text-sm font-medium text-gray-400 hover:text-primary transition-colors flex items-center cursor-pointer"
              >
                Programs <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {programsHovered && (
                <div className="absolute top-full left-0 bg-black/95 backdrop-blur-xl border border-white/10 rounded-md py-2 min-w-[200px] transition-all duration-200 z-50">
                  <Link
                    href="/pgp"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    PGP
                  </Link>
                  <Link
                    href="/pgp-x"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    PGP X
                  </Link>
                </div>
              )}
            </div>

            {/* Careers and placement */}
            <Link
              href="/career-and-placement"
              className="text-sm font-medium text-gray-400 hover:text-primary transition-colors cursor-pointer"
            >
              Careers and placement
            </Link>

            {/* Admissions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAdmissionsHovered(true)}
              onMouseLeave={() => setAdmissionsHovered(false)}
            >
              <Link
                href="#"
                className="text-sm font-medium text-gray-400 hover:text-primary transition-colors flex items-center cursor-pointer"
              >
                Admissions <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {admissionsHovered && (
                <div className="absolute top-full left-0 bg-black/95 backdrop-blur-xl border border-white/10 rounded-md py-2 min-w-[200px] transition-all duration-200 z-50">
                  <Link
                    href="/admission"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    Admission process
                  </Link>
                  <Link
                    href="/fees-and-scholarships"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    Fees and scholarship
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Button
            onClick={() =>
              isHomePage
                ? scrollToSection("apply")
                : (window.location.href = "/#apply")
            }
            className="bg-gradient-to-r from-brand-orange to-[#f7931e] hover:from-[#ff7b45] hover:to-[#ffa32e] text-black font-bold text-sm px-6 py-2 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-orange/30"
          >
            APPLY NOW
          </Button>
        </div>
      </div>
    </nav>
  );
}
