import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, FileText, UserCheck, Send, Stamp, ShieldCheck, Clock, HeartHandshake } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/sections/CTABanner'

// Destinations de visa proposées — modifiable
const visaServices = [
  { flag: '🇪🇺', name: 'Visa Schengen', desc: 'Tourisme, affaires ou famille pour l\'espace Schengen.', delay: '10 à 15 jours' },
  { flag: '🇦🇪', name: 'Visa Émirats (Dubaï)', desc: 'Visa touristique 30 ou 60 jours, traitement express.', delay: '3 à 5 jours' },
  { flag: '🇹🇷', name: 'Visa Turquie', desc: 'e-Visa et visa touristique pour la Turquie.', delay: '2 à 4 jours' },
  { flag: '🇸🇦', name: 'Visa Arabie Saoudite', desc: 'Visa Omra, tourisme et visites familiales.', delay: '5 à 10 jours' },
  { flag: '🇬🇧', name: 'Visa Royaume-Uni', desc: 'Visa visiteur standard pour le Royaume-Uni.', delay: '15 à 20 jours' },
  { flag: '🇨🇦', name: 'Visa Canada', desc: 'Visa de résident temporaire (visiteur).', delay: '20 à 30 jours' },
]

const steps = [
  { icon: UserCheck, title: 'Évaluation gratuite', desc: 'Nous étudions votre profil et déterminons le visa adapté.' },
  { icon: FileText, title: 'Préparation du dossier', desc: 'Nous constituons et vérifions chaque document requis.' },
  { icon: Send, title: 'Dépôt de la demande', desc: 'Nous soumettons votre dossier et prenons votre rendez-vous.' },
  { icon: Stamp, title: 'Obtention du visa', desc: 'Vous récupérez votre passeport visé, prêt à voyager.' },
]

const reassurance = [
  { icon: ShieldCheck, title: 'Dossier sécurisé', desc: 'Chaque document est vérifié pour maximiser vos chances.' },
  { icon: Clock, title: 'Gain de temps', desc: 'Nous gérons les démarches administratives à votre place.' },
  { icon: HeartHandshake, title: 'Accompagnement humain', desc: 'Un conseiller dédié vous suit jusqu\'à l\'obtention.' },
]

function Visa() {
  const { t } = useTranslation()
  const whatsappUrl = `https://wa.me/${siteConfig.contact.phoneWhatsapp}?text=${encodeURIComponent('Bonjour, je souhaite des informations sur une demande de visa.')}`

  return (
    <>
      <Helmet>
        <title>{t('nav.visa')} - {siteConfig.name}</title>
        <meta name="description" content="Demande de visa avec AviaTours : constitution et suivi de votre dossier (Schengen, Émirats, Turquie...) pour un traitement rapide et fiable." />
      </Helmet>

      <PageHero
        badge="📄 Dossiers vérifiés"
        title="Demande de Visa"
        subtitle="Constitution et suivi complet de votre dossier de visa, pour un traitement rapide, fiable et sans stress."
      />

      {/* Destinations visa */}
      <SectionWrapper>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title">Pour quelle destination ?</h2>
          <p className="section-subtitle">Nous traitons les demandes de visa pour les principales destinations.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaServices.map((visa, i) => (
            <motion.div
              key={visa.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-md card-hover border"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{visa.flag}</span>
                <h3 className="text-lg font-bold text-[#1B4F72]">{visa.name}</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{visa.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#27AE60] bg-[#27AE60]/10 px-3 py-1 rounded-full">
                  Délai : {visa.delay}
                </span>
                <Link to="/devis" className="text-sm font-semibold text-[#1B4F72] hover:text-[#F39C12] inline-flex items-center gap-1 transition-colors">
                  Demander <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Processus */}
      <SectionWrapper className="bg-[#F8F9FA]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title">Notre processus en 4 étapes</h2>
          <p className="section-subtitle">Un accompagnement clair, du premier contact à l'obtention de votre visa.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-6 shadow-sm border text-center card-hover"
            >
              <div className="w-12 h-12 mx-auto bg-[#1B4F72]/10 rounded-xl flex items-center justify-center mb-4">
                <Icon size={24} className="text-[#1B4F72]" />
              </div>
              <span className="absolute top-4 right-4 text-3xl font-bold text-gray-100">{i + 1}</span>
              <h3 className="font-bold text-[#1B4F72] mb-1">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Réassurance */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reassurance.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm card-hover"
            >
              <div className="w-12 h-12 bg-[#27AE60]/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={24} className="text-[#27AE60]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1B4F72] mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/devis" className="btn-primary flex items-center justify-center gap-2">
            Démarrer ma demande <ArrowRight size={18} />
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center justify-center gap-2">
            <Check size={18} /> Poser une question sur WhatsApp
          </a>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}

export default Visa
