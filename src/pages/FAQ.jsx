import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'
import CTABanner from '../components/sections/CTABanner'

function FAQ() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.slice(0, 2)
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <Helmet>
        <title>FAQ - {siteConfig.name}</title>
      </Helmet>

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#1a1a2e] to-[#1B4F72] text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <HelpCircle size={48} className="text-[#F39C12] mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Questions Fréquentes</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">Tout ce que vous devez savoir sur nos voyages</p>
        </motion.div>
      </div>

      <SectionWrapper className="bg-gray-50">
        <div className="max-w-3xl mx-auto space-y-4">
          {siteConfig.faq.map((item, i) => {
            const question = item.question[lang] || item.question.fr
            const answer = item.answer[lang] || item.answer.fr
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl shadow-sm border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#1B4F72] pr-4">{question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#F39C12] shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}

export default FAQ
