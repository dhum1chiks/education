const steps = [
  {
    title: 'Free Consultation',
    desc: 'Discuss your goals and academic profile. We build a personalised plan tailored to you.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'University Shortlisting',
    desc: 'We identify and target universities that best match your profile, goals and budget.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Application Support',
    desc: 'Personal statements, documents, references and deadline management — all handled.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Admission Success',
    desc: 'Celebrate your acceptance! We continue to support you with visa and enrolment steps.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
          Our Process
        </span>
        <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-primary mb-4">
          How It Works
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-14">
          A simple, proven 4-step process to guide you from application to acceptance.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-primary/10" />

          {steps.map((s, i) => (
            <div key={s.title} className="relative bg-neutral-50 rounded-2xl p-8 text-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-neutral-100">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-5 relative z-10">
                {s.icon}
              </div>
              <span className="inline-block text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">
                Step {i + 1}
              </span>
              <h4 className="text-lg font-bold text-primary mb-2">{s.title}</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
