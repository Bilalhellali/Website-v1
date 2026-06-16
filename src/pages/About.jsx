import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Users, Award, MapPin, Heart } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'
import CTABanner from '../components/sections/CTABanner'

function About() {
  const { t } = useTranslation()

  const stats = [
    { icon: Users, value: '2000+', label: t('about.stats.clients') },
    { icon: Award, value: '8+', label: t('about.stats.years') },
    { icon: MapPin, value: '50+', label: t('about.stats.destinations') },
    { icon: Heart, value: '98%', label: t('about.stats.satisfaction') },
  ]

  return (
    <>
      <Helmet>
        <title>{t('about.pageTitle')} - {siteConfig.name}</title>
      </Helmet>

      {/* Hero */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-[#1a1a2e] to-[#1B4F72] text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">{t('about.subtitle')}</p>
        </motion.div>
      </div>

      {/* Stats */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Icon size={32} className="text-[#F39C12] mx-auto mb-3" />
              <div className="text-4xl font-bold text-[#1B4F72] mb-1">{value}</div>
              <p className="text-gray-500 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Story */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[#F39C12] font-medium uppercase tracking-wider text-sm">{t('about.storyLabel')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4F72] mt-2 mb-6">{t('about.storyTitle')}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{t('about.story1')}</p>
              <p>{t('about.story2')}</p>
              <p>{t('about.story3')}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1B4F72] to-[#154360] rounded-3xl p-10 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">{t('about.values.title')}</h3>
            <ul className="space-y-4">
              {['authenticity', 'safety', 'quality', 'sustainability'].map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <span className="text-[#F39C12] text-xl">✦</span>
                  <div>
                    <p className="font-semibold">{t(`about.values.${v}.title`)}</p>
                    <p className="text-blue-200 text-sm mt-1">{t(`about.values.${v}.desc`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}

export default About
