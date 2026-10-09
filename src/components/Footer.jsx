import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { assets } from '../assets/assets'

const Footer = () => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')

  return (
    <footer className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28">

      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-14 pb-12 md:pb-16 border-b border-[#D9DACF]">

        {/* Logo + Description */}
        <div className="md:max-w-sm">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src={assets.logo}
              alt="TripNest"
              className="h-11 w-11"
            />

            <span className="text-[#15170F] font-serif text-2xl tracking-tight italic">
              TripNest
            </span>
          </div>

          <p className="text-[#73766B] text-[15px] leading-7 font-light mt-6 max-w-sm">
            {t('footer.brandDesc')}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-8">

            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-[#D9DACF] flex items-center justify-center text-[#73766B] hover:bg-[#15170F] hover:text-white hover:border-[#15170F] transition-all duration-300"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-[#D9DACF] flex items-center justify-center text-[#73766B] hover:bg-[#15170F] hover:text-white hover:border-[#15170F] transition-all duration-300"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-[#D9DACF] flex items-center justify-center text-[#73766B] hover:bg-[#15170F] hover:text-white hover:border-[#15170F] transition-all duration-300"
            >
              <MessageCircle size={16} strokeWidth={1.75} />
            </a>

          </div>
        </div>


        {/* Links + Newsletter */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 md:gap-24">

          {/* Explore */}
          <div className="min-w-[110px]">

            <h3 className="text-[#15170F] font-serif text-lg font-medium tracking-tight mb-6">
              {t('footer.exploreTitle')}
            </h3>

            <ul className="text-sm space-y-3.5 font-light">

              <li>
                <Link
                  to="/"
                  className="text-[#73766B] hover:text-[#15170F] transition-colors duration-200"
                >
                  {t('nav.home')}
                </Link>
              </li>

              <li>
                <Link
                  to="/about-us"
                  className="text-[#73766B] hover:text-[#15170F] transition-colors duration-200"
                >
                  {t('nav.aboutUs')}
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-[#73766B] hover:text-[#15170F] transition-colors duration-200"
                >
                  {t('nav.services')}
                </Link>
              </li>

              <li>
                <Link
                  to="/packages"
                  className="text-[#73766B] hover:text-[#15170F] transition-colors duration-200"
                >
                  {t('nav.packages')}
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className="text-[#73766B] hover:text-[#15170F] transition-colors duration-200"
                >
                  {t('nav.contactUs')}
                </Link>
              </li>

            </ul>
          </div>


          {/* Support */}
          <div className="min-w-[130px]">

            <h3 className="text-[#15170F] font-serif text-lg font-medium tracking-tight mb-6">
              {t('footer.supportTitle')}
            </h3>

            <ul className="text-sm space-y-3.5 font-light">

              <li>
                <Link
                  to="/faq"
                  className="text-[#73766B] hover:text-[#15170F] transition-colors duration-200"
                >
                  {t('footer.faqs')}
                </Link>
              </li>

              <li>
                <Link
                  to="/cancellation-policy"
                  className="text-[#73766B] hover:text-[#15170F] transition-colors duration-200"
                >
                  {t('footer.cancellationPolicy')}
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="text-[#73766B] hover:text-[#15170F] transition-colors duration-200"
                >
                  {t('footer.privacyPolicy')}
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-[#73766B] hover:text-[#15170F] transition-colors duration-200"
                >
                  {t('footer.termsOfService')}
                </Link>
              </li>

            </ul>
          </div>


          {/* Newsletter */}
          <div className="w-full sm:w-[320px] md:w-[350px]">

            <h3 className="text-[#15170F] font-serif text-lg font-medium tracking-tight mb-3">
              {t('footer.newsletterTitle')}
            </h3>

            <p className="text-[#73766B] text-sm font-light leading-6 mb-5 max-w-sm">
              {t('footer.newsletterDesc')}
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 w-full"
            >

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 min-w-0 h-12 px-5 rounded-full border border-[#D9DACF] bg-white text-sm text-[#15170F] placeholder-[#A7A99D] outline-none focus:border-[#15170F] transition-colors duration-200"
              />

              <button
                type="submit"
                aria-label={t('footer.subscribeAria')}
                className="w-12 h-12 rounded-full bg-[#A6F24A] hover:bg-[#95DB3F] flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <ArrowUpRight
                  size={18}
                  className="text-[#1C3308]"
                  strokeWidth={2}
                />
              </button>

            </form>

          </div>

        </div>
      </div>


      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-7 text-xs text-[#8B8D82]">

        <p>
          {t('footer.copyright')}
        </p>

        <p className="text-center sm:text-right">
          {t('footer.tagline')}
        </p>

      </div>

    </footer>
  )
}

export default Footer
