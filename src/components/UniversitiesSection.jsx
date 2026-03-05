import { useEffect, useRef, useState } from 'react'

const partners = [
  {
    name: 'University of Oxford',
    country: '🇬🇧',
    region: 'UK',
    image: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=600&h=400&fit=crop',
  },
  {
    name: 'University of Cambridge',
    country: '🇬🇧',
    region: 'UK',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=400&fit=crop',
  },
  {
    name: 'Imperial College London',
    country: '🇬🇧',
    region: 'UK',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
  },
  {
    name: 'UCL',
    country: '🇬🇧',
    region: 'UK',
    image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=400&fit=crop',
  },
  {
    name: 'LSE',
    country: '🇬🇧',
    region: 'UK',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop',
  },
  {
    name: 'University of Edinburgh',
    country: '🇬🇧',
    region: 'UK',
    image: 'https://images.unsplash.com/photo-1583225173760-45e5c1b2f992?w=600&h=400&fit=crop',
  },
  {
    name: 'Harvard University',
    country: '🇺🇸',
    region: 'USA',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
  },
  {
    name: 'MIT',
    country: '🇺🇸',
    region: 'USA',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop',
  },
  {
    name: 'Stanford University',
    country: '🇺🇸',
    region: 'USA',
    image: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=600&h=400&fit=crop',
  },
  {
    name: 'University of Toronto',
    country: '🇨🇦',
    region: 'Canada',
    image: 'https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=600&h=400&fit=crop',
  },
  {
    name: 'ETH Zurich',
    country: '🇨🇭',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&h=400&fit=crop',
  },
  {
    name: 'University of Melbourne',
    country: '🇦🇺',
    region: 'Australia',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop',
  },
]

const UniversitiesSection = () => {
  const sliderRef = useRef(null)
  const [paused, setPaused] = useState(false)

  /* Auto-scroll the slider */
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let raf
    const speed = 0.6 // px per frame

    const step = () => {
      if (!paused) {
        slider.scrollLeft += speed
        // Reset when we've scrolled past the first set
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0
        }
      }
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [paused])

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
      </div>

      {/* Full-width slider */}
      <div
        ref={sliderRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="overflow-hidden relative"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 w-max px-4">
          {/* Duplicate the list for seamless looping */}
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="group flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Campus image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} campus`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  {p.country} {p.region}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-base font-bold text-primary group-hover:text-primary-light transition-colors">
                  {p.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
