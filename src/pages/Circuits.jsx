import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Users, ArrowRight, Route } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'

function Circuits() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.slice(0, 2)

  return (
    <>
      <Helmet>
        <title>{t('nav.circuits')} - {siteConfig.name}</title>
      </Helmet>

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#1a1a2e] to-[#1B4F72] text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Circuits Organisés</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">Des itinéraires complets, clés en main, avec guide et hébergement inclus</p>
        </motion.div>
      </div>

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
                    Réserver ce circuit <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </SectionWrapper>
    </>
  )
}

export default Circuits
