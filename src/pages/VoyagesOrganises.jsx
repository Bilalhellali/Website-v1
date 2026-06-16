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
  { icon: Search, title: 'Choisissez', desc: 'Sélectionnez le voyage organisé qui vous fait rêver.' },
  { icon: FileText, title: 'Demandez un devis', desc: 'Recevez votre devis personnalisé sous 24h, sans engagement.' },
  { icon: CreditCard, title: 'Réservez', desc: 'Confirmez votre place avec un acompte sécurisé.' },
  { icon: Plane, title: 'Partez serein', desc: 'On s\'occupe de tout : vol, hôtel, guide et programme.' },
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
        badge="✈️ Départs garantis"
        title="Voyages Organisés"
        subtitle="Des séjours en groupe clés en main, avec vol, hébergement, guide et programme complet inclus."
      />

      {/* Liste des voyages */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.circuits.map((circuit, i) => {
            const name = circuit.name[lang] || circuit.name.fr
            return (
              <motion.div
                key={circuit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md card-hover border"
              >
                <div className="relative h-56 bg-gradient-to-br from-[#1B4F72] to-[#154360]">
                  <img src={circuit.image} alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {circuit.featured && (
                    <span className="absolute top-4 left-4 bg-[#F39C12] text-white text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ Populaire
                    </span>
                  )}
                  <div className="absolute bottom-4 right-4 text-white text-right">
                    <p className="text-xs opacity-80">À partir de</p>
                    <p className="text-2xl font-bold">{circuit.price.toLocaleString()} DA</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B4F72] mb-3">{name}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Clock size={14} /> {circuit.duration}</span>
                    <span className="flex items-center gap-1"><Users size={14} /> {circuit.groupSize}</span>
                    <span className="flex items-center gap-1"><Route size={14} /> {circuit.difficulty}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {circuit.itinerary.map((city, idx) => (
                      <span key={city} className="text-xs text-gray-500">
                        {city}{idx < circuit.itinerary.length - 1 ? ' →' : ''}
                      </span>
                    ))}
                  </div>
                  <Link to="/devis" className="btn-primary w-full text-center flex items-center justify-center gap-2">
                    Réserver ce voyage <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Comment ça marche */}
      <SectionWrapper className="bg-[#F8F9FA]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title">Comment ça marche ?</h2>
          <p className="section-subtitle">Réserver votre voyage organisé n'a jamais été aussi simple.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-6 shadow-sm border text-center card-hover"
            >
              <div className="w-12 h-12 mx-auto bg-[#1B4F72]/10 rounded-xl flex items-center justify-center mb-4">
                <Icon size={24} className="text-[#1B4F72]" />
              </div>
              <span className="absolute top-4 right-4 text-3xl font-bold text-gray-100">{i + 1}</span>
              <h3 className="font-bold text-[#1B4F72] mb-1">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}

export default VoyagesOrganises
