import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

const LanguageContext = createContext(null)

export const supportedLanguages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'af', label: 'Afrikaans' },
  { code: 'de', label: 'Deutsch' },
]

const translations = {
  en: {
    nav_home: 'Home',
    nav_services: 'Services',
    nav_universities: 'Universities',
    nav_success_stories: 'Success Stories',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_book_consultation: 'Book Consultation',
    nav_language: 'Language',

    footer_quick_links: 'Quick Links',
    footer_home: 'Home',
    footer_about: 'About Us',
    footer_services: 'Services',
    footer_universities: 'Universities',
    footer_success_stories: 'Success Stories',
    footer_contact: 'Contact',

    lang_badge: 'Multilingual Support: 16 Languages',
    about_hero_badge: 'Established 2015 · London, UK',
    about_hero_title_prefix: 'About',
    about_hero_title_highlight: 'On Track',
    about_hero_title_suffix: 'Admissions',
    about_hero_subtitle: 'We are a team of former admissions officers, educators, and mentors dedicated to helping students around the world secure places at their dream universities.',
    about_hero_cta_primary: 'Book Consultation',
    about_hero_cta_secondary: 'Our Process',
    services_hero_badge: 'Comprehensive Admissions Support',
    services_hero_title_prefix: 'Our',
    services_hero_title_highlight: 'Services',
    services_hero_subtitle: 'From initial consultation to acceptance day, we provide expert guidance at every step of your university admissions journey.',
    services_hero_cta: 'Book Your Free Consultation',
    universities_hero_badge: '50+ Partner Universities Worldwide',
    universities_hero_title_prefix: 'Our',
    universities_hero_title_highlight: 'Partner Universities',
    universities_hero_subtitle: 'We partner with world-leading universities to help you find the perfect fit for your academic journey and career aspirations.',
    universities_stat_partners: 'Partner Universities',
    universities_stat_countries: 'Countries',
    universities_stat_students: 'Students Placed',
    universities_stat_success: 'Success Rate',
    success_hero_badge: '500+ Students Placed at Top Universities',
    success_hero_title_highlight: 'Success',
    success_hero_title_suffix: 'Stories',
    success_hero_subtitle: 'Real students. Real results. Discover how we helped them achieve their dreams of studying at world-leading universities.',
    consultation_hero_badge: 'Free 30-Minute Consultation',
    consultation_hero_title_prefix: 'Book Your',
    consultation_hero_title_highlight: 'Free Consultation',
    consultation_hero_subtitle: 'Take the first step towards your dream university. Share your goals with us, and we\'ll create a personalized roadmap to success.',
  },
  'zh-CN': {
    nav_home: '首页',
    nav_services: '服务',
    nav_universities: '大学',
    nav_success_stories: '成功案例',
    nav_about: '关于我们',
    nav_contact: '联系',
    nav_book_consultation: '预约咨询',
    nav_language: '语言',
    footer_quick_links: '快捷链接',
    footer_home: '首页',
    footer_about: '关于我们',
    footer_services: '服务',
    footer_universities: '大学',
    footer_success_stories: '成功案例',
    footer_contact: '联系',
    lang_badge: '多语言支持：16种语言',
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_services: 'الخدمات',
    nav_universities: 'الجامعات',
    nav_success_stories: 'قصص النجاح',
    nav_about: 'من نحن',
    nav_contact: 'اتصل بنا',
    nav_book_consultation: 'احجز استشارة',
    nav_language: 'اللغة',
    footer_quick_links: 'روابط سريعة',
    footer_home: 'الرئيسية',
    footer_about: 'من نحن',
    footer_services: 'الخدمات',
    footer_universities: 'الجامعات',
    footer_success_stories: 'قصص النجاح',
    footer_contact: 'اتصل بنا',
    lang_badge: 'دعم متعدد اللغات: 16 لغة',
  },
  hi: {
    nav_home: 'होम',
    nav_services: 'सेवाएँ',
    nav_universities: 'विश्वविद्यालय',
    nav_success_stories: 'सफलता कहानियाँ',
    nav_about: 'हमारे बारे में',
    nav_contact: 'संपर्क',
    nav_book_consultation: 'परामर्श बुक करें',
    nav_language: 'भाषा',
    footer_quick_links: 'त्वरित लिंक',
    footer_home: 'होम',
    footer_about: 'हमारे बारे में',
    footer_services: 'सेवाएँ',
    footer_universities: 'विश्वविद्यालय',
    footer_success_stories: 'सफलता कहानियाँ',
    footer_contact: 'संपर्क',
    lang_badge: 'बहुभाषी समर्थन: 16 भाषाएँ',
  },
  es: {
    nav_home: 'Inicio',
    nav_services: 'Servicios',
    nav_universities: 'Universidades',
    nav_success_stories: 'Casos de éxito',
    nav_about: 'Nosotros',
    nav_contact: 'Contacto',
    nav_book_consultation: 'Reservar consulta',
    nav_language: 'Idioma',
    footer_quick_links: 'Enlaces rápidos',
    footer_home: 'Inicio',
    footer_about: 'Sobre nosotros',
    footer_services: 'Servicios',
    footer_universities: 'Universidades',
    footer_success_stories: 'Casos de éxito',
    footer_contact: 'Contacto',
    lang_badge: 'Soporte multilingüe: 16 idiomas',
  },
  fr: {
    nav_home: 'Accueil',
    nav_services: 'Services',
    nav_universities: 'Universités',
    nav_success_stories: 'Témoignages',
    nav_about: 'À propos',
    nav_contact: 'Contact',
    nav_book_consultation: 'Réserver une consultation',
    nav_language: 'Langue',
    footer_quick_links: 'Liens rapides',
    footer_home: 'Accueil',
    footer_about: 'À propos',
    footer_services: 'Services',
    footer_universities: 'Universités',
    footer_success_stories: 'Témoignages',
    footer_contact: 'Contact',
    lang_badge: 'Support multilingue : 16 langues',
  },
  de: {
    nav_home: 'Startseite',
    nav_services: 'Leistungen',
    nav_universities: 'Universitäten',
    nav_success_stories: 'Erfolgsgeschichten',
    nav_about: 'Über uns',
    nav_contact: 'Kontakt',
    nav_book_consultation: 'Beratung buchen',
    nav_language: 'Sprache',
    footer_quick_links: 'Schnelllinks',
    footer_home: 'Startseite',
    footer_about: 'Über uns',
    footer_services: 'Leistungen',
    footer_universities: 'Universitäten',
    footer_success_stories: 'Erfolgsgeschichten',
    footer_contact: 'Kontakt',
    lang_badge: 'Mehrsprachige Unterstützung: 16 Sprachen',
  },
  pt: {
    nav_home: 'Início',
    nav_services: 'Serviços',
    nav_universities: 'Universidades',
    nav_success_stories: 'Histórias de sucesso',
    nav_about: 'Sobre',
    nav_contact: 'Contato',
    nav_book_consultation: 'Agendar consulta',
    nav_language: 'Idioma',
    footer_quick_links: 'Links rápidos',
    footer_home: 'Início',
    footer_about: 'Sobre nós',
    footer_services: 'Serviços',
    footer_universities: 'Universidades',
    footer_success_stories: 'Histórias de sucesso',
    footer_contact: 'Contato',
    lang_badge: 'Suporte multilíngue: 16 idiomas',
  },
  ru: {
    nav_home: 'Главная',
    nav_services: 'Услуги',
    nav_universities: 'Университеты',
    nav_success_stories: 'Истории успеха',
    nav_about: 'О нас',
    nav_contact: 'Контакты',
    nav_book_consultation: 'Записаться на консультацию',
    nav_language: 'Язык',
    footer_quick_links: 'Быстрые ссылки',
    footer_home: 'Главная',
    footer_about: 'О нас',
    footer_services: 'Услуги',
    footer_universities: 'Университеты',
    footer_success_stories: 'Истории успеха',
    footer_contact: 'Контакты',
    lang_badge: 'Многоязычная поддержка: 16 языков',
  },
  bn: {
    nav_home: 'হোম',
    nav_services: 'সেবাসমূহ',
    nav_universities: 'বিশ্ববিদ্যালয়',
    nav_success_stories: 'সাফল্যের গল্প',
    nav_about: 'আমাদের সম্পর্কে',
    nav_contact: 'যোগাযোগ',
    nav_book_consultation: 'পরামর্শ বুক করুন',
    nav_language: 'ভাষা',
    footer_quick_links: 'দ্রুত লিংক',
    footer_home: 'হোম',
    footer_about: 'আমাদের সম্পর্কে',
    footer_services: 'সেবাসমূহ',
    footer_universities: 'বিশ্ববিদ্যালয়',
    footer_success_stories: 'সাফল্যের গল্প',
    footer_contact: 'যোগাযোগ',
    lang_badge: 'বহুভাষিক সহায়তা: ১৬টি ভাষা',
  },
  ur: {
    nav_home: 'ہوم',
    nav_services: 'سروسز',
    nav_universities: 'یونیورسٹیاں',
    nav_success_stories: 'کامیابی کی کہانیاں',
    nav_about: 'ہمارے بارے میں',
    nav_contact: 'رابطہ',
    nav_book_consultation: 'مشاورت بک کریں',
    nav_language: 'زبان',
    footer_quick_links: 'فوری لنکس',
    footer_home: 'ہوم',
    footer_about: 'ہمارے بارے میں',
    footer_services: 'سروسز',
    footer_universities: 'یونیورسٹیاں',
    footer_success_stories: 'کامیابی کی کہانیاں',
    footer_contact: 'رابطہ',
    lang_badge: 'کثیر لسانی سپورٹ: 16 زبانیں',
  },
  tr: {
    nav_home: 'Ana Sayfa',
    nav_services: 'Hizmetler',
    nav_universities: 'Üniversiteler',
    nav_success_stories: 'Başarı Hikayeleri',
    nav_about: 'Hakkımızda',
    nav_contact: 'İletişim',
    nav_book_consultation: 'Danışmanlık Al',
    nav_language: 'Dil',
    footer_quick_links: 'Hızlı Bağlantılar',
    footer_home: 'Ana Sayfa',
    footer_about: 'Hakkımızda',
    footer_services: 'Hizmetler',
    footer_universities: 'Üniversiteler',
    footer_success_stories: 'Başarı Hikayeleri',
    footer_contact: 'İletişim',
    lang_badge: 'Çok dilli destek: 16 dil',
  },
  it: {
    nav_home: 'Home',
    nav_services: 'Servizi',
    nav_universities: 'Università',
    nav_success_stories: 'Storie di successo',
    nav_about: 'Chi siamo',
    nav_contact: 'Contatti',
    nav_book_consultation: 'Prenota consulenza',
    nav_language: 'Lingua',
    footer_quick_links: 'Link rapidi',
    footer_home: 'Home',
    footer_about: 'Chi siamo',
    footer_services: 'Servizi',
    footer_universities: 'Università',
    footer_success_stories: 'Storie di successo',
    footer_contact: 'Contatti',
    lang_badge: 'Supporto multilingue: 16 lingue',
  },
  ja: {
    nav_home: 'ホーム',
    nav_services: 'サービス',
    nav_universities: '大学',
    nav_success_stories: '成功事例',
    nav_about: '私たちについて',
    nav_contact: 'お問い合わせ',
    nav_book_consultation: '相談を予約',
    nav_language: '言語',
    footer_quick_links: 'クイックリンク',
    footer_home: 'ホーム',
    footer_about: '私たちについて',
    footer_services: 'サービス',
    footer_universities: '大学',
    footer_success_stories: '成功事例',
    footer_contact: 'お問い合わせ',
    lang_badge: '多言語対応: 16言語',
  },
  ko: {
    nav_home: '홈',
    nav_services: '서비스',
    nav_universities: '대학교',
    nav_success_stories: '성공 사례',
    nav_about: '회사 소개',
    nav_contact: '문의',
    nav_book_consultation: '상담 예약',
    nav_language: '언어',
    footer_quick_links: '빠른 링크',
    footer_home: '홈',
    footer_about: '회사 소개',
    footer_services: '서비스',
    footer_universities: '대학교',
    footer_success_stories: '성공 사례',
    footer_contact: '문의',
    lang_badge: '다국어 지원: 16개 언어',
  },
  id: {
    nav_home: 'Beranda',
    nav_services: 'Layanan',
    nav_universities: 'Universitas',
    nav_success_stories: 'Kisah Sukses',
    nav_about: 'Tentang',
    nav_contact: 'Kontak',
    nav_book_consultation: 'Pesan Konsultasi',
    nav_language: 'Bahasa',
    footer_quick_links: 'Tautan Cepat',
    footer_home: 'Beranda',
    footer_about: 'Tentang Kami',
    footer_services: 'Layanan',
    footer_universities: 'Universitas',
    footer_success_stories: 'Kisah Sukses',
    footer_contact: 'Kontak',
    lang_badge: 'Dukungan multibahasa: 16 bahasa',
    about_hero_badge: 'Didirikan 2015 · London, UK',
    about_hero_title_prefix: 'Tentang',
    about_hero_title_highlight: 'On Track',
    about_hero_title_suffix: 'Admissions',
    about_hero_subtitle: 'Kami adalah tim mantan petugas admisi, pendidik, dan mentor yang berdedikasi membantu siswa di seluruh dunia meraih universitas impian mereka.',
    about_hero_cta_primary: 'Pesan Konsultasi',
    about_hero_cta_secondary: 'Proses Kami',
    services_hero_badge: 'Dukungan Admisi Komprehensif',
    services_hero_title_prefix: 'Layanan',
    services_hero_title_highlight: 'Kami',
    services_hero_subtitle: 'Dari konsultasi awal hingga hari penerimaan, kami memberikan panduan ahli di setiap langkah perjalanan admisi universitas Anda.',
    services_hero_cta: 'Pesan Konsultasi Gratis Anda',
    universities_hero_badge: '50+ Universitas Mitra di Seluruh Dunia',
    universities_hero_title_prefix: 'Universitas',
    universities_hero_title_highlight: 'Mitra Kami',
    universities_hero_subtitle: 'Kami bermitra dengan universitas kelas dunia untuk membantu Anda menemukan pilihan terbaik bagi perjalanan akademik dan karier Anda.',
    universities_stat_partners: 'Universitas Mitra',
    universities_stat_countries: 'Negara',
    universities_stat_students: 'Siswa Diterima',
    universities_stat_success: 'Tingkat Keberhasilan',
    success_hero_badge: '500+ Siswa Diterima di Universitas Ternama',
    success_hero_title_highlight: 'Kisah',
    success_hero_title_suffix: 'Sukses',
    success_hero_subtitle: 'Siswa nyata. Hasil nyata. Lihat bagaimana kami membantu mereka meraih impian kuliah di universitas kelas dunia.',
    consultation_hero_badge: 'Konsultasi Gratis 30 Menit',
    consultation_hero_title_prefix: 'Pesan',
    consultation_hero_title_highlight: 'Konsultasi Gratis Anda',
    consultation_hero_subtitle: 'Ambil langkah pertama menuju universitas impian Anda. Bagikan tujuan Anda kepada kami, dan kami akan membuat peta jalan pribadi menuju kesuksesan.',
  },
}

