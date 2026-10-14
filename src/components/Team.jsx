import { useState } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { teamMembers } from '../data/agencyData'

const TeamCard = ({ member }) => {
  const { t } = useTranslation()
  const [imgError, setImgError] = useState(false)

  const cleanPhone = member.phone ? member.phone.replace(/[^0-9]/g, '') : ''
  const roleTitle = t(`team.roles.${member.roleKey}`)
  const badgeText = t(`team.roleBadges.${member.roleKey}`)
  const exp = t(`team.members.${member.id}.experience`)

  const hasPhoto = Boolean(member.image) && !imgError

  return (
    <div className="group flex flex-col justify-between bg-white border border-[#E3E4DA] rounded-3xl overflow-hidden shadow-[0_2px_8px_-2px_rgba(20,25,15,0.04),0_12px_24px_-4px_rgba(20,25,15,0.05)] hover:shadow-[0_4px_16px_-2px_rgba(20,25,15,0.06),0_20px_32px_-4px_rgba(20,25,15,0.09)] transition-all duration-300 motion-safe:hover:-translate-y-1">
      {/* Top Banner Band */}
      <div className="h-20 sm:h-22 bg-gradient-to-b from-[#A6F24A]/25 via-[#A6F24A]/10 to-transparent relative" />

      {/* Card Body */}
      <div className="px-6 pt-0 pb-6 flex flex-col items-center text-center flex-1">
        {/* Prominent Circular Avatar overlapping banner */}
        <div className="-mt-12 sm:-mt-14 mb-3">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full ring-4 ring-white shadow-md overflow-hidden bg-[#F1F2EC] flex items-center justify-center">
            {hasPhoto ? (
              <img
                src={member.image}
                alt={member.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold text-[#1C3308] bg-[#A6F24A]/25">
                {member.initials}
              </div>
            )}
          </div>
        </div>

        {/* Member Name */}
        <h3 className="text-base sm:text-lg font-bold text-[#15170F] tracking-tight leading-snug">
          {member.name}
        </h3>

        {/* Role Subtitle */}
        <p className="text-xs sm:text-[13px] text-[#73766B] mt-0.5 font-normal">
          {roleTitle}
        </p>

        {/* Pill Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A6F24A]/15 border border-[#A6F24A]/30 text-[#1C3308] text-[11px] font-semibold tracking-wide uppercase mt-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1C3308]" />
          {badgeText}
        </span>

        {/* Experience Line */}
        <p className="text-xs sm:text-[13px] text-[#5D5F56] leading-relaxed font-light mt-3 max-w-xs break-words">
          {exp}
        </p>
      </div>

      {/* Split Action Bar at the very bottom */}
      <div className="border-t border-[#EDEEE6] grid grid-cols-2 divide-x divide-[#EDEEE6] bg-[#FAFAF8] mt-auto">
        <a
          href={`tel:${member.phone}`}
          aria-label={`${t('team.actions.call')} ${member.name}`}
          className="flex items-center justify-center gap-2 min-h-[48px] py-3 px-3 text-xs sm:text-sm font-medium text-[#15170F] hover:bg-[#F1F2EC] hover:text-[#1C3308] transition-colors"
        >
          <Phone size={14} className="text-[#5D5F56]" aria-hidden="true" />
          <span>{t('team.actions.call')}</span>
        </a>

        <a
          href={`https://wa.me/${cleanPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t('team.actions.whatsapp')} ${member.name}`}
          className="flex items-center justify-center gap-2 min-h-[48px] py-3 px-3 text-xs sm:text-sm font-semibold text-[#1C3308] hover:bg-[#A6F24A]/25 transition-colors"
        >
          <MessageCircle size={15} className="text-[#1C3308]" aria-hidden="true" />
          <span>{t('team.actions.whatsapp')}</span>
        </a>
      </div>
    </div>
  )
}

const Team = () => {
  const { t } = useTranslation()

  return (
    <section id="team" className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      {/* Section heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14 pb-6 border-b border-[#E3E4DA]">
        <div>
          <h2 className="text-[#15170F] font-serif text-4xl md:text-5xl tracking-tight italic">
            {t('team.heading')}
          </h2>
        </div>
        <p className="text-[#9A9C90] text-sm md:text-[15px] max-w-sm font-light leading-relaxed">
          {t('team.subheading')}
        </p>
      </div>

      {/* 4 Team Cards Grid matching PrebuiltUI reference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}

export default Team
