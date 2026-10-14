import { useTranslation } from 'react-i18next'
import { trustCredentials } from '../data/agencyData'

const TrustStrip = () => {
  const { t } = useTranslation()

  const items = [
    {
      icon: trustCredentials.phoneConfirmation.icon,
      title: t('trustStrip.realCalls.title'),
      desc: t('trustStrip.realCalls.desc'),
    },
    {
      icon: trustCredentials.registration.icon,
      title: t('trustStrip.registered.title'),
      desc: t('trustStrip.registered.license'),
    },
    {
      icon: trustCredentials.office.icon,
      title: t('trustStrip.office.title'),
      desc: t('trustStrip.office.address'),
    },
    {
      icon: trustCredentials.experience.icon,
      title: t('trustStrip.experience.title'),
      desc: t('trustStrip.experience.count'),
    },
  ]

  return (
    <section id="trust-strip" className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12">
      <div className="bg-white border border-[#E3E4DA] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-[0_2px_8px_-2px_rgba(28,51,8,0.04),0_12px_24px_-4px_rgba(28,51,8,0.05)] hover:shadow-[0_4px_16px_-2px_rgba(28,51,8,0.06),0_20px_32px_-4px_rgba(28,51,8,0.08)] transition-all duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x divide-[#E3E4DA]">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex items-start gap-4 sm:gap-4.5 px-1 sm:px-3 lg:px-6 first:lg:pl-2 last:lg:pr-2 group"
              >
                <span className="w-12 h-12 rounded-2xl bg-[#A6F24A]/15 border border-[#A6F24A]/30 flex items-center justify-center shrink-0 text-[#1C3308] shadow-[0_1px_2px_rgba(28,51,8,0.04)] group-hover:bg-[#A6F24A]/25 transition-colors duration-300">
                  <Icon size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm md:text-[15px] font-semibold text-[#15170F] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-[13px] text-[#5D5F56] mt-1 leading-relaxed font-normal break-words">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip
