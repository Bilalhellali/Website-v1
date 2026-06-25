import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'
import PageHero from '../components/ui/PageHero'

function Gallery() {
  const images = siteConfig.destinations.map(d => ({ src: d.image, label: d.name.fr, region: d.region }))

  return (
    <>
      <Helmet>
        <title>Galerie - {siteConfig.name}</title>
      </Helmet>

      <PageHero
        badge="Galerie"
        title="L'Algérie en images"
        subtitle="Laissez-vous inspirer par la beauté et la diversité des paysages algériens."
      />

      <SectionWrapper>
        <div style={{
          columns: '1',
          columnGap: '1rem',
        }}
          className="sm:columns-2 lg:columns-3"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{
                position: 'relative',
                marginBottom: '1rem',
                breakInside: 'avoid',
                overflow: 'hidden',
                backgroundColor: 'var(--night)',
                aspectRatio: i % 3 === 0 ? '4/5' : '4/3',
              }}
            >
              <img
                src={img.src} alt={img.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                onError={(e) => { e.target.style.display = 'none' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              {/* Overlay au hover */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(13,11,24,0.75) 0%, transparent 50%)',
                opacity: 0, transition: 'opacity 0.3s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0'}
              >
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '0.2rem' }}>{img.label}</p>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dune)' }}>{img.region}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}

export default Gallery
