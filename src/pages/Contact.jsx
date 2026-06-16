import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionWrapper from '../components/ui/SectionWrapper'

function Contact() {
  const { t } = useTranslation()
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    // TODO: intégrer EmailJS ou Netlify Forms
    console.log('Contact form:', data)
    alert('Message envoyé ! Nous vous répondrons dans les 24h.')
    reset()
  }

  return (
    <>
      <Helmet>
        <title>{t('nav.contact')} - {siteConfig.name}</title>
      </Helmet>

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#1a1a2e] to-[#1B4F72] text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </motion.div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Phone, label: t('contact.phone'), value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
              { icon: Mail, label: t('contact.email'), value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
              { icon: MapPin, label: t('contact.address'), value: siteConfig.contact.address },
              { icon: Clock, label: t('contact.hours'), value: t('contact.hoursValue') },
            ].map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border"
              >
                <div className="w-12 h-12 bg-[#1B4F72]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-[#1B4F72]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} className="text-[#1B4F72] font-semibold hover:text-[#F39C12] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-lg border p-8"
          >
            <h2 className="text-2xl font-bold text-[#1B4F72] mb-6">{t('contact.formTitle')}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.firstName')} *</label>
                  <input {...register('firstName', { required: true })}
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.firstName ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#1B4F72]`}
                    placeholder="Votre prénom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.lastName')} *</label>
                  <input {...register('lastName', { required: true })}
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.lastName ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#1B4F72]`}
                    placeholder="Votre nom" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.email')} *</label>
                <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  type="email"
                  className={`w-full px-4 py-2.5 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#1B4F72]`}
                  placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.phone')}</label>
                <input {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72]"
                  placeholder="+213 XX XX XX XX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.message')} *</label>
                <textarea {...register('message', { required: true })}
                  rows={5}
                  className={`w-full px-4 py-2.5 rounded-lg border ${errors.message ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#1B4F72] resize-none`}
                  placeholder={t('form.messagePlaceholder')} />
              </div>
              <button type="submit" disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60">
                <Send size={18} />
                {isSubmitting ? t('form.sending') : t('form.send')}
              </button>
            </form>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  )
}

export default Contact
