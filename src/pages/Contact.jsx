import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'
import PageHero from '../components/ui/PageHero'

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '0.9rem',
  fontWeight: 300,
  color: 'var(--ink)',
  backgroundColor: '#ffffff',
  border: '1px solid var(--mist)',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box',
}

function Contact() {
  const { t } = useTranslation()
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  const whatsappUrl = `https://wa.me/${siteConfig.contact.phoneWhatsapp}?text=${encodeURIComponent('Bonjour, je souhaite des informations.')}`
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&output=embed`

  const onSubmit = async (data) => {
    console.log('Contact form:', data)
    alert('Message envoyé ! Nous vous répondrons dans les 24h.')
    reset()
  }

  const contactItems = [
    { icon: Phone, label: t('contact.phone'), value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
    { icon: MessageCircle, label: 'WhatsApp', value: siteConfig.contact.phone, href: whatsappUrl, external: true },
    { icon: Mail, label: t('contact.email'), value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { icon: MapPin, label: t('contact.address'), value: siteConfig.contact.address },
    { icon: Clock, label: t('contact.hours'), value: t('contact.hoursValue') },
  ]

  return (
    <>
      <Helmet>
        <title>{t('nav.contact')} - {siteConfig.name}</title>
      </Helmet>

      <PageHero
        badge="Contactez-nous"
        title={t('contact.title') || 'Parlons de votre voyage'}
        subtitle={t('contact.subtitle') || 'Notre équipe vous répond dans les 24h ouvrées.'}
      />

      <SectionWrapper>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '4rem', alignItems: 'start' }} className="grid-cols-1 lg:grid-cols-[2fr_3fr]">

          {/* Infos contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {contactItems.map(({ icon: Icon, label, value, href, external }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  padding: '1.25rem 0',
                  borderBottom: '1px solid var(--mist)',
                }}
              >
                <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--parchment)', flexShrink: 0 }}>
                  <Icon size={18} style={{ color: 'var(--dune)' }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8b8499', marginBottom: '0.3rem' }}>{label}</p>
                  {href ? (
                    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--dune)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--ink)'}
                    >{value}</a>
                  ) : (
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 400, color: 'var(--ink)' }}>{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ backgroundColor: '#ffffff', border: '1px solid var(--mist)', padding: '2.5rem' }}
          >
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '2rem' }}>
              {t('contact.formTitle') || 'Envoyez-nous un message'}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8b8499', display: 'block', marginBottom: '0.5rem' }}>{t('form.firstName')} *</label>
                  <input {...register('firstName', { required: true })}
                    style={{ ...inputStyle, borderColor: errors.firstName ? '#e05a5a' : 'var(--mist)' }}
                    onFocus={e => e.target.style.borderColor = 'var(--dune)'}
                    onBlur={e => e.target.style.borderColor = errors.firstName ? '#e05a5a' : 'var(--mist)'}
                    placeholder="Prénom" />
                </div>
                <div>
                  <label style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8b8499', display: 'block', marginBottom: '0.5rem' }}>{t('form.lastName')} *</label>
                  <input {...register('lastName', { required: true })}
                    style={{ ...inputStyle, borderColor: errors.lastName ? '#e05a5a' : 'var(--mist)' }}
                    onFocus={e => e.target.style.borderColor = 'var(--dune)'}
                    onBlur={e => e.target.style.borderColor = errors.lastName ? '#e05a5a' : 'var(--mist)'}
                    placeholder="Nom" />
                </div>
              </div>
              <div>
                <label style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8b8499', display: 'block', marginBottom: '0.5rem' }}>{t('form.email')} *</label>
                <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} type="email"
                  style={{ ...inputStyle, borderColor: errors.email ? '#e05a5a' : 'var(--mist)' }}
                  onFocus={e => e.target.style.borderColor = 'var(--dune)'}
                  onBlur={e => e.target.style.borderColor = errors.email ? '#e05a5a' : 'var(--mist)'}
                  placeholder="votre@email.com" />
              </div>
              <div>
                <label style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8b8499', display: 'block', marginBottom: '0.5rem' }}>{t('form.phone')}</label>
                <input {...register('phone')} type="tel"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--dune)'}
                  onBlur={e => e.target.style.borderColor = 'var(--mist)'}
                  placeholder="+213 XX XX XX XX" />
              </div>
              <div>
                <label style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8b8499', display: 'block', marginBottom: '0.5rem' }}>{t('form.message')} *</label>
                <textarea {...register('message', { required: true })} rows={5}
                  style={{ ...inputStyle, borderColor: errors.message ? '#e05a5a' : 'var(--mist)', resize: 'none' }}
                  onFocus={e => e.target.style.borderColor = 'var(--dune)'}
                  onBlur={e => e.target.style.borderColor = errors.message ? '#e05a5a' : 'var(--mist)'}
                  placeholder={t('form.messagePlaceholder')} />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ justifyContent: 'center', opacity: isSubmitting ? 0.6 : 1 }}>
                <Send size={16} />
                {isSubmitting ? t('form.sending') : t('form.send')}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Carte */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginTop: '3rem', border: '1px solid var(--mist)', overflow: 'hidden' }}>
          <iframe
            title="Localisation AviaTours"
            src={mapsSrc}
            width="100%" height="380"
            style={{ border: 0, display: 'block' }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </SectionWrapper>
    </>
  )
}

export default Contact
