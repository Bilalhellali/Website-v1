import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Shield, Heart, Headphones, Map, Award, Zap } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'

const features = [
  { icon: Shield, key: 'safety' },
  { icon: Heart, key: 'passion' },
  { icon: Headphones, key: 'support' },
  { icon: Map, key: 'expertise' },
  { icon: Award, key: 'quality' },
  { icon: Zap, key: 'fast' },
]

function WhyUs() {
  const { t } = useTranslation()

  return (
    <SectionWrapper>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="section-title">{t('whyUs.title')}</h2>
        <p className="section-subtitle">{t('whyUs.subtitle')}</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, key }, i) => (
          <motion.div
            key={key}
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
              <h3 className="font-bold text-[#1B4F72] mb-1">{t(`whyUs.features.${key}.title`)}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t(`whyUs.features.${key}.desc`)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default WhyUs
