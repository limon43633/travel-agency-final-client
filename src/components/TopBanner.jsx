import { MapPin, Calendar, Wallet, Users, Search, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './Navbar'
import { assets, upcomingTours } from '../assets/assets'

const tourKeyMap = {
  1: 'sajek',
  2: 'coxs',
  3: 'bandarban',
  4: 'sundarban'
}

const TopBanner = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage || i18n.language || 'en'

  const featuredTour = upcomingTours && upcomingTours[0]
  const tourKey = featuredTour ? tourKeyMap[featuredTour.id] : null
  const seatsLeft = featuredTour ? Math.max(0, featuredTour.totalSeats - featuredTour.seatsBooked) : 0

  const featuredTourName = tourKey
    ? t(`upcomingTours.items.${tourKey}.destination`, { defaultValue: featuredTour.destination })
    : featuredTour?.destination
  const featuredTourDates = tourKey
    ? t(`upcomingTours.items.${tourKey}.dateRange`, { defaultValue: featuredTour.dateRange })
    : featuredTour?.dateRange

  const formatNum = (n) => {
    try {
      return Number(n).toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-US')
    } catch {
      return n
    }
  }

  return (
    <section className="relative">
      {/* Tall rounded hero container */}
      <div className="relative overflow-hidden rounded-b-[40px] sm:rounded-b-[48px] md:rounded-b-[56px] lg:rounded-b-[64px] min-h-[86svh] sm:min-h-[88svh] md:min-h-[92svh] lg:min-h-[95svh] flex flex-col justify-between">

        {/* Hero Background Image with eager loading */}
        <img
          src={assets.topBannerBg}
          alt="TripNest Hero"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Soft gradient overlay with deep bottom fade and subtle green tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#0b1407]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#122407]/40 via-transparent to-transparent pointer-events-none" />

        {/* Giant decorative background word with vertical fade-out mask */}
        <div
          aria-hidden="true"
          className="absolute top-[13%] sm:top-[15%] md:top-[14%] lg:top-[12%] left-0 right-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden px-4"
        >
          <span className="font-extrabold tracking-tight text-[19vw] sm:text-[18vw] lg:text-[16vw] xl:text-[210px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/35 via-white/10 to-transparent font-[Outfit]">
            TripNest
          </span>
        </div>

        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Main Hero Content: Bottom-left headline & actions + Desktop floating card on right */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-6 md:px-10 pt-4 sm:pt-8 md:pt-12 pb-24 sm:pb-28 md:pb-32 lg:pb-28 my-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-10">

            {/* Left: Eyebrow, Main Headline, Subtext & Action Buttons */}
            <div className="max-w-2xl text-left">
              {/* Eyebrow glass pill */}
              <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 backdrop-blur-md text-white text-xs font-medium tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-4 sm:mb-5">
                {t('hero.badge')}
              </span>

              {/* Main Headline */}
              <h1 className="text-white font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.14] sm:leading-[1.1] tracking-tight">
                {t('hero.headingLine1')}
                <br />
                <span className="font-semibold">{t('hero.headingLine2')}</span>
              </h1>

              {/* Subtext */}
              <p className="text-white/80 text-sm sm:text-base md:text-lg mt-4 max-w-[480px] font-light leading-relaxed">
                {t('hero.subheading')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mt-7 sm:mt-8">
                {/* Primary Button: White pill with green circle arrow */}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('packages') || document.querySelector('section:nth-of-type(2)')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group inline-flex items-center gap-3.5 bg-white hover:bg-white/95 text-[#15170F] font-medium text-sm rounded-full pl-6 pr-2 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                >
                  <span>{t('hero.explorePackages')}</span>
                  <span className="w-8 h-8 rounded-full bg-[#A6F24A] text-[#1C3308] group-hover:bg-[#93DB3D] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight size={15} strokeWidth={2.2} />
                  </span>
                </button>

                {/* Secondary Button: Glass / Outline pill */}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('how-it-works') || document.querySelector('section:nth-of-type(6)')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-medium text-sm rounded-full px-7 py-3.5 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                >
                  {t('hero.howItWorks')}
                </button>
              </div>
            </div>

            {/* Right: Floating Glass Card (Desktop only, similar to reference card) */}
            {featuredTour && (
              <div className="hidden lg:flex flex-col bg-white/95 backdrop-blur-xl border border-white/80 rounded-3xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.35)] w-full max-w-[340px] xl:max-w-[370px] shrink-0">
                <div className="flex items-center gap-1.5 text-[11px] text-[#5D5F56] font-medium tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#74C91E]" />
                  <span>{t('hero.floatingCard.tagline')}</span>
                </div>

                <h3 className="text-base font-semibold text-[#15170F] mt-1 leading-snug">
                  {featuredTourName}
                </h3>

                <p className="text-xs text-[#73766B] mt-0.5 leading-relaxed">
                  {t('hero.floatingCard.desc')}
                </p>

                {/* Tour thumbnail with date & seat tags */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mt-3.5 bg-[#F1F2EC] shadow-sm">
                  <img
                    src={featuredTour.image}
                    alt={featuredTourName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px]">
                    <span className="font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                      {featuredTourDates}
                    </span>
                    <span className="font-semibold bg-[#A6F24A] text-[#1C3308] px-2.5 py-1 rounded-full shadow-sm">
                      {formatNum(seatsLeft)} {t('booking.seatsAvailable')}
                    </span>
                  </div>
                </div>

                {/* Price & Book now action */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#EDEEE6]">
                  <div>
                    <span className="text-[11px] text-[#9A9C90] uppercase tracking-wider">{t('common.from')}</span>
                    <p className="text-sm font-bold text-[#15170F]">
                      Tk {featuredTour.price} <span className="text-[11px] font-normal text-[#9A9C90]">/ {t('common.perPerson')}</span>
                    </p>
                  </div>
                  <Link
                    to={`/book/${featuredTour.id}`}
                    className="inline-flex items-center gap-1.5 bg-[#15170F] hover:bg-[#2A2C24] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all active:scale-95 shadow-sm cursor-pointer"
                  >
                    <span>{t('common.bookNow')}</span>
                    <ArrowRight size={12} strokeWidth={2.2} />
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Subtle trust strip at bottom edge of image */}
        <div className="relative z-20 hidden md:flex items-center justify-center gap-8 lg:gap-10 pb-6 text-white/70 text-xs font-light tracking-wide">
          <span>{t('hero.stats.rating')}</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>{t('hero.stats.travelers')}</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>{t('hero.stats.destinations')}</span>
        </div>

      </div>

      {/* Floating search widget - overlaps the hero bottom edge cleanly without covering content */}
      <div className="relative z-30 max-w-4xl mx-auto -mt-12 sm:-mt-14 md:-mt-14 px-4">
        <div className="bg-white rounded-[24px] shadow-[0_20px_50px_rgba(20,25,15,0.16)] p-3">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 md:divide-x divide-[#EDEEE6]">
            <div className="flex items-center gap-3 px-4 py-3 flex-1">
              <MapPin size={18} className="text-[#9A9C90] flex-shrink-0" />
              <div className="text-left w-full">
                <p className="text-[11px] text-[#9A9C90] font-medium">{t('search.locationLabel')}</p>
                <input
                  type="text"
                  placeholder={t('search.locationPlaceholder')}
                  className="w-full text-sm text-[#15170F] placeholder:text-[#B7B9AD] outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 flex-1">
              <Calendar size={18} className="text-[#9A9C90] flex-shrink-0" />
              <div className="text-left w-full">
                <p className="text-[11px] text-[#9A9C90] font-medium">{t('search.dateLabel')}</p>
                <input
                  type="date"
                  className="w-full text-sm text-[#15170F] outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 flex-1">
              <Wallet size={18} className="text-[#9A9C90] flex-shrink-0" />
              <div className="text-left w-full">
                <p className="text-[11px] text-[#9A9C90] font-medium">{t('search.budgetLabel')}</p>
                <select className="w-full text-sm text-[#15170F] outline-none bg-transparent cursor-pointer">
                  <option>{t('search.budgetOptions.under20k')}</option>
                  <option>{t('search.budgetOptions.from20kTo50k')}</option>
                  <option>{t('search.budgetOptions.from50kTo100k')}</option>
                  <option>{t('search.budgetOptions.above100k')}</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 flex-1">
              <Users size={18} className="text-[#9A9C90] flex-shrink-0" />
              <div className="text-left w-full">
                <p className="text-[11px] text-[#9A9C90] font-medium">{t('search.guestsLabel')}</p>
                <select className="w-full text-sm text-[#15170F] outline-none bg-transparent cursor-pointer">
                  <option>{t('search.guestOptions.one')}</option>
                  <option>{t('search.guestOptions.two')}</option>
                  <option>{t('search.guestOptions.three')}</option>
                  <option>{t('search.guestOptions.fourPlus')}</option>
                </select>
              </div>
            </div>

            <button className="flex items-center justify-center gap-2 bg-[#A6F24A] hover:bg-[#93DB3D] text-[#1C3308] font-medium text-sm rounded-full md:rounded-2xl px-6 py-3.5 md:m-1.5 transition-all active:scale-95 flex-shrink-0 cursor-pointer">
              <Search size={16} />
              {t('search.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopBanner