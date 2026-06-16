import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'
import SectionWrapper from '../ui/SectionWrapper'
import StarRating from '../ui/StarRating'

function Testimonials() {
  const { t } = useTranslation()

  return (
    <SectionWrapper className="bg-[#1B4F72]">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="section-title text-white">{t('testimonials.title')}</h2>
        <p className="section-subtitle text-blue-200">{t('testimonials.subtitle')}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {siteConfig.testimonials.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <Quote size={32} className="text-[#F39C12] mb-4" />
            <p className="text-white/90 text-sm leading-relaxed mb-6 italic">"{item.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F39C12] rounded-full flex items-center justify-center text-white font-bold">
                {item.name[0]}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{item.name}</p>
                <p className="text-blue-200 text-xs">{item.location}</p>
                <StarRating rating={item.rating} />
              </div>
            </div>
            <div className="mt-3 text-xs text-[#F39C12] font-medium">✈ {item.trip}</div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Testimonials
