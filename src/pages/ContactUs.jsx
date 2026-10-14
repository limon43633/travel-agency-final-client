import { useState } from 'react'
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  PhoneCall,
  Send,
  CheckCircle,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import PageHero from '../components/PageHero'
import FAQ from '../components/FAQ'
import { assets, upcomingTours } from '../assets/assets'
import { contactDetails } from '../data/agencyData'

// Bangladeshi phone regex: 01 followed by 3-9 and 8 more digits (total 11 digits)
const BD_PHONE_REGEX = /^01[3-9]\d{8}$/

const tourKeyMap = {
  1: 'sajek',
  2: 'coxs',
  3: 'bandarban',
  4: 'sundarban',
}

const ContactUs = () => {
  const { t } = useTranslation()

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    tourInterest: '',
    message: '',
  })

  // Touched state to trigger validation messages only after interaction
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Validation logic
  const errors = {}
  if (touched.fullName || isSubmitting) {
    if (!formData.fullName.trim()) {
      errors.fullName = t('contactPage.form.errors.nameRequired')
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = t('contactPage.form.errors.nameMin')
    }
  }

  if (touched.phone || isSubmitting) {
    const cleanPhone = formData.phone.trim().replace(/[- ]/g, '')
    if (!cleanPhone) {
      errors.phone = t('contactPage.form.errors.phoneRequired')
    } else if (!BD_PHONE_REGEX.test(cleanPhone)) {
      errors.phone = t('contactPage.form.errors.phoneInvalid')
    }
  }

  if (touched.message || isSubmitting) {
    if (!formData.message.trim()) {
      errors.message = t('contactPage.form.errors.messageRequired')
    } else if (formData.message.trim().length < 10) {
      errors.message = t('contactPage.form.errors.messageMin')
    }
  }

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Mark all fields as touched
    setTouched({
      fullName: true,
      phone: true,
      message: true,
    })

    const cleanPhone = formData.phone.trim().replace(/[- ]/g, '')
    const hasErrors =
      !formData.fullName.trim() ||
      formData.fullName.trim().length < 2 ||
      !cleanPhone ||
      !BD_PHONE_REGEX.test(cleanPhone) ||
      !formData.message.trim() ||
      formData.message.trim().length < 10

    if (hasErrors) {
      return
    }

    setIsSubmitting(true)

    // Simulate instant client-side receipt with toast (no mock backend)
    setTimeout(() => {
      toast.success(t('contactPage.form.toastSuccess'), {
        icon: <CheckCircle className="text-[#1C3308]" size={18} />,
      })
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        tourInterest: '',
        message: '',
      })
      setTouched({})
      setIsSubmitting(false)
    }, 400)
  }

  return (
    <div className="bg-[#FAFBF7]">
      {/* 1. PageHero */}
      <PageHero
        eyebrow={t('contactPage.eyebrow')}
        title={t('contactPage.title')}
        subtitle={t('contactPage.subtitle')}
        breadcrumbCurrent={t('pages.contactUs.title')}
        bgImage={assets.topBannerBg}
      />

      {/* 2. Main Two-Column Layout (Info Cards Left, Form Right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#73766B]">
                {t('contactPage.eyebrow')}
              </span>
              <h2 className="text-[#15170F] font-serif text-3xl sm:text-4xl tracking-tight italic mt-2">
                Direct Channels
              </h2>
              <p className="text-[#73766B] text-xs sm:text-sm font-light mt-2 max-w-sm">
                Connect with our tour curators and traveler coordinators directly.
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white border border-[#E3E4DA] rounded-3xl p-5 sm:p-6 shadow-[0_2px_8px_-2px_rgba(28,51,8,0.04)] flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-2xl bg-[#A6F24A]/15 border border-[#A6F24A]/30 text-[#1C3308] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Phone size={19} strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#15170F]">
                    {t('contactPage.infoCards.phoneTitle')}
                  </h3>
                  <p className="text-xs text-[#73766B] mt-0.5 font-light">
                    {t('contactPage.infoCards.phoneDesc')}
                  </p>
                  <p className="text-sm font-mono font-semibold text-[#15170F] mt-2">
                    {contactDetails.phone.label}
                  </p>
                </div>
              </div>
              <a
                href={contactDetails.phone.href}
                className="shrink-0 text-xs font-semibold rounded-full bg-[#F1F2EC] hover:bg-[#E8E9E2] text-[#15170F] px-4 py-2 transition-colors"
              >
                {t('contactPage.infoCards.callAction')}
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white border border-[#E3E4DA] rounded-3xl p-5 sm:p-6 shadow-[0_2px_8px_-2px_rgba(28,51,8,0.04)] flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-2xl bg-[#A6F24A]/15 border border-[#A6F24A]/30 text-[#1C3308] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <MessageCircle size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#15170F]">
                    {t('contactPage.infoCards.whatsappTitle')}
                  </h3>
                  <p className="text-xs text-[#73766B] mt-0.5 font-light">
                    {t('contactPage.infoCards.whatsappDesc')}
                  </p>
                  <p className="text-sm font-mono font-semibold text-[#15170F] mt-2">
                    {contactDetails.whatsapp.label}
                  </p>
                </div>
              </div>
              <a
                href={contactDetails.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-semibold rounded-full bg-[#A6F24A] hover:bg-[#93DB3D] text-[#1C3308] px-4 py-2 transition-colors shadow-xs"
              >
                {t('contactPage.infoCards.whatsappAction')}
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-[#E3E4DA] rounded-3xl p-5 sm:p-6 shadow-[0_2px_8px_-2px_rgba(28,51,8,0.04)] flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-2xl bg-[#A6F24A]/15 border border-[#A6F24A]/30 text-[#1C3308] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Mail size={19} strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#15170F]">
                    {t('contactPage.infoCards.emailTitle')}
                  </h3>
                  <p className="text-xs text-[#73766B] mt-0.5 font-light">
                    {t('contactPage.infoCards.emailDesc')}
                  </p>
                  <p className="text-sm font-medium text-[#15170F] mt-2 break-all">
                    {contactDetails.email.label}
                  </p>
                </div>
              </div>
              <a
                href={contactDetails.email.href}
                className="shrink-0 text-xs font-semibold rounded-full bg-[#F1F2EC] hover:bg-[#E8E9E2] text-[#15170F] px-4 py-2 transition-colors"
              >
                {t('contactPage.infoCards.emailAction')}
              </a>
            </div>

            {/* Office & Hours Card */}
            <div className="bg-white border border-[#E3E4DA] rounded-3xl p-5 sm:p-6 shadow-[0_2px_8px_-2px_rgba(28,51,8,0.04)]">
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-2xl bg-[#A6F24A]/15 border border-[#A6F24A]/30 text-[#1C3308] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <MapPin size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#15170F]">
                    {t('contactPage.infoCards.officeTitle')}
                  </h3>
                  <p className="text-xs text-[#5D5F56] mt-1 leading-relaxed">
                    {contactDetails.office.address}
                  </p>
                  <p className="text-[11px] text-[#73766B] mt-0.5">
                    {contactDetails.office.landmark}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#EDEEE6] flex items-center gap-3 text-xs text-[#5D5F56]">
                <Clock size={15} className="text-[#73766B] shrink-0" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-[#15170F]">
                    {contactDetails.hours.days}:
                  </strong>{' '}
                  {contactDetails.hours.timing}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E3E4DA] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(20,25,15,0.06)]">
              <div className="mb-8 pb-5 border-b border-[#E3E4DA]">
                <h3 className="text-[#15170F] font-serif text-2xl sm:text-3xl tracking-tight leading-snug">
                  {t('contactPage.form.title')}
                </h3>
                <p className="text-[#73766B] text-xs sm:text-sm font-light mt-2">
                  {t('contactPage.form.subtitle')}
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-fullName"
                    className="block text-xs sm:text-sm font-semibold text-[#15170F] mb-1.5"
                  >
                    {t('contactPage.form.fullName')}{' '}
                    <span className="text-[#C4453A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={() => handleBlur('fullName')}
                    placeholder={t('contactPage.form.fullNamePlaceholder')}
                    aria-required="true"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`w-full px-4 py-3 rounded-2xl bg-[#FAFBF7] border text-sm text-[#15170F] placeholder-[#9A9C90] focus:outline-none focus:ring-2 focus:ring-[#A6F24A] transition-all ${
                      errors.fullName
                        ? 'border-[#C4453A] focus:ring-[#C4453A]/40'
                        : 'border-[#E3E4DA] focus:border-transparent'
                    }`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="text-xs text-[#C4453A] mt-1.5">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs sm:text-sm font-semibold text-[#15170F] mb-1.5"
                  >
                    {t('contactPage.form.phone')}{' '}
                    <span className="text-[#C4453A]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur('phone')}
                    placeholder={t('contactPage.form.phonePlaceholder')}
                    aria-required="true"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`w-full px-4 py-3 rounded-2xl bg-[#FAFBF7] border text-sm text-[#15170F] placeholder-[#9A9C90] focus:outline-none focus:ring-2 focus:ring-[#A6F24A] transition-all font-mono ${
                      errors.phone
                        ? 'border-[#C4453A] focus:ring-[#C4453A]/40'
                        : 'border-[#E3E4DA] focus:border-transparent'
                    }`}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-[#C4453A] mt-1.5">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Tour of Interest Dropdown */}
                <div>
                  <label
                    htmlFor="contact-tourInterest"
                    className="block text-xs sm:text-sm font-semibold text-[#15170F] mb-1.5"
                  >
                    {t('contactPage.form.tourInterest')}
                  </label>
                  <select
                    id="contact-tourInterest"
                    name="tourInterest"
                    value={formData.tourInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAFBF7] border border-[#E3E4DA] text-sm text-[#15170F] focus:outline-none focus:ring-2 focus:ring-[#A6F24A] focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="">
                      {t('contactPage.form.tourInterestPlaceholder')}
                    </option>
                    <option value="general">
                      {t('contactPage.form.generalInquiry')}
                    </option>
                    <option value="custom">
                      {t('contactPage.form.customTripOption')}
                    </option>
                    {upcomingTours.map((tour) => {
                      const key = tourKeyMap[tour.id]
                      const name = key
                        ? t(`upcomingTours.items.${key}.destination`)
                        : tour.destination
                      return (
                        <option key={tour.id} value={tour.id}>
                          {name} ({tour.duration})
                        </option>
                      )
                    })}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs sm:text-sm font-semibold text-[#15170F] mb-1.5"
                  >
                    {t('contactPage.form.message')}{' '}
                    <span className="text-[#C4453A]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    placeholder={t('contactPage.form.messagePlaceholder')}
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 rounded-2xl bg-[#FAFBF7] border text-sm text-[#15170F] placeholder-[#9A9C90] focus:outline-none focus:ring-2 focus:ring-[#A6F24A] transition-all resize-y ${
                      errors.message
                        ? 'border-[#C4453A] focus:ring-[#C4453A]/40'
                        : 'border-[#E3E4DA] focus:border-transparent'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-[#C4453A] mt-1.5">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button & Trust notice */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#A6F24A] hover:bg-[#93DB3D] text-[#1C3308] font-semibold text-sm rounded-full min-h-[48px] py-3.5 shadow-[0_8px_24px_rgba(166,242,74,0.3)] transition-all active:scale-[0.98] cursor-pointer disabled:opacity-60"
                  >
                    <span>
                      {isSubmitting
                        ? t('contactPage.form.submittingBtn')
                        : t('contactPage.form.submitBtn')}
                    </span>
                    <Send size={15} strokeWidth={2} />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#73766B] mt-4">
                    <PhoneCall size={14} className="text-[#1C3308]" aria-hidden="true" />
                    <span>{t('contactPage.form.trustNote')}</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* 3. Map Placeholder Card */}
        <div className="mt-14 sm:mt-16 bg-white border border-[#E3E4DA] rounded-3xl p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto">
          <span className="w-14 h-14 rounded-2xl bg-[#A6F24A]/15 border border-[#A6F24A]/30 text-[#1C3308] flex items-center justify-center mx-auto mb-4 shadow-xs">
            <MapPin size={24} strokeWidth={2} aria-hidden="true" />
          </span>
          <h3 className="text-[#15170F] font-serif text-2xl sm:text-3xl tracking-tight leading-snug">
            {t('contactPage.map.title')}
          </h3>
          <p className="text-[#15170F] font-semibold text-sm sm:text-base mt-2">
            {contactDetails.office.address}
          </p>
          <p className="text-[#73766B] text-xs sm:text-sm font-light mt-1">
            {contactDetails.office.landmark}
          </p>
          <div className="mt-5 inline-block px-4 py-2 rounded-2xl bg-[#FAFBF7] border border-[#E3E4DA] text-xs text-[#5D5F56] max-w-lg">
            {t('contactPage.map.placeholderNotice')}
          </div>
        </div>
      </section>

      {/* 4. FAQ Component */}
      <FAQ />
    </div>
  )
}

export default ContactUs
