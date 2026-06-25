import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Users, ArrowRight, Route, Search, FileText, CreditCard, Plane } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/sections/CTABanner'

const steps = [
  { icon: Search, title: 'Choisissez', desc: 'Sélectionnez le voyage qui vous fait rêver.' },
  { icon: FileText, title: 'Demandez un devis', desc: 'Recevez votre devis personnalisé sous 24h.' },
  { icon: CreditCard, title: 'Réservez', desc: 'Confirmez votre place avec un acompte sécurisé.' },
  { icon: Plane, title: 'Partez serein', desc: "On s'occupe de tout : vol, hôtel, guide et programme." },
]

function VoyagesOrganises() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.slice(0, 2)

  return (
    <>
      <Helmet>
        <title>{t('nav.voyages')} - {siteConfig.name}</title>
        <meta name="description" content="Voyages organisés en groupe AviaTours : vol, hébergement, guide et programme complet inclus." />
      </Helmet>

      <PageHero
        badge="✈ Départs garantis"
        title="Voyages Organisés"
        subtitle="Des séjours en groupe clés en main, avec vol, hébergement, guide et programme complet inclus."
      />

      {/* Liste des voyages */}
      <SectionWrapper>
        <span className="section-label">Nos circuits</span>
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Choisissez votre aventure</h2>
        <div className="divider-dune" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
        }}>
          {siteConfig.circuits.map((circuit, i) => {
            const name = circuit.name[lang] || circuit.name.fr
            return (
              <motion.div
                key={circuit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-hover"
                style={{ backgroundColor: '#ffffff', border: '1px solid var(--mist)', overflow: 'hidden' }}
              >
                {/* Image */}
                <div style={{
                  position: 'relative',
                  height: '220px',
                  backgroundColor: 'var(--night)',
                  overflow: 'hidden',
                }}>
                  <img src={circuit.image} alt={name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.style.display = 'none' }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(13,11,24,0.7) 0%, transparent 60%)',
                  }} />
                  {circuit.featured && (
                    <span style={{
                      position: 'absolute', top: '1rem', left: '1rem',
                      backgroundColor: 'var(--dune)', color: '#fff',
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.6rem', letterSpacing: '0.1em',
                      textTransform: 'uppercase', padding: '0.3rem 0.75rem',
                    }}>
                      Populaire
                    </span>
                  )}
                  <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', textAlign: 'right', color: '#fff' }}>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', opacity: 0.7, marginBottom: '0.2rem' }}>À partir de</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 600 }}>
                      {circuit.price.toLocaleString()} DA
                    </p>
                  </div>
                </div>

                {/* Contenu */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.35rem', fontWeight: 600,
                    color: 'var(--ink)', marginBottom: '0.75rem',
                  }}>{name}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    {[
                      { Icon: Clock, label: circuit.duration },
                      { Icon: Users, label: circuit.groupSize },
                      { Icon: Route, label: circuit.difficulty },
                    ].map(({ Icon, label }) => (
                      <span key={label} style={{
                        display: 'flex', alignItems: 'center', gap: '0.35rem',
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.6rem', letterSpacing: '0.06em',
                        color: '#8b8499', textTransform: 'uppercase',
                      }}>
                        <Icon size={12} style={{ color: 'var(--dune)' }} /> {label}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '1.25rem' }}>
                    {circuit.itinerary.map((city, idx) => (
                      <span key={city} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: '#8b8499' }}>
                        {city}{idx < circuit.itinerary.length - 1 ? ' →' : ''}
                      </span>
                    ))}
                  </div>
                  <Link to="/devis" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Réserver ce voyage <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Comment ça marche */}
      <SectionWrapper style={{ backgroundColor: 'var(--parchment)' }} className="bg-[#F6EDD8]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-label">Simple & clair</span>
          <h2 className="section-title">Comment ça marche ?</h2>
          <div className="divider-dune" />
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', backgroundColor: 'var(--mist)' }}>
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ backgroundColor: '#fff', padding: '2rem 1.75rem', position: 'relative' }}
            >
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '4rem', fontWeight: 600,
                color: 'var(--mist)', lineHeight: 1,
                position: 'absolute', top: '1rem', right: '1.25rem',
              }}>{i + 1}</span>
              <Icon size={24} style={{ color: 'var(--dune)', marginBottom: '1rem' }} />
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.2rem', fontWeight: 600,
                color: 'var(--ink)', marginBottom: '0.5rem',
              }}>{title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: '#6b6580', lineHeight: 1.6 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}

export default VoyagesOrganises
