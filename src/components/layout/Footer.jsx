import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'

function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/voyages-organises', label: t('nav.voyages') },
    { to: '/visa', label: t('nav.visa') },
    { to: '/hotels', label: t('nav.hotels') },
    { to: '/contact', label: t('nav.contact') },
    { to: '/about', label: t('nav.about') },
  ]

  return (
    <footer style={{ backgroundColor: 'var(--ink)', color: 'rgba(255,255,255,0.55)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '5rem 1.5rem 3rem' }}>

        {/* Grille 4 colonnes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>

          {/* Colonne 1 — Identité */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--dune)',
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.35rem',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '0.02em',
              }}>
                {siteConfig.name}
              </span>
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.825rem',
              fontWeight: 300,
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}>
              {siteConfig.description}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.55)',
                  transition: 'border-color 0.2s, color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dune)'; e.currentTarget.style.color = 'var(--dune)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
              >
                <Facebook size={14} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.55)',
                  transition: 'border-color 0.2s, color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dune)'; e.currentTarget.style.color = 'var(--dune)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <h3 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--dune)',
              marginBottom: '1.25rem',
            }}>
              {t('footer.links')}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.825rem',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Services */}
          <div>
            <h3 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--dune)',
              marginBottom: '1.25rem',
            }}>
              {t('footer.services')}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.to}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.825rem',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Contact */}
          <div>
            <h3 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--dune)',
              marginBottom: '1.25rem',
            }}>
              {t('footer.contact')}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={14} style={{ color: 'var(--dune)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.825rem', fontWeight: 300, lineHeight: 1.6 }}>
                  {siteConfig.contact.address}
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={14} style={{ color: 'var(--dune)', flexShrink: 0 }} />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.825rem',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={14} style={{ color: 'var(--dune)', flexShrink: 0 }} />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.825rem',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.25)',
            }}>
              © {year} {siteConfig.name}. {t('footer.rights')}
            </p>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.25)',
            }}>
              {t('footer.madeWith')} ❤️ {t('footer.inAlgeria')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
