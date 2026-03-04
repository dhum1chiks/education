import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

/* ─── Animated Counter ─── */
const AnimatedNumber = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(target)
  useEffect(() => {
    if (!isVisible) {
      setCount(0)
      return
    }
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target])
  return <span>{count}{suffix}</span>
}

/* ─── Timeline Data ─── */
const timeline = [
  { year: '2015', title: 'Founded in London', description: 'On Track Admissions was established with a mission to democratise access to world-class university guidance.' },
  { year: '2017', title: 'Expanded to Asia & Middle East', description: 'Opened satellite offices and began serving students from 10+ countries across Asia and the Gulf region.' },
  { year: '2019', title: '200+ Successful Placements', description: 'Crossed the milestone of 200 students successfully admitted to top-50 global universities.' },
  { year: '2021', title: 'Launched Virtual Programmes', description: 'Introduced comprehensive online consultancy, making expert guidance accessible worldwide during the pandemic.' },
  { year: '2023', title: '50+ University Partnerships', description: 'Formalised partnerships with over 50 leading institutions across the UK, US, Europe, and Australasia.' },
  { year: '2025', title: '500+ Students & Counting', description: 'Reached 500+ successful placements with a 98% acceptance rate at students\' top-3 university choices.' },
]

/* ─── Team Data ─── */
const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Founder & Lead Consultant',
    bio: 'Former Oxford admissions tutor with 15+ years in higher education. Sarah founded On Track to give every ambitious student access to Oxbridge-level guidance.',
    initials: 'SM',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
    credentials: ['PhD Education, Oxford', 'Former Admissions Tutor', 'ICEF Certified'],
    color: 'bg-primary',
  },
  {
    name: 'James Hartley',
    role: 'Head of US Admissions',
    bio: 'Harvard MBA graduate and ex-admissions committee member. Specialises in Ivy League and top US university applications.',
    initials: 'JH',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
    credentials: ['MBA Harvard', 'Ex-Admissions Committee', '200+ US Placements'],
    color: 'bg-primary-light',
  },
  {
    name: 'Priya Sharma',
    role: 'Personal Statement Director',
    bio: 'Published author and English graduate from Cambridge. Has coached 300+ students on crafting compelling personal narratives.',
    initials: 'PS',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
    credentials: ['MA English, Cambridge', 'Published Author', '300+ Statements'],
    color: 'bg-accent-dark',
  },
  {
    name: 'Omar Al-Rashid',
    role: 'International Admissions Lead',
    bio: 'Multilingual consultant with expertise in European and Middle Eastern university systems. Guides students through complex cross-border applications.',
    initials: 'OA',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces',
    credentials: ['MSc Education Policy, UCL', 'Fluent in 4 Languages', 'NAFSA Member'],
    color: 'bg-primary-dark',
  },
]

