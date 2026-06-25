import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe } from 'lucide-react'
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
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
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
    { to: '/destinations', label: 'Destinations' },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background-color 0.35s ease, box-shadow 0.35s ease',
        backgroundColor: isScrolled ? '#ffffff' : 'transparent',
        boxShadow: isScrolled ? '0 1px 0 rgba(22,18,45,0.08)' : 'none',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Wordmark */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--dune)',
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              fontSize: '1.35rem',
              letterSpacing: '0.02em',
              color: isScrolled ? 'var(--ink)' : '#ffffff',
              transition: 'color 0.35s ease',
            }}>
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => ({
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: isScrolled
                    ? (isActive ? 'var(--dune)' : 'var(--ink)')
                    : (isActive ? 'var(--dune)' : 'rgba(255,255,255,0.85)'),
                  transition: 'color 0.2s ease',
                  paddingBottom: '3px',
                  borderBottom: isActive ? '1px solid var(--dune)' : '1px solid transparent',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right: langue + CTA */}
          <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  color: isScrolled ? 'var(--ink)' : 'rgba(255,255,255,0.8)',
                  transition: 'color 0.3s ease',
                }}
              >
                <Globe size={14} />
                {i18n.language.toUpperCase().slice(0, 2)}
              </button>
              {isLangOpen && (
                <div style={{
                  position: 'absolute',
                  right: 0,
                  top: '2rem',
                  background: '#ffffff',
                  border: '1px solid var(--mist)',
                  padding: '0.5rem 0',
                  minWidth: '90px',
                  boxShadow: '0 8px 24px rgba(13,11,24,0.12)',
                }}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '0.5rem 1rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        color: i18n.language === lang.code ? 'var(--dune)' : 'var(--ink)',
                        fontWeight: i18n.language === lang.code ? 700 : 400,
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'center',
                      }}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/devis" className="btn-primary" style={{ padding: '0.6rem 1.5rem' }}>
              {t('nav.quote')}
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isScrolled ? 'var(--ink)' : '#ffffff',
              transition: 'color 0.3s ease',
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
    