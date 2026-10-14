import { Link } from 'react-router-dom'
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero'
import Team from '../components/Team'
import BookingBanner from '../components/BookingBanner'
import { assets } from '../assets/assets'
import { agencyValues, agencyStats } from '../data/agencyData'

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-[#FAFBF7]">
      {/* 1. PageHero */}
      <PageHero
        eyebrow={t('aboutPage.eyebrow')}
        title={t('aboutPage.title')}
        subtitle={t('aboutPage.subtitle')}
        breadcrumbCurrent={t('pages.aboutUs.title')}
        bgImage={assets.travelersExploring}
      />

      {/* 2. Story Section (Two-column with Tourex style signature inline pill images) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Large rounded photo */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-[#F1F2EC] shadow-[0_8px_32px_rgba(20,25,15,0.08)] border border-[#E3E4DA]">
              <img
                src={assets.bandarbanMemories}
                alt="TripNest travelers on a scenic hill trail in Bangladesh"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[11px] font-medium tracking-wide uppercase text-white mb-2">
                  Since 2018
                </span>
                <p className="text-xs sm:text-sm font-light text-white/90">
                  {t('trustStrip.experience.count')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative with Tourex inline pills */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#73766B]">
              {t('aboutPage.story.eyebrow')}
            </span>

            {/* Signature Headline with inline pill photos */}
            <h2 className="text-[#15170F] font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.25] italic mt-4">
              {t('aboutPage.story.headingPart1')}{' '}
              <span className="inline-flex items-center align-middle mx-1 w-14 sm:w-18 h-7 sm:h-8.5 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-[#15170F]/10">
                <img
                  src={assets.coxMemo}
                  alt="Cox's Bazar coastline"
                  className="w-full h-full object-cover"
                />
              </span>{' '}
              <span className="not-italic font-sans font-semibold text-[#1C3308] underline decoration-[#A6F24A] decoration-wavy decoration-2">
                {t('aboutPage.story.headingHighlight')}
              </span>{' '}
              <span className="inline-flex items-center align-middle mx-1 w-14 sm:w-18 h-7 sm:h-8.5 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-[#15170F]/10">
                <img
                  src={assets.sajekMemories}
                  alt="Sajek Valley mist"
                  className="w-full h-full object-cover"
                />
              </span>{' '}
              {t('aboutPage.story.headingPart2')}
            </h2>

            <p className="text-[#5D5F56] text-base md:text-lg leading-relaxed mt-6 max-w-xl font-light">
              {t('aboutPage.story.p1')}
            </p>

            <p className="text-[#73766B] text-sm md:text-base leading-relaxed mt-4 max-w-xl font-light">
              {t('aboutPage.story.p2')}
            </p>

            <div className="mt-8 pt-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-[#A6F24A] hover:bg-[#93DB3D] text-[#1C3308] font-semibold text-sm rounded-full min-h-[48px] px-8 py-3.5 shadow-[0_8px_24px_rgba(166,242,74,0.3)] transition-all active:scale-95"
              >
                <span>{t('aboutPage.story.ctaBtn')}</span>
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Row (Tourex style clean metrics with thin vertical dividers) */}
      <section className="bg-white border-y border-[#E3E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#E3E4DA]">
            {agencyStats.map((stat, i) => (
              <div
                key={i}
                className="px-2 sm:px-4 lg:px-8 first:lg:pl-2 last:lg:pr-2 flex flex-col justify-center"
              >
                <span className="text-[#15170F] font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight font-normal">
                  {stat.value}
                </span>
                <p className="text-[#73766B] text-xs sm:text-sm mt-2 font-normal leading-snug">
                  {t(`aboutPage.stats.${stat.key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mission and Vision (Side-by-side rounded cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Mission Card */}
          <div className="bg-white border border-[#E3E4DA] rounded-3xl p-8 sm:p-10 shadow-[0_2px_8px_-2px_rgba(28,51,8,0.04),0_12px_24px_-4px_rgba(28,51,8,0.05)] hover:shadow-[0_4px_16px_-2px_rgba(28,51,8,0.06),0_20px_32px_-4px_rgba(28,51,8,0.08)] transition-all duration-300">
            <span className="w-12 h-12 rounded-2xl bg-[#A6F24A]/15 border border-[#A6F24A]/30 text-[#1C3308] flex items-center justify-center shadow-xs mb-6">
              <Compass size={22} strokeWidth={2} aria-hidden="true" />
            </span>
            <h3 className="text-[#15170F] font-serif text-2xl sm:text-3xl tracking-tight leading-snug">
              {t('aboutPage.missionVision.missionTitle')}
            </h3>
            <p className="text-[#5D5F56] text-sm sm:text-base leading-relaxed font-light mt-3">
              {t('aboutPage.missionVision.missionDesc')}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-[#E3E4DA] rounded-3xl p-8 sm:p-10 shadow-[0_2px_8px_-2px_rgba(28,51,8,0.04),0_12px_24px_-4px_rgba(28,51,8,0.05)] hover:shadow-[0_4px_16px_-2px_rgba(28,51,8,0.06),0_20px_32px_-4px_rgba(28,51,8,0.08)] transition-all duration-300">
            <span className="w-12 h-12 rounded-2xl bg-[#A6F24A]/15 border border-[#A6F24A]/30 text-[#1C3308] flex items-center justify-center shadow-xs mb-6">
              <Sparkles size={22} strokeWidth={2} aria-hidden="true" />
            </span>
            <h3 className="text-[#15170F] font-serif text-2xl sm:text-3xl tracking-tight leading-snug">
              {t('aboutPage.missionVision.visionTitle')}
            </h3>
            <p className="text-[#5D5F56] text-sm sm:text-base leading-relaxed font-light mt-3">
              {t('aboutPage.missionVision.visionDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Our Values */}
      <section className="bg-white border-t border-[#E3E4DA] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="mb-12 pb-6 border-b border-[#E3E4DA] max-w-3xl">
            <h2 className="text-[#15170F] font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight italic">
              {t('aboutPage.values.heading')}
            </h2>
            <p className="text-[#73766B] text-sm sm:text-base font-light mt-3">
              {t('aboutPage.values.subheading')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {agencyValues.map((val) => {
              const Icon = val.icon
              const title = t(`aboutPage.values.items.${val.id}.title`)
              const desc = t(`aboutPage.values.items.${val.id}.desc`)

              return (
                <div
                  key={val.id}
                  className="bg-[#FAFBF7] border border-[#E3E4DA] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#1C3308]/20 transition-all duration-300 motion-safe:hover:-translate-y-1"
                >
                  <span className="w-12 h-12 rounded-2xl bg-[#A6F24A]/15 border border-[#A6F24A]/30 text-[#1C3308] flex items-center justify-center shadow-xs mb-5">
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <h3 className="text-[#15170F] font-bold text-base sm:text-lg leading-snug">
                    {title}
                  </h3>
                  <p className="text-[#5D5F56] text-xs sm:text-[13px] leading-relaxed font-normal mt-2 break-words">
                    {desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. Team Section (Reused existing polished Team component) */}
      <Team />

      {/* 7. CTA Band (Reused existing BookingBanner) */}
      <BookingBanner />
    </div>
  )
}

export default AboutUs
