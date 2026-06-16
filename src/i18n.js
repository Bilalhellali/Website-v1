import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import fr from './locales/fr.json'
import ar from './locales/ar.json'
import en from './locales/en.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      ar: { translation: ar },
      en: { translation: en },
    },
    fallbackLng: 'fr',
    debug: false,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

// Appliquer la direction selon la langue détectée
const lang = i18n.language?.slice(0, 2)
document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
document.documentElement.lang = lang || 'fr'

export default i18n
