import { Link } from 'react-router-dom'
import { Calendar, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { upcomingTours } from '../assets/assets'

const tourKeyMap = {
  1: 'sajek',
  2: 'coxs',
  3: 'bandarban',
  4: 'sundarban',
}

const UpcomingTours = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage || i18n.language || 'en'

  const formatNum = (n) => {
    try {
      return Number(n).toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-US')
    } catch {
      return n
    }
  }

  return (
    <section id="packages" className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 scroll-mt-10">
      <div id="upcoming-tours" className="-mt-10 pt-10" />
      {/* Section heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 pb-6 border-b border-[#E3E4DA]">
        <div>
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#9A9C90]">
            {t('upcomingTours.badge')}
          </span>
          <h2 className="text-[#15170F] font-serif text-4xl md:text-5xl mt-4 tracking-tight italic">
            {t('upcomingTours.heading')}
          </h2>
        </div>
        <p className="text-[#9A9C90] text-sm md:text-[15px] max-w-xs font-light leading-relaxed">
          {t('upcomingTours.subheading')}
        </p>
      </div>

      {/* Vertical stacked cards - image top, content below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {upcomingTours.map((tour) => {
          const key = tourKeyMap[tour.id]
          const destination = key ? t(`upcomingTours.items.${key}.destination`) : tour.destination
          const dateRange = key ? t(`upcomingTours.items.${key}.dateRange`) : tour.dateRange
          const duration = key ? t(`upcomingTours.items.${key}.duration`) : tour.duration
          const price = key ? t(`upcomingTours.items.${key}.price`) : tour.price

          const seatsLeft = tour.totalSeats - tour.seatsBooked
          const fillPercent = Math.min(
            100,
            Math.round((tour.seatsBooked / tour.totalSeats) * 100)
          )
          const isAlmostFull = seatsLeft <= 5

          return (
            <div key={tour.id} className="group">
              {/* Image */}
              <Link
                to={`/book/${tour.id}`}
                className="relative block overflow-hidden rounded-2xl aspect-[4/3] bg-[#F1F2EC] shadow-[0_1px_3px_rgba(20,25,15,0.06)] group-hover:shadow-[0_16px_40px_rgba(20,25,15,0.14)] transition-shadow duration-500"
              >
                <img
                  src={tour.image}
                  alt={destination}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />

                {isAlmostFull && (
                  <span className="absolute top-3 left-3 bg-[#15170F] text-white text-[10px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full">
                    {t('common.onlySeatsLeft', { count: formatNum(seatsLeft) })}
                  </span>
                )}
              </Link>

              {/* Content below image */}
              <div className="pt-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[#15170F] font-serif text-lg tracking-tight leading-tight">
                    {destination}
                  </h3>
                  <Link
                    to={`/tour/${tour.id}`}
                    aria-label={`View tour ${destination}`}
                    className="w-7 h-7 rounded-full bg-[#F1F2EC] group-hover:bg-[#A6F24A] flex items-center justify-center shrink-0 transition-colors duration-300"
                  >
                    <ArrowUpRight
                      size={13}
                      className="text-[#15170F] group-hover:text-[#1C3308] transition-colors duration-300"
                      strokeWidth={2}
                    />
                  </Link>
                </div>

                <div className="flex items-center gap-1.5 text-[#5D5F56] text-xs mt-2.5">
                  <Calendar size={12} strokeWidth={1.75} />
                  <span>{dateRange}</span>
                  <span className="text-[#B7B9AC]">·</span>
                  <span className="text-[#9A9C90]">{duration}</span>
                </div>

                {/* Seats progress bar */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span
                      className={
                        isAlmostFull
                          ? 'text-[#C4453A] font-medium'
                          : 'text-[#9A9C90]'
                      }
                    >
                      {t('common.seatsLeft', { count: formatNum(seatsLeft) })}
                    </span>
                    <span className="text-[#B7B9AC]">
                      {formatNum(tour.seatsBooked)}/{formatNum(tour.totalSeats)} {t('common.booked')}
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#F1F2EC] overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isAlmostFull ? 'bg-[#C4453A]' : 'bg-[#A6F24A]'
                      }`}
                      style={{ width: `${fillPercent}%` }}
                    />
                  </div>
                </div>

                <p className="text-[13px] text-[#15170F] mt-3">
                  <span className="text-[#9A9C90]">{t('common.from')} </span>
                  <span className="font-semibold">Tk {price}</span>
                  <span className="text-[#9A9C90]"> {t('common.perPerson')}</span>
                </p>

                {/* Book Now button + social proof */}
                <div className="flex items-center gap-2.5 mt-3">
                  <Link
                    to={`/book/${tour.id}`}
                    className="flex items-center gap-1.5 border border-[#15170F]/20 hover:border-[#15170F] hover:bg-[#15170F] hover:text-white text-[#15170F] text-xs font-medium rounded-full px-4 py-2 transition-all duration-300 shrink-0"
                  >
                    {t('common.bookNow')}
                    <ArrowUpRight size={12} strokeWidth={2} />
                  </Link>
                  <span className="text-[#9A9C90] text-[11px] leading-snug">
                    {t('common.bookedThisMonth', { count: formatNum(tour.seatsBooked) })}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default UpcomingTours