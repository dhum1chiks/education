import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

/* ─── Form Options ─── */
const countries = [
  'United Kingdom', 'United States', 'Canada', 'Australia', 'India', 'Pakistan', 'Bangladesh',
  'United Arab Emirates', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Oman', 'Bahrain',
  'Singapore', 'Malaysia', 'Hong Kong', 'China', 'Japan', 'South Korea',
  'Nigeria', 'Kenya', 'South Africa', 'Ghana', 'Egypt',
  'Germany', 'France', 'Netherlands', 'Switzerland', 'Spain', 'Italy',
  'Other'
]

const educationLevels = [
  { value: 'gcse', label: 'GCSE / O-Levels (Age 14-16)' },
  { value: 'alevel', label: 'A-Levels / IB / Year 12-13 (Age 16-18)' },
  { value: 'undergraduate', label: 'Undergraduate Degree (Bachelor\'s)' },
  { value: 'postgraduate', label: 'Postgraduate Degree (Master\'s)' },
  { value: 'professional', label: 'Professional / Working Professional' },
  { value: 'other', label: 'Other' },
]

const targetPrograms = [
  { value: 'foundation', label: 'Foundation Year' },
  { value: 'undergraduate', label: 'Undergraduate (Bachelor\'s)' },
  { value: 'postgraduate', label: 'Postgraduate (Master\'s)' },
  { value: 'mba', label: 'MBA' },
  { value: 'phd', label: 'PhD / Doctorate' },
  { value: 'professional', label: 'Professional Courses' },
]

const studyDestinations = [
  { value: 'uk', label: '🇬🇧 United Kingdom' },
  { value: 'usa', label: '🇺🇸 United States' },
  { value: 'canada', label: '🇨🇦 Canada' },
  { value: 'australia', label: '🇦🇺 Australia' },
  { value: 'europe', label: '🇪🇺 Europe (EU)' },
  { value: 'singapore', label: '🇸🇬 Singapore' },
  { value: 'hongkong', label: '🇭🇰 Hong Kong' },
  { value: 'other', label: '🌍 Other' },
]

const startDates = [
  'September 2024',
  'January 2025',
  'September 2025',
  'January 2026',
  'September 2026',
  'Not sure yet',
]

const hearAboutUs = [
  'Google Search',
  'Social Media (Instagram, Facebook, LinkedIn)',
  'Friend or Family Recommendation',
  'School / College Counselor',
  'Education Fair / Event',
  'Online Advertisement',
  'Blog / Article',
  'YouTube',
  'Other',
]

/* ═══════════════════════════════════════════════════
   CONSULTATION PAGE
   ═══════════════════════════════════════════════════ */
