import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { siteConfig } from '../../config/siteConfig'
import StarRating from '../ui/StarRating'

function Testimonials() {
  const { t } = useTranslation()

  return (
    <section style={{ backgroundColor: 'var(--night)', padding: '6rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--dune)',
            display: 'block',
            marginBottom: '0.75rem',
          }}>
            Témoignages
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '0',
          }}>
            {t('testimonials.title') || 'Ce que disent nos voyageurs'}
          </h2>
        </motion.div>

        {/* Grille témoignages */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          backgroundColor: 'rgba(255,255,255,0.06)',
        }}>
          {siteConfig.testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              style={{
                backgroundColor: 'var(--night)',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Grande guillemet éditoriale */}
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '5rem',
                lineHeight: 0.8,
                color: 'var(--dune)',
                opacity: 0.4,
                marginBottom: '1rem',
                display: 'block',
              }}>
                "
              </span>

              {/* Citation */}
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.15rem',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.65,
                marginBottom: '2rem',
                flexGrow: 1,
              }}>
                {item.text}
              </p>

              {/* Séparateur */}
              <div style={{
                width: '2rem',
                height: '1px',
                backgroundColor: 'var(--dune)',
                marginBottom: '1.25rem',
                opacity: 0.5,
              }} />

              {/* Auteur */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#ffffff',
                    marginBottom: '0.2rem',
                  }}>
                    {item.name}
                  </p>
                  <p style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                  }}>
                    {item.location}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <StarRating rating={item.rating} />
                  <p style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.55rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--dune)',
                    marginTop: '0.35rem',
                  }}>
                    ✈ {item.trip}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
