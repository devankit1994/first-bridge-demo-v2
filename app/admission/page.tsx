import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowRight,
  CalendarDays,
  CreditCard,
  Download,
  FileText,
  HelpCircle,
  MapPin,
  Sparkles,
  SquarePen,
} from "lucide-react"

export default function AdmissionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary/5 to-black/90 z-10" />
          <img
            src="/modern-business-school-campus-with-students-collab.jpg"
            alt="Firstbridge campus"
            className="w-full h-full object-cover opacity-35"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-28 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/50 mb-8 animate-pulse">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">Admissions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 text-balance bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Admissions at Firstbridge
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
              A fast, transparent process designed to respect your time — and help you start building momentum from day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/25">
                <Link href="#apply" aria-label="Apply / Fill Form">
                  Apply / Fill Form <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300"
              >
                <Link href="#brochure" aria-label="Download brochure">
                  <Download className="size-4" /> Download Brochure
                </Link>
              </Button>

              <Button
                asChild
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                <Link href="#fee" aria-label="Pay application fee">
                  <CreditCard className="size-4 text-primary" /> Pay Application Fee
                </Link>
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-[#111] border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Clear requirements</h3>
                <p className="text-gray-400 leading-relaxed">
                  One checklist, one form, and a predictable timeline — no guesswork.
                </p>
              </div>

              <div className="bg-[#111] border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <CalendarDays className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Time-bound decisions</h3>
                <p className="text-gray-400 leading-relaxed">
                  Shortlisting and interviews run in cycles so you can plan ahead.
                </p>
              </div>

              <div className="bg-[#111] border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Human support</h3>
                <p className="text-gray-400 leading-relaxed">
                  Get answers fast — admissions support is built into the journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20" />
      </section>

      {/* Quick actions */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900/40 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,255,136,0.08),transparent_55%)] opacity-60" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Your next steps</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                Everything you need, in the order you need it — brochure, application, fee, and key dates.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/20">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-gray-300 font-medium">Average completion time: ~10 minutes</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Brochure */}
            <div id="brochure" className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Download className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Download Brochure</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Get curriculum highlights, tracks, calendar, and what the student experience looks like end-to-end.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-primary/40 text-primary hover:bg-primary/10 font-bold rounded-xl"
              >
                <Link href="#" aria-label="Download brochure PDF">
                  Download <ArrowRight className="size-4" />
                </Link>
              </Button>
              <p className="text-xs text-gray-500 mt-3">PDF link can be connected when final brochure is ready.</p>
            </div>

            {/* Apply */}
            <div id="apply" className="md:col-span-4 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-15 transition-opacity">
                <SquarePen className="w-48 h-48 text-white" />
              </div>

              <div className="relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <SquarePen className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Apply / Fill Form</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Share your profile, academics, and goals. Once submitted, you’ll receive confirmation and the next steps.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Basic personal & academic details",
                    "Resume / LinkedIn (if available)",
                    "Statement of purpose (short)",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-primary text-black font-bold rounded-xl hover:bg-primary/90">
                  <Link href="#" aria-label="Open application form">
                    Start Application <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <p className="text-xs text-gray-500 mt-3">Form link can be connected to your admissions portal.</p>
              </div>
            </div>

            {/* Fee */}
            <div id="fee" className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <CreditCard className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Pay Application Fee</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Secure payment completes your application submission and enables evaluation.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 mb-6">
                <p className="text-gray-300 font-medium">Tip</p>
                <p className="text-gray-400 text-sm leading-relaxed mt-1">
                  Keep your payment confirmation handy — it helps us support you faster if anything needs verification.
                </p>
              </div>

              <Button asChild className="w-full bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10">
                <Link href="#" aria-label="Pay application fee">
                  Pay Now <ArrowRight className="size-4 text-primary" />
                </Link>
              </Button>
              <p className="text-xs text-gray-500 mt-3">Payment link can be connected to your gateway.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.05),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">The admissions journey</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Four simple steps — built to be clear, quick, and supportive.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
              {[
                {
                  title: "Download Brochure",
                  desc: "Start with the big picture: curriculum, tracks, and outcomes.",
                  icon: Download,
                },
                {
                  title: "Apply / Fill Form",
                  desc: "Tell us who you are — and what you want to build next.",
                  icon: SquarePen,
                },
                {
                  title: "Pay Application Fee",
                  desc: "Secure payment unlocks evaluation and scheduling.",
                  icon: CreditCard,
                },
                {
                  title: "Important Dates & FAQs",
                  desc: "Stay on track with cycles, deadlines, and quick answers.",
                  icon: CalendarDays,
                },
              ].map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="flex flex-col items-center text-center group">
                    <div className="h-24 w-24 rounded-full bg-[#111] border border-primary/20 flex items-center justify-center mb-8 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all duration-500 relative z-10">
                      <div className="h-20 w-20 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-black font-bold flex items-center justify-center text-sm shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Location / Gurgaon */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/40 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,255,136,0.06),transparent_55%)] opacity-70" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-primary text-xs font-bold tracking-wider uppercase">Location Advantage</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
                Gurgaon — your business ecosystem
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Firstbridge is located in the centre of Gurgaon — the beating heart of India’s startup and corporate economy.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our campus stands in the city’s institutional area, surrounded by high-growth startups, GCCs, and Fortune 500 offices.
                  Everything a student needs is minutes away: metro lines, major roads, malls, parks, cafés, hospitals, and premium
                  residential neighbourhoods. It’s not just a campus — it’s a gateway into one of India’s most dynamic business
                  ecosystems.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Metro connectivity + major roads",
                    "Startups, GCCs & Fortune 500 offices",
                    "Malls, cafés, parks & everyday essentials",
                    "Premium residential neighbourhoods nearby",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                      <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                      <span className="text-gray-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-primary text-black font-bold rounded-xl hover:bg-primary/90">
                    <Link href="/campus" aria-label="Explore campus">
                      Explore Campus <ArrowRight className="size-4" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 font-bold rounded-xl">
                    <Link href="/career-and-placement" aria-label="Explore careers and placement">
                      Careers & Placement <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates & FAQs */}
      <section id="dates-faq" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(0,255,136,0.06),transparent_55%)] opacity-60" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Important Dates & FAQs</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Key timelines and the questions we get most often. (Dates can be updated anytime.)
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Dates */}
            <div className="lg:col-span-5 bg-[#111] border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <CalendarDays className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Important dates</h3>
                  <p className="text-gray-400">Sample structure — replace with official calendar.</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Applications open", value: "Rolling" },
                  { label: "Shortlisting cycles", value: "Weekly / Fortnightly" },
                  { label: "Interviews", value: "By invite (online / campus)" },
                  { label: "Offer rollout", value: "Within 7–14 days" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                    <span className="text-gray-200 font-medium">{item.label}</span>
                    <span className="text-primary font-bold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-5">
                <p className="text-primary text-sm font-medium">Note</p>
                <p className="text-gray-400 text-sm leading-relaxed mt-1">
                  Update these entries with your official intake calendar once finalized.
                </p>
              </div>
            </div>

            {/* FAQs */}
            <div className="lg:col-span-7 bg-[#111] border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">FAQs</h3>
                  <p className="text-gray-400">Quick answers to help you move faster.</p>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1" className="border-white/10">
                  <AccordionTrigger className="text-left text-white hover:text-primary">
                    Who can apply?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed">
                    Anyone meeting the program eligibility can apply. If you’re unsure, submit the form — our team will guide you on the
                    right track (PGP vs PGP X).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2" className="border-white/10">
                  <AccordionTrigger className="text-left text-white hover:text-primary">
                    What documents are needed?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed">
                    Typically: academic history, ID proof, and a resume/LinkedIn (recommended). Additional documents may be requested
                    during evaluation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3" className="border-white/10">
                  <AccordionTrigger className="text-left text-white hover:text-primary">
                    How does the interview work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed">
                    Interviews are scheduled after shortlisting. It’s a structured conversation focused on motivation, clarity of goals,
                    and readiness for the program.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4" className="border-white/10">
                  <AccordionTrigger className="text-left text-white hover:text-primary">
                    Is the application fee refundable?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed">
                    This depends on your policy. Connect your official fee/refund terms here for complete clarity.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary text-black font-bold rounded-xl hover:bg-primary/90">
                  <Link href="#apply" aria-label="Apply now">
                    Apply Now <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 font-bold rounded-xl">
                  <Link href="/programs" aria-label="Explore programs">
                    Explore Programs <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}