/* ─── Methodology Steps ─── */
const methodology = [
  {
    step: '01',
    title: 'Discovery Session',
    description: 'We begin with an in-depth consultation to understand your academic background, ambitions, strengths, and preferences.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Strategic Planning',
    description: 'Our experts create a personalised roadmap — selecting target universities, mapping deadlines, and identifying key differentiators.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Application Crafting',
    description: 'We work iteratively on personal statements, essays, CVs, and supplementary materials through multiple review rounds.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Interview & Test Prep',
    description: 'Intensive mock interviews, admissions test coaching, and presentation workshops tailored to each university\'s format.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Submission & Follow-up',
    description: 'We ensure every application is submitted correctly and on time, then support you through offers, decisions, and visa processes.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

/* ─── Accreditations ─── */
const accreditations = [
  { label: 'British Council Registered', icon: '🇬🇧', description: 'Officially registered education agent' },
  { label: 'ICEF Certified', icon: '✅', description: 'Internationally certified education facilitator' },
  { label: 'AIRC Member', icon: '🏅', description: 'American International Recruitment Council' },
  { label: 'NAFSA Affiliated', icon: '🌐', description: 'Association of International Educators' },
  { label: 'UCAS Registered', icon: '📋', description: 'Registered UCAS application centre' },
  { label: 'QAA Recognised', icon: '⭐', description: 'Quality Assurance Agency recognised' },
]

/* ═══════════════════════════════════════════════════
   ABOUT PAGE
   ═══════════════════════════════════════════════════ */
const About = () => {
  const { t } = useLanguage()
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── Hero Banner ─── */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-light/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/5 rounded-full blur-lg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center" style={{ height: '420px' }}>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 mx-auto">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-white/90 text-sm font-medium">{t('about_hero_badge')}</span>
          </span>
          <h1 className="font-display text-[36px] sm:text-[48px] font-bold text-white mb-6">
            {t('about_hero_title_prefix')} <span className="text-primary-light">{t('about_hero_title_highlight')}</span> {t('about_hero_title_suffix')}
          </h1>
          <p className="text-white/90 text-[16px] max-w-2xl mx-auto leading-relaxed">
            {t('about_hero_subtitle')}
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link to="/#contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-bold uppercase tracking-wider transition-all hover:shadow-lg min-h-12 flex items-center">
              {t('about_hero_cta_primary')}
            </Link>
            <a href="#methodology" className="bg-white hover:bg-neutral-50 border-2 border-white text-primary px-8 py-3.5 rounded-lg font-bold uppercase tracking-wider transition-all min-h-12 flex items-center">
              {t('about_hero_cta_secondary')}
            </a>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left – Image Placeholder */}
            <div className="relative">
              <div className="rounded-3xl aspect-4/3 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" 
                  alt="Modern office workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-neutral-100">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-neutral-500">Years of Excellence</div>
              </div>
            </div>

            {/* Right – Content */}
            <div>
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
                Our Mission
              </span>
              <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-primary mb-6">
                Empowering Students to Reach Their Full Potential
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                At On Track Admissions, we believe that every student deserves access to expert guidance 
                when applying to university. Founded by Dr. Sarah Mitchell, a former Oxford admissions tutor, 
                our consultancy combines deep institutional knowledge with genuine care for each student's 
                journey.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Our mission is simple: to level the playing field. Whether you're a first-generation university 
                applicant or aiming for the most competitive programmes in the world, we provide the strategic 
                insight and personalised support to help you succeed.
              </p>

              {/* Values */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Integrity', desc: 'Honest, transparent guidance always' },
                  { title: 'Excellence', desc: 'Highest standards in everything we do' },
                  { title: 'Inclusivity', desc: 'Access for students worldwide' },
                  { title: 'Results', desc: '98% acceptance at top-choice universities' },
                ].map((v) => (
                  <div key={v.title} className="flex items-start gap-3 bg-neutral-50 rounded-xl p-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary text-sm">{v.title}</div>
                      <div className="text-neutral-500 text-sm">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Key Stats ─── */}
      <section ref={statsRef} className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: 500, suffix: '+', label: 'Students Placed', icon: '🎓' },
              { number: 50, suffix: '+', label: 'University Partners', icon: '🏛️' },
              { number: 98, suffix: '%', label: 'Success Rate', icon: '📈' },
              { number: 15, suffix: '+', label: 'Countries Served', icon: '🌍' },
            ].map((s) => (
              <div key={s.label} className="text-center bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="text-4xl font-bold text-primary mb-1">
                  <AnimatedNumber target={s.number} suffix={s.suffix} isVisible={statsVisible} />
                </div>
                <div className="text-neutral-500 font-medium text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Founder / Team ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              Our Team
            </span>
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-primary mb-6">
              Meet the Experts Behind Your Success
            </h2>
            <p className="text-neutral-700 text-[16px]">
              Our consultants are former admissions officers, published academics, and industry professionals 
              with deep expertise across every major university system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Avatar Area */}
                <div className="h-56 overflow-hidden bg-neutral-100">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  {/* Credentials */}
                  <div className="space-y-1.5">
                    {member.credentials.map((c) => (
                      <div key={c} className="flex items-center gap-2 text-xs text-neutral-500">
                        <svg className="w-3.5 h-3.5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Methodology ─── */}
      <section id="methodology" className="py-24 bg-linear-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary-light font-semibold text-sm tracking-wider uppercase mb-3">
              Our Methodology
            </span>
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-white mb-6">
              A Proven 5-Step Process
            </h2>
            <p className="text-white/90 text-[16px]">
              Every student engagement follows our rigorous methodology, refined over 10 years 
              and hundreds of successful applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {methodology.map((m, i) => (
              <div key={m.step} className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
                {/* Connector line */}
                {i < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/40" />
                )}
                <div className="text-accent-light font-bold text-sm mb-3">{m.step}</div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent-light mb-4 group-hover:bg-accent/20 transition-colors">
                  {m.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{m.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              A Decade of Impact
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                      <span className="text-accent font-bold text-lg">{item.year}</span>
                      <h3 className="text-primary font-bold text-xl mt-1 mb-2">{item.title}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-md" />
                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Accreditations ─── */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">
              Accreditations & Partnerships
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-4">
              Recognised & Trusted Globally
            </h2>
            <p className="text-neutral-600">
              Our professional certifications and memberships ensure the highest standards of service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((a) => (
              <div key={a.label} className="bg-white rounded-2xl p-6 border border-neutral-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="text-3xl shrink-0">{a.icon}</div>
                <div>
                  <h4 className="font-semibold text-primary">{a.label}</h4>
                  <p className="text-neutral-500 text-sm">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-primary to-primary-light rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/90 text-[16px] max-w-xl mx-auto mb-8">
                Book a free consultation today and let our experts create a personalised admissions 
                strategy for you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-primary px-8 py-4 rounded-lg text-[16px] font-bold uppercase tracking-wider transition-all hover:shadow-lg min-h-[48px]"
                >
                  Book Free Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-primary-dark hover:bg-primary text-white border-2 border-white/30 px-8 py-4 rounded-lg text-[16px] font-bold uppercase tracking-wider transition-all min-h-[48px]"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
