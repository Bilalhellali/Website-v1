import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe, Phone } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'

const languages = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'ar', label: 'AR', flag: '🇩🇿' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
]

function Navbar() {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lng
    setIsLangOpen(false)
  }

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/voyages-organises', label: t('nav.voyages') },
    { to: '/visa', label: t('nav.visa') },
    { to: '/hotels', label: t('nav.hotels') },
    { to: '/contact', label: t('nav.contact') },
    { to: '/about', label: t('nav.about') },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top bar */}
      <div className={`hidden md:block transition-all duration-300 ${
        isScrolled ? 'hidden' : 'bg-[#1B4F72]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-white text-sm">
          <span>{siteConfig.contact.address}</span>
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-1 hover:text-[#F39C12] transition-colors">
              <Phone size={14} />
              {siteConfig.contact.phone}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#F39C12] transition-colors">
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className={`max-w-7xl mx-auto px-4 py-4 flex items-center justify-between`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1B4F72] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className={`text-xl font-bold transition-colors ${
            isScrolled ? 'text-[#1B4F72]' : 'text-white drop-shadow-md'
          }`}>
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-[#F39C12] ${
                  isScrolled
                    ? isActive ? 'text-[#F39C12]' : 'text-gray-700'
                    : isActive ? 'text-[#F39C12]' : 'text-white drop-shadow'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#F39C12] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Globe size={16} />
              {i18n.language.toUpperCase().slice(0, 2)}
            </button>
            {isLangOpen && (
              <div className="absolute right-0 top-8 bg-white rounded-lg shadow-xl border py-2 min-w-[100px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 ${
                      i18n.language === lang.code ? 'text-[#1B4F72] font-semibold' : 'text-gray-700'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/devis" className="btn-secondary text-sm py-2 px-4">
            {t('nav.quote')}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-base font-medium border-b border-gray-100 ${
                    isActive ? 'text-[#F39C12]' : 'text-gray-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex gap-3 pt-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { changeLanguage(lang.code); setIsMenuOpen(false) }}
                  className={`text-sm px-3 py-1 rounded border ${
                    i18n.language === lang.code
                      ? 'bg-[#1B4F72] text-white border-[#1B4F72]'
                      : 'text-gray-600 border-gray-300'
                  }`}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
            <Link to="/devis" onClick={() => setIsMenuOpen(false)} className="btn-secondary text-center mt-2">
              {t('nav.quote')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
