import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { testimonials as defaultTestimonials } from '../assets/assets'

const rows = [
  { start: 0, end: 3, direction: 'scroll-left' },
  { start: 3, end: 6, direction: 'scroll-right' },
]

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white border border-[#E3E4DA] hover:border-[#15170F]/20 rounded-2xl p-6 shrink-0 w-full sm:w-[340px] transition-colors duration-300">
    <div className="flex gap-1 mb-4">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Star
            key={i}
            size={15}
            className="fill-[#FFC53D] text-[#FFC53D]"
            strokeWidth={0}
          />
        ))}
    </div>

    <p className="text-[#15170F] font-serif text-[17px] leading-relaxed tracking-tight">
      {testimonial.text}
    </p>

    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[#EDEEE6]">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full object-cover shrink-0"
      />
      <div>
        <p className="text-[#15170F] text-sm font-medium">{testimonial.name}</p>
        <p className="text-[#9A9C90] text-xs">{testimonial.role}</p>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  const { t } = useTranslation()
  const rawList = t('testimonials.items', { returnObjects: true })

  const testimonials = defaultTestimonials.map((orig, index) => {
    if (Array.isArray(rawList) && rawList[index]) {
      return {
        ...orig,
        text: rawList[index].text || orig.text,
        name: rawList[index].name || orig.name,
        role: rawList[index].role || orig.role,
      }
    }
    return orig
  })

  return (
    <section className="py-16 md:py-20">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @media (min-width: 640px) {
          .marquee-track {
            width: max-content;
            will-change: transform;
            backface-visibility: hidden;
          }
          .scroll-left {
            animation: marquee-left 36s linear infinite;
          }
          .scroll-right {
            animation: marquee-right 36s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section heading */}
        <div className="pb-6 mb-10 border-b border-[#E3E4DA]">
          <h2 className="text-[#15170F] font-serif text-4xl md:text-5xl tracking-tight italic">
            {t('testimonials.heading')}
          </h2>
          <p className="text-[#9A9C90] text-sm md:text-[15px] font-light mt-3 max-w-md">
            {t('testimonials.subheading')}
          </p>
        </div>

        {/* Mobile: static stacked grid, no animation */}
        <div className="grid grid-cols-1 sm:hidden gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Tablet/Desktop: marquee rows */}
        <div className="hidden sm:block space-y-5">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              {/* Edge fade */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <div className={`marquee-track flex gap-5 ${row.direction}`}>
                {[
                  ...testimonials.slice(row.start, row.end),
                  ...testimonials.slice(row.start, row.end),
                ].map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials