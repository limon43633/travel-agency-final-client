import { useTranslation } from 'react-i18next'
import { assets } from '../assets/assets'

const fallbackStats = [
  { value: '8+', label: 'Years guiding travelers across Bangladesh' },
  { value: '12,400+', label: 'Travelers who\'ve booked through us' },
  { value: '60+', label: 'Handpicked destinations, all locally vetted' },
  { value: '4.9/5', label: 'Average rating from verified reviews' },
]

const AboutTripNest = () => {
  const { t } = useTranslation()
  const rawStats = t('aboutTripNest.stats', { returnObjects: true })
  const stats = Array.isArray(rawStats) ? rawStats : fallbackStats

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
      {/* Section heading */}
      <div className="mb-16 pb-8 border-b border-[#E3E4DA]">
        <h2 className="text-[#15170F] font-serif text-4xl md:text-5xl mt-4 tracking-tight italic max-w-2xl">
          {t('aboutTripNest.heading')}
        </h2>
      </div>

      {/* Main content: image + narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Image */}
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#F1F2EC] shadow-[0_1px_3px_rgba(20,25,15,0.06)]">
            <img
              src={assets.travelersExploring}
              alt="TripNest travelers exploring Bangladesh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Narrative + stats */}
        <div className="lg:col-span-7">
          <p className="text-gray-800 font-serif text-2xl md:text-[28px] leading-[1.4] tracking-tight">
            {t('aboutTripNest.lead')}
          </p>

          <p className="text-[#9A9C90] text-[15px] leading-relaxed mt-6 max-w-xl font-light">
            {t('aboutTripNest.description')}
          </p>

          {/* Stats — typography only, no icons/badges */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-14 pt-10 border-t border-[#E3E4DA]">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="flex items-baseline gap-2">
                  <span className="text-[#15170F] font-serif text-3xl md:text-4xl tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-[#B7B9AC]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-[#9A9C90] text-xs tracking-wide uppercase mt-2 leading-relaxed max-w-[220px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTripNest