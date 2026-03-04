const universities = [
  'University of Oxford',
  'University of Cambridge',
  'Imperial College',
  'MIT',
  'Stanford University',
  'ETH Zurich',
  'UCL London',
  'LSE',
]

const TrustIndicators = () => {
  return (
    <section className="py-20 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Trusted Partners
          </span>
          <h2 className="font-display text-[24px] sm:text-[28px] font-bold text-primary">
            Our Students Get Into Top Universities
          </h2>
        </div>

        {/* Scrolling Logo Strip */}
        <div className="relative">
          <div className="flex animate-[scroll_20s_linear_infinite] gap-8 w-max">
            {[...universities, ...universities].map((uni, i) => (
              <div
                key={`${uni}-${i}`}
                className="flex-shrink-0 bg-white border border-neutral-200 rounded-xl px-8 py-5 flex items-center gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <span className="text-neutral-700 font-medium whitespace-nowrap">{uni}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditation Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {[
            { label: 'British Council Registered', icon: '🇬🇧' },
            { label: 'ICEF Certified Agent', icon: '✅' },
            { label: 'AIRC Member', icon: '🏅' },
            { label: 'NAFSA Affiliated', icon: '🌐' },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 bg-white border border-neutral-200 rounded-full px-6 py-3 shadow-sm"
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-sm font-medium text-neutral-700">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export default TrustIndicators
