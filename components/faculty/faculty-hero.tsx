export function FacultyHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/modern-university-faculty-teaching-in-high-tech-cl.jpg" alt="Faculty" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full">
          <span className="text-[#00ff88] text-sm font-bold tracking-wider">WORLD-CLASS EDUCATORS</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance">
          Learn from <span className="text-[#00ff88]">Industry Leaders</span> & Academic Experts
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto text-pretty leading-relaxed">
          Our distinguished faculty brings together decades of industry experience, cutting-edge research, and a passion
          for nurturing the next generation of business leaders.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div>
            <div className="text-4xl font-black text-[#00ff88] mb-2">50+</div>
            <div className="text-sm text-gray-400 font-medium">Expert Faculty</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#00ff88] mb-2">25+</div>
            <div className="text-sm text-gray-400 font-medium">Years Avg Experience</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#00ff88] mb-2">100+</div>
            <div className="text-sm text-gray-400 font-medium">Research Publications</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#00ff88] mb-2">15+</div>
            <div className="text-sm text-gray-400 font-medium">Countries Represented</div>
          </div>
        </div>
      </div>
    </section>
  )
}
