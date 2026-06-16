import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'

function Gallery() {
  const images = siteConfig.destinations.map(d => ({ src: d.image, label: d.name.fr }))

  return (
    <>
      <Helmet>
        <title>Galerie - {siteConfig.name}</title>
      </Helmet>

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#1a1a2e] to-[#1B4F72] text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galerie Photos</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">Laissez-vous inspirer par la beauté de l'Algérie</p>
        </motion.div>
      </div>

      <SectionWrapper>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative group break-inside-avoid rounded-xl overflow-hidden bg-gradient-to-br from-[#1B4F72] to-[#154360] aspect-[4/3]"
            >
              <img src={img.src} alt={img.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.style.display = 'none' }} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}

export default Gallery
