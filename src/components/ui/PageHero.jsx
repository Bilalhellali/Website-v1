import { motion } from 'framer-motion'

// Bandeau de tête réutilisable — garantit un hero identique sur toutes les pages internes
function PageHero({ title, subtitle, badge }) {
  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-[#1a1a2e] to-[#1B4F72] text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4"
      >
        {badge && (
          <span className="inline-block bg-[#F39C12]/20 border border-[#F39C12]/50 text-[#F39C12] text-sm font-medium px-4 py-2 rounded-full mb-4">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-blue-200 max-w-2xl mx-auto">{subtitle}</p>}
      </motion.div>
    </div>
  )
}

export default PageHero
