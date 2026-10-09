import { useTranslation } from 'react-i18next'
import { tourMemories } from '../assets/assets'

const TourMemories = () => {
  const { t } = useTranslation()

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
      {/* Section heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 pb-6 border-b border-[#E3E4DA]">
        <div>
          <h2 className="text-[#15170F] font-serif text-4xl md:text-5xl mt-4 tracking-tight italic">
            {t('tourMemories.heading')}
          </h2>
        </div>
        <p className="text-[#9A9C90] text-sm md:text-[15px] max-w-xs font-light leading-relaxed">
          {t('tourMemories.subheading')}
        </p>
      </div>

      {/* Uniform grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {tourMemories.map((memory) => {
          const title = t(`tourMemories.items.${memory.id}.title`, { defaultValue: memory.title })
          const location = t(`tourMemories.items.${memory.id}.location`, { defaultValue: memory.location })

          return (
            <div key={memory.id} className="group">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden bg-[#F1F2EC] shadow-[0_1px_3px_rgba(20,25,15,0.06)] md:hover:shadow-[0_16px_40px_rgba(20,25,15,0.16)] transition-shadow duration-500">
                <img
                  src={memory.image}
                  alt={title}
                  className="w-full h-40 sm:h-56 md:h-64 object-cover md:group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                />

                {/* Overlay — desktop hover only */}
                <div className="hidden md:block absolute inset-0 bg-black/0 md:group-hover:bg-black/55 transition-colors duration-400" />

                {/* Content — desktop hover only, fades in over image */}
                <div className="hidden md:flex absolute inset-0 flex-col justify-end p-4 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/70 text-[10px] tracking-[0.15em] uppercase">
                    {location}
                  </p>
                  <h3 className="text-white font-serif text-lg tracking-tight leading-tight mt-1">
                    {title}
                  </h3>
                </div>
              </div>

              {/* Caption — mobile/tablet only, always visible below image */}
              <div className="md:hidden mt-2.5">
                <p className="text-[#9A9C90] text-[10px] tracking-[0.1em] uppercase">
                  {location}
                </p>
                <h3 className="text-[#15170F] font-serif text-base tracking-tight leading-tight mt-0.5">
                  {title}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TourMemories