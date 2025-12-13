import Link from "next/link"
import type { ReactNode } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, DollarSign, GraduationCap, IndianRupee, Sparkles } from "lucide-react"

type FeeRow = {
  component: string
  amount: string
  details: string
}

function FeesTable({ title, rows }: { title: string; rows: FeeRow[] }) {
  return (
    <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl overflow-hidden shadow-lg">
      <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between gap-4">
        <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
        <span className="text-xs md:text-sm text-gray-400">All amounts in INR</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full">
          <thead>
            <tr className="bg-white/5">
              <th className="text-left text-xs font-bold uppercase tracking-wider text-gray-300 px-6 py-4">Component</th>
              <th className="text-left text-xs font-bold uppercase tracking-wider text-gray-300 px-6 py-4">Amount (₹)</th>
              <th className="text-left text-xs font-bold uppercase tracking-wider text-gray-300 px-6 py-4">Details / Due Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={`${row.component}-${idx}`}
                className="border-t border-white/5 hover:bg-white/[0.06] transition-colors"
              >
                <td className="px-6 py-4 align-top">
                  <div className="text-white font-semibold">{row.component}</div>
                </td>
                <td className="px-6 py-4 align-top">
                  <div className="text-white">{row.amount}</div>
                </td>
                <td className="px-6 py-4 align-top">
                  <div className="text-gray-300">{row.details}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  hint,
}: {
  icon: ReactNode
  label: string
  value: string
  hint?: string
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-wider uppercase text-gray-400">{label}</p>
          <div className="mt-2 text-2xl md:text-3xl font-black text-white">{value}</div>
          {hint ? <p className="mt-2 text-sm text-gray-400">{hint}</p> : null}
        </div>
        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
          {icon}
        </div>
      </div>
    </div>
  )
}

