import { PhoneCall } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { assets } from '../assets/assets'
import { howWeWorkSteps } from '../data/agencyData'

const HowWeWork = () => {
  const { t } = useTranslation()

  return (
    <section id="how-we-work" className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 scroll-mt-10">
      {/* Target anchor for hero button scroll compatibility */}
      <div id="how-it-works" className="-mt-10 pt-10" />

      {/* Section heading */}
      <div className="mb-12 md:mb-14 pb-6 border-b border-[#E3E4DA]">
        <h2 className="text-[#15170F] font-serif text-4xl md:text-5xl tracking-tight italic">
          {t('howWeWork.heading')}
        </h2>
        <p className="text-[#9A9C90] text-sm md:text-[15px] font-light mt-3 max-w-xl">
          {t('howWeWork.tagline')}
        </p>
      </div>

      {/* Split layout: Image Left (equal height on desktop), 5 Steps Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        {/* Left — Equal-height scenic image on desktop */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col">
          <div className="relative overflow-hidden rounded-3xl min-h-[380px] sm:min-h-[440px] lg:min-h-0 grow w-full bg-[#F1F2EC] shadow-[0_4px_20px_-4px_rgba(20,25,15,0.08)] border border-[#E3E4DA]">
            <img
              src={assets.kaptai}
              alt="Kaptai Lake scenic tour route in Bangladesh"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Soft decorative bottom gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Subtle caption pill at bottom */}
            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[11px] font-medium tracking-wide uppercase text-white mb-2">
                TripNest Experience
              </span>
              <p className="text-xs sm:text-sm font-light text-white/90 leading-relaxed">
                {t('howWeWork.tagline')}
              </p>
            </div>
          </div>
        </div>

        {/* Right — 5 Steps with clean center-to-center timeline + callout card */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between">
          <div className="space-y-0">
            {howWeWorkSteps.map((step, index) => {
              const Icon = step.icon
              const isFirst = index === 0
              const isLast = index === howWeWorkSteps.length - 1

              return (
                <div
                  key={step.stepNumber}
                  className="relative flex items-start gap-4 sm:gap-6 group"
                >
                  {/* Left Column: Badge + Strictly bounded vertical connecting line */}
                  <div className="flex flex-col items-center shrink-0 self-stretch">
                    {/* Badge */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 relative z-10 shadow-[0_2px_6px_rgba(20,25,15,0.04)] ${
                        isFirst
                          ? 'bg-[#A6F24A] border-[#A6F24A] text-[#1C3308]'
                          : 'bg-white border-[#E3E4DA] text-[#15170F] group-hover:border-[#A6F24A] group-hover:text-[#1C3308]'
                      }`}
                    >
                      <Icon size={19} strokeWidth={2} aria-hidden="true" />
                    </div>

                    {/* Connector line: strictly between center/bottom of this badge and next badge */}
                    {!isLast && (
                      <div
                        className="w-[2px] grow bg-[#E3E4DA] my-1"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Right Column: Step Content */}
                  <div className={`min-w-0 flex-1 ${!isLast ? 'pb-7 sm:pb-8' : 'pb-2'}`}>
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-[#15170F] font-serif text-lg sm:text-xl tracking-tight leading-snug">
                        {t(`howWeWork.steps.${step.key}.title`)}
                      </h3>
                      <span className="text-xs font-mono text-[#9A9C90] shrink-0 font-medium">
                        0{step.stepNumber}
                      </span>
                    </div>
                    <p className="text-[#73766B] text-xs sm:text-[13px] leading-relaxed font-light mt-1.5 max-w-xl">
                      {t(`howWeWork.steps.${step.key}.desc`)}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Upgraded Premium Callout Card */}
          <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-white border border-[#E3E4DA] shadow-[0_2px_12px_rgba(20,25,15,0.04)] flex items-start gap-4 sm:gap-5">
            <span className="w-11 h-11 rounded-2xl bg-[#A6F24A]/15 border border-[#A6F24A]/30 text-[#1C3308] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <PhoneCall size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm sm:text-[15px] font-bold text-[#15170F] leading-snug">
                {t('howWeWork.callNoticeTitle')}
              </h4>
              <p className="text-xs sm:text-[13px] text-[#5D5F56] mt-1 leading-relaxed font-normal">
                {t('howWeWork.callNotice')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
