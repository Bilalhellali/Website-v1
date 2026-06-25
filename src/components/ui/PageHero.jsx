import { motion } from 'framer-motion'

function PageHero({ title, subtitle, badge }) {
  return (
    <div style={{
      paddingTop: '8rem',
      paddingBottom: '4rem',
      backgroundColor: 'var(--night)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Trait vertical décoratif */}
      <div style={{
        position: 'absolute',
        left: '1.5rem',
        top: 0,
        bottom: 0,
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(196,133,58,0.3), transparent)',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}
      >
        {badge && (
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--dune)',
            display: 'block',
            marginBottom: '1rem',
          }}>
            {badge}
          </span>
        )}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 600,
          color: '#ffffff',
          lineHeight: 1.08,
          marginBottom: subtitle ? '1rem' : 0,
          letterSpacing: '-0.01em',
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            maxWidth: '36rem',
          }}>
            {subtitle}
          </p>
        )}
        {/* Trait dune en bas */}
        <div style={{
          width: '2.5rem',
          height: '2px',
          backgroundColor: 'var(--dune)',
          marginTop: '2rem',
        }} />
      </motion.div>
    </div>
  )
}

export default PageHero
