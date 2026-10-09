import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'

const LanguageSwitcher = ({ isHome = false, mobile = false, compact = false }) => {
  const { i18n } = useTranslation()
  const currentLang = i18n.resolvedLanguage || i18n.language || 'en'

  const changeLanguage = (lang) => {
    if (currentLang !== lang) {
      i18n.changeLanguage(lang)
    }
  }

  // Inside mobile drawer
  if (mobile) {
    return (
      <div className="flex items-center justify-between rounded-2xl bg-[#F7F8F4] px-4 py-3 border border-[#EDEEE6]">
        <div className="flex items-center gap-2 text-[#5D5F56]">
          <Languages size={17} strokeWidth={2} className="text-[#15170F]" />
          <span className="text-xs font-medium tracking-wide uppercase">
            {currentLang === 'bn' ? 'ভাষা নির্বাচন' : 'Language'}
          </span>
        </div>

        <div
          role="radiogroup"
          aria-label="Language selection"
          className="flex items-center rounded-full bg-white p-1 border border-[#E3E4DA] shadow-sm"
        >
          <button
            type="button"
            role="radio"
            aria-checked={currentLang === 'en'}
            aria-label="Switch to English"
            onClick={() => changeLanguage('en')}
            className={`rounded-full px-3.5 py-1 text-xs transition-all duration-200 cursor-pointer ${
              currentLang === 'en'
                ? 'bg-[#15170F] text-white font-medium shadow-sm'
                : 'text-[#73766B] hover:text-[#15170F] font-normal'
            }`}
          >
            English
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={currentLang === 'bn'}
            aria-label="বাংলা ভাষায় পরিবর্তন করুন"
            onClick={() => changeLanguage('bn')}
            className={`rounded-full px-3.5 py-1 text-xs transition-all duration-200 cursor-pointer ${
              currentLang === 'bn'
                ? 'bg-[#15170F] text-white font-medium shadow-sm'
                : 'text-[#73766B] hover:text-[#15170F] font-normal'
            }`}
          >
            বাংলা
          </button>
        </div>
      </div>
    )
  }

  // Compact toggle (for mobile navbar top bar or constrained spaces)
  if (compact) {
    return (
      <div
        role="radiogroup"
        aria-label="Language selection"
        className={`flex items-center rounded-full p-0.5 transition-all duration-200 ${
          isHome
            ? 'bg-white/10 backdrop-blur-md border border-white/20'
            : 'bg-white border border-[#E3E4DA] shadow-[0_4px_12px_rgba(20,25,15,0.06)]'
        }`}
      >
        <button
          type="button"
          role="radio"
          aria-checked={currentLang === 'en'}
          aria-label="Switch to English"
          onClick={() => changeLanguage('en')}
          className={`rounded-full px-2.5 py-1 text-[11px] transition-all duration-200 cursor-pointer ${
            isHome
              ? currentLang === 'en'
                ? 'bg-white text-[#15170F] font-semibold shadow-sm'
                : 'text-white/80 hover:text-white font-normal'
              : currentLang === 'en'
                ? 'bg-[#15170F] text-white font-medium shadow-sm'
                : 'text-[#73766B] hover:text-[#15170F] font-normal'
          }`}
        >
          EN
        </button>

        <button
          type="button"
          role="radio"
          aria-checked={currentLang === 'bn'}
          aria-label="বাংলা ভাষায় পরিবর্তন করুন"
          onClick={() => changeLanguage('bn')}
          className={`rounded-full px-2.5 py-1 text-[11px] transition-all duration-200 cursor-pointer ${
            isHome
              ? currentLang === 'bn'
                ? 'bg-white text-[#15170F] font-semibold shadow-sm'
                : 'text-white/80 hover:text-white font-normal'
              : currentLang === 'bn'
                ? 'bg-[#15170F] text-white font-medium shadow-sm'
                : 'text-[#73766B] hover:text-[#15170F] font-normal'
          }`}
        >
          বাং
        </button>
      </div>
    )
  }

  // Desktop navbar pill switcher
  return (
    <div
      role="radiogroup"
      aria-label="Language switcher"
      className={`hidden md:flex items-center rounded-full p-1 transition-all duration-300 ${
        isHome
          ? 'bg-white/10 backdrop-blur-md border border-white/20 shadow-md'
          : 'bg-white border border-[#E3E4DA] shadow-[0_8px_24px_rgba(20,25,15,0.08)]'
      }`}
    >
      <button
        type="button"
        role="radio"
        aria-checked={currentLang === 'en'}
        aria-label="Switch to English"
        onClick={() => changeLanguage('en')}
        className={`rounded-full px-3.5 py-1.5 text-xs tracking-wide transition-all duration-200 cursor-pointer ${
          isHome
            ? currentLang === 'en'
              ? 'bg-white text-[#15170F] font-semibold shadow-sm'
              : 'text-white/80 hover:text-white font-normal hover:bg-white/10'
            : currentLang === 'en'
              ? 'bg-[#15170F] text-white font-medium shadow-sm'
              : 'text-[#73766B] hover:text-[#15170F] font-normal hover:bg-[#F7F8F4]'
        }`}
      >
        English
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={currentLang === 'bn'}
        aria-label="বাংলা ভাষায় পরিবর্তন করুন"
        onClick={() => changeLanguage('bn')}
        className={`rounded-full px-3.5 py-1.5 text-xs tracking-wide transition-all duration-200 cursor-pointer ${
          isHome
            ? currentLang === 'bn'
              ? 'bg-white text-[#15170F] font-semibold shadow-sm'
              : 'text-white/80 hover:text-white font-normal hover:bg-white/10'
            : currentLang === 'bn'
              ? 'bg-[#15170F] text-white font-medium shadow-sm'
              : 'text-[#73766B] hover:text-[#15170F] font-normal hover:bg-[#F7F8F4]'
        }`}
      >
        বাংলা
      </button>
    </div>
  )
}

export default LanguageSwitcher
