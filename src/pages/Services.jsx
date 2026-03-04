import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

/* ─── Service Categories ─── */
const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Application Guidance',
    description: 'End-to-end support through the university application process, ensuring every detail is perfect.',
    deliverables: [
      'Application review',
      'Document preparation',
      'Deadline management',
      'Submission support',
    ],
    color: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: 'University Selection',
    description: 'Personalized recommendations based on your academic profile, career goals, and personal preferences.',
    deliverables: [
      'University shortlist',
      'Program matching',
      'Admission requirements analysis',
      'Ranking & reputation insights',
    ],
    color: 'from-purple-500 to-purple-600',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Interview Preparation',
    description: 'Mock interviews and comprehensive coaching for university admissions interviews and assessments.',
    deliverables: [
      'Practice interview sessions',
      'Detailed feedback reports',
      'Strategy coaching',
      'Question bank access',
    ],
    color: 'from-green-500 to-green-600',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Document Review',
    description: 'Professional editing and feedback on personal statements, essays, and all application documents.',
    deliverables: [
      'Content editing',
      'Structure feedback',
      'Multiple revision rounds',
      'Grammar & style polishing',
    ],
    color: 'from-amber-500 to-amber-600',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Consultation Services',
    description: 'Initial consultation to assess your needs and create a personalized roadmap to success.',
    deliverables: [
      'Comprehensive needs assessment',
      'Custom action plan',
      'Timeline creation',
      'Ongoing support access',
    ],
    color: 'from-rose-500 to-rose-600',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Visa & Documentation',
    description: 'Complete support for visa applications, document verification, and compliance requirements.',
    deliverables: [
      'Visa application assistance',
      'Document authentication',
      'Requirements checklist',
      'Immigration guidance',
    ],
    color: 'from-teal-500 to-teal-600',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
]

/* ─── Step-by-Step Journey ─── */
const journey = [
  {
    step: '01',
    title: 'Initial Consultation',
    duration: '30 minutes',
    description: 'We start with a free discovery call to understand your background, aspirations, and current situation.',
    highlights: ['Academic background review', 'Goal discussion', 'Timeline overview', 'Service explanation'],
    icon: '🎯',
  },
  {
    step: '02',
    title: 'Profile Assessment',
    duration: '1-2 hours',
    description: 'Comprehensive evaluation of your academic background, extracurriculars, and career goals.',
    highlights: ['Transcript analysis', 'Experience evaluation', 'Strengths identification', 'Gap analysis'],
    icon: '📊',
  },
  {
    step: '03',
    title: 'University Selection',
    duration: '1 week',
    description: 'Research and shortlist suitable programs across universities that match your profile and preferences.',
    highlights: ['University research', 'Program matching', 'Requirements mapping', 'Shortlist creation'],
    icon: '🏛️',
  },
  {
    step: '04',
    title: 'Application Strategy',
    duration: '2-3 days',
    description: 'Create a detailed timeline and action plan with clear milestones and deadlines for each application.',
    highlights: ['Timeline development', 'Priority setting', 'Resource allocation', 'Strategy planning'],
    icon: '📅',
  },
  {
    step: '05',
    title: 'Document Preparation',
    duration: '3-4 weeks',
    description: 'Craft compelling personal statements and essays that highlight your unique story and strengths.',
    highlights: ['Personal statement drafting', 'Essay writing', 'CV/Resume creation', 'Reference guidance'],
    icon: '✍️',
  },
  {
    step: '06',
    title: 'Application Submission',
    duration: '1-2 weeks',
    description: 'Thorough review and submission of all applications, ensuring accuracy and completeness.',
    highlights: ['Final review', 'Quality check', 'Portal submission', 'Confirmation tracking'],
    icon: '📤',
  },
  {
    step: '07',
    title: 'Interview Preparation',
    duration: '2-3 weeks',
    description: 'Intensive practice and coaching for admissions interviews with mock sessions and feedback.',
    highlights: ['Mock interviews', 'Answer refinement', 'Confidence building', 'Strategy coaching'],
    icon: '🎤',
  },
  {
    step: '08',
    title: 'Acceptance Support',
    duration: 'Ongoing',
    description: 'Guidance on evaluating offers, making final decisions, and preparing for your university journey.',
    highlights: ['Offer comparison', 'Decision guidance', 'Enrollment support', 'Pre-departure prep'],
    icon: '🎓',
  },
]

/* ─── Pricing Tiers (Optional) ─── */
const pricingTiers = [
  {
    name: 'Starter Package',
    price: '£499',
    description: 'Perfect for students who need targeted support on specific aspects of their application.',
    features: [
      'Initial consultation (30 min)',
      'University shortlist (5 universities)',
      'Personal statement review (1 round)',
      'Email support for 1 month',
      'Application checklist',
    ],
    popular: false,
  },
  {
    name: 'Comprehensive Package',
    price: '£1,499',
    description: 'Our most popular package — complete end-to-end support for your entire application journey.',
    features: [
      'Everything in Starter',
      'Profile assessment & strategy',
      'Personal statement (3+ revision rounds)',
      'Mock interview sessions (3x)',
      'Application review for 5 universities',
      'Priority email & call support',
      'Visa guidance',
    ],
    popular: true,
  },
  {
    name: 'Premium Package',
    price: '£2,999',
    description: 'VIP service with unlimited support, dedicated consultant, and white-glove application assistance.',
    features: [
      'Everything in Comprehensive',
      'Dedicated personal consultant',
      'Unlimited universities',
      'Unlimited revision rounds',
      'Mock interviews (unlimited)',
      'Direct WhatsApp access',
      'Post-acceptance support',
      'Career mentoring (3 months)',
    ],
    popular: false,
  },
]

