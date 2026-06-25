import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Star, Users } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'

/* ----------------------------------------------------------------
   Lignes topographiques SVG — élément signature de l'identité visuelle
   Inspirées des cartes cartographiques du Sahara algérien
   ---------------------------------------------------------------- */
function TopographicLines() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.13,
        pointerEvents: 'none',
      }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Courbes de niveau — terrain désertique stylisé */}
      <g stroke="#C4853A" strokeWidth="1" fill="none">
        <path d="M-100,650 Q200,580 500,620 Q800,660 1100,590 Q1300,540 1540,600" />
        <path d="M-100,600 Q250,520 550,565 Q850,605 1150,530 Q1350,480 1540,545" />
        <path d="M-100,550 Q300,460 600,510 Q900,555 1200,475 Q1400,425 1540,490" />
        <path d="M-100,500 Q350,400 650,455 Q950,505 1250,420 Q1450,370 1540,435" />
        <path d="M-100,450 Q400,340 700,400 Q1000,455 1300,365 Q1480,315 1540,380" />
        <path d="M-100,400 Q450,280 750,345 Q1050,405 1350,310 Q1490,260 1540,325" />
        <path d="M-100,350 Q500,220 800,290 Q1100,355 1380,255 Q1495,205 1540,270" />
        <path d="M-100,300 Q550,160 850,235 Q1150,305 1400,200 Q1500,150 1540,215" />
        <path d="M-100,250 Q600,100 900,180 Q1200,255 1420,145 Q1505,95 1540,160" />
        <path d="M-100,200 Q650,40 950,125 Q1250,205 1440,90 Q1510,40 1540,105" />
        {/* Courbes supplémentaires dans la partie basse */}
        <path d="M-100,700 Q200,640 480,675 Q780,710 1080,645 Q1300,600 1540,655" />
        <path d="M-100,750 Q180,700 460,730 Q760,760 1060,700 Q1290,660 1540,710" />
        <path d="M-100,800 Q160,760 440,785 Q740,810 1040,755 Q1280,720 1540,765" />
        <path d="M-100,850 Q140,820 420,840 Q720,860 1020,810 Q1270,780 1540,820" />
      </g>
      {/* Points de coordonnées — effet carte */}
      <g fill="#C4853A">
        <circle cx="380" cy="520" r="2.5" opacity="0.6" />
        <circle cx="750" cy="445" r="2" opacity="0.5" />
        <circle cx="1100" cy="390" r="2.5" opacity="0.6" />
        <circle cx="200" cy="600" r="1.5" opacity="0.4" />
        <circle cx="980" cy="310" r="2" opacity="0.5" />
        <circle cx="560" cy="470" r="1.5" opacity="0.4" />
        <circle cx="1300" cy="280" r="2" opacity="0.5" />
      </g>
      {/* Lignes de coordonnées fines */}
      <g stroke="#C4853A" strokeWidth="0.5" opacity="0.3">
        <line x1="380" y1="480" x2="380" y2="560" />
        <line x1="750" y1="405" x2="750" y2="485" />
        <line x1="1100" y1="350" x2="1100" y2="430" />
      </g>
    </svg>
  )
}

function Hero() {
  const { t } = useTranslation()

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--night)',
      }}
    >
      {/* Photo de fond */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dégradé directionnel — plus dense à gauche pour lisibilité texte */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(105deg, rgba(13,11,24,0.88) 0%, rgba(13,11,24,0.65) 55%, rgba(13,11,24,0.30) 100%)',
        }} />
      </div>

      {/* Fond de secours si pas d'image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #0D0B18 0%, #1a1430 50%, #0f1a2e 100%)',
        zIndex: -1,
      }} />

      {/* Lignes topographiques — élément signature */}
      <TopographicLines />

      {/* Trait vertical décoratif gauche */}
      <div style={{
        position: 'absolute',
        left: '1.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '1px',
        height: '35vh',
        background: 'linear-gradient(to bottom, transparent, rgba(196,133,58,0.4), transparent)',
      }} />

      {/* Contenu principal — aligné à gauche, éditorial */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '8rem 1.5rem 4rem',
        width: '100%',
      }}>
        <div style={{ maxWidth: '720px' }}>

          {/* Label monospace */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--dune)',
              display: 'block',
              marginBottom: '1.5rem',
            }}>
              🇩🇿 {t('hero.badge') || 'Agence de voyage · Algérie'}
            </span>
          </motion.div>

          {/* Titre principal — Cormorant Garamond grande taille */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              fontWeight: 600,
              lineHeight: 1.05,
              color: '#ffffff',
              marginBottom: '0.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            {t('hero.title') || 'Découvrez'}
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              fontWeight: 600,
              lineHeight: 1.05,
              fontStyle: 'italic',
              color: 'var(--dune)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em',
            }}
          >
            {siteConfig.tagline}
          </motion.h1>

          {/* Trait dune */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              width: '3rem',
              height: '2px',
              backgroundColor: 'var(--dune)',
              marginBottom: '1.75rem',
            }}
          />

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              marginBottom: '2.5rem',
              maxWidth: '480px',
            }}
          >
            {t('hero.subtitle') || siteConfig.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link to="/voyages-organises" className="btn-primary">
              {t('hero.cta.explore') || 'Voir nos voyages'} <ArrowRight size={16} />
            </Link>
            <Link to="/devis" className="btn-outline">
              {t('hero.cta.quote') || 'Demander un devis'}
            </Link>
          </motion.div>
        </div>

        {/* Statistiques — rangée horizontale, alignée gauche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            display: 'flex',
            gap: '0',
            marginTop: '5rem',
            borderTop: '1px solid rgba(196,133,58,0.2)',
            paddingTop: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { icon: MapPin, value: '50+', label: t('hero.stats.destinations') || 'Destinations' },
            { icon: Users, value: '2 000+', label: t('hero.stats.clients') || 'Voyageurs satisfaits' },
            { icon: Star, value: '4.9', label: t('hero.stats.rating') || 'Note moyenne' },
          ].map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0 2.5rem 0 0',
                marginRight: '2.5rem',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}
            >
              <Icon size={18} style={{ color: 'var(--dune)', flexShrink: 0 }} />
              <div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: 1,
                  marginBottom: '0.2rem',
                }}>
                  {value}
                </div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                }}>
                  {label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.55rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
        }}>
          Scroll
        </span>
        <div style={{
          width: '1px',
          height: '3rem',
          background: 'linear-gradient(to bottom, rgba(196,133,58,0.6), transparent)',
        }} />
      </motion.div>
    </section>
  )
}

export default Hero