const fallbackKeys = {
  nav_home: 'Home',
  nav_services: 'Services',
  nav_universities: 'Universities',
  nav_success_stories: 'Success Stories',
  nav_about: 'About',
  nav_contact: 'Contact',
  nav_book_consultation: 'Book Consultation',
  nav_language: 'Language',
  footer_quick_links: 'Quick Links',
  footer_home: 'Home',
  footer_about: 'About Us',
  footer_services: 'Services',
  footer_universities: 'Universities',
  footer_success_stories: 'Success Stories',
  footer_contact: 'Contact',
  lang_badge: 'Multilingual Support: 16 Languages',
  about_hero_badge: 'Established 2015 · London, UK',
  about_hero_title_prefix: 'About',
  about_hero_title_highlight: 'On Track',
  about_hero_title_suffix: 'Admissions',
  about_hero_subtitle: 'We are a team of former admissions officers, educators, and mentors dedicated to helping students around the world secure places at their dream universities.',
  about_hero_cta_primary: 'Book Consultation',
  about_hero_cta_secondary: 'Our Process',
  services_hero_badge: 'Comprehensive Admissions Support',
  services_hero_title_prefix: 'Our',
  services_hero_title_highlight: 'Services',
  services_hero_subtitle: 'From initial consultation to acceptance day, we provide expert guidance at every step of your university admissions journey.',
  services_hero_cta: 'Book Your Free Consultation',
  universities_hero_badge: '50+ Partner Universities Worldwide',
  universities_hero_title_prefix: 'Our',
  universities_hero_title_highlight: 'Partner Universities',
  universities_hero_subtitle: 'We partner with world-leading universities to help you find the perfect fit for your academic journey and career aspirations.',
  universities_stat_partners: 'Partner Universities',
  universities_stat_countries: 'Countries',
  universities_stat_students: 'Students Placed',
  universities_stat_success: 'Success Rate',
  success_hero_badge: '500+ Students Placed at Top Universities',
  success_hero_title_highlight: 'Success',
  success_hero_title_suffix: 'Stories',
  success_hero_subtitle: 'Real students. Real results. Discover how we helped them achieve their dreams of studying at world-leading universities.',
  consultation_hero_badge: 'Free 30-Minute Consultation',
  consultation_hero_title_prefix: 'Book Your',
  consultation_hero_title_highlight: 'Free Consultation',
  consultation_hero_subtitle: 'Take the first step towards your dream university. Share your goals with us, and we\'ll create a personalized roadmap to success.',
}

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'en'

  const saved = window.localStorage.getItem('app-language')
  if (saved && supportedLanguages.some((lang) => lang.code === saved)) {
    return saved
  }

  const browser = window.navigator.language
  const exact = supportedLanguages.find((lang) => lang.code === browser)
  if (exact) return exact.code

  const prefix = browser.split('-')[0]
  const partial = supportedLanguages.find((lang) => lang.code.split('-')[0] === prefix)
  return partial?.code || 'en'
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem('app-language', language)
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  useEffect(() => {
    // Set Google Translate cookie
    const setCookie = (name, value, days) => {
      const expires = new Date()
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
    }

    // Initialize Google Translate
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,fr,es,ar,zh-CN,af,de',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        )
      }

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      document.head.appendChild(script)

      const div = document.createElement('div')
      div.id = 'google_translate_element'
      div.style.display = 'none'
      document.body.appendChild(div)
    }

    // Trigger translation by setting cookie and reloading
    if (language === 'en') {
      setCookie('googtrans', '', -1)
      if (window.location.hash.includes('googtrans')) {
        window.location.hash = ''
        window.location.reload()
      }
    } else {
      const googleLang = `/en/${language}`
      setCookie('googtrans', googleLang, 1)
      
      // Wait for widget to load then trigger
      const waitAndTranslate = () => {
        const combo = document.querySelector('.goog-te-combo')
        if (combo) {
          combo.value = language
          combo.dispatchEvent(new Event('change'))
        } else {
          setTimeout(waitAndTranslate, 100)
        }
      }
      
      setTimeout(waitAndTranslate, 1500)
    }
  }, [language])

  const t = (key) => {
    const current = translations[language] || {}
    return current[key] || translations.en[key] || fallbackKeys[key] || key
  }

  const value = useMemo(() => ({ 
    language, 
    setLanguage: (newLang) => {
      setLanguage(newLang)
      // Reload page after setting language
      setTimeout(() => window.location.reload(), 100)
    }, 
    t, 
    supportedLanguages 
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
