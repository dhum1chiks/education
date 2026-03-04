import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

/* ─── University Data ─── */
const universities = [
  {
    id: 1,
    name: 'University of Oxford',
    country: 'UK',
    region: 'United Kingdom',
    established: '1096',
    logo: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=200&h=200&fit=crop',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=400&fit=crop',
    programs: ['Undergraduate', 'Postgraduate', 'PhD'],
    requirements: 'A*A*A or equivalent',
    studentsPlaced: '25+',
    years: '3 years',
    ranking: 'Top 5 Global',
    description: 'One of the world\'s oldest and most prestigious universities, known for academic excellence across all disciplines.',
    specializations: ['PPE', 'Law', 'Medicine', 'Engineering', 'Humanities'],
  },
  {
    id: 2,
    name: 'University of Cambridge',
    country: 'UK',
    region: 'United Kingdom',
    established: '1209',
    logo: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=400&fit=crop',
    programs: ['Undergraduate', 'Postgraduate', 'PhD'],
    requirements: 'A*A*A or equivalent',
    studentsPlaced: '30+',
    years: '3 years',
    ranking: 'Top 5 Global',
    description: 'Renowned for research excellence and collegiate system, producing Nobel laureates and world leaders.',
    specializations: ['Natural Sciences', 'Mathematics', 'Computer Science', 'Economics', 'Medicine'],
  },
  {
    id: 3,
    name: 'Imperial College London',
    country: 'UK',
    region: 'United Kingdom',
    established: '1907',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop',
    image: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=800&h=400&fit=crop',
    programs: ['Undergraduate', 'Postgraduate', 'PhD'],
    requirements: 'A*A*A-AAA',
    studentsPlaced: '40+',
    years: '3-4 years',
    ranking: 'Top 10 Global',
    description: 'World-leading STEM institution specializing in science, engineering, medicine, and business.',
    specializations: ['Engineering', 'Medicine', 'Data Science', 'Business', 'Physics'],
  },
  {
    id: 4,
    name: 'Harvard University',
    country: 'USA',
    region: 'United States',
    established: '1636',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop',
    image: 'https://images.unsplash.com/photo-1571689935646-02c5e20b9a6f?w=800&h=400&fit=crop',
    programs: ['Undergraduate', 'Postgraduate', 'PhD'],
    requirements: 'SAT 1500+ / ACT 34+',
    studentsPlaced: '15+',
    years: '4 years',
    ranking: 'Top 3 Global',
    description: 'America\'s oldest institution of higher learning, known for academic excellence and influential alumni network.',
    specializations: ['Business', 'Law', 'Medicine', 'Public Policy', 'Liberal Arts'],
  },
  {
    id: 5,
    name: 'MIT',
    country: 'USA',
    region: 'United States',
    established: '1861',
    logo: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=200&h=200&fit=crop',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    programs: ['Undergraduate', 'Postgraduate', 'PhD'],
    requirements: 'SAT 1500+ / ACT 35+',
    studentsPlaced: '20+',
    years: '4 years',
    ranking: 'Top 3 Global',
    description: 'Leading institution for science, technology, engineering, and innovation with cutting-edge research.',
    specializations: ['Computer Science', 'Engineering', 'AI & ML', 'Physics', 'Economics'],
  },
  {
    id: 6,
    name: 'Stanford University',
    country: 'USA',
    region: 'United States',
    established: '1885',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop',
    image: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=800&h=400&fit=crop',
    programs: ['Undergraduate', 'Postgraduate', 'PhD'],
    requirements: 'SAT 1470+ / ACT 33+',
    studentsPlaced: '18+',
    years: '4 years',
    ranking: 'Top 5 Global',
    description: 'Silicon Valley powerhouse known for innovation, entrepreneurship, and technological advancement.',
    specializations: ['Computer Science', 'Business', 'Engineering', 'Law', 'Medicine'],
  },
  {
    id: 7,
    name: 'ETH Zurich',
    country: 'Switzerland',
    region: 'Europe',
    established: '1855',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=400&fit=crop',
    programs: ['Undergraduate', 'Postgraduate', 'PhD'],
    requirements: 'Matura / A-levels AAA',
    studentsPlaced: '12+',
    years: '3 years',
    ranking: 'Top 10 Global',
    description: 'Premier European science and technology university with world-class research and innovation.',
    specializations: ['Engineering', 'Natural Sciences', 'Mathematics', 'Architecture', 'Computer Science'],
  },
  {
    id: 8,
    name: 'University of Toronto',
    country: 'Canada',
    region: 'North America',
    established: '1827',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=400&fit=crop',
    programs: ['Undergraduate', 'Postgraduate', 'PhD'],
    requirements: 'High 80s to low 90s',
    studentsPlaced: '35+',
    years: '4 years',
    ranking: 'Top 20 Global',
    description: 'Canada\'s top university, renowned for research excellence and diverse academic programs.',
    specializations: ['Medicine', 'Engineering', 'Computer Science', 'Business', 'Life Sciences'],
  },
  {
    id: 9,
    name: 'University of Melbourne',
    country: 'Australia',
    region: 'Oceania',
    established: '1853',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=400&fit=crop',
    programs: ['Undergraduate', 'Postgraduate', 'PhD'],
    requirements: 'ATAR 95+',
    studentsPlaced: '22+',
    years: '3-4 years',
    ranking: 'Top 30 Global',
    description: 'Australia\'s leading university with strong research culture and global partnerships.',
    specializations: ['Medicine', 'Law', 'Engineering', 'Arts', 'Business'],
  },
  {
    id: 10,
    name: 'National University of Singapore',
    country: 'Singapore',
    region: 'Asia',
    established: '1905',
    logo: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=200&h=200&fit=crop',
    image: 'https://images.unsplash.com/photo-1555883005-b7d7c3f607e7?w=800&h=400&fit=crop',
    programs: ['Undergraduate', 'Postgraduate', 'PhD'],
    requirements: 'AAA/A* at A-levels',
    studentsPlaced: '28+',
    years: '3-4 years',
    ranking: 'Top Asian University',
    description: 'Asia\'s premier university with excellence in research, innovation, and entrepreneurship.',
    specializations: ['Computer Science', 'Engineering', 'Business', 'Law', 'Medicine'],
  },
  {
    id: 11,
    name: 'LSE (London School of Economics)',
    country: 'UK',
    region: 'United Kingdom',
    established: '1895',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&h=400&fit=crop',
    programs: ['Undergraduate', 'Postgraduate', 'PhD'],
    requirements: 'A*AA-AAA',
    studentsPlaced: '20+',
    years: '3 years',
    ranking: 'Top Social Sciences',
    description: 'World\'s leading social science institution specializing in economics, politics, and law.',
    specializations: ['Economics', 'Politics', 'Law', 'International Relations', 'Finance'],
  },
  {
    id: 12,
    name: 'UCL (University College London)',
    country: 'UK',
    region: 'United Kingdom',
    established: '1826',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&h=400&fit=crop',
    programs: ['Undergraduate', 'Postgraduate', 'PhD'],
    requirements: 'A*A*A-AAB',
    studentsPlaced: '45+',
    years: '3 years',
    ranking: 'Top 10 Global',
    description: 'London\'s global university with diverse academic programs and cutting-edge research.',
    specializations: ['Medicine', 'Engineering', 'Architecture', 'AI', 'Neuroscience'],
  },
]

