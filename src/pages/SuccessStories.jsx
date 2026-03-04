import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

/* ─── Featured Case Studies ─── */
const caseStudies = [
  {
    id: 1,
    name: 'Sarah Chen',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    university: 'University of Oxford',
    program: 'PPE (Philosophy, Politics & Economics)',
    country: '🇬🇧 UK',
    year: '2024',
    startingPoint: 'Sarah approached us with strong academics (A*A*A predicted) but struggled to articulate her passion for interdisciplinary study. She was overwhelmed by the Oxford application process and lacked confidence in interview preparation.',
    approach: 'We provided comprehensive support including personal statement coaching, mock interviews with former Oxford tutors, and strategic guidance on selecting her college. Our team helped her develop compelling arguments for why PPE was her ideal course.',
    journey: [
      { milestone: 'Initial Consultation', date: 'June 2023', status: 'completed' },
      { milestone: 'Personal Statement Drafting', date: 'July-Aug 2023', status: 'completed' },
      { milestone: 'UCAS Application Submitted', date: 'Oct 2023', status: 'completed' },
      { milestone: 'Interview Preparation (8 sessions)', date: 'Nov 2023', status: 'completed' },
      { milestone: 'Oxford Interview', date: 'Dec 2023', status: 'completed' },
      { milestone: 'Offer Received', date: 'Jan 2024', status: 'completed' },
    ],
    outcome: 'Sarah received offers from 4 out of 5 universities including Oxford (St Hugh\'s College), LSE, and Durham. She is now thriving at Oxford and volunteers as a mentor for our current applicants.',
    quote: 'On Track Admissions didn\'t just help me get into Oxford - they helped me discover why I truly belonged there. The interview prep was invaluable, and I felt completely prepared on the day.',
    stats: { sessions: 15, months: 7, success: 'Offer from Oxford' },
  },
  {
    id: 2,
    name: 'James Thompson',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    university: 'MIT',
    program: 'Computer Science & Engineering',
    country: '🇺🇸 USA',
    year: '2023',
    startingPoint: 'James had exceptional technical skills and coding achievements but struggled with the holistic US application process. His essays lacked personality, and he was unsure how to present his projects compellingly.',
    approach: 'We worked intensively on his Common App essay, helping him craft a narrative that showcased both his technical brilliance and personal growth. We guided him through SAT prep strategy and helped curate his extracurricular portfolio to highlight leadership.',
    journey: [
      { milestone: 'Initial Assessment', date: 'March 2023', status: 'completed' },
      { milestone: 'SAT Strategy & Prep', date: 'April-June 2023', status: 'completed' },
      { milestone: 'Essay Brainstorming', date: 'July 2023', status: 'completed' },
      { milestone: 'Common App Essays (6 drafts)', date: 'Aug-Sept 2023', status: 'completed' },
      { milestone: 'Supplemental Essays', date: 'Oct-Nov 2023', status: 'completed' },
      { milestone: 'Applications Submitted', date: 'Dec 2023', status: 'completed' },
      { milestone: 'Admission Decision', date: 'March 2024', status: 'completed' },
    ],
    outcome: 'James was admitted to MIT, Stanford (waitlist), Caltech, and UC Berkeley. He chose MIT and is now working on AI research projects at the Media Lab.',
    quote: 'The essay coaching transformed how I saw myself. I went from listing achievements to telling my story. On Track made the impossible feel achievable.',
    stats: { sessions: 22, months: 10, success: 'MIT Acceptance' },
  },
  {
    id: 3,
    name: 'Priya Patel',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    university: 'Imperial College London',
    program: 'Medicine (MBBS)',
    country: '🇬🇧 UK',
    year: '2024',
    startingPoint: 'Priya had strong academics and genuine passion for medicine but struggled with UCAT preparation and interview confidence. As a first-generation university applicant, she lacked guidance on the medical school application process.',
    approach: 'We provided structured UCAT coaching, medical ethics workshops, and extensive MMI (Multiple Mini Interview) practice. We also helped her secure meaningful work experience and guided her through writing a standout personal statement.',
    journey: [
      { milestone: 'Medical Careers Consultation', date: 'Jan 2023', status: 'completed' },
      { milestone: 'UCAT Preparation Program', date: 'Feb-July 2023', status: 'completed' },
      { milestone: 'Work Experience Secured', date: 'Summer 2023', status: 'completed' },
      { milestone: 'Personal Statement Review', date: 'Aug-Sept 2023', status: 'completed' },
      { milestone: 'UCAS Medicine Application', date: 'Oct 2023', status: 'completed' },
      { milestone: 'MMI Interview Prep (12 sessions)', date: 'Nov-Dec 2023', status: 'completed' },
      { milestone: 'Offer from Imperial', date: 'Jan 2024', status: 'completed' },
    ],
    outcome: 'Priya achieved a UCAT score in the 95th percentile and received offers from Imperial, Edinburgh, and King\'s College London. She is now in her first year at Imperial and actively involved in student outreach.',
    quote: 'Being a first-gen applicant, I had no idea where to start. On Track guided me through every single step - from UCAT to interviews. I genuinely don\'t think I would have gotten into Imperial without them.',
    stats: { sessions: 25, months: 12, success: 'Imperial Medicine' },
  },
  {
    id: 4,
    name: 'Mohammed Al-Rashid',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    university: 'Harvard University',
    program: 'Economics',
    country: '🇺🇸 USA',
    year: '2023',
    startingPoint: 'Mohammed had strong academics and leadership experience in his home country (UAE) but was unsure how to position himself for Ivy League admissions. He needed help navigating financial aid applications and presenting his unique cultural perspective.',
    approach: 'We helped Mohammed craft essays that authentically showcased his background while demonstrating his potential to contribute to Harvard\'s diverse community. We provided extensive guidance on CSS Profile, financial aid strategy, and interview preparation.',
    journey: [
      { milestone: 'Profile Building Strategy', date: 'Feb 2023', status: 'completed' },
      { milestone: 'SAT Prep & Score Achievement', date: 'March-May 2023', status: 'completed' },
      { milestone: 'Essay Development (8 essays)', date: 'June-Sept 2023', status: 'completed' },
      { milestone: 'Financial Aid Applications', date: 'Oct-Nov 2023', status: 'completed' },
      { milestone: 'Early Action Submission', date: 'Nov 2023', status: 'completed' },
      { milestone: 'Harvard Interview Prep', date: 'Dec 2023', status: 'completed' },
      { milestone: 'Acceptance & Aid Package', date: 'Dec 2023', status: 'completed' },
    ],
    outcome: 'Mohammed was admitted to Harvard Early Action with a substantial financial aid package. He also received offers from Yale, Princeton, and UPenn. He is now at Harvard studying Economics and is involved in the Middle Eastern Students Association.',
    quote: 'On Track understood my story and helped me tell it in a way that resonated with admissions officers. They turned my anxiety into confidence. Harvard was always the dream, and they made it real.',
    stats: { sessions: 20, months: 10, success: 'Harvard Early Action' },
  },
  {
    id: 5,
    name: 'Emily Watson',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    university: 'University of Cambridge',
    program: 'Natural Sciences (Biological)',
    country: '🇬🇧 UK',
    year: '2024',
    startingPoint: 'Emily had passion for biology but struggled with her UCAS personal statement - it read like a list of achievements rather than a compelling narrative. She was also nervous about the Cambridge interview format and felt underprepared.',
    approach: 'We transformed Emily\'s personal statement through multiple revision cycles, helping her articulate her intellectual curiosity. We provided subject-specific interview training with a Cambridge alumna and worked on her ability to think out loud through problems.',
    journey: [
      { milestone: 'Initial Consultation', date: 'May 2023', status: 'completed' },
      { milestone: 'Personal Statement (6 drafts)', date: 'June-Sept 2023', status: 'completed' },
      { milestone: 'UCAS Application Submitted', date: 'Oct 2023', status: 'completed' },
      { milestone: 'Cambridge Interview Preparation', date: 'Nov 2023', status: 'completed' },
      { milestone: 'Cambridge Interview', date: 'Dec 2023', status: 'completed' },
      { milestone: 'Conditional Offer', date: 'Jan 2024', status: 'completed' },
      { milestone: 'Grades Achieved & Confirmed', date: 'Aug 2024', status: 'completed' },
    ],
    outcome: 'Emily received a conditional offer from Cambridge (Newnham College) and achieved her required grades (A*A*A). She is now in her first year studying Natural Sciences and has already joined two research projects.',
    quote: 'The personal statement help was incredible - we went through six drafts but each one got better. By the interview, I felt like I genuinely understood what Cambridge was looking for. Couldn\'t have done it without On Track!',
    stats: { sessions: 14, months: 8, success: 'Cambridge Natural Sciences' },
  },
]

