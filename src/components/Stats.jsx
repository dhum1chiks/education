import { useState, useEffect, useRef } from 'react'

const stats = [
  { number: 500, suffix: '+', label: 'Students Placed', icon: '🎓' },
  { number: 50, suffix: '+', label: 'Partner Universities', icon: '🏛️' },
  { number: 98, suffix: '%', label: 'Success Rate', icon: '📈' },
  { number: 15, suffix: '+', label: 'Countries Covered', icon: '🌍' },
]

const AnimatedNumber = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target])

  return <span>{count}{suffix}</span>
}

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" className="py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-light font-semibold text-sm tracking-wider uppercase mb-3">
            Our Impact
          </span>
          <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-white mb-6">
            Numbers That Speak For Themselves
          </h2>
          <p className="text-white/90 text-[16px]">
            Years of dedicated service helping students achieve their academic dreams at the world's finest institutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-4 notranslate">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 notranslate" data-no-translate="true">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <div className="text-white/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
