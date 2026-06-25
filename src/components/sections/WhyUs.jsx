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
      {/* Layout asymétrique deux colonnes */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        alignItems: 'start',
      }}
        className="grid-cols-1 lg:grid-cols-2"
      >
        {/* Colonne gauche — déclaration éditoriale */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">{t('whyUs.title') || 'Pourquoi nous choisir'}</span>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            color: 'var(--ink)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}>
            Des milliers d'Algériens<br />
            <em style={{ color: 'var(--dune)', fontStyle: 'italic' }}>nous font confiance.</em>
          </h2>

          <div className="divider-dune" />

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#6b6580',
            l