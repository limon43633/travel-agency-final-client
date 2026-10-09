import { MessageCircle, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const WHATSAPP_NUMBER = '8801700000000'
const PHONE_NUMBER = '+8801700000000'

const BookingBanner = () => {
  const { t } = useTranslation()

  const whatsappMessage = encodeURIComponent(
    t('bookingBanner.whatsappMessage')
  )

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
      <div className="relative overflow-hidden rounded-[28px] bg-[#15170F] px-8 py-14 md:px-16 md:py-16 text-center">
        {/* Subtle background accent */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#A6F24A]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#A6F24A]/10 blur-3xl" />

        <div className="relative">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">
            {t('bookingBanner.badge')}
          </span>

          <h2 className="text-white font-serif text-3xl md:text-5xl tracking-tight italic mt-4">
            {t('bookingBanner.heading')}
          </h2>

          <p className="text-white/60 text-sm md:text-[15px] font-light mt-4 max-w-md mx-auto leading-relaxed">
            {t('bookingBanner.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#A6F24A] hover:bg-[#93DB3D] text-[#1C3308] font-medium text-sm rounded-full px-7 py-3.5 shadow-[0_8px_24px_rgba(166,242,74,0.25)] transition-all active:scale-95"
            >
              <MessageCircle size={17} strokeWidth={2} />
              {t('bookingBanner.whatsappBtn')}
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-white/25 hover:border-white/50 text-white font-normal text-sm rounded-full px-7 py-3.5 transition-all active:scale-95"
            >
              <Phone size={16} strokeWidth={1.75} />
              {t('bookingBanner.callBtn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingBanner