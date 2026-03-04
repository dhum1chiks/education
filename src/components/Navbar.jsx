import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const { language, setLanguage, t, supportedLanguages } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t('nav_home'), href: '/', isRoute: true },
    { label: t('nav_services'), href: '/services', isRoute: true },
    { label: t('nav_universities'), href: '/universities', isRoute: true },
    { label: t('nav_success_stories'), href: '/success-stories', isRoute: true },
    { label: t('nav_about'), href: '/about', isRoute: true },
    { label: t('nav_contact'), href: '/consultation', isRoute: true },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 notranslate" data-no-translate="true">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${
              isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'
            }`}>
              OT
            </div>
            <div>
              <span className={`text-xl font-bold tracking-tight ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                On Track
              </span>
              <span className={`block text-xs font-medium -mt-1 ${
                isScrolled ? 'text-accent' : 'text-accent-light'
              }`}>
                ADMISSIONS
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isScrolled ? 'text-neutral-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isScrolled ? 'text-neutral-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              )
            )}

            <div data-no-translate="true" className="notranslate">
              <select
                aria-label={t('nav_language')}
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className={`text-sm border rounded-lg px-3 py-2 bg-transparent notranslate ${
                  isScrolled
                    ? 'text-neutral-700 border-neutral-300'
                    : 'text-white border-white/50'
                }`}
              >
                {supportedLanguages.map((item) => (
                  <option key={item.code} value={item.code} className="text-neutral-900 notranslate">
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <Link
              to="/consultation"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all hover:shadow-lg min-h-12 flex items-center"
            >
              {t('nav_book_consultation')}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 transition-all ${isScrolled ? 'bg-primary' : 'bg-white'} ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 transition-all ${isScrolled ? 'bg-primary' : 'bg-white'} ${isMobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 transition-all ${isScrolled ? 'bg-primary' : 'bg-white'} ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMobileOpen ? 'max-h-96 bg-white shadow-lg' : 'max-h-0'
      }`}>
        <div className="px-6 py-4 space-y-3">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block text-neutral-700 hover:text-primary font-medium py-2"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block text-neutral-700 hover:text-primary font-medium py-2"
              >
                {link.label}
              </a>
            )
          )}

          <div className="pt-2 notranslate" data-no-translate="true">
            <label htmlFor="mobile-language" className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider">
              {t('nav_language')}
            </label>
            <select
              id="mobile-language"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="w-full text-sm border border-neutral-300 rounded-lg px-3 py-2 bg-white text-neutral-700 notranslate"
            >
              {supportedLanguages.map((item) => (
                <option key={item.code} value={item.code} className="notranslate">
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <Link
            to="/consultation"
            onClick={() => setIsMobileOpen(false)}
            className="flex items-center justify-center text-center bg-primary text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider mt-4 min-h-12"
          >
            {t('nav_book_consultation')}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
