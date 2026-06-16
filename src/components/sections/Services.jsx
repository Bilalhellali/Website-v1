import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Plane, FileCheck, BedDouble, ArrowRight, Check } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'
import SectionWrapper from '../ui/SectionWrapper'

// Map nom d'icône (config) -> composant lucide
const icons = { Plane, FileCheck, BedDouble }

function Services() {
  return (
    <SectionWrapper className="bg-[#F8F9FA]">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-center text-[#F39C12] font-semibold uppercase tracking-wider text-sm mb-2">Nos services</p>
        <h2 className="section-title">Tout pour votre voyage, au même endroit</h2>
        <p className="section-subtitle">
          AviaTours vous accompagne de A à Z : voyages organisés en groupe, demandes de visa et réservations d'hôtels.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {siteConfig.services.map((service, i) => {
          const Icon = icons[service.icon] || Plane
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col bg-white rounded-2xl p-8 shadow-md card-hover border"
            >
              <div className="w-14 h-14 bg-[#1B4F72]/10 rounded-2xl flex items-center justify-center mb-5">
                <Icon size={28} className="text-[#1B4F72]" />
              </div>
              <h3 className="text-xl font-bold text-[#1B4F72] mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>
              <ul className="space-y-2 mb-6">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-[#27AE60] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to={service.to}
                className="mt-auto inline-flex items-center gap-2 font-semibold text-[#1B4F72] hover:text-[#F39C12] transition-colors"
              >
                En savoir plus <ArrowRight size={16} />
              </Link>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default Services
