const partners = [
  {
    name: 'University of Oxford',
    country: '🇬🇧',
    region: 'UK',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/200px-Oxford-University-Circlet.svg.png',
  },
  {
    name: 'University of Cambridge',
    country: '🇬🇧',
    region: 'UK',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/200px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png',
  },
  {
    name: 'Imperial College London',
    country: '🇬🇧',
    region: 'UK',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Imperial_College_London_crest.svg/200px-Imperial_College_London_crest.svg.png',
  },
  {
    name: 'UCL',
    country: '🇬🇧',
    region: 'UK',
    logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/d/d1/University_College_London_logo.svg/300px-University_College_London_logo.svg.png',
  },
  {
    name: 'LSE',
    country: '🇬🇧',
    region: 'UK',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/LSE_Logo.svg/300px-LSE_Logo.svg.png',
  },
  {
    name: 'University of Edinburgh',
    country: '🇬🇧',
    region: 'UK',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/University_of_Edinburgh_coat_of_arms.svg/200px-University_of_Edinburgh_coat_of_arms.svg.png',
  },
  {
    name: 'Harvard University',
    country: '🇺🇸',
    region: 'USA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/200px-Harvard_University_coat_of_arms.svg.png',
  },
  {
    name: 'MIT',
    country: '🇺🇸',
    region: 'USA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/300px-MIT_logo.svg.png',
  },
  {
    name: 'Stanford University',
    country: '🇺🇸',
    region: 'USA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/200px-Seal_of_Leland_Stanford_Junior_University.svg.png',
  },
  {
    name: 'University of Toronto',
    country: '🇨🇦',
    region: 'Canada',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/200px-Utoronto_coa.svg.png',
  },
  {
    name: 'ETH Zurich',
    country: '🇨🇭',
    region: 'Europe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/ETH_Z%C3%BCrich_wordmark.svg/300px-ETH_Z%C3%BCrich_wordmark.svg.png',
  },
  {
    name: 'University of Melbourne',
    country: '🇦🇺',
    region: 'Australia',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/University_of_Melbourne_coat_of_arms.svg/200px-University_of_Melbourne_coat_of_arms.svg.png',
  },
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
              <div className="w-20 h-20 rounded-xl flex items-center justify-center overflow-hidden p-2">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
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
