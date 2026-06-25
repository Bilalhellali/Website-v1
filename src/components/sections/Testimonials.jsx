import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { siteConfig } from '../../config/siteConfig'
import StarRating from '../ui/StarRating'

function Testimonials() {
  const { t } = useTranslation()

  return (
    <section style={{ backgroundColor: 'var(--night)', padding: '6rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--dune)',
            display: 'block',
            marginBottom: '0.75rem',
          }}>
            Témoignages
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '0',
          }}>
            {t('testimonials.title') || 'Ce que disent nos voyageurs'}
          </h2>
        </motion.div>

        {/* Grille témoignages */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          backgroundColor: 'rgba(255,255,255,0.06)',
        }}>
          {siteConfig.testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              style={{
                backgroundColor: 'var(--night)',
                p