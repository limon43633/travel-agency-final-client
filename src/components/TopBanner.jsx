import { MapPin, Calendar, Wallet, Users, Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Navbar from './Navbar'
import { assets } from '../assets/assets'

const TopBanner = () => {
  const { t } = useTranslation()

  return (
    <section className="relative">
      {/* Background image + navbar wrapper */}
      <div
        className="relative overflow-hidden bg-cover bg-center min-h-screen flex flex-col justify-between"
        style={{
          backgroundImage: `url(${assets.topBannerBg})`
        }}
      >
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

        <div className="relative z-10">
          <Navbar />

          {/* Hero content */}
          <div className="flex flex-col items-center text-center px-6 pt-19 pb-32 md:pb-40">
            <span className="inline-block bg-white/15 border border-white/30 backdrop-blur-md text-white text-xs font-medium tracking-[0.15em] uppercase px-5 py-2.5 rounded-full mb-6">
              {t('hero.badge')}
            </span>

            <h1 className="text-white font-light text-4xl sm:text-5xl md:text-6xl leading-[1.15] max-w-3xl tracking-tight">
              {t('hero.headingLine1')}
              <br />
              <span className="font-semibold">{t('hero.headingLine2')}</span>
            </h1>

            <p className="text-white/80 text-base md:text-lg mt-6 max-w-xl font-light leading-relaxed">
              {t('hero.subheading')}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-9">
              <button className="bg-[#A6F24A] hover:bg-[#93DB3D] text-[#1C3308] font-medium text-sm rounded-full px-8 py-3.5 transition-all active:scale-95 shadow-[0_8px_24px_rgba(166,242,74,0.35)] cursor-pointer">
                {t('hero.explorePackages')}
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-medium text-sm rounded-full px-8 py-3.5 transition-all active:scale-95 cursor-pointer">
                {t('hero.howItWorks')}
              </button>
            </div>
          </div>
        </div>

        {/* Trust strip - bottom of image, still inside the image bounds */}
        <div className="relative z-10 hidden md:flex items-center justify-center gap-10 pb-8 text-white/70 text-xs font-light tracking-wide">
          <span>{t('hero.stats.rating')}</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>{t('hero.stats.travelers')}</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>{t('hero.stats.destinations')}</span>
        </div>
      </div>

      {/* Floating search widget - overlaps the hero bottom edge */}
      <div className="relative z-20 max-w-4xl mx-auto -mt-16 md:-mt-14 px-4">
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