import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'

function CTABanner() {
  const { t } = useTranslation()

  return (
    <section style={{
      backgroundColor: 'var(--parchment)',
      padding: '6rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Accent géométrique décoratif */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40%',
        height: '100%',
        background: 'linear-gradient(135deg, transparent 0%, rgba(196,133,58,0.07) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '8px',
        height: '100%',
        backgroundColor: 'var(--dune)',
      }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'center',
            gap: '3rem',
          }}
          className="grid-cols-1 lg:grid-cols-[1fr_auto]"
        >
          {/* Texte */}
          <div>
            <spa