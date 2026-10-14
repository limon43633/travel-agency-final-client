import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { assets } from '../assets/assets'

const PageHero = ({
  eyebrow,
  title,
  subtitle,
  breadcrumbCurrent,
  bgImage = assets.topBannerBg,
}) => {
  const { t, i18n } = useTranslation()

  // Update document.title on title or language change
  useEffect(() => {
    if (title) {
      document.title = `${title} | TripNest`
    } else {
      document.title = 'TripNest'
    }
  }, [title, i18n.language])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-4 pb-8 md:pb-12">
      <div className="relative overflow-hidden rounded-[28px] md:rounded-3xl bg-[#15170F] text-white px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 shadow-[0_12px_40px_rgba(20,25,15,0.12)] border border-[#E3E4DA]/20">
        {/* Background photo */}
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-45 mix-blend-luminosity scale-105"
        />

        {/* Ambient Dark Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle accent glow */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#A6F24A]/15 blur-3xl"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60 mb-5">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 hover:text-[#A6F24A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6F24A] rounded"
            >
              <Home size={13} aria-hidden="true" />
              <span>{t('pageHero.home')}</span>
            </Link>
            <ChevronRight size={12} className="text-white/40 shrink-0" aria-hidden="true" />
            <span className="text-white/90 font-medium truncate" aria-current="page">
              {breadcrumbCurrent || title}
            </span>
          </nav>

          {/* Eyebrow badge */}
          {eyebrow && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase text-[#A6F24A] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A6F24A]" aria-hidden="true" />
              {eyebrow}
            </div>
          )}

          {/* H1 Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12] italic text-white">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-white/80 text-sm sm:text-base md:text-lg font-light mt-4 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PageHero
