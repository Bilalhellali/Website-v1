import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, FileText, UserCheck, Send, Stamp, ShieldCheck, Clock, HeartHandshake } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/sections/CTABanner'

const visaServices = [
  { flag: '🇪🇺', name: 'Visa Schengen', desc: "Tourisme, affaires ou famille pour l'espace Schengen.", delay: '10 à 15 jours' },
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
  { icon: HeartHandshake, title: 'Accompagnement humain', desc: "Un conseiller dédié vous suit jusqu'à l'obtention." },
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
        subtitle="Constitution et suivi complet de votre dossier, pour un traitement rapide et sans stress."
      />

      {/* Destinations visa */}
      <SectionWrapper>
        <span className="section-label">Destinations</span>
        <h2 className="section-title">Pour quelle destination ?</h2>
        <div className="divider-dune" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1px',
          backgroundColor: 'var(--mist)',
          marginTop: '1rem',
        }}>
          {visaServices.map((visa, i) => (
            <motion.div
              key={visa.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              style={{ backgroundColor: '#ffffff', padding: '1.75rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.75rem' }}>{visa.flag}</span>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.15rem', fontWeight: 600, color: 'var(--ink)',
                }}>{visa.name}</h3>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: '#6b6580', lineHeight: 1.6, marginBottom: '1.25rem' }}>{visa.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem', letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--oasis)',
                  border: '1px solid var(--oasis)', padding: '0.25rem 0.6rem',
                }}>
                  {visa.delay}
                </span>
                <Link to="/devis" style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem', letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--dune)',
                  textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem',
                }}>
                  Demander <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Processus */}
      <SectionWrapper style={{ backgroundColor: 'var(--parchment)' }} className="bg-[#F6EDD8]">
        <span className="section-label">Processus</span>
        <h2 className="section-title">Notre processus en 4 étapes</h2>
        <div className="divider-dune" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', backgroundColor: 'var(--mist)', marginTop: '1rem' }}>
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ backgroundColor: '#fff', padding: '2rem 1.75rem', position: 'relative' }}
            >
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '4rem', fontWeight: 600, color: 'var(--mist)',
                lineHeight: 1, position: 'absolute', top: '1rem', right: '1.25rem',
              }}>{i + 1}</span>
              <Icon size={22} style={{ color: 'var(--oasis)', marginBottom: '0.875rem' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.4rem' }}>{title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: '#6b6580', lineHeight: 1.6 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Réassurance */}
      <SectionWrapper>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {reassurance.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', gap: '1rem', padding: '1.5rem', borderLeft: '3px solid var(--oasis)', backgroundColor: '#ffffff', border: '1px solid var(--mist)', borderLeft: '3px solid var(--oasis)' }}
            >
              <Icon size={20} style={{ color: 'var(--oasis)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>{title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: '#6b6580', lineHeight: 1.6 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/devis" className="btn-primary">
            Démarrer ma demande <ArrowRight size={16} />
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Check size={16} /> Question sur WhatsApp
          </a>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}

export default Visa