/* ═══════════════════════════════════════════════════
   SERVICES PAGE
   ═══════════════════════════════════════════════════ */
const Services = () => {
  const { t } = useLanguage()
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center" style={{ height: '420px' }}>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 mx-auto">
            <span className="w-2 h-2 bg-primary-light rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{t('services_hero_badge')}</span>
          </span>
          <h1 className="font-display text-[36px] sm:text-[48px] font-bold text-white mb-6">
            {t('services_hero_title_prefix')} <span className="text-primary-light">{t('services_hero_title_highlight')}</span>
          </h1>
          <p className="text-white/90 text-[16px] max-w-2xl mx-auto leading-relaxed mb-8">
            {t('services_hero_subtitle')}
          </p>
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-[16px] font-bold uppercase tracking-wider transition-all hover:shadow-lg min-h-12"
            >
                {t('services_hero_cta')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Service Categories Grid ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              What We Offer
            </span>
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-primary mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-neutral-700 text-[16px]">
              Every service is tailored to your unique needs, with clear deliverables and measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center ${service.iconColor} mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                
                {/* Description */}
                <p className="text-neutral-600 leading-relaxed mb-6">{service.description}</p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">Deliverables:</h4>
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary-light shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-1 text-primary hover:text-primary-dark font-medium text-sm group-hover:gap-2 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Step-by-Step Journey ─── */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              Our Process
            </span>
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-primary mb-6">
              Your Journey to Success
            </h2>
            <p className="text-neutral-700 text-[16px]">
              We guide you through an 8-step proven process, from discovery to acceptance.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop view - alternating */}
            <div className="hidden md:block">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200" />
              
              <div className="space-y-16">
                {journey.map((item, i) => (
                  <div key={item.step} className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-1/2 ${i % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-3" style={{ justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          <span className="text-3xl">{item.icon}</span>
                          <span className="text-accent font-bold text-sm">STEP {item.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-accent-dark text-sm font-medium mb-3">{item.duration}</p>
                        <p className="text-neutral-600 text-sm leading-relaxed mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2" style={{ justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          {item.highlights.map((h) => (
                            <span key={h} className="text-xs bg-neutral-50 text-neutral-600 px-3 py-1 rounded-full border border-neutral-200">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-md z-10" />

                    {/* Spacer */}
                    <div className="w-1/2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile view - vertical */}
            <div className="md:hidden space-y-8">
              {journey.map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-accent font-bold text-sm">STEP {item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-accent-dark text-sm font-medium mb-3">{item.duration}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span key={h} className="text-xs bg-neutral-50 text-neutral-600 px-3 py-1 rounded-full border border-neutral-200">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pricing Tiers ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              Investment Options
            </span>
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-primary mb-6">
              Flexible Packages for Every Need
            </h2>
            <p className="text-neutral-700 text-[16px]">
              Choose the level of support that matches your requirements and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  tier.popular ? 'border-accent shadow-xl scale-105' : 'border-neutral-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">{tier.name}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-primary mb-1">{tier.price}</div>
                  <div className="text-neutral-500 text-sm">One-time payment</div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-light shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`flex items-center justify-center text-center py-3.5 rounded-lg font-bold uppercase tracking-wider text-[16px] transition-all min-h-12 ${
                    tier.popular
                      ? 'bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-xl'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-primary'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-neutral-500 text-sm mt-8">
            All packages include access to our resource library and alumni network. Custom packages available upon request.
          </p>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-20 bg-linear-to-br from-primary-dark via-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-white mb-4">
              Why Students Choose On Track Admissions
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '98%', label: 'Success Rate', desc: 'Students accepted to top-3 choices' },
              { number: '500+', label: 'Students Placed', desc: 'At world-class universities' },
              { number: '10+', label: 'Years Experience', desc: 'In university admissions' },
              { number: '50+', label: 'Partner Universities', desc: 'Across the globe' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-light mb-2">{stat.number}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-white/60 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-accent to-accent-dark rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-white mb-6">
                Ready to Start Your Application Journey?
              </h2>
              <p className="text-white/90 text-[16px] max-w-2xl mx-auto mb-8">
                Book your free 30-minute consultation today. Our experts will assess your profile 
                and create a personalized roadmap to your dream university.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-primary px-8 py-4 rounded-lg text-[16px] font-bold uppercase tracking-wider transition-all hover:shadow-lg min-h-[48px]"
                >
                  Book Free Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center bg-primary-dark hover:bg-primary text-white border-2 border-white/30 px-8 py-4 rounded-lg text-[16px] font-bold uppercase tracking-wider transition-all min-h-[48px]"
                >
                  Learn About Us
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No obligation
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free 30-minute call
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized roadmap
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services
