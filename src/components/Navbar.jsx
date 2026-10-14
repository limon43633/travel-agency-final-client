import { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { assets, menuLinks } from '../assets/assets'
import LanguageSwitcher from './LanguageSwitcher'

const navKeyMap = {
  '/': 'nav.home',
  '/about-us': 'nav.aboutUs',
  '/services': 'nav.services',
  '/packages': 'nav.packages',
  '/contact-us': 'nav.contactUs',
}

const Navbar = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isHome = location.pathname === '/'

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between gap-3 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-5 font-[Plus_Jakarta_Sans]">

        {/* Logo */}
        <div
          onClick={() => {
            navigate('/')
            closeMenu()
          }}
          className="flex-shrink-0 flex items-center gap-2.5 pl-2 md:pl-4 pr-2 md:pr-4 py-2.5 cursor-pointer"
        >
          <img
            src={assets.logo}
            alt="TripNest"
            className="h-11 w-11 md:h-12 md:w-12"
          />

          <span className={`Mon-font text-xl font-semibold tracking-tight ${isHome ? 'text-white' : 'text-[#15170F]'}`}>
            TripNest
          </span>
        </div>

        {/* Desktop Links - Dynamic Styling Based on Route */}
        <div className={`hidden md:flex items-center gap-1 rounded-full p-2 transition-all duration-300 ${
          isHome
            ? 'bg-white/10 backdrop-blur-md border border-white/20 shadow-lg'
            : 'bg-white shadow-[0_8px_24px_rgba(20,25,15,0.14)]'
        }`}>
          {menuLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => {
                const baseClasses = "whitespace-nowrap rounded-full px-4.5 py-2.5 text-sm tracking-wide transition-colors duration-200";

                if (isHome) {
                  return `${baseClasses} ${
                    isActive
                      ? 'bg-white/20 text-white font-medium'
                      : 'text-white/70 font-normal hover:text-white hover:bg-white/10'
                  }`
                }

                return `${baseClasses} ${
                  isActive
                    ? 'bg-[#A6F24A]/25 text-[#1C3308] font-semibold'
                    : 'text-[#5D5F56] font-normal hover:text-[#15170F] hover:bg-[#F7F8F4]'
                }`
              }}
            >
              {navKeyMap[link.path] ? t(navKeyMap[link.path]) : link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex-shrink-0 flex items-center gap-2 sm:gap-2.5">
          {/* Desktop Language Switcher */}
          <LanguageSwitcher isHome={isHome} />

          <button className="hidden md:inline-block bg-white text-[#9A9C90] hover:text-[#15170F] font-normal text-sm rounded-full px-6 lg:px-7 py-3 shadow-[0_8px_24px_rgba(20,25,15,0.14)] transition-all active:scale-95 cursor-pointer">
            {t('nav.login')}
          </button>

          <button
            onClick={() => navigate('/packages')}
            className="hidden md:block bg-[#A6F24A] hover:bg-[#93DB3D] text-[#1C3308] font-medium text-sm rounded-full px-6 lg:px-7 py-3 shadow-[0_8px_24px_rgba(20,25,15,0.14)] transition-all active:scale-95 cursor-pointer"
          >
            {t('nav.explore')}
          </button>

          {/* Mobile compact language switcher */}
          <div className="md:hidden">
            <LanguageSwitcher isHome={isHome} compact />
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-[0_8px_24px_rgba(20,25,15,0.14)] transition-all duration-300 active:scale-90 cursor-pointer"
          >
            {menuOpen ? (
              <X
                size={20}
                strokeWidth={2}
                className="text-[#15170F] animate-in fade-in zoom-in duration-200"
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={2}
                className="text-[#15170F]"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-[88px] left-4 right-4 z-50 origin-top transition-all duration-300 ease-out ${
            menuOpen
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
              : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none'
          }`}
        >
          <div className="overflow-hidden rounded-[24px] bg-white/95 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(20,25,15,0.16)] p-3">

            {/* Menu Links */}
            <div className="space-y-1">
              {menuLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `group flex items-center justify-between rounded-2xl px-4 py-3.5 text-[14px] font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#A6F24A]/25 text-[#1C3308] font-semibold'
                        : 'text-[#5D5F56] hover:bg-[#F7F8F4] hover:text-[#15170F]'
                    }`
                  }
                >
                  <span>{navKeyMap[link.path] ? t(navKeyMap[link.path]) : link.name}</span>

                  <span className="text-lg opacity-0 translate-x-[-5px] transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </NavLink>
              ))}
            </div>

            {/* Language Selection inside drawer */}
            <div className="my-2.5">
              <LanguageSwitcher mobile />
            </div>

            {/* Divider */}
            <div className="h-px bg-[#EDEEE6] my-2 mx-2" />

            {/* Bottom Actions */}
            <div className="grid grid-cols-2 gap-2 p-1">
              <button className="rounded-full bg-[#F1F2EC] hover:bg-[#E8E9E2] text-[#15170F] text-sm font-medium py-3.5 transition-all duration-200 active:scale-[0.97] cursor-pointer">
                {t('nav.login')}
              </button>

              <button
                onClick={() => {
                  navigate('/packages')
                  closeMenu()
                }}
                className="rounded-full bg-[#A6F24A] hover:bg-[#93DB3D] text-[#1C3308] text-sm font-semibold py-3.5 transition-all duration-200 active:scale-[0.97] shadow-[0_6px_16px_rgba(166,242,74,0.3)] cursor-pointer"
              >
                {t('nav.explore')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      <div
        onClick={closeMenu}
        className={`md:hidden fixed inset-0 z-40 bg-[#15170F]/10 backdrop-blur-[2px] transition-opacity duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />
    </>
  )
}

export default Navbar