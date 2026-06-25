import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Plane, FileCheck, BedDouble, ArrowRight, Check } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'
import SectionWrapper from '../ui/SectionWrapper'

const icons = { Plane, FileCheck, BedDouble }

/* Accent couleur par service */
const serviceAccents = ['var(--dune)', 'var(--oasis)', 'var(--ink)']

function Services() {
  return (
    <SectionWrapper style={{ backgroundColor: 'var(--parchment)' }} className="bg-[#F6EDD8]">
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3.5rem' }}
      >
        <span className="section-label">Nos services</span>
        <h2
          className="section-title"
          style={{ maxWidth: '36rem' }}
        >
          Tout pour votre voyage, au même endroit
        </h2>
        <div className="divider-dune" />
        <p className="section-subtitle" style={{ margin: 0 }}>
          AviaTours vous accompagne de A à Z — voyages organisés, demandes de visa et réservations d'hôtels.
        </p>
      </motion.div>

      {/* Cards — bordure gauche accent, pas de rounded */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
      }}>
        {siteConfig.services.map((service, i) => {
          const Icon = icons[service.icon] || Plane
          const accent = serviceAccents[i % serviceAccents.length]

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card-hover"
              style={{
                backgroundColor: '#ffffff',
                borderLeft: `3px solid ${accent}`,
                padding: '2rem 2rem 2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Icône */}
              <div style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                color: accent,
              }}>
                <Icon size={28} />
              </div>

              {/* Titre */}
              <h3 styl