export default function FeesScholarshipsPage() {
  const pgpRows: FeeRow[] = [
    { component: "Admission Fee", amount: "1,00,000", details: "Payable on acceptance of offer" },
    { component: "Tuition Fee (Total)", amount: "15,00,000", details: "Payable in 5 equal installments" },
    { component: "Installment 1", amount: "3,00,000", details: "1 June 2026" },
    { component: "Installment 2", amount: "3,00,000", details: "1 September 2026" },
    { component: "Installment 3", amount: "3,00,000", details: "1 January 2027" },
    { component: "Installment 4", amount: "3,00,000", details: "1 June 2027" },
    { component: "Installment 5", amount: "3,00,000", details: "1 September 2027" },
    { component: "Hostel (Optional)", amount: "1,40,000 per year", details: "₹2,80,000 for 2 years" },
    { component: "Caution Deposit", amount: "50,000", details: "Refundable" },
  ]

  const pgpxRows: FeeRow[] = [
    { component: "Admission Fee", amount: "1,00,000", details: "Payable on acceptance of offer" },
    { component: "Tuition Fee (Total)", amount: "13,00,000", details: "Payable in 3 installments" },
    { component: "Installment 1", amount: "4,50,000", details: "1 June 2026" },
    { component: "Installment 2", amount: "4,50,000", details: "1 October 2026" },
    { component: "Installment 3", amount: "4,00,000", details: "1 February 2027" },
    { component: "Hostel (Optional)", amount: "1,80,000 (full year)", details: "Payable at program start" },
    { component: "Caution Deposit", amount: "50,000", details: "Refundable" },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary/5 to-black/90 z-10" />
          <img
            src="/modern-business-school-campus-with-students-collab.jpg"
            alt="Fees and scholarships"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/50 mb-8 animate-pulse">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">Fees & Scholarships</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 text-balance bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Fees & Scholarships
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
              A transparent fee structure and scholarship ecosystem designed to keep great talent within reach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#program-fees"
                className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/25"
              >
                View Fee Structure
              </Link>
              <Link
                href="#scholarships"
                className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300"
              >
                Explore Scholarships
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <IndianRupee className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-white font-bold">Simple, installment-based payments</div>
                </div>
                <p className="text-gray-400">Clear milestones. No surprises.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-white font-bold">Dated schedules</div>
                </div>
                <p className="text-gray-400">Plan cashflow with confidence.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-white font-bold">Scholarships across profiles</div>
                </div>
                <p className="text-gray-400">Merit, need, diversity & leadership.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      {/* Program Fees */}
      <section id="program-fees" className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-primary-10 opacity-50" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Program Fees</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                Two pathways. One outcome: high-impact careers. Choose the program that matches your experience and pace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/pgp"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-colors text-white font-semibold"
              >
                Explore PGP
              </Link>
              <Link
                href="/pgp-x"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-colors text-white font-semibold"
              >
                Explore PGP X
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {/* PGP */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span className="text-primary text-xs font-bold tracking-wider uppercase">PGP</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">Post Graduate Program in Management</h3>
                  <p className="text-gray-400 mt-2">2-year flagship program</p>
                </div>

                <div className="hidden sm:block">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <IndianRupee className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <StatCard
                  icon={<IndianRupee className="h-5 w-5 text-primary" />}
                  label="Total Program Fee"
                  value="₹16,00,000"
                  hint="Includes admission + tuition. Hostel optional."
                />
                <StatCard
                  icon={<Calendar className="h-5 w-5 text-primary" />}
                  label="Duration"
                  value="2 Years"
                  hint="Payable in 5 equal installments"
                />
              </div>

              <FeesTable title="PGP Fee Structure" rows={pgpRows} />
            </div>

            {/* PGP X */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span className="text-primary text-xs font-bold tracking-wider uppercase">PGP X</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    One-Year Post Graduate Program in Management (Executive Track)
                  </h3>
                  <p className="text-gray-400 mt-2">Accelerated format for experienced professionals</p>
                </div>

                <div className="hidden sm:block">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <StatCard
                  icon={<IndianRupee className="h-5 w-5 text-primary" />}
                  label="Total Program Fee"
                  value="₹14,00,000"
                  hint="Includes admission + tuition. Hostel optional."
                />
                <StatCard
                  icon={<Calendar className="h-5 w-5 text-primary" />}
                  label="Duration"
                  value="1 Year"
                  hint="Payable in 3 installments"
                />
              </div>

              <FeesTable title="PGP X Fee Structure" rows={pgpxRows} />
            </div>
          </div>

          <div className="mt-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-white font-bold">Notes</p>
                  <ul className="mt-3 space-y-2 text-gray-400">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>The hostel fee is optional and separate from the program fee.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Caution deposit is refundable subject to institute policy.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>Fee schedule dates are indicative and may be updated in the offer letter.</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/admission"
                    className="px-6 py-3 rounded-full bg-primary text-black font-bold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25 text-center"
                  >
                    Apply / Admissions
                  </Link>
                  <Link
                    href="/programs"
                    className="px-6 py-3 rounded-full border border-primary/50 text-primary font-bold hover:bg-primary/10 transition-colors text-center"
                  >
                    View All Programs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,136,0.07),transparent_55%)] opacity-70" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">Scholarships at Firstbridge</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Scholarships at Firstbridge</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Firstbridge offers several scholarship categories to support deserving candidates and ensure access to high-quality
              management education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-7 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/20">
                <IndianRupee className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Merit Scholarships</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Awarded for exceptional academic performance, strong professional achievements, or outstanding entrance evaluation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-2xl p-7 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/20">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Need-Based Scholarships</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Available for students requiring financial support based on documented household income and circumstances.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-2xl p-7 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/20">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Diversity & Leadership Scholarships</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                For candidates who bring unique backgrounds, leadership experiences, or contributions aligned with Firstbridge’s mission.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-2xl p-7 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/20">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Women-in-Leadership Scholarships</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Supporting women aiming for impactful careers in business and management.</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,255,136,0.08),transparent_55%)] opacity-60" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-8">
                  <h3 className="text-2xl md:text-3xl font-black text-white">How scholarships work</h3>
                  <p className="text-gray-300 mt-3 leading-relaxed">
                    Scholarship amounts vary and may cover a significant portion of tuition. Final scholarship awards are communicated along
                    with the admission offer.
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                      <p className="text-xs font-bold tracking-wider uppercase text-gray-400">When</p>
                      <p className="text-white font-semibold mt-1">With your offer</p>
                    </div>
                    <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                      <p className="text-xs font-bold tracking-wider uppercase text-gray-400">Coverage</p>
                      <p className="text-white font-semibold mt-1">Significant tuition support</p>
                    </div>
                    <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                      <p className="text-xs font-bold tracking-wider uppercase text-gray-400">Categories</p>
                      <p className="text-white font-semibold mt-1">Merit • Need • Leadership</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="bg-primary/10 border border-primary/20 rounded-3xl p-7">
                    <h4 className="text-white font-bold text-lg">Ready to apply?</h4>
                    <p className="text-gray-300 mt-2">Scholarship consideration is typically included during admissions review.</p>
                    <div className="mt-5 flex flex-col gap-3">
                      <Link
                        href="/admission"
                        className="px-6 py-3 rounded-full bg-primary text-black font-bold hover:bg-primary/90 transition-colors text-center shadow-lg hover:shadow-primary/25"
                      >
                        Start Application
                      </Link>
                      <Link
                        href="/programs"
                        className="px-6 py-3 rounded-full border border-primary/50 text-primary font-bold hover:bg-primary/10 transition-colors text-center"
                      >
                        Compare Programs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}