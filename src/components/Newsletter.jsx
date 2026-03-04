import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light rounded-3xl p-8 sm:p-16 relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <span className="inline-block text-primary-light font-semibold text-sm tracking-wider uppercase mb-3">
                Get Started Today
              </span>
              <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-white mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-white/90 text-[16px] leading-relaxed mb-8">
                Book a free consultation with our expert advisors or subscribe to our newsletter 
                for the latest admissions insights, tips, and university updates.
              </p>

                <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Personalized roadmap</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">No obligation</span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-primary mb-2">Book a Free Consultation</h3>
              <p className="text-neutral-500 text-sm mb-6">Fill in your details and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all">
                    <option value="">Select Service</option>
                    <option value="application">Application Strategy</option>
                    <option value="personal-statement">Personal Statement</option>
                    <option value="university-selection">University Selection</option>
                    <option value="interview-prep">Interview Preparation</option>
                    <option value="visa">Visa & Documentation</option>
                    <option value="mentorship">Mentorship Program</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3.5 rounded-lg font-bold uppercase tracking-wider text-[16px] transition-all hover:shadow-lg min-h-[48px]"
                >
                  {submitted ? '✓ Request Sent!' : 'Book Consultation'}
                </button>
              </form>

              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-neutral-100">
                <div className="flex -space-x-2">
                  {['AR', 'JC', 'FA'].map((a) => (
                    <div key={a} className="w-8 h-8 bg-primary rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {a}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-neutral-500">
                  Join <span className="font-semibold text-primary">500+</span> students who started their journey with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
