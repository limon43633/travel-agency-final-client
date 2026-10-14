import { useTranslation } from 'react-i18next'
import { specialitiesData } from '../data/agencyData'

const Specialities = () => {
  const { t } = useTranslation()

  return (
    <section id="specialities" className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      {/* Section heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14 pb-6 border-b border-[#E3E4DA]">
        <div>
          <h2 className="text-[#15170F] font-serif text-4xl md:text-5xl tracking-tight italic">
            {t('specialities.heading')}
          </h2>
        </div>
        <p className="text-[#9A9C90] text-sm md:text-[15px] max-w-sm font-light leading-relaxed">
          {t('specialities.subheading')}
        </p>
      </div>

      {/* Grid of 6 uniform speciality image cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {specialitiesData.map((item) => {
          const Icon = item.icon
          const title = t(`specialities.items.${item.id}.title`)
          const desc = t(`specialities.items.${item.id}.desc`)

          return (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl min-h-[320px] sm:min-h-[340px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(20,25,15,0.08)] hover:shadow-[0_16px_36px_-6px_rgba(20,25,15,0.16)] transition-all duration-500 ease-out motion-safe:hover:-translate-y-1.5 cursor-default border border-[#E3E4DA]/60 bg-[#15170F]"
            >
              {/* Background image with smooth zoom */}
              <img
                src={item.image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover motion-safe:group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
              />

              {/* Dark gradient overlay for guaranteed text legibility */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25 pointer-events-none"
                aria-hidden="true"
              />

              {/* Top: Glass icon badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 text-[#A6F24A] flex items-center justify-center shadow-sm group-hover:bg-[#A6F24A] group-hover:text-[#1C3308] group-hover:border-[#A6F24A] transition-colors duration-300">
                  <Icon size={20} strokeWidth={2} aria-hidden="true" />
                </span>
              </div>

              {/* Bottom: Title & Description */}
              <div className="relative z-10 pt-10">
                <h3 className="text-white font-serif text-2xl sm:text-[26px] tracking-tight leading-snug">
                  {title}
                </h3>
                <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed font-light mt-2.5 max-w-sm">
                  {desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Specialities
