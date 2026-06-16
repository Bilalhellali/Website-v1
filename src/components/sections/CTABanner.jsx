import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'

function CTABanner() {
  const { t } = useTranslation()

  return (
    <section className="bg-gradient-to-r from-[#F39C12] to-[#E67E22] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">{t('cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/devis" className="bg-white text-[#F39C12] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center">
              {t('cta.quoteBtn')} <ArrowRight size={18} />
            </Link>
            <a href={`tel:${siteConfig.contact.phone}`} className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 justify-center">
              <Phone size={18} /> {siteConfig.contact.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner
