const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Trusted by 500+ students worldwide</span>
            </div>

            <h1 className="font-display text-[28px] sm:text-[40px] md:text-[48px] font-bold text-white leading-tight mb-6">
              Helping Students Secure University Admissions Worldwide
            </h1>

            <p className="text-[16px] text-white/90 leading-relaxed mb-8 max-w-xl">
              Expert guidance for international students applying to universities across the UK and globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg text-[16px] font-bold uppercase tracking-wider transition-all hover:shadow-lg min-h-[48px]"
              >
                Book a Consultation
              </a>
            </div>

            {/* Mini Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/20">
              {[
                { number: '500+', label: 'Students Placed' },
                { number: '98%', label: 'Success Rate' },
                { number: '50+', label: 'Partner Universities' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-accent-light">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 w-96">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">University Matched</div>
                    <div className="text-white/60 text-sm">Personalized for you</div>
                  </div>
                </div>

                {/* Faux University List */}
                {['Oxford University', 'MIT', 'ETH Zurich'].map((uni, i) => (
                  <div key={uni} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                        i === 0 ? 'bg-green-500/20 text-green-300' : i === 1 ? 'bg-blue-500/20 text-blue-300' : 'bg-purple-500/20 text-purple-300'
                      }`}>
                        {i + 1}
                      </div>
                      <span className="text-white text-sm">{uni}</span>
                    </div>
                    <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                      {i === 0 ? '95%' : i === 1 ? '88%' : '92%'} match
                    </span>
                  </div>
                ))}
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-white rounded-2xl px-4 py-3 shadow-xl animate-float">
                <div className="text-xs font-medium">Acceptance Rate</div>
                <div className="text-2xl font-bold">98%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
