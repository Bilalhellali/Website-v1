import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Star, Users } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'

function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 via-[#1B4F72]/50 to-[#1a1a2e]/80" />
      </div>

      {/* Fallback gradient if no image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#1B4F72] to-[#154360] -z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-[#F39C12]/20 border border-[#F39C12]/50 text-[#F39C12] text-sm font-medium px-4 py-2 rounded-full mb-6">
            🇩🇿 {t('hero.badge')}
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t('hero.title')}
            <span className="block text-[#F39C12]">{siteConfig.tagline}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/voyages-organises" className="btn-secondary flex items-center gap-2 justify-center text-lg py-4 px-8">
              {t('hero.cta.explore')} <ArrowRight size={20} />
            </Link>
            <Link to="/devis" className="btn-outline border-white text-white hover:bg-white hover:text-[#1B4F72] flex items-center gap-2 justify-center text-lg py-4 px-8">
              {t('hero.cta.quote')}
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { icon: MapPin, value: '50+', label: t('hero.stats.destinations') },
            { icon: Users, value: '2000+', label: t('hero.stats.clients') },
            { icon: Star, value: '4.9/5', label: t('hero.stats.rating') },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon size={24} className="text-[#F39C12] mx-auto mb-2" />
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-xs text-gray-300">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
