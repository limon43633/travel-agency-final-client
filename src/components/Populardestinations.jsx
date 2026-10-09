import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { destinations } from '../assets/assets'

const destKeyMap = {
  1: 'coxs',
  2: 'sajek',
  3: 'sundarban',
  4: 'bandarban',
}

const PopularDestinations = () => {
  const { t } = useTranslation()

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-28">
      {/* Section heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-8 border-b border-[#E3E4DA]">
        <div>
          <h2 className="text-[#15170F] font-serif text-4xl md:text-5xl mt-4 tracking-tight italic">
            {t('popularDestinations.heading')}
          </h2>
        </div>
        <p className="text-[#9A9C90] text-sm md:text-[15px] max-w-xs font-light leading-relaxed">
          {t('popularDestinations.subheading')}
        </p>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
        {destinations.map((place, index) => {
          const key = destKeyMap[place.id]
          const name = key ? t(`popularDestinations.items.${key}.name`) : place.name
          const location = key ? t(`popularDestinations.items.${key}.location`) : place.location
          const duration = key ? t(`popularDestinations.items.${key}.duration`) : place.duration
          const price = key ? t(`popularDestinations.items.${key}.price`) : place.price

          return (
            <div
              key={place.id}
              className="group cursor-pointer rounded-[20px] p-3 -m-3 transition-colors duration-300 hover:bg-[#F8F8F4]"
            >
              {/* Image — rounded, no overlay/badge */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#F1F2EC] shadow-[0_1px_3px_rgba(20,25,15,0.06)] group-hover:shadow-[0_16px_40px_rgba(20,25,15,0.14)] transition-shadow duration-500">
                <img
                  src={place.image}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />
                {/* Floating view button — always visible, refined */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={16} className="text-[#15170F]" strokeWidth={2} />
                </div>
              </div>

              {/* Content — pure typography, no icons */}
              <div className="pt-5 px-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[#15170F] font-serif text-xl tracking-tight">
                    {name}
                  </h3>
                  <span className="text-xs font-mono text-[#B7B9AC] shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className="text-[#9A9C90] text-xs tracking-wide uppercase mt-1.5 leading-relaxed">
                  {location} &nbsp;·&nbsp; {duration}
                </p>

                <div className="flex items-baseline justify-between mt-4 pt-4 border-t border-[#EDEEE6]">
                  <p className="text-[18px] text-[#15170F]">
                    <span className="text-[#9A9C90]">{t('common.from')} </span>
                    <span className="font-medium">{price}</span>
                    <span className="text-[#9A9C90]"> {t('common.perPerson')}</span>
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PopularDestinations