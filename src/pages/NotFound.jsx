import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--night)',
      padding: '2rem',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center' }}
      >
        {/* 404 éditorial */}
        <div style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(8rem, 20vw, 15rem)',
          fontWeight: 600,
          lineHeight: 0.9,
          color: 'rgba(196,133,58,0.12)',
          letterSpacing: '-0.04em',
          marginBottom: '1rem',
          userSelect: 'none',
        }}>
          404
        </div>

        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--dune)',
          display: 'block',
          marginBottom: '1.25rem',
        }}>
          Page introuvable
        </span>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 600,
          color: '#ffffff',
          marginBottom: '1rem',
          lineHeight: 1.2,
        }}>
          Cette page n'existe pas
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '1rem',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.5)',
          marginBottom: '2.5rem',
          maxWidth: '380px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
        }}>
          La page que vous cherchez a peut-être été déplacée ou n'existe plus.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary">
            <Home size={16} /> Retour à l'accueil
          </Link>
          <button
            onClick={() => window.history.back()}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500, fontSize: '0.8rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              background: 'none', cursor: 'pointer',
              color: 'rgba(255,255,255,0.55)',
              padding: '0.875rem 2rem',
              border: '2px solid rgba(255,255,255,0.15)',
              transition: 'border-color 0.25s, color 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dune)'; e.currentTarget.style.color = 'var(--dune)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
          >
            <ArrowLeft size={16} /> Page précédente
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound
