import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'
import CTABanner from '../components/sections/CTABanner'
import PageHero from '../components/ui/PageHero'

function FAQ() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.slice(0, 2)
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <Helmet>
        <title>FAQ - {siteConfig.name}</title>
      </Helmet>

      <PageHero
        badge="Questions fréquentes"
        title="Tout ce que vous devez savoir"
        subtitle="Retrouvez ici les réponses aux questions les plus posées sur nos voyages et services."
      />

      <SectionWrapper style={{ backgroundColor: 'var(--parchment)' }} className="bg-[#F6EDD8]">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {siteConfig.faq.map((item, i) => {
            const question = item.question[lang] || item.question.fr
            const answer = item.answer[lang] || item.answer.fr
            const isOpen = openIndex === i

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                style={{ borderBottom: '1px solid var(--mist)' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem',
                  }}
                >
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: isOpen ? 500 : 400,
                    color: isOpen ? 'var(--dune)' : 'var(--ink)',
                    lineHeight: 1.4,
                    transition: 'color 0.2s ease',
                  }}>
                    {question}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: 'var(--dune)',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.9rem',
                        fontWeight: 300,
                        color: '#5a5468',
                        lineHeight: 1.75,
                        paddingBottom: '1.5rem',
                        borderLeft: '2px solid var(--dune)',
                        paddingLeft: '1rem',
                      }}>
                        {answer}
                      </p>
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
