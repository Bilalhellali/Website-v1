import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Clock, MapPin, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

function DestinationDetail() {
  const { slug } = useParams()
  const { i18n } = useTranslation()
  const lang = i18n.language.slice(0, 2)

  const dest = siteConfig.destinations.find(d => d.slug === slug)

  if (!dest) return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1B4F72] mb-4">Destination introuvable</h2>
        <Link to="/destinations" className="btn-primary">Voir toutes les destinations</Link>
      </div>
    </div>
  )

  const name = dest.name[lang] || dest.name.fr
  const description = dest.description[lang] || dest.description.fr

  return (
    <>
      <Helmet>
        <title>{name} - {siteConfig.name}</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-[#1a1a2e] to-[#1B4F72]">
        <img
          src={dest.image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="max-w-7xl mx-auto px-4 w-full text-white">
            <Link to="/destinations" className="flex items-center gap-2 text-sm text-white/70 hover:text-white mb-4 transition-colors">
              <ArrowLeft size={16} /> Retour aux destinations
            </Link>
            <span className="bg-[#F39C12] text-white text-sm font-bold px-3 py-1 rounded-full">{dest.region}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2">{name}</h1>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1"><Clock size={14} /> {dest.duration}</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Algérie</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-bold text-[#1B4F72] mb-4">À propos</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{description}</p>

              <h3 className="text-xl font-bold text-[#1B4F72] mb-4">Points forts</h3>
              <div className="grid grid-cols-2 gap-3">
                {dest.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={18} className="text-[#27AE60] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border p-6 sticky top-24"
            >
              <p className="text-sm text-gray-500 mb-1">À partir de</p>
              <p className="text-4xl font-bold text-[#1B4F72] mb-1">{dest.priceFrom.toLocaleString()} DA</p>
              <p className="text-sm text-gray-400 mb-6">/ personne</p>

              <div className="space-y-3 mb-6 text-sm text-gray-600">
                <div className="flex justify-between py-2 border-b">
                  <span>Durée</span>
                  <span className="font-semibold">{dest.duration}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Région</span>
                  <span className="font-semibold">{dest.region}</span>
                </div>
              </div>

              <Link to="/devis" className="btn-secondary w-full text-center block flex items-center justify-center gap-2">
                Demander un devis <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline w-full text-center block mt-3">
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DestinationDetail
