import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="text-9xl font-bold text-[#1B4F72]/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-[#1B4F72] mb-4">Page introuvable</h1>
        <p className="text-gray-500 mb-8">Cette page n'existe pas ou a été déplacée.</p>
        <div className="flex gap-4 justify-center">
          <Link to="/" className="btn-primary flex items-center gap-2">
            <Home size={18} /> Accueil
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline flex items-center gap-2">
            <ArrowLeft size={18} /> Retour
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound
