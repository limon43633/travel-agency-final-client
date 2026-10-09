import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { assets } from '../assets/assets'

const fallbackReasons = [
  {
    title: 'Verified by our own team',
    description:
      'Every route, host, and stay is travelled and checked by us before it goes live — not sourced from a directory.',
  },
  {
    title: 'Transparent pricing, always',
    description:
      'The price you see on a card is the price you pay. No hidden service fees added at checkout.',
  },
  {
    title: 'Real support, not a chatbot',
    description:
      'A human on our team is reachable before, during, and after your trip — for last-minute changes or just advice.',
  },
  {
    title: 'Flexible, fair cancellations',
    description:
      'Plans change. Most packages allow free rescheduling up to 72 hours before departure.',
  },
]

const travelers = [
  {
    name: 'Richard Nelson',
    handle: '@richard',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
  },
  {
    name: 'Avery Johnson',
    handle: '@averywrites',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
  },
  {
    name: 'Jordan Lee',
    handle: '@jordantalks',
    image: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png',
  },
  {
    name: 'Noah Patel',
    handle: '@noahpatel',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
  },
  {
    name: 'Oliver Brooks',
    handle: '@oliverbrooks',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
]

const VerifiedBadge = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
      fill="#2196F3"
    />
  </svg>
)

const WhyChooseUs = () => {
  const { t } = useTranslation()
  const rawReasons = t('whyChooseUs.reasons', { returnObjects: true })
  const reasons = Array.isArray(rawReasons) ? rawReasons : fallbackReasons

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-25">
      {/* Section heading */}
      <div className="mb-8 pb-4 border-b border-[#E3E4DA]">
        <h2 className="text-[#15170F] font-serif text-4xl md:text-5xl tracking-tight italic">
          {t('whyChooseUs.heading')}
        </h2>
        <p className="text-[#9A9C90] text-sm md:text-[15px] font-light mt-3">
          {t('whyChooseUs.tagline')}
        </p>
      </div>

      {/* Left content / Right image split — equal height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        {/* Left — reasons */}
        <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col">
          <p className="text-[#9A9C90] text-[15px] leading-relaxed font-light max-w-lg mb-6">
            {t('whyChooseUs.intro')}
          </p>

          <div className="border-t border-[#E3E4DA]">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-5 py-5 border-b border-[#E3E4DA]"
              >
                <span className="w-7 h-7 rounded-full bg-[#A6F24A] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-[#1C3308]" strokeWidth={2.5} />
                </span>

                <div>
                  <h3 className="text-[#15170F] font-serif text-xl tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-[#9A9C90] text-sm leading-relaxed font-light mt-1.5 max-w-md">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof — avatar stack + hierarchy */}
          <div className="flex items-center gap-5 mt-auto pt-6">
            <div className="flex -space-x-3 shrink-0">
              {travelers.map((traveler, index) => (
                <div key={index} className="group relative">
                  <div className="absolute pointer-events-none opacity-0 group-hover:opacity-100 -top-16 left-1/2 -translate-x-1/2 transition-all duration-300 bg-white border border-[#E3E4DA] shadow-[0_8px_24px_rgba(20,25,15,0.1)] pl-4 pr-5 py-2 rounded-xl text-nowrap z-10">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <p className="text-[13px] font-medium text-[#15170F]">
                          {traveler.name}
                        </p>
                        <VerifiedBadge />
                      </div>
                      <span className="text-[11px] text-[#9A9C90]">{traveler.handle}</span>
                    </div>
                    <div className="w-3 h-3 border-r border-b border-[#E3E4DA] bg-white rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-[7px]" />
                  </div>
                  <img
                    src={traveler.image}
                    alt={traveler.name}
                    className="w-11 h-11 rounded-full border-2 border-white object-cover group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="h-9 w-px bg-[#E3E4DA] shrink-0" />

            <div>
              <p className="text-[#15170F] font-serif text-2xl tracking-tight">
                {t('whyChooseUs.socialProof.count')}
              </p>
              <p className="text-[#9A9C90] text-xs tracking-wide uppercase mt-0.5">
                {t('whyChooseUs.socialProof.label')}
              </p>
            </div>
          </div>
        </div>

        {/* Right — image, stretched to match left height */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl h-full bg-[#F1F2EC] shadow-[0_1px_3px_rgba(20,25,15,0.06)]">
            <img
              src={assets.tourGuide}
              alt="TripNest guide with travelers on a trip in Bangladesh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs