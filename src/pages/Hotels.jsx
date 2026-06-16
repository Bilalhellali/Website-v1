import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, MapPin, Tag, BadgeCheck, CalendarCheck, Wallet } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/sections/CTABanner'

// Offres d'hôtels mises en avant — modifiable
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
        <meta name="description" content="Réservation d'hôtels au meilleur prix avec AviaTours : du 3 au 5 étoiles, partout dans le monde, confirmation immédiate." />
      </Helmet>

      <PageHero
        badge="🏨 Meilleurs tarifs garantis"
        title="Réservation d'Hôtels"
        subtitle="Du 3 au 5 étoiles, partout dans le monde, au meilleur prix et avec confirmation immédiate."
      />

      {/* Offres d'hôtels */}
      <SectionWrapper>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title">Nos offres du moment</h2>
          <p className="section-subtitle">Une sélection d'hôtels parmi les destinations les plus demandées.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, i) => (
            <motion.div
              key={hotel.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md card-hover border"
            >
              <div className="relative h-48 bg-gradient-to-br from-[#1B4F72] to-[#154360]">
                <img src={hotel.image} alt={hotel.city}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {hotel.tag && (
                  <span className="absolute top-4 left-4 bg-[#F39C12] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {hotel.tag}
                  </span>
                )}
                <div className="absolute bottom-3 left-4 flex items-center gap-1 text-[#F39C12]">
                  {Array.from({ length: hotel.stars }).map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
              <div className="p-6">
                <p className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                  <MapPin size={14} className="text-[#F39C12]" /> {hotel.city}
                </p>
                <h3 className="text-lg font-bold text-[#1B4F72] mb-4">{hotel.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 flex items-center gap-1"><Tag size={12} /> À partir de</p>
                    <p className="text-xl font-bold text-[#1B4F72]">{hotel.priceFrom.toLocaleString()} DA<span className="text-xs font-normal text-gray-400"> / nuit</span></p>
                  </div>
                  <Link to="/devis" className="btn-primary text-sm py-2 px-4 flex items-center gap-1">
                    Réserver <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Avantages */}
      <SectionWrapper className="bg-[#F8F9FA]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title">Pourquoi réserver avec AviaTours ?</h2>
          <p className="section-subtitle">La tranquillité d'une agence, le prix d'un comparateur.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm card-hover"
            >
              <div className="w-12 h-12 bg-[#1B4F72]/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={24} className="text-[#1B4F72]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1B4F72] mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
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
