import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-lg text-white">
                OT
              </div>
              <div>
                <span className="text-xl font-bold">On Track</span>
                <span className="block text-xs text-primary-light font-medium -mt-1">ADMISSIONS</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premier global university admissions consultancy helping students achieve their 
              academic dreams since 2015.
            </p>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-primary-light rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-sm capitalize">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer_quick_links')}</h4>
            <ul className="space-y-3">
              {[
                { label: t('footer_home'), to: '/' },
                { label: t('footer_about'), to: '/about' },
                { label: t('footer_services'), to: '/#services' },
                { label: t('footer_universities'), to: '/universities' },
                { label: t('footer_success_stories'), to: '/success-stories' },
                { label: t('footer_contact'), to: '/consultation' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/60 hover:text-primary-light text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-white/60 hover:text-accent text-sm transition-colors">
                  View All Services
                </Link>
              </li>
              {['Application Strategy', 'Personal Statement', 'University Selection', 'Interview Prep', 'Visa Support', 'Mentorship'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-white/60 hover:text-accent text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Education Lane, London, UK
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@ontrackadmissions.com
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +44 20 1234 5678
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © 2025 On Track Admissions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