/* ─── Regions ─── */
const regions = [
  { id: 'all', label: 'All Regions', count: universities.length },
  { id: 'United Kingdom', label: 'United Kingdom', count: universities.filter(u => u.region === 'United Kingdom').length },
  { id: 'United States', label: 'United States', count: universities.filter(u => u.region === 'United States').length },
  { id: 'Europe', label: 'Europe', count: universities.filter(u => u.region === 'Europe').length },
  { id: 'Asia', label: 'Asia', count: universities.filter(u => u.region === 'Asia').length },
  { id: 'North America', label: 'Canada', count: universities.filter(u => u.region === 'North America').length },
  { id: 'Oceania', label: 'Australia', count: universities.filter(u => u.region === 'Oceania').length },
]

/* ─── Program Levels ─── */
const programLevels = [
  { id: 'all', label: 'All Programs' },
  { id: 'Undergraduate', label: 'Undergraduate' },
  { id: 'Postgraduate', label: 'Postgraduate' },
  { id: 'PhD', label: 'PhD' },
]

/* ═══════════════════════════════════════════════════
   UNIVERSITIES PAGE
   ═══════════════════════════════════════════════════ */
const Universities = () => {
  const { t } = useLanguage()
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedProgram, setSelectedProgram] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedUniversity, setSelectedUniversity] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filter universities
  const filteredUniversities = universities.filter(uni => {
    const matchesRegion = selectedRegion === 'all' || uni.region === selectedRegion
    const matchesProgram = selectedProgram === 'all' || uni.programs.includes(selectedProgram)
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          uni.country.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesRegion && matchesProgram && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── Hero Banner ─── */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-light/20 rounded-full blur-2xl" />
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center" style={{ height: '420px' }}>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 mx-auto">
            <span className="w-2 h-2 bg-primary-light rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{t('universities_hero_badge')}</span>
          </span>
          <h1 className="font-display text-[36px] sm:text-[48px] font-bold text-white mb-6">
            {t('universities_hero_title_prefix')} <span className="text-primary-light">{t('universities_hero_title_highlight')}</span>
          </h1>
          <p className="text-white/90 text-[16px] max-w-2xl mx-auto leading-relaxed">
            {t('universities_hero_subtitle')}
          </p>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50+', label: t('universities_stat_partners'), icon: '🏛️' },
              { number: '15+', label: t('universities_stat_countries'), icon: '🌍' },
              { number: '500+', label: t('universities_stat_students'), icon: '🎓' },
              { number: '98%', label: t('universities_stat_success'), icon: '📈' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-neutral-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Filters & Search ─── */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-xl mx-auto">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search universities or countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-[16px]"
              />
            </div>
          </div>

          {/* Region Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">Filter by Region</h3>
            <div className="flex flex-wrap gap-3">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedRegion === region.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {region.label} ({region.count})
                </button>
              ))}
            </div>
          </div>

          {/* Program Level Filters */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">Filter by Program Level</h3>
            <div className="flex flex-wrap gap-3">
              {programLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedProgram(level.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedProgram === level.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center text-neutral-600">
            Showing <span className="font-semibold text-primary">{filteredUniversities.length}</span> {filteredUniversities.length === 1 ? 'university' : 'universities'}
          </div>
        </div>
      </section>

      {/* ─── Universities Grid ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredUniversities.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-neutral-600 mb-2">No universities found</h3>
              <p className="text-neutral-500">Try adjusting your filters or search query</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUniversities.map((uni) => (
                <div
                  key={uni.id}
                  onClick={() => setSelectedUniversity(uni)}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-neutral-100">
                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-primary">
                      {uni.ranking}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Logo & Name */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-lg overflow-hidden shrink-0">
                        <img src={uni.logo} alt={`${uni.name} logo`} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-bold text-primary leading-tight mb-1">{uni.name}</h3>
                        <p className="text-sm text-neutral-500">{uni.country} • Est. {uni.established}</p>
                      </div>
                    </div>

                    {/* Programs */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {uni.programs.map((program) => (
                        <span key={program} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                          {program}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-600">Entry Requirements:</span>
                        <span className="font-semibold text-primary">{uni.requirements}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-600">Students Placed:</span>
                        <span className="font-semibold text-primary-light">{uni.studentsPlaced} (3 years)</span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <button className="w-full bg-neutral-50 hover:bg-primary hover:text-white text-primary py-2.5 rounded-lg font-semibold text-sm transition-all group-hover:bg-primary group-hover:text-white">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── University Modal ─── */}
      {selectedUniversity && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedUniversity(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedUniversity.image}
                alt={selectedUniversity.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedUniversity(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-neutral-100 rounded-xl overflow-hidden shrink-0">
                  <img src={selectedUniversity.logo} alt={`${selectedUniversity.name} logo`} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-[28px] font-bold text-primary mb-2">{selectedUniversity.name}</h2>
                  <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {selectedUniversity.country}
                    </span>
                    <span>•</span>
                    <span>Established {selectedUniversity.established}</span>
                    <span>•</span>
                    <span className="font-semibold text-primary">{selectedUniversity.ranking}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-700 text-[16px] leading-relaxed mb-6">
                {selectedUniversity.description}
              </p>

              {/* Key Info Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-2">Programs Offered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedUniversity.programs.map((program) => (
                      <span key={program} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-2">Entry Requirements</h4>
                  <p className="text-primary font-bold text-lg">{selectedUniversity.requirements}</p>
                  <p className="text-xs text-neutral-500 mt-1">Typical offer for international students</p>
                </div>

                <div className="bg-neutral-50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-2">Students Placed</h4>
                  <p className="text-primary-light font-bold text-lg">{selectedUniversity.studentsPlaced}</p>
                  <p className="text-xs text-neutral-500 mt-1">Past 3 years via On Track Admissions</p>
                </div>

                <div className="bg-neutral-50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-2">Duration</h4>
                  <p className="text-primary font-bold text-lg">{selectedUniversity.years}</p>
                  <p className="text-xs text-neutral-500 mt-1">Typical program length</p>
                </div>
              </div>

              {/* Specializations */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-3">Popular Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedUniversity.specializations.map((spec) => (
                    <span key={spec} className="text-sm bg-white border border-neutral-200 text-neutral-700 px-3 py-1.5 rounded-lg">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200">
                <Link
                  to="/#contact"
                  className="flex-1 bg-primary hover:bg-primary-dark text-white py-3.5 rounded-lg font-bold uppercase tracking-wider text-[16px] transition-all text-center min-h-12 flex items-center justify-center"
                >
                  Apply via On Track
                </Link>
                <button
                  onClick={() => setSelectedUniversity(null)}
                  className="flex-1 bg-neutral-100 hover:bg-neutral-200 text-primary py-3.5 rounded-lg font-bold uppercase tracking-wider text-[16px] transition-all min-h-12"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── CTA Section ─── */}
      <section className="py-20 bg-linear-to-r from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-white mb-4">
            Ready to Apply to Your Dream University?
          </h2>
          <p className="text-white/90 text-[16px] max-w-2xl mx-auto mb-8">
            Our expert consultants will guide you through the entire application process, from university selection to acceptance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-primary px-8 py-4 rounded-lg text-[16px] font-bold uppercase tracking-wider transition-all hover:shadow-lg min-h-12"
            >
              Book Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-primary-dark hover:bg-primary text-white border-2 border-white/30 px-8 py-4 rounded-lg text-[16px] font-bold uppercase tracking-wider transition-all min-h-12"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Universities
