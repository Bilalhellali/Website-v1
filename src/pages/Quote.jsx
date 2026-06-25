import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'
import PageHero from '../components/ui/PageHero'

const labelStyle = {
  fontFamily: "'Space Mono', monospace",
  fontSize: '0.6rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#8b8499',
  display: 'block',
  marginBottom: '0.5rem',
}

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
  boxSizing: 'border-box',
  transition: 'border-color 0.2s ease',
}

function Quote() {
  const { t } = useTranslation()
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    console.log('Quote form:', data)
    alert('Votre demande de devis a été envoyée ! Nous vous contacterons dans les 24h.')
    reset()
  }

  const focus = (e) => { e.target.style.borderColor = 'var(--dune)' }
  const blur = (e, hasError) => { e.target.style.borderColor = hasError ? '#e05a5a' : 'var(--mist)' }

  return (
    <>
      <Helmet>
        <title>Demande de Devis - {siteConfig.name}</title>
      </Helmet>

      <PageHero
        badge="Devis gratuit"
        title={t('quote.title') || 'Demande de Devis'}
        subtitle={t('quote.subtitle') || 'Répondez à quelques questions, recevez votre devis sous 24h.'}
      />

      <SectionWrapper style={{ backgroundColor: 'var(--parchment)' }} className="bg-[#F6EDD8]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ maxWidth: '720px', margin: '0 auto', backgroundColor: '#ffffff', border: '1px solid var(--mist)', padding: '3rem' }}
        >
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Nom & Prénom */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>{t('form.firstName')} *</label>
                <input {...register('firstName', { required: true })}
                  style={{ ...inputStyle, borderColor: errors.firstName ? '#e05a5a' : 'var(--mist)' }}
                  onFocus={focus} onBlur={e => blur(e, errors.firstName)} placeholder="Prénom" />
              </div>
              <div>
                <label style={labelStyle}>{t('form.lastName')} *</label>
                <input {...register('lastName', { required: true })}
                  style={{ ...inputStyle, borderColor: errors.lastName ? '#e05a5a' : 'var(--mist)' }}
                  onFocus={focus} onBlur={e => blur(e, errors.lastName)} placeholder="Nom" />
              </div>
            </div>

            {/* Email & Téléphone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>{t('form.email')} *</label>
                <input {...register('email', { required: true })} type="email"
                  style={{ ...inputStyle, borderColor: errors.email ? '#e05a5a' : 'var(--mist)' }}
                  onFocus={focus} onBlur={e => blur(e, errors.email)} placeholder="email@exemple.com" />
              </div>
              <div>
                <label style={labelStyle}>{t('form.phone')} *</label>
                <input {...register('phone', { required: true })} type="tel"
                  style={{ ...inputStyle, borderColor: errors.phone ? '#e05a5a' : 'var(--mist)' }}
                  onFocus={focus} onBlur={e => blur(e, errors.phone)} placeholder="+213 XX XX XX XX" />
              </div>
            </div>

            {/* Destination */}
            <div>
              <label style={labelStyle}>{t('quote.destination')} *</label>
              <select {...register('destination', { required: true })}
                style={{ ...inputStyle, borderColor: errors.destination ? '#e05a5a' : 'var(--mist)', cursor: 'pointer' }}
                onFocus={focus} onBlur={e => blur(e, errors.destination)}>
                <option value="">— Choisir une destination —</option>
                {siteConfig.destinations.map(d => (
                  <option key={d.id} value={d.name.fr}>{d.name.fr}</option>
                ))}
                <option value="Autre">Autre / Sur mesure</option>
              </select>
            </div>

            {/* Dates, durée, voyageurs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>{t('quote.departureDate')}</label>
                <input {...register('departureDate')} type="date"
                  style={inputStyle} onFocus={focus} onBlur={e => blur(e, false)} />
              </div>
              <div>
                <label style={labelStyle}>{t('quote.duration')}</label>
                <select {...register('duration')}
                  style={{ ...inputStyle, cursor: 'pointer' }} onFocus={focus} onBlur={e => blur(e, false)}>
                  <option value="">— Durée —</option>
                  <option value="1-3">1 à 3 jours</option>
                  <option value="4-7">4 à 7 jours</option>
                  <option value="8-14">8 à 14 jours</option>
                  <option value="15+">15 jours et plus</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>{t('quote.travelers')}</label>
                <input {...register('travelers')} type="number" min="1" max="50"
                  style={inputStyle} onFocus={focus} onBlur={e => blur(e, false)} placeholder="Nbre" />
              </div>
            </div>

            {/* Budget */}
            <div>
              <label style={labelStyle}>{t('quote.budget')}</label>
              <select {...register('budget')}
                style={{ ...inputStyle, cursor: 'pointer' }} onFocus={focus} onBlur={e => blur(e, false)}>
                <option value="">— Budget estimé —</option>
                <option value="economic">Économique (moins de 20 000 DA/pers)</option>
                <option value="standard">Standard (20 000 – 50 000 DA/pers)</option>
                <option value="comfort">Confort (50 000 – 100 000 DA/pers)</option>
                <option value="luxury">Luxe (plus de 100 000 DA/pers)</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label style={labelStyle}>{t('quote.notes')}</label>
              <textarea {...register('notes')} rows={4}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={focus} onBlur={e => blur(e, false)}
                placeholder={t('quote.notesPlaceholder')} />
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-primary"
              style={{ justifyContent: 'center', padding: '1rem', opacity: isSubmitting ? 0.6 : 1 }}>
              <Send size={16} />
              {isSubmitting ? t('form.sending') : t('quote.submit')}
            </button>
          </form>
        </motion.div>
      </SectionWrapper>
    </>
  )
}

export default Quote
