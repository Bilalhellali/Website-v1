import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, MapPin, Tag, BadgeCheck, CalendarCheck, Wallet } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/sections/CTABanner'

const hotels = [
  { city: 'Dubaï, Émirats', name: 'Hôtels 4★ & 5★', stars: 5, priceFrom: 18000, image: '/images/hotels/dubai.jpg', tag: 'Best-seller' },
  { city: 'Istanbul, Turquie', name: 'Centre historique', stars: 4, priceFrom: 9000, image: '/images/hotels/istanbul.jpg', tag: '' },
  { city: 'Paris, France', name: 'Proche des sites', stars: 4, priceFrom: 14000, image: '/images/hotels/paris.jpg', tag: '' },
  { city: 'La Mecque, Arabie S.', name: 'Proche du Haram', stars: 5, priceFrom: 22000, image: '/images/hotels/mecca.jpg', tag: 'Omra' },
  { city: 'Tunis, Tunisie', name: 'Bord de mer', stars: 4, priceFrom: 7000, image: '/images/hotels/tunis.jpg', tag: '' },
  { city: 'Antalya, Turquie', name: 'Resort tout inclus', stars: 5, priceFrom: 12000, image: '/images/hotels/antalya.jpg', tag: 'Famille' },
]

const benefits = [
  { icon: Wallet, title: 'Meilleurs tarifs', desc: 'Des prix négociés, souvent inférieurs aux plateformes en ligne.' },
  { icon: CalendarCheck, title: 'Confirmation immédiate', desc: 'Votre réservation est confirmée et garantie rapidement.' },
  { icon: BadgeCheck, title: 'Établissements vérifiés', desc: 'Uniquement des hôtels sélectionnés pour leur qualité.' },
]

function Hotels() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('nav.hotels')} - {siteConfig.name}</title>
        <meta name="description" content="Réservation d'hôtels au meilleur prix avec AviaTours : du 3 au 5 étoiles, partout dans le monde." />
      </Helmet>

      <PageHero
        badge="🏨 Meilleurs tarifs garantis"
        title="Réservation d'Hôtels"
        subtitle="Du 3 au 5 étoiles, partout dans le monde, au meilleur prix avec confirmation immédiate."
      />

      <SectionWrapper>
        <span className="section-label">Sélection</span>
        <h2 className="section-title">Nos offres du moment</h2>
        <div className="divider-dune" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          {hotels.map((hotel, i) => (
            <motion.div
              key={hotel.city}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card-hover"
              style={{ backgroundColor: '#ffffff', border: '1px solid var(--mist)', overflow: 'hidden' }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '200px', backgroundColor: 'var(--night)', overflow: 'hidden' }}>
                <img src={hotel.image} alt={hotel.city}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.style.display = 'none' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,11,24,0.6) 0%, transparent 60%)' }} />
                {hotel.tag && (
                  <span style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    backgroundColor: 'var(--dune)', color: '#fff',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem', letterSpacing: '0.08em',
                    textTransform: 'uppercase', padding: '0.25rem 0.6rem',
                  }}>{hotel.tag}</span>
                )}
                <div style={{ position: 'absolute', bottom: '0.75rem', left: '1rem', display: 'flex', gap: '2px' }}>
                  {Array.from({ length: hotel.stars }).map((_, idx) => (
                    <Star key={idx} size={12} style={{ fill: 'var(--dune)', color: 'var(--dune)' }} />
                  ))}
                </div>
              </div>

              {/* Contenu */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                  <MapPin size={13} style={{ color: 'var(--dune)' }} />
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.08em', color: '#8b8499', textTransform: 'uppercase' }}>{hotel.city}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '1rem' }}>{hotel.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.08em', color: '#8b8499', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
                      <Tag size={10} /> À partir de
                    </p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600, color: 'var(--ink)' }}>
                      {hotel.priceFrom.toLocaleString()} <span style={{ fontSize: '0.75rem', fontWeight: 400, color: '#8b8499' }}>DA / nuit</span>
                    </p>
                  </div>
                  <Link to="/devis" className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
                    Réserver <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Avantages */}
      <SectionWrapper style={{ backgroundColor: 'var(--parchment)' }} className="bg-[#F6EDD8]">
        <span className="section-label">Pourquoi nous</span>
        <h2 className="section-title">Réserver avec AviaTours</h2>
        <div className="divider-dune" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', gap: '1rem', padding: '1.75rem', backgroundColor: '#fff', borderLeft: '3px solid var(--dune)' }}
            >
              <Icon size={20} style={{ color: 'var(--dune)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>{title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: '#6b6580', lineHeight: 1.6 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}

export default Hotels
