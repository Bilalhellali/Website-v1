import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Users, Award, MapPin, Heart } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'
import CTABanner from '../components/sections/CTABanner'
import PageHero from '../components/ui/PageHero'

function About() {
  const { t } = useTranslation()

  const stats = [
    { icon: Users, value: '2 000+', label: t('about.stats.clients') },
    { icon: Award, value: '8+', label: t('about.stats.years') },
    { icon: MapPin, value: '50+', label: t('about.stats.destinations') },
    { icon: Heart, value: '98%', label: t('about.stats.satisfaction') },
  ]

  return (
    <>
      <Helmet>
        <title>{t('about.pageTitle')} - {siteConfig.name}</title>
      </Helmet>

      <PageHero
        badge="À propos"
        title={t('about.title') || 'Notre histoire'}
        subtitle={t('about.subtitle')}
      />

      {/* Stats */}
      <SectionWrapper>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '0',
          borderTop: '1px solid var(--mist)',
          borderLeft: '1px solid var(--mist)',
        }}>
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                borderRight: '1px solid var(--mist)',
                borderBottom: '1px solid var(--mist)',
              }}
            >
              <Icon size={24} style={{ color: 'var(--dune)', margin: '0 auto 0.75rem' }} />
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '2.8rem',
                fontWeight: 600,
                color: 'var(--ink)',
                lineHeight: 1,
                marginBottom: '0.4rem',
              }}>{value}</div>
              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#8b8499',
              }}>{label}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Story */}
      <SectionWrapper style={{ backgroundColor: 'var(--parchment)' }} className="bg-[#F6EDD8]">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="grid-cols-1 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="section-label">{t('about.storyLabel') || 'Notre histoire'}</span>
            <h2 className="section-title">{t('about.storyTitle') || 'Nés en Algérie, voyageons pour vous'}</h2>
            <div className="divider-dune" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['story1', 'story2', 'story3'].map((key) => (
                <p key={key} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: '#5a5468',
                  lineHeight: 1.8,
                }}>
                  {t(`about.${key}`)}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: 'var(--night)',
              padding: '3rem',
            }}
          >
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.75rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '2rem',
              lineHeight: 1.2,
            }}>
              {t('about.values.title') || 'Nos valeurs'}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {['authenticity', 'safety', 'quality', 'sustainability'].map((v) => (
                <li key={v} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ color: 'var(--dune)', fontSize: '1.1rem', flexShrink: 0, marginTop: '2px' }}>✦</span>
                  <div>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                      color: '#ffffff',
                      marginBottom: '0.25rem',
                    }}>
                      {t(`about.values.${v}.title`)}
                    </p>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.85rem',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.55)',
                      lineHeight: 1.6,
                    }}>
                      {t(`about.values.${v}.desc`)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}

export default About
