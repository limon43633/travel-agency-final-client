import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import bn from './locales/bn'

const STORAGE_KEY = 'tripnest_language'

const getSavedLanguage = () => {
  if (typeof window === 'undefined') return 'en'
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'bn') {
      return saved
    }
  } catch {
    // Ignore localStorage access errors
  }
  return 'en'
}

const initialLang = getSavedLanguage()

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLang
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
    },
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    returnNull: false,
  })

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, lng)
    } catch {
      // Ignore localStorage errors
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lng
    }
  }
})

export default i18n
