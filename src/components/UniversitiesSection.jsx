const partners = [
  { name: 'University of Oxford', country: '🇬🇧', region: 'UK' },
  { name: 'University of Cambridge', country: '🇬🇧', region: 'UK' },
  { name: 'Imperial College London', country: '🇬🇧', region: 'UK' },
  { name: 'UCL', country: '🇬🇧', region: 'UK' },
  { name: 'LSE', country: '🇬🇧', region: 'UK' },
  { name: 'University of Edinburgh', country: '🇬🇧', region: 'UK' },
  { name: 'Harvard University', country: '🇺🇸', region: 'USA' },
  { name: 'MIT', country: '🇺🇸', region: 'USA' },
  { name: 'Stanford University', country: '🇺🇸', region: 'USA' },
  { name: 'University of Toronto', country: '🇨🇦', region: 'Canada' },
  { name: 'ETH Zurich', country: '🇨🇭', region: 'Europe' },
  { name: 'University of Melbourne', country: '🇦🇺', region: 'Australia' },
]

const UniversitiesSection = () => {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
          Our Network
        </span>
        <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-primary mb-4">
          Universities We Work With
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-12">
          We partner with world-leading universities across the UK, USA, Canada, Europe and
          Australia to place students in programmes that fit their ambitions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 bg-primary/5 group-hover:bg-primary/10 rounded-xl flex items-center justify-center transition-colors">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-neutral-800">{p.name}</span>
              <span className="text-xs text-neutral-500">{p.country} {p.region}</span>
            </div>
          ))}
        </div>

        <a
          href="/universities"
          className="inline-flex items-center gap-2 mt-10 text-primary font-semibold hover:text-primary-dark transition-colors"
        >
          View all partner universities
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default UniversitiesSection
