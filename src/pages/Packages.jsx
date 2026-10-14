import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  ArrowUpRight,
  Search,
  X,
  SlidersHorizontal,
  Compass,
  HeartHandshake,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero'
import BookingBanner from '../components/BookingBanner'
import { assets, upcomingTours } from '../assets/assets'

// Mapping for tour category categorization
const tourCategoryMap = {
  1: 'hill', // Sajek Valley
  2: 'beach', // Cox's Bazar
  3: 'hill', // Bandarban Hill Trek
  4: 'forest', // Sundarbans Boat Trail
}

const tourKeyMap = {
  1: 'sajek',
  2: 'coxs',
  3: 'bandarban',
  4: 'sundarban',
}

const Packages = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage || i18n.language || 'en'

  // Filter & Search State
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  const formatNum = (n) => {
    try {
      return Number(n).toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-US')
    } catch {
      return n
    }
  }

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0
    return Number(String(priceStr).replace(/[^0-9]/g, '')) || 0
  }

  // Filtered and sorted tours
  const filteredTours = useMemo(() => {
    return upcomingTours
      .filter((tour) => {
        // Category filter
        const category = tourCategoryMap[tour.id] || 'other'
        if (selectedCategory !== 'all' && category !== selectedCategory) {
          return false
        }

        // Search query filter
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase().trim()
          const key = tourKeyMap[tour.id]
          const localizedDestination = key
            ? t(`upcomingTours.items.${key}.destination`).toLowerCase()
            : ''
          const localizedLocation = key
            ? t(`upcomingTours.items.${key}.location`).toLowerCase()
            : ''

          const matchesRawDest = tour.destination.toLowerCase().includes(query)
          const matchesRawLoc = tour.location.toLowerCase().includes(query)
          const matchesLocDest = localizedDestination.includes(query)
          const matchesLocLoc = localizedLocation.includes(query)

          return matchesRawDest || matchesRawLoc || matchesLocDest || matchesLocLoc
        }

        return true
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') {
          return parsePrice(a.price) - parsePrice(b.price)
        }
        if (sortBy === 'price-desc') {
          return parsePrice(b.price) - parsePrice(a.price)
        }
        // Default sort by departure date/ID
        return a.id - b.id
      })
  }, [searchQuery, selectedCategory, sortBy, t])

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSortBy('date')
  }

  const categories = [
    { id: 'all', label: t('packagesPage.categories.all') },
    { id: 'hill', label: t('packagesPage.categories.hill') },
    { id: 'beach', label: t('packagesPage.categories.beach') },
    { id: 'forest', label: t('packagesPage.categories.forest') },
  ]

  return (
    <div className="bg-[#FAFBF7] min-h-screen">
      {/* 1. PageHero */}
      <PageHero
        eyebrow={t('packagesPage.eyebrow')}
        title={t('packagesPage.title')}
        subtitle={t('packagesPage.subtitle')}
        breadcrumbCurrent={t('pages.packages.title')}
        bgImage={assets.bandarban}
      />

      {/* 2. Sticky Filter & Search Toolbar */}
      <div className="sticky top-0 z-30 bg-[#FAFBF7]/95 backdrop-blur-md border-y border-[#E3E4DA] py-3.5 shadow-xs transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#73766B]"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('packagesPage.searchPlaceholder')}
                className="w-full pl-9.5 pr-8 py-2.5 rounded-full bg-white border border-[#E3E4DA] text-sm text-[#15170F] placeholder-[#9A9C90] focus:outline-none focus:ring-2 focus:ring-[#A6F24A] focus:border-transparent transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A9C90] hover:text-[#15170F] p-0.5"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category Chips and Sort Dropdown */}
            <div className="flex flex-wrap items-center justify-between lg:justify-end gap-2.5 sm:gap-3">
              {/* Category pills */}
              <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.id
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#A6F24A] text-[#1C3308] font-semibold shadow-xs'
                          : 'bg-white border border-[#E3E4DA] text-[#5D5F56] hover:text-[#15170F] hover:bg-[#F1F2EC]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  )
                })}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 bg-white border border-[#E3E4DA] rounded-full px-3.5 py-1.5 shadow-xs shrink-0">
                <SlidersHorizontal size={13} className="text-[#73766B]" aria-hidden="true" />
                <label htmlFor="package-sort" className="sr-only">
                  {t('packagesPage.sort.label')}
                </label>
                <select
                  id="package-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs font-medium text-[#15170F] focus:outline-none cursor-pointer pr-1"
                >
                  <option value="date">{t('packagesPage.sort.date')}</option>
                  <option value="price-asc">{t('packagesPage.sort.priceAsc')}</option>
                  <option value="price-desc">{t('packagesPage.sort.priceDesc')}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Tour Grid or Empty State */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
        {/* Results count indicator */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-[#73766B] mb-8 pb-3 border-b border-[#E3E4DA]">
          <span>
            {t('packagesPage.resultsCount', {
              count: formatNum(filteredTours.length),
            })}
          </span>
          {(searchQuery || selectedCategory !== 'all' || sortBy !== 'date') && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-xs text-[#1C3308] underline font-medium hover:text-black cursor-pointer"
            >
              {t('packagesPage.emptyState.clearBtn')}
            </button>
          )}
        </div>

        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTours.map((tour) => {
              const key = tourKeyMap[tour.id]
              const destination = key
                ? t(`upcomingTours.items.${key}.destination`)
                : tour.destination
              const dateRange = key
                ? t(`upcomingTours.items.${key}.dateRange`)
                : tour.dateRange
              const duration = key
                ? t(`upcomingTours.items.${key}.duration`)
                : tour.duration
              const price = key
                ? t(`upcomingTours.items.${key}.price`)
                : tour.price

              const seatsLeft = Math.max(0, tour.totalSeats - tour.seatsBooked)
              const fillPercent = Math.min(
                100,
                Math.round((tour.seatsBooked / tour.totalSeats) * 100)
              )
              const isSoldOut = seatsLeft === 0
              const isAlmostFull = !isSoldOut && seatsLeft <= 5

              return (
                <div
                  key={tour.id}
                  className="group bg-white border border-[#E3E4DA] rounded-3xl overflow-hidden p-4 sm:p-5 shadow-[0_2px_8px_-2px_rgba(28,51,8,0.04),0_12px_24px_-4px_rgba(28,51,8,0.05)] hover:shadow-[0_4px_16px_-2px_rgba(28,51,8,0.06),0_20px_32px_-4px_rgba(28,51,8,0.08)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Tour Image */}
                    <Link
                      to={isSoldOut ? '#' : `/book/${tour.id}`}
                      className={`relative block overflow-hidden rounded-2xl aspect-[4/3] bg-[#F1F2EC] ${
                        isSoldOut ? 'cursor-not-allowed opacity-75' : ''
                      }`}
                    >
                      <img
                        src={tour.image}
                        alt={destination}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Sold Out badge */}
                      {isSoldOut ? (
                        <span className="absolute top-3 left-3 bg-[#15170F] text-white/80 text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-sm">
                          {t('packagesPage.soldOut')}
                        </span>
                      ) : isAlmostFull ? (
                        <span className="absolute top-3 left-3 bg-[#15170F] text-white text-[10px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full shadow-sm">
                          {t('common.onlySeatsLeft', {
                            count: formatNum(seatsLeft),
                          })}
                        </span>
                      ) : null}
                    </Link>

                    {/* Content */}
                    <div className="pt-4">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-[#15170F] font-serif text-xl tracking-tight leading-snug">
                          {destination}
                        </h3>
                        {!isSoldOut && (
                          <Link
                            to={`/book/${tour.id}`}
                            aria-label={`Book tour ${destination}`}
                            className="w-8 h-8 rounded-full bg-[#F1F2EC] group-hover:bg-[#A6F24A] flex items-center justify-center shrink-0 transition-colors duration-300"
                          >
                            <ArrowUpRight
                              size={14}
                              className="text-[#15170F] group-hover:text-[#1C3308] transition-colors duration-300"
                              strokeWidth={2}
                            />
                          </Link>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 text-[#5D5F56] text-xs mt-2.5">
                        <Calendar size={13} strokeWidth={1.8} aria-hidden="true" />
                        <span>{dateRange}</span>
                        <span className="text-[#B7B9AC]">·</span>
                        <span className="text-[#9A9C90]">{duration}</span>
                      </div>

                      {/* Seats Progress Bar */}
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-[11px] mb-1.5">
                          <span
                            className={
                              isSoldOut
                                ? 'text-[#C4453A] font-semibold'
                                : isAlmostFull
                                ? 'text-[#C4453A] font-medium'
                                : 'text-[#73766B]'
                            }
                          >
                            {isSoldOut
                              ? t('packagesPage.soldOut')
                              : t('common.seatsLeft', {
                                  count: formatNum(seatsLeft),
                                })}
                          </span>
                          <span className="text-[#9A9C90]">
                            {formatNum(tour.seatsBooked)}/{formatNum(tour.totalSeats)}{' '}
                            {t('common.booked')}
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[#F1F2EC] overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              isSoldOut || isAlmostFull
                                ? 'bg-[#C4453A]'
                                : 'bg-[#A6F24A]'
                            }`}
                            style={{ width: `${fillPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price and Book Now button */}
                  <div className="pt-5 mt-4 border-t border-[#EDEEE6] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-xs text-[#9A9C90] block leading-none">
                        {t('common.from')}
                      </span>
                      <p className="text-sm sm:text-base font-bold text-[#15170F] mt-1">
                        Tk {price}{' '}
                        <span className="text-xs font-normal text-[#9A9C90]">
                          /{t('booking.traveler')}
                        </span>
                      </p>
                    </div>

                    {isSoldOut ? (
                      <span className="px-5 py-2.5 rounded-full bg-[#F1F2EC] text-[#9A9C90] text-xs font-medium cursor-not-allowed">
                        {t('packagesPage.soldOut')}
                      </span>
                    ) : (
                      <Link
                        to={`/book/${tour.id}`}
                        className="inline-flex items-center gap-1.5 bg-[#A6F24A] hover:bg-[#93DB3D] text-[#1C3308] text-xs font-semibold rounded-full px-5 py-2.5 shadow-xs transition-all active:scale-95"
                      >
                        <span>{t('common.bookNow')}</span>
                        <ArrowUpRight size={13} strokeWidth={2} />
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white border border-[#E3E4DA] rounded-3xl p-10 sm:p-16 text-center max-w-lg mx-auto shadow-xs">
            <span className="w-14 h-14 rounded-2xl bg-[#F7F8F4] border border-[#E3E4DA] text-[#73766B] flex items-center justify-center mx-auto mb-4">
              <Compass size={26} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h3 className="text-[#15170F] font-serif text-2xl tracking-tight leading-snug">
              {t('packagesPage.emptyState.title')}
            </h3>
            <p className="text-[#73766B] text-xs sm:text-sm leading-relaxed font-light mt-2">
              {t('packagesPage.emptyState.desc')}
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="mt-6 inline-flex items-center gap-2 bg-[#15170F] hover:bg-black text-white text-xs font-medium rounded-full px-6 py-3 transition-all active:scale-95 cursor-pointer"
            >
              {t('packagesPage.emptyState.clearBtn')}
            </button>
          </div>
        )}

        {/* 4. Custom Trip Note Card */}
        <div className="mt-14 bg-white border border-[#E3E4DA] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_2px_8px_-2px_rgba(28,51,8,0.04)]">
          <div className="flex items-start gap-4">
            <span className="w-12 h-12 rounded-2xl bg-[#A6F24A]/15 border border-[#A6F24A]/30 text-[#1C3308] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <HeartHandshake size={22} strokeWidth={1.9} aria-hidden="true" />
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#15170F] leading-snug">
                {t('packagesPage.customTrip.title')}
              </h4>
              <p className="text-xs sm:text-[13px] text-[#5D5F56] leading-relaxed font-light mt-1 max-w-xl">
                {t('packagesPage.customTrip.desc')}
              </p>
            </div>
          </div>

          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-[#F1F2EC] hover:bg-[#E8E9E2] text-[#15170F] text-xs font-semibold rounded-full min-h-[44px] px-6 py-2.5 transition-all shrink-0"
          >
            <span>{t('packagesPage.customTrip.btn')}</span>
            <ArrowUpRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* 5. CTA Band */}
      <BookingBanner />
    </div>
  )
}

export default Packages