/* ─── Quick Reviews ─── */
const quickReviews = [
  { name: 'Alex Kumar', university: 'Stanford', rating: 5, review: 'Exceptional guidance throughout the entire application process. The essay coaching was particularly transformative.' },
  { name: 'Sophie Laurent', university: 'LSE', rating: 5, review: 'Professional, knowledgeable, and genuinely invested in my success. Highly recommend!' },
  { name: 'David Park', university: 'UCL', rating: 5, review: 'The mock interviews gave me the confidence I needed. Received offers from all 5 choices!' },
  { name: 'Amara Johnson', university: 'Yale', rating: 5, review: 'Worth every penny. The team understood my goals and helped me craft a compelling application.' },
  { name: 'Luca Rossi', university: 'Edinburgh', rating: 5, review: 'Clear, structured approach with excellent communication. Made the stressful process manageable.' },
  { name: 'Fatima Ali', university: 'Imperial', rating: 5, review: 'The UCAT prep and interview practice were game-changers. Thank you for getting me into medicine!' },
  { name: 'Thomas Brown', university: 'Cambridge', rating: 5, review: 'Patient, detailed, and incredibly knowledgeable. The Oxbridge interview prep was invaluable.' },
  { name: 'Yuki Tanaka', university: 'Columbia', rating: 5, review: 'Helped me stand out in a competitive pool. The personal statement coaching exceeded all expectations.' },
  { name: 'Isabella Garcia', university: 'Oxford', rating: 5, review: 'Five-star service from start to finish. They celebrate every milestone with you!' },
]

/* ─── Video Testimonials ─── */
const videoTestimonials = [
  { id: 1, name: 'Sarah Chen', university: 'Oxford', thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop', videoId: 'dQw4w9WgXcQ' },
  { id: 2, name: 'James Thompson', university: 'MIT', thumbnail: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop', videoId: 'dQw4w9WgXcQ' },
  { id: 3, name: 'Priya Patel', university: 'Imperial', thumbnail: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=600&h=400&fit=crop', videoId: 'dQw4w9WgXcQ' },
]

/* ═══════════════════════════════════════════════════
   SUCCESS STORIES PAGE
   ═══════════════════════════════════════════════════ */
const SuccessStories = () => {
  const { t } = useLanguage()
  const [selectedCase, setSelectedCase] = useState(null)
  const [activeTab, setActiveTab] = useState('all')

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
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-light/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-white/5 rounded-full blur-lg" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center" style={{ height: '420px' }}>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 mx-auto">
            <span className="w-2 h-2 bg-primary-light rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{t('success_hero_badge')}</span>
          </span>
          <h1 className="font-display text-[36px] sm:text-[48px] font-bold text-white mb-6">
            <span className="text-primary-light">{t('success_hero_title_highlight')}</span> {t('success_hero_title_suffix')}
          </h1>
          <p className="text-white/90 text-[16px] max-w-2xl mx-auto leading-relaxed">
            {t('success_hero_subtitle')}
          </p>
        </div>
      </section>

      {/* ─── Statistics Dashboard ─── */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎓', number: '500+', label: 'Students Placed', color: 'bg-blue-50 text-blue-600' },
              { icon: '🏛️', number: '98%', label: 'Success Rate', color: 'bg-green-50 text-green-600' },
              { icon: '🌍', number: '15+', label: 'Countries', color: 'bg-purple-50 text-purple-600' },
              { icon: '⭐', number: '4.9/5', label: 'Average Rating', color: 'bg-yellow-50 text-yellow-600' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 rounded-xl ${stat.color} flex items-center justify-center text-3xl mb-4 mx-auto`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary text-center mb-1">{stat.number}</div>
                <div className="text-neutral-600 text-sm font-medium text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Case Studies ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Featured Stories
            </span>
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-primary mb-4">
              Student Success Journeys
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Detailed case studies showcasing how we helped students navigate their university admissions journey from start to finish.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-3xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="lg:flex">
                  {/* Student Photo */}
                  <div className="lg:w-80 h-64 lg:h-auto relative overflow-hidden bg-neutral-100 shrink-0">
                    <img src={study.photo} alt={study.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-primary">Success Story</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-primary mb-2">{study.name}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className="flex items-center gap-1 font-semibold text-primary-light">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                            {study.university}
                          </span>
                          <span className="text-neutral-500">•</span>
                          <span className="text-neutral-600">{study.program}</span>
                          <span className="text-neutral-500">•</span>
                          <span className="text-neutral-600">{study.country}</span>
                        </div>
                      </div>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold shrink-0">
                        {study.year}
                      </span>
                    </div>

                    {/* Journey Stats */}
                    <div className="flex gap-6 mb-6 pb-6 border-b border-neutral-200">
                      {Object.entries(study.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xl font-bold text-primary mb-1">{value}</div>
                          <div className="text-xs text-neutral-500 uppercase tracking-wider">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Starting Point */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-neutral-700 uppercase tracking-wide mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xs">1</span>
                        Starting Point
                      </h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{study.startingPoint}</p>
                    </div>

                    {/* Our Approach */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-neutral-700 uppercase tracking-wide mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-xs">2</span>
                        Our Approach
                      </h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{study.approach}</p>
                    </div>

                    {/* Outcome */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-neutral-700 uppercase tracking-wide mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                        Outcome
                      </h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{study.outcome}</p>
                    </div>

                    {/* Student Quote */}
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 mb-6">
                      <svg className="w-6 h-6 text-primary/30 mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-neutral-700 italic leading-relaxed mb-2">"{study.quote}"</p>
                      <p className="text-sm font-semibold text-primary">- {study.name}</p>
                    </div>

                    {/* View Full Journey Button */}
                    <button
                      onClick={() => setSelectedCase(study)}
                      className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                    >
                      View Full Journey Timeline
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Video Testimonials ─── */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Video Testimonials
            </span>
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-primary mb-4">
              Hear From Our Students
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Watch our students share their experiences and journey to success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="relative h-48 bg-neutral-200 overflow-hidden">
                  <img src={video.thumbnail} alt={video.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                      <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-primary mb-1">{video.name}</h4>
                  <p className="text-sm text-neutral-600">{video.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quick Reviews Grid ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Student Reviews
            </span>
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-primary mb-4">
              What Our Students Say
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Real reviews from students who achieved their university dreams with our guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickReviews.map((review, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                {/* Star Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-neutral-700 mb-4 leading-relaxed text-sm">"{review.review}"</p>
                
                {/* Student Info */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <div>
                    <p className="font-semibold text-primary text-sm">{review.name}</p>
                    <p className="text-xs text-neutral-500">{review.university}</p>
                  </div>
                  <svg className="w-8 h-8 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── University Success Badges ─── */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-2xl font-bold text-primary mb-8">
            Our Students Have Been Accepted To
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            {['Oxford', 'Cambridge', 'Harvard', 'MIT', 'Stanford', 'Imperial', 'LSE', 'Yale'].map((uni) => (
              <div key={uni} className="text-neutral-600 font-semibold text-lg hover:text-primary transition-colors">
                {uni}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 bg-linear-to-r from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-white/90 text-[16px] max-w-2xl mx-auto mb-8">
            Join hundreds of students who have achieved their dream university placements with our expert guidance.
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

      {/* ─── Journey Timeline Modal ─── */}
      {selectedCase && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-2">
                    {selectedCase.name}'s Journey
                  </h3>
                  <p className="text-neutral-600">{selectedCase.university} • {selectedCase.program}</p>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                {selectedCase.journey.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                        milestone.status === 'completed' ? 'bg-green-500' : 'bg-neutral-300'
                      }`}>
                        {milestone.status === 'completed' ? '✓' : index + 1}
                      </div>
                      {index < selectedCase.journey.length - 1 && (
                        <div className="w-0.5 h-full bg-neutral-200 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-primary">{milestone.milestone}</h4>
                        <span className="text-sm text-neutral-500">{milestone.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <Link
                  to="/#contact"
                  className="block w-full bg-primary hover:bg-primary-dark text-white py-3.5 rounded-lg font-bold uppercase tracking-wider text-center transition-all"
                >
                  Start Your Journey Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default SuccessStories
