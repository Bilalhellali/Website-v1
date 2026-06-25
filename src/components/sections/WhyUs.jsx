import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Shield, Heart, Headphones, Map, Award, Zap } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'

const features = [
  { icon: Shield, key: 'safety' },
  { icon: Heart, key: 'passion' },
  { icon: Headphones, key: 'support' },
  { icon: Map, key: 'expertise' },
  { icon: Award, key: 'quality' },
  { icon: Zap, key: 'fast' },
]

function WhyUs() {
  const { t } = useTranslation()

  return (
    <SectionWrapper>
      {/* Layout asymétrique deux colonnes */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        alignItems: 'start',
      }}
        className="grid-cols-1 lg:grid-cols-2"
      >
        {/* Colonne gauche — déclaration éditoriale */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">{t('whyUs.title') || 'Pourquoi nous choisir'}</span>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            color: 'var(--ink)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}>
            Des milliers d'Algériens<br />
            <em style={{ color: 'var(--dune)', fontStyle: 'italic' }}>nous font confiance.</em>
          </h2>

          <div className="divider-dune" />

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#6b6580',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
            maxWidth: '400px',
          }}>
            {t('whyUs.subtitle') || 'Depuis notre création, nous avons bâti notre réputation sur un principe simple : votre satisfaction est notre seul critère de succès.'}
          </p>

          {/* Citation mise en avant */}
          <blockquote style={{
            borderLeft: '3px solid var(--oasis)',
            paddingLeft: '1.25rem',
            marginBottom: '2rem',
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.25rem',
              fontWeight: 500,
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.5,
              marginBottom: '0.5rem',
            }}>
              « Un voyage réussi se prépare avec les bons partenaires. »
            </p>
            <cite style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--oasis)',
              fontStyle: 'normal',
            }}>
              L'équipe AviaTours
            </cite>
          </blockquote>
        </motion.div>

        {/* Colonne droite — grille de features */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            backgroundColor: 'var(--mist)',
            border: '1px solid var(--mist)',
          }}>
            {features.map(({ icon: Icon, key }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'background-color 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--parchment)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
              >
                <Icon
                  size={20}
                  style={{ color: i % 2 === 0 ? 'var(--dune)' : 'var(--oasis)' }}
                />
                <div>
                  <h3 style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: '0.35rem',
                  }}>
                    {t(`whyUs.features.${key}.title`)}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 300,
                    color: '#6b6580',
                    lineHeight: 1.6,
                  }}>
                    {t(`whyUs.features.${key}.desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default WhyUs
