import { CheckCircle2, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero'
import HowWeWork from '../components/HowWeWork'
import FAQ from '../components/FAQ'
import BookingBanner from '../components/BookingBanner'
import { assets } from '../assets/assets'
import { servicesList, includedFeatures, signatureFeatures } from '../data/agencyData'

const Services = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-[#FAFBF7]">
      {/* 1. PageHero */}
      <PageHero
        eyebrow={t('servicesPage.eyebrow')}
        title={t('servicesPage.title')}
        subtitle={t('servicesPage.subtitle')}
        breadcrumbCurrent={t('pages.services.title')}
        bgImage={assets.kaptai}
      />

      {/* 2. "What we offer" Grid (6 Service Cards with Theme Green Badges) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28">
        <div className="mb-12 md:mb-14 pb-6 border-b border-[#E3E4DA] max-w-3xl">
          <h2 className="text-[#15170F] font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight italic">
            {t('servicesPage.offerHeading')}
          </h2>
          <p className="text-[#73766B] text-sm sm:text-base font-light mt-3">
            {t('servicesPage.offerSubheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service) => {
            const Icon = service.icon
            const title = t(`servicesPage.services.${service.id}.title`)
            const desc = t(`servicesPage.services.${service.id}.desc`)

            return (
              <div
                key={service.id}
                className="bg-white border border-[#E3E4DA] rounded-3xl p-7 sm:p-8 shadow-[0_2px_8px_-2px_rgba(28,51,8,0.04),0_12px_24px_-4px_rgba(28,51,8,0.05)] hover:shadow-[0_4px_16px_-2px_rgba(28,51,8,0.06),0_20px_32px_-4px_rgba(28,51,8,0.08)] transition-all duration-300 motion-safe:hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <span className="w-12 h-12 rounded-2xl bg-[#A6F24A]/15 border border-[#A6F24A]/30 text-[#1C3308] flex items-center justify-center shadow-xs mb-6">
                    <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <h3 className="text-[#15170F] font-serif text-xl sm:text-2xl tracking-tight leading-snug">
                    {title}
                  </h3>
                  <p className="text-[#5D5F56] text-xs sm:text-[13px] leading-relaxed font-light mt-2.5">
                    {desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. "What is included on every trip" (One large rounded card with two-column check list) */}
      <section className="bg-white border-y border-[#E3E4DA] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="bg-[#FAFBF7] border border-[#E3E4DA] rounded-3xl p-8 sm:p-12 md:p-14 shadow-sm">
            <div className="max-w-2xl mb-10 pb-6 border-b border-[#E3E4DA]">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#73766B] mb-2">
                <ShieldCheck size={16} className="text-[#1C3308]" aria-hidden="true" />
                <span>Standard Trip Inclusions</span>
              </div>
              <h2 className="text-[#15170F] font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight italic">
                {t('servicesPage.includedHeading')}
              </h2>
              <p className="text-[#73766B] text-xs sm:text-sm font-light mt-2">
                {t('servicesPage.includedSubheading')}
              </p>
            </div>

            {/* Two-column checked inclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {includedFeatures.map((key) => {
                const title = t(`servicesPage.inclusions.${key}.title`)
                const desc = t(`servicesPage.inclusions.${key}.desc`)

                return (
                  <div key={key} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-[#A6F24A]/20 border border-[#A6F24A]/35 text-[#1C3308] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={18} strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[#15170F] font-bold text-sm sm:text-base leading-snug">
                        {title}
                      </h3>
                      <p className="text-[#5D5F56] text-xs sm:text-[13px] leading-relaxed font-light mt-1">
                        {desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Signature Features (The TripNest Difference / USP) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28">
        <div className="mb-12 md:mb-14 pb-6 border-b border-[#E3E4DA] max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#73766B]">
            {t('servicesPage.signatureHeading')}
          </span>
          <h2 className="text-[#15170F] font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight italic mt-2">
            Built for peace of mind
          </h2>
          <p className="text-[#73766B] text-sm sm:text-base font-light mt-3">
            {t('servicesPage.signatureSubheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {signatureFeatures.map((feat) => {
            const Icon = feat.icon
            const title = t(`servicesPage.signature.${feat.id}.title`)
            const desc = t(`servicesPage.signature.${feat.id}.desc`)

            return (
              <div
                key={feat.id}
                className="bg-white border border-[#E3E4DA] rounded-3xl p-7 sm:p-9 shadow-[0_2px_8px_-2px_rgba(28,51,8,0.04),0_12px_24px_-4px_rgba(28,51,8,0.05)] hover:shadow-[0_4px_16px_-2px_rgba(28,51,8,0.06),0_20px_32px_-4px_rgba(28,51,8,0.08)] transition-all duration-300"
              >
                <span className="w-12 h-12 rounded-2xl bg-[#A6F24A]/15 border border-[#A6F24A]/30 text-[#1C3308] flex items-center justify-center shadow-xs mb-6">
                  <Icon size={22} strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="text-[#15170F] font-serif text-xl sm:text-2xl tracking-tight leading-snug">
                  {title}
                </h3>
                <p className="text-[#5D5F56] text-xs sm:text-[13px] leading-relaxed font-light mt-3">
                  {desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 5. How We Work Steps (Reused existing HowWeWork component) */}
      <HowWeWork />

      {/* 6. FAQ (Reused existing FAQ component) */}
      <FAQ />

      {/* 7. CTA Band (Reused existing BookingBanner) */}
      <BookingBanner />
    </div>
  )
}

export default Services
