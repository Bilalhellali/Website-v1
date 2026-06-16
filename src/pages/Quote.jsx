import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FileText, Send } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'

function Quote() {
  const { t } = useTranslation()
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    console.log('Quote form:', data)
    alert('Votre demande de devis a été envoyée ! Nous vous contacterons dans les 24h.')
    reset()
  }

  return (
    <>
      <Helmet>
        <title>Demande de Devis - {siteConfig.name}</title>
      </Helmet>

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#1a1a2e] to-[#1B4F72] text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <FileText size={48} className="text-[#F39C12] mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('quote.title')}</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">{t('quote.subtitle')}</p>
        </motion.div>
      </div>

      <SectionWrapper className="bg-gray-50">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.firstName')} *</label>
                <input {...register('firstName', { required: true })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72]"
                  placeholder="Prénom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.lastName')} *</label>
                <input {...register('lastName', { required: true })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72]"
                  placeholder="Nom" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.email')} *</label>
                <input {...register('email', { required: true })} type="email"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72]"
                  placeholder="email@exemple.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.phone')} *</label>
                <input {...register('phone', { required: true })} type="tel"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72]"
                  placeholder="+213 XX XX XX XX" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('quote.destination')} *</label>
              <select {...register('destination', { required: true })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72]">
                <option value="">-- Choisir une destination --</option>
                {siteConfig.destinations.map(d => (
                  <option key={d.id} value={d.name.fr}>{d.name.fr}</option>
                ))}
                <option value="Autre">Autre / Sur mesure</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('quote.departureDate')}</label>
                <input {...register('departureDate')} type="date"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('quote.duration')}</label>
                <select {...register('duration')}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72]">
                  <option value="">-- Durée --</option>
                  <option value="1-3">1 à 3 jours</option>
                  <option value="4-7">4 à 7 jours</option>
                  <option value="8-14">8 à 14 jours</option>
                  <option value="15+">15 jours et plus</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('quote.travelers')}</label>
                <input {...register('travelers')} type="number" min="1" max="50"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72]"
                  placeholder="Nombre" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('quote.budget')}</label>
              <select {...register('budget')}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72]">
                <option value="">-- Budget estimé --</option>
                <option value="economic">Économique (- de 20 000 DA/pers)</option>
                <option value="standard">Standard (20 000 - 50 000 DA/pers)</option>
                <option value="comfort">Confort (50 000 - 100 000 DA/pers)</option>
                <option value="luxury">Luxe (+ de 100 000 DA/pers)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('quote.notes')}</label>
              <textarea {...register('notes')} rows={4}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72] resize-none"
                placeholder={t('quote.notesPlaceholder')} />
            </div>
            <button type="submit" disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4 disabled:opacity-60">
              <Send size={20} />
              {isSubmitting ? t('form.sending') : t('quote.submit')}
            </button>
          </form>
        </div>
      </SectionWrapper>
    </>
  )
}

export default Quote
