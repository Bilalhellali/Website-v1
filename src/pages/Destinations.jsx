import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Filter, ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'

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
        <title>{t('nav.destinations')} - {siteConfig.name}</title>
      </Helmet>

      {/* Header */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-[#1a1a2e] to-[#1B4F72] text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('destinations.pageTitle')}</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">{t('destinations.pageSubtitle')}</p>
        </motion.div>
      </div>

      <SectionWrapper>
        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <Filter size={18} className="text-gray-400 mt-2" />
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRegion(r)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeRegion === r
                  ? 'bg-[#1B4F72] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest, i) => {
            const name = dest.name[lang] || dest.name.fr
            const description = dest.description[lang] || dest.description.fr
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover"
              >
                <div className="relative h-56 bg-gradient-to-br from-[#1B4F72] to-[#154360]">
                  <img
                    src={dest.image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 right-4 bg-[#F39C12] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {dest.region}
                  </span>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs opacity-80">À partir de</p>
                    <p className="text-xl font-bold">{dest.priceFrom.toLocaleString()} DA</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#1B4F72] mb-2">{name}</h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">{description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {dest.highlights.slice(0, 3).map((h) => (
                      <span key={h} className="text-xs bg-blue-50 text-[#1B4F72] px-2 py-0.5 rounded-full">{h}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <Clock size={14} /> {dest.duration}
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
          })}
        </div>
      </SectionWrapper>
    </>
  )
}

export default Destinations