const Consultation = () => {
  const { supportedLanguages, t } = useLanguage()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    educationLevel: '',
    targetPrograms: [],
    destinations: [],
    startDate: '',
    hearAbout: '',
    additionalInfo: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      if (name === 'targetPrograms') {
        setFormData(prev => ({
          ...prev,
          targetPrograms: checked
            ? [...prev.targetPrograms, value]
            : prev.targetPrograms.filter(p => p !== value)
        }))
      } else if (name === 'destinations') {
        setFormData(prev => ({
          ...prev,
          destinations: checked
            ? [...prev.destinations, value]
            : prev.destinations.filter(d => d !== value)
        }))
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.country) {
      newErrors.country = 'Please select your country'
    }

    if (!formData.educationLevel) {
      newErrors.educationLevel = 'Please select your current education level'
    }

    if (formData.targetPrograms.length === 0) {
      newErrors.targetPrograms = 'Please select at least one target program'
    }

    if (formData.destinations.length === 0) {
      newErrors.destinations = 'Please select at least one study destination'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      // Scroll to first error
      const firstError = document.querySelector('.error-field')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      console.log('Form submitted:', formData)
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        educationLevel: '',
        targetPrograms: [],
        destinations: [],
        startDate: '',
        hearAbout: '',
        additionalInfo: '',
      })

      // Scroll to success message
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── Hero Banner ─── */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-light/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/5 rounded-full blur-lg" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center" style={{ height: '420px' }}>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 mx-auto">
            <span className="w-2 h-2 bg-primary-light rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{t('consultation_hero_badge')}</span>
          </span>
          <h1 className="font-display text-[36px] sm:text-[48px] font-bold text-white mb-6">
            {t('consultation_hero_title_prefix')} <span className="text-primary-light">{t('consultation_hero_title_highlight')}</span>
          </h1>
          <p className="text-white/90 text-[16px] max-w-2xl mx-auto leading-relaxed">
            {t('consultation_hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              {t('lang_badge')}
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {supportedLanguages.map((item) => (
              <span
                key={item.code}
                className="bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-full text-sm font-medium"
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Success Message ─── */}
      {submitSuccess && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-8">
          <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-green-900 mb-2">
                  Thank You! Your Consultation Request Has Been Received 🎉
                </h3>
                <p className="text-green-800 mb-4">
                  We've received your enquiry and will get back to you within 24 hours. Check your email for a confirmation message with next steps.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/" className="text-green-700 hover:text-green-900 font-semibold text-sm flex items-center gap-1">
                    ← Back to Home
                  </Link>
                  <span className="text-green-300">|</span>
                  <Link to="/services" className="text-green-700 hover:text-green-900 font-semibold text-sm flex items-center gap-1">
                    Explore Our Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Main Form Section ─── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border-2 border-neutral-200 overflow-hidden shadow-xl">
            {/* Form Header */}
            <div className="bg-linear-to-r from-primary to-primary-light p-8 text-white">
              <h2 className="font-display text-2xl font-bold mb-2">Consultation Enquiry Form</h2>
              <p className="text-white/90 text-sm">
                Fill in your details below and we'll match you with the perfect consultant for your needs.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">1</span>
                  Personal Information
                </h3>
                <div className="space-y-4">
                  {/* Full Name */}
                  <div className={errors.fullName ? 'error-field' : ''}>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-neutral-300 focus:ring-primary focus:border-transparent'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className={errors.email ? 'error-field' : ''}>
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-neutral-300 focus:ring-primary focus:border-transparent'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Phone Number <span className="text-neutral-400 text-xs">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 7700 900000"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className={errors.country ? 'error-field' : ''}>
                    <label htmlFor="country" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.country
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-neutral-300 focus:ring-primary focus:border-transparent'
                      }`}
                    >
                      <option value="">Select your country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Academic Background */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">2</span>
                  Academic Background
                </h3>
                
                {/* Current Education Level */}
                <div className={`mb-6 ${errors.educationLevel ? 'error-field' : ''}`}>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    Current Education Level <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {educationLevels.map((level) => (
                      <label key={level.value} className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="educationLevel"
                          value={level.value}
                          checked={formData.educationLevel === level.value}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <span className="text-neutral-700">{level.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.educationLevel && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.educationLevel}
                    </p>
                  )}
                </div>
              </div>

              {/* Study Goals */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">3</span>
                  Study Goals
                </h3>

                {/* Target Program Level */}
                <div className={`mb-6 ${errors.targetPrograms ? 'error-field' : ''}`}>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    Target Program Level <span className="text-red-500">*</span>
                    <span className="text-neutral-500 text-xs font-normal ml-2">(Select all that apply)</span>
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {targetPrograms.map((program) => (
                      <label key={program.value} className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          name="targetPrograms"
                          value={program.value}
                          checked={formData.targetPrograms.includes(program.value)}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary rounded focus:ring-primary"
                        />
                        <span className="text-neutral-700">{program.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.targetPrograms && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.targetPrograms}
                    </p>
                  )}
                </div>

                {/* Preferred Study Destination */}
                <div className={`mb-6 ${errors.destinations ? 'error-field' : ''}`}>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    Preferred Study Destination <span className="text-red-500">*</span>
                    <span className="text-neutral-500 text-xs font-normal ml-2">(Select all that apply)</span>
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {studyDestinations.map((dest) => (
                      <label key={dest.value} className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          name="destinations"
                          value={dest.value}
                          checked={formData.destinations.includes(dest.value)}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary rounded focus:ring-primary"
                        />
                        <span className="text-neutral-700">{dest.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.destinations && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.destinations}
                    </p>
                  )}
                </div>

                {/* Intended Start Date */}
                <div>
                  <label htmlFor="startDate" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Intended Start Date <span className="text-neutral-400 text-xs">(Optional)</span>
                  </label>
                  <select
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select intended start date</option>
                    {startDates.map((date) => (
                      <option key={date} value={date}>{date}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">4</span>
                  Additional Details
                </h3>

                {/* How did you hear about us */}
                <div className="mb-6">
                  <label htmlFor="hearAbout" className="block text-sm font-semibold text-neutral-700 mb-2">
                    How did you hear about us? <span className="text-neutral-400 text-xs">(Optional)</span>
                  </label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Please select</option>
                    {hearAboutUs.map((source) => (
                      <option key={source} value={source}>{source}</option>
                    ))}
                  </select>
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Additional Information <span className="text-neutral-400 text-xs">(Optional)</span>
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Please share any specific questions, concerns, or goals you'd like to discuss during the consultation..."
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                  <p className="text-xs text-neutral-500 mt-2">
                    Tell us about your academic interests, target universities, or any challenges you're facing.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-neutral-200">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg font-bold uppercase tracking-wider text-[16px] transition-all shadow-lg hover:shadow-xl min-h-12 flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Consultation Request
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-xs text-neutral-500 text-center mt-4">
                  By submitting this form, you agree to our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Benefits Section ─── */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-primary mb-4">
              What Happens Next?
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              After you submit your enquiry, here's what you can expect from us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                icon: '📧',
                title: 'Confirmation Email',
                description: 'You\'ll receive an immediate confirmation email with your enquiry details and what to expect next.',
              },
              {
                step: '2',
                icon: '🤝',
                title: 'Consultant Match',
                description: 'Within 24 hours, we\'ll match you with a specialist consultant based on your goals and background.',
              },
              {
                step: '3',
                icon: '📅',
                title: 'Schedule Your Session',
                description: 'Your consultant will reach out to schedule your free 30-minute consultation at a time that suits you.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  {item.icon}
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Is the consultation really free?',
                a: 'Yes! Your first 30-minute consultation is completely free with no obligation. We use this time to understand your goals and explain how we can help.',
              },
              {
                q: 'How long will it take to hear back?',
                a: 'We aim to respond to all enquiries within 24 hours (Monday-Friday). You\'ll receive an immediate confirmation email when you submit the form.',
              },
              {
                q: 'What should I prepare for the consultation?',
                a: 'Nothing formal required! Just come with questions and be ready to discuss your academic background, career goals, and university preferences.',
              },
              {
                q: 'Can I change my consultation time?',
                a: 'Absolutely. Just reply to your confirmation email or contact us directly, and we\'ll reschedule at a time that works better for you.',
              },
            ].map((faq, index) => (
              <details key={index} className="group bg-neutral-50 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition-colors">
                  <h3 className="font-semibold text-primary pr-4">{faq.q}</h3>
                  <svg className="w-5 h-5 text-primary group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-neutral-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Consultation
