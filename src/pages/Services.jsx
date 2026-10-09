import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-3xl">
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#9A9C90]">
          TripNest
        </span>
        <h1 className="text-[#15170F] font-serif text-4xl md:text-5xl tracking-tight italic mt-3 mb-6">
          {t('pages.services.title')}
        </h1>
        <p className="text-[#73766B] text-lg font-light leading-relaxed mb-8">
          {t('pages.services.subtitle')}
        </p>
        <div className="p-8 rounded-2xl bg-[#F8F8F4] border border-[#E3E4DA] text-[#5D5F56] leading-relaxed">
          {t('pages.services.content')}
        </div>
      </div>
    </div>
  )
}

export default Services
