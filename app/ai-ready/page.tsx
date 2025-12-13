import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BarChart3, Bot, Cpu, MessageSquare, PenTool, Presentation, Search, ShieldCheck, Sparkles, Target, Wand2 } from "lucide-react"

export default function AIReadyPage() {
  const toolLogos = [
    { src: "/n8n.png", alt: "n8n" },
    { src: "/zapier.png", alt: "Zapier" },
    { src: "/lovable.svg", alt: "Lovable" },
    { src: "/langflow.svg", alt: "Langflow" },
    { src: "/python.png", alt: "Python" },
    { src: "/hugging-face.svg", alt: "Hugging Face" },
    { src: "/cursor.svg", alt: "Cursor" },
    { src: "/chatgpt.png", alt: "ChatGPT" },
    { src: "/dalle.webp", alt: "Dall.E" },
    { src: "/notebookllm.png", alt: "Notebook LLM" },
  ]

  const useCases = [
    {
      title: "Research",
      description: "Scan industries, competitors, and customer needs faster — with structured outputs.",
      icon: Search
    },
    {
      title: "Analysis",
      description: "Turn raw data into insights using analytics + AI-assisted reasoning.",
      icon: BarChart3
    },
    {
      title: "Writing",
      description: "Create crisp memos, emails, and briefs — with tone, clarity, and speed.",
      icon: PenTool
    },
    {
      title: "Presentations",
      description: "Build slide-ready narratives with compelling structure and visuals.",
      icon: Presentation
    },
    {
      title: "Customer Insights",
      description: "Summarise feedback, find patterns, and extract actionable themes.",
      icon: MessageSquare
    },
    {
      title: "Marketing",
      description: "Generate campaigns, positioning, and copy variants — then refine with data.",
      icon: Target
    },
    {
      title: "Decision-Making",
      description: "Use AI as a thought partner to stress-test options and make better calls.",
      icon: Sparkles
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary/10 to-black/90 z-10" />
          <img
            src="/modern-university-faculty-teaching-in-high-tech-cl.jpg"
            alt="AI-ready learning environment"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(0,255,136,0.12),transparent_45%)] z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.06),transparent_40%)] z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/50 mb-8 animate-pulse">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">
                AI Ready
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 text-balance bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              The AI Advantage
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed text-pretty">
              Business managers who think in AI, data, and tools.
            </p>

            <p className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed text-pretty">
              Firstbridge students graduate fluent in the technologies shaping today’s workplace: analytics, automation, and GenAI.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/20">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-gray-200 font-medium">No coding background required</span>
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                <Wand2 className="h-5 w-5 text-primary" />
                <span className="text-gray-200 font-medium">Work with the latest tools</span>
              </div>
            </div>

            {/* Tool logos */}
            <div className="mt-14">
              <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#0d0d0d]/70 backdrop-blur-sm p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-left">Your AI toolbox</p>
                      <p className="text-gray-400 text-sm">A modern workflow stack, not just theory</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Logos shown are examples of tools used during the program.
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
                  {toolLogos.map((logo) => (
                    <div
                      key={logo.alt}
                      className="group rounded-2xl border border-white/10 bg-white/90 hover:bg-white hover:border-primary/40 transition-all duration-300 p-4 flex items-center justify-center shadow-sm"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-9 md:h-10 w-auto max-w-[140px] object-contain opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick highlights */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-14">
              <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Sparkles className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Tools-first fluency</h3>
                <p className="text-gray-400 leading-relaxed">
                  Learn practical, repeatable workflows using AI systems the way modern teams actually work.
                </p>
              </div>

              <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <BarChart3 className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Analytics mindset</h3>
                <p className="text-gray-400 leading-relaxed">
                  Think in data, measure outcomes, and build confident decision-making habits.
                </p>
              </div>

              <div className="md:col-span-4 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Cpu className="w-40 h-40 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Wand2 className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">GenAI-ready outcomes</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Graduate able to use AI for research, analysis, writing, presentations, customer insights, marketing, and decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider glow */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent z-20" />
      </section>

      {/* Use cases */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(0,255,136,0.08),transparent_55%)] opacity-60" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">You’ll use AI for real work</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                Not just prompts — end-to-end workflows you can repeat on day one in a job.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-gray-300 text-sm font-medium">Modern • Practical • Manager-friendly</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom callout */}
          <div className="mt-12">
            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,136,0.10),transparent_50%)]" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-4">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-primary text-xs font-bold tracking-wider uppercase">Outcome</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                    Business managers who think in AI, data, and tools
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-2xl">
                    Firstbridge students graduate fluent in analytics, automation, and GenAI — with a modern toolkit and a strong decision-making framework.
                  </p>
                </div>

                <div className="md:w-[420px]">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-300 font-medium">Manager workflow</span>
                      <span className="text-xs text-gray-500">Example</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-gray-200">Collect inputs →</span>
                        <span className="text-gray-400">reviews, data, research</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-gray-200">Analyse →</span>
                        <span className="text-gray-400">insights, patterns, options</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-gray-200">Communicate →</span>
                        <span className="text-gray-400">deck, memo, plan</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-gray-200">Decide →</span>
                        <span className="text-gray-400">measure, iterate, improve</span>
                      </div>
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