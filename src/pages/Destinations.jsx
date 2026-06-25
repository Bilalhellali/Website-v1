import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'
import PageHero from '../components/ui/PageHero'

const regions = ['Tous', 'Sud', 'Nord', 'Est', 'Ouest', 'Centre', 'Kabylie', 'Béchar']

function Destinations() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.slice(0, 2)
  const [activeRegion, setActiveRegion] = useState('Tous')

  const filtered = activeRegion === 'Tous'
    ? siteConfig.destinations
    : siteConfig.destinations.filter(d => d.region === activeRegion)

  return (
    <>
      <Helmet>
        <title>{t('nav.destinations') || 'Destinations'} - {siteConfig.name}</title>
      </Helmet>

      <PageHero
        badge="Algérie & Monde"
        title={t('destinations.pageTitle') || 'Nos Destinations'}
        subtitle={t('destinations.pageSubtitle') || 'Explorez les plus belles destinations depuis Alger'}
      />

      <SectionWrapper>
        {/* Filtres — design pill épuré */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8b8499', marginRight: '0.5rem' }}>Région :</span>
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRegion(r)}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem', letterSpacing: '0.08em',
                textTransform: 'uppercase', cursor: 'pointer',
                padding: '0.4rem 0.875rem',
                border: '1px solid',
                borderColor: activeRegion === r ? 'var(--dune)' : 'var(--mist)',
                backgroundColor: activeRegion === r ? 'var(--dune)' : 'transparent',
                color: activeRegion === r ? '#fff' : '#8b8499',
                transition: 'all 0.2s ease',
              }}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Grille destinations */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((dest, i) => {
            const name = dest.name[lang] || dest.name.fr
            const description = dest.description[lang] || dest.description.fr
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="card-hover"
                style={{ backgroundColor: '#ffffff', border: '1px solid var(--mist)', overflow: 'hidden' }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '220px', backgroundColor: 'var(--night)', overflow: 'hidden' }}>
                  <img
                    src={dest.image} alt={name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,11,24,0.65) 0%, transparent 55%)' }} />
                  <span style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.55rem', letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: '#fff',
                    backgroundColor: 'rgba(13,11,24,0.6)',
                    padding: '0.25rem 0.6rem',
                    backdropFilter: 'blur(4px)',
                  }}>{dest.region}</span>
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: '#fff' }}>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', opacity: 0.7, marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>À partir de</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600 }}>{dest.priceFrom.toLocaleString()} DA</p>
                  </div>
                </div>

                {/* Contenu */}
                <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.5rem' }}>{name}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.83rem', fontWeight: 300, color: '#6b6580', lineHeight: 1.6, marginBottom: '0.875rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1rem' }}>
                    {dest.highlights?.slice(0, 3).map((h) => (
                      <span key={h} style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.55rem', letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: 'var(--ink)', backgroundColor: 'var(--parchment)',
                        padding: '0.2rem 0.5rem',
                        border: '1px solid var(--mist)',
                      }}>{h}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#8b8499', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      <Clock size={12} style={{ color: 'var(--dune)' }} /> {dest.duration}
                    </span>
                    <Link
                      to={`/destinations/${dest.slug}`}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dune)', textDecoration: 'none' }}
                    >
                      Découvrir <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </SectionWrapper>
    </>
  )
}

export default Destinations
