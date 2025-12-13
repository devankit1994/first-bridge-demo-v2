import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white">
              First Bridge
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              India's most dynamic business school with unparalleled industry connect and contemporary curriculum.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#campus" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Campus
                </Link>
              </li>
              <li>
                <Link href="#technology" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/programs#business-management"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Business Management
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#digital-business"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Digital Business
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#global-business"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Global Business
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#innovation"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Innovation & Entrepreneurship
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#admissions"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span>Gurugram, Haryana, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <a href="mailto:admissions@firstbridge.edu" className="hover:text-primary transition-colors">
                  admissions@firstbridge.edu
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/programs"
                className="inline-block bg-brand-orange text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-brand-orange/90 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} First Bridge Business School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
