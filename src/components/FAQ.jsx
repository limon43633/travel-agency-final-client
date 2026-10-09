import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { assets } from '../assets/assets'

const fallbackFaqs = [
  {
    question: 'Do you only arrange trips inside Bangladesh?',
    answer:
      'Yes — TripNest is fully focused on domestic travel. We don\'t book international trips or flights, so every package you see is somewhere within Bangladesh.',
  },
  {
    question: 'How do we get to the destination — is transport included?',
    answer:
      'Most packages include return transport from a set pickup point (usually Dhaka) by bus, CNG, or boat depending on the destination. This is mentioned clearly on each package page before you book.',
  },
  {
    question: 'What\'s included in the package price?',
    answer:
      'Transport, accommodation, and the listed activities are included. Meals are included where mentioned — some packages leave meals flexible so you can choose local spots yourself.',
  },
  {
    question: 'Is it safe to travel to hill or forest areas like Bandarban or Sundarbans?',
    answer:
      'Yes — these routes are travelled regularly with local guides who know the area well. We share safety guidelines and required permits (where applicable) before departure.',
  },
  {
    question: 'Can I book for a family or a large group?',
    answer:
      'Absolutely. Just select your group size while booking — for groups larger than 10, message us directly and we\'ll arrange suitable transport and rooming.',
  },
  {
    question: 'Do I need to pay the full amount upfront?',
    answer:
      'No — most packages can be confirmed with a partial advance payment. The remaining balance is settled before or during the trip, as shown at checkout.',
  },
  {
    question: 'What happens if the weather turns bad during the trip?',
    answer:
      'For weather-sensitive routes (hill tracks, river trips), we monitor forecasts closely and will reschedule or adjust the itinerary for your safety — you won\'t lose your booking over it.',
  },
]

const FAQ = () => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(0)

  const rawFaqs = t('faq.items', { returnObjects: true })
  const faqs = Array.isArray(rawFaqs) ? rawFaqs : fallbackFaqs

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-16">
      {/* Section heading */}
      <div className="mb-8 pb-5 border-b border-[#E3E4DA]">
        <h2 className="text-[#15170F] font-serif text-4xl md:text-5xl tracking-tight italic">
          {t('faq.heading')}
        </h2>
        <p className="text-[#9A9C90] text-sm md:text-[18px] font-light mt-3">
          {t('faq.tagline')}
        </p>
      </div>

      {/* Left image / Right accordion split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        {/* Left — image */}
        <div className="lg:col-span-5 order-1">
          <div className="relative overflow-hidden rounded-2xl h-[360px] md:h-[620px] bg-[#F1F2EC] shadow-[0_1px_3px_rgba(20,25,15,0.06)]">
            <img
              src={assets.travelPlan}
              alt="Travelers planning a trip in Bangladesh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right — accordion */}
        <div className="lg:col-span-7 order-2 flex flex-col justify-center">
          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={index}
                  className="border-b border-[#E3E4DA] py-5"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-6 text-left cursor-pointer"
                  >
                    <h3 className="text-[#15170F] font-serif text-xl tracking-tight">
                      {faq.question}
                    </h3>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-300 ${
                        isOpen
                          ? 'bg-[#A6F24A] border-[#A6F24A]'
                          : 'border-[#E3E4DA]'
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ease-out ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        <path
                          d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                          stroke={isOpen ? '#1C3308' : '#15170F'}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Smooth grid-rows accordion */}
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[#9A9C90] text-sm leading-relaxed font-light max-w-md pt-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