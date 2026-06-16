import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'
import SectionWrapper from '../ui/SectionWrapper'

function DestinationCard({ dest, index }) {
  const { i18n } = useTranslation()
  const lang = i18n.language.slice(0, 2)
  const name = dest.name[lang] || dest.name.fr
  const description = dest.description[lang] || dest.description.fr

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover"
    >
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#1B4F72] to-[#154360]">
        <img
          src={dest.image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 right-4 bg-[#F39C12] text-white text-sm font-bold px-3 py-1 rounded-full">
          {dest.region}
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-xs opacity-80">À partir de</p>
          <p className="text-xl font-bold">{dest.priceFrom.toLocaleString()} DA</p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#1B4F72] mb-2">{name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Clock size={14} />
            <span>{dest.duration}</span>
          </div>
          <Link
            to={`/destinations/${dest.slug}`}
            className="flex items-center gap-1 text-[#1B4F72] font-semibold text-sm hover:text-[#F39C12] transition-colors"
          >
            Découvrir <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

function FeaturedDestinations() {
  const { t } = useTranslation()
  const featured = siteConfig.destinations.filter(d => d.featured)

  return (
    <SectionWrapper className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 justify-center mb-3">
          <MapPin size={20} className="text-[#F39C12]" />
          <span className="text-[#F39C12] font-medium uppercase tracking-wider text-sm">
            {t('destinations.sectionLabel')}
          </span>
        </div>
        <h2 className="section-title">{t('destinations.title')}</h2>
        <p className="section-subtitle">{t('destinations.subtitle')}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((dest, i) => (
          <DestinationCard key={dest.id} dest={dest} index={i} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/destinations" className="btn-primary inline-flex items-center gap-2">
          {t('destinations.viewAll')} <ArrowRight size={18} />
        </Link>
      </div>
    </SectionWrapper>
  )
}

export default FeaturedDestinations
