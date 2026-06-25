import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'

function CTABanner() {
  const { t } = useTranslation()

  return (
    <section style={{
      backgroundColor: 'var(--parchment)',
      padding: '6rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Accent géométrique décoratif */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40%',
        height: '100%',
        background: 'linear-gradient(135deg, transparent 0%, rgba(196,133,58,0.07) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '8px',
        height: '100%',
        backgroundColor: 'var(--dune)',
      }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'center',
            gap: '3rem',
          }}
          className="grid-cols-1 lg:grid-cols-[1fr_auto]"
        >
          {/* Texte */}
          <div>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--oasis)',
              display: 'block',
              marginBottom: '0.75rem',
            }}>
              Votre prochain voyage
            </span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              color: 'var(--ink)',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}>
              {t('cta.title') || 'Prêt à partir ?'}
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#6b6580',
              lineHeight: 1.7,
              maxWidth: '480px',
            }}>
              {t('cta.subtitle') || "Contactez-nous et recevez un devis personnalisé sous 24h. Notre équipe vous accompagne de la réservation jusqu'au retour."}
            </p>
          </div>

          {/* Boutons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '200px' }}>
            <Link
              to="/devis"
              className="btn-primary"
              style={{ justifyContent: 'center' }}
            >
              {t('cta.quoteBtn') || 'Demander un devis'} <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: '0.8rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                textDecoration: 'none',
                padding: '0.875rem 2rem',
                border: '2px solid var(--mist)',
                transition: 'border-color 0.25s ease, color 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--ink)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--mist)'
              }}
            >
              <Phone size={16} /> {siteConfig.contact.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner
