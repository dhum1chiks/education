import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const testimonials = [
  {
    quote: "On Track Admissions transformed my application journey. Their strategic approach helped me secure offers from three Russell Group universities. I couldn't have done it without their expert guidance.",
    name: 'Aisha Rahman',
    university: 'University of Oxford',
    course: 'PPE, Class of 2025',
    avatar: 'AR',
  },
  {
    quote: "The personal statement coaching was exceptional. My mentor helped me articulate my passion in ways I never could have on my own. I received an offer from my dream university within weeks.",
    name: 'James Chen',
    university: 'Imperial College London',
    course: 'Computer Science, Class of 2025',
    avatar: 'JC',
  },
  {
    quote: "From university selection to visa processing, On Track handled everything seamlessly. Their knowledge of international admissions is unmatched. I'm now studying at my top-choice institution.",
    name: 'Fatima Al-Sayed',
    university: 'ETH Zurich',
    course: 'Mechanical Engineering, Class of 2024',
    avatar: 'FA',
  },
  {
    quote: "The mock interview sessions gave me the confidence I needed. On the actual interview day, I felt prepared and calm. On Track truly goes above and beyond for their students.",
    name: 'David Okonkwo',
    university: 'University of Cambridge',
    course: 'Medicine, Class of 2025',
    avatar: 'DO',
  },
]

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Testimonials
          </span>
          <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-primary mb-6">
            Stories of Success
          </h2>
          <p className="text-neutral-700 text-[16px]">
            Hear from students who turned their university dreams into reality with our guidance.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-visible">
              {testimonials.map((t, idx) => (
                <div 
                  key={t.name} 
                  className={`transition-opacity duration-500 ${idx === active ? 'block' : 'hidden'}`}
                >
                  <div className="bg-neutral-50 rounded-3xl p-8 sm:p-12 text-center min-h-[400px] flex flex-col justify-center">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-8 italic">
                      "{t.quote}"
                    </blockquote>

                    <div className="flex items-center justify-center gap-4">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg notranslate" data-no-translate="true">
                        {t.avatar}
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-primary">{t.name}</div>
                        <div className="text-sm text-primary-light font-medium">{t.university}</div>
                        <div className="text-sm text-neutral-500 notranslate" data-no-translate="true">{t.course}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === active ? 'bg-accent w-8' : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
