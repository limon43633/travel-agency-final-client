import { useState, useEffect, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import {
  Calendar,
  MapPin,
  ArrowLeft,
  AlertCircle,
  ShieldCheck,
  Check,
  Minus,
  Plus,
  ChevronDown
} from 'lucide-react'
import { upcomingTours } from '../assets/assets'

// Static boarding points list across Dhaka departure routes
const BOARDING_POINTS = [
  { id: 'abdullahpur', en: 'Abdullahpur, Uttara', bn: 'আব্দুল্লাহপুর, উত্তরা' },
  { id: 'mohakhali', en: 'Mohakhali Bus Terminal', bn: 'মহাখালী বাস টার্মিনাল' },
  { id: 'kallyanpur', en: 'Kallyanpur', bn: 'কল্যাণপুর' },
  { id: 'gabtoli', en: 'Gabtoli Bus Terminal', bn: 'গাবতলী বাস টার্মিনাল' },
  { id: 'arambagh', en: 'Arambagh / Motijheel', bn: 'আরামবাগ / মতিঝিল' },
  { id: 'sayedabad', en: 'Sayedabad Bus Terminal', bn: 'সায়েদাবাদ বাস টার্মিনাল' }
]

const tourKeyMap = {
  1: 'sajek',
  2: 'coxs',
  3: 'bandarban',
  4: 'sundarban'
}

// Bangladeshi phone regex: 01 followed by 3-9 and 8 more digits (total 11 digits)
const BD_PHONE_REGEX = /^01[3-9]\d{8}$/

const BookingPage = () => {
  const { tourId } = useParams()
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage || i18n.language || 'en'

  // Scroll to top when page mounts or tourId changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tourId])

  const tour = upcomingTours.find((item) => String(item.id) === String(tourId))
  const seatsLeft = tour ? Math.max(0, tour.totalSeats - tour.seatsBooked) : 0

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    travelers: 1,
    boardingPoint: '',
    foodPreference: '',
    emergencyContact: ''
  })

  // Touched state to ensure NO errors display on initial page load
  const [touched, setTouched] = useState({
    fullName: false,
    phone: false,
    travelers: false,
    boardingPoint: false,
    emergencyContact: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Derived validation errors (recalculated as user types, cleared automatically when valid)
  const errors = useMemo(() => {
    const newErrors = {}

    // Full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = t('booking.errors.fullNameRequired')
    }

    // Phone number
    const trimmedPhone = formData.phone.trim()
    if (!trimmedPhone) {
      newErrors.phone = t('booking.errors.phoneRequired')
    } else if (!BD_PHONE_REGEX.test(trimmedPhone)) {
      newErrors.phone = t('booking.errors.phoneInvalid')
    }

    // Number of travelers
    const travelersCount = Number(formData.travelers)
    if (!formData.travelers || isNaN(travelersCount)) {
      newErrors.travelers = t('booking.errors.travelersRequired')
    } else if (travelersCount < 1) {
      newErrors.travelers = t('booking.errors.travelersMin')
    } else if (seatsLeft > 0 && travelersCount > seatsLeft) {
      newErrors.travelers = t('booking.errors.travelersMax', { max: seatsLeft })
    }

    // Boarding point
    if (!formData.boardingPoint) {
      newErrors.boardingPoint = t('booking.errors.boardingPointRequired')
    }

    // Emergency contact
    const trimmedEmergency = formData.emergencyContact.trim()
    if (!trimmedEmergency) {
      newErrors.emergencyContact = t('booking.errors.emergencyContactRequired')
    } else if (!BD_PHONE_REGEX.test(trimmedEmergency)) {
      newErrors.emergencyContact = t('booking.errors.emergencyContactInvalid')
    } else if (trimmedPhone && trimmedEmergency === trimmedPhone) {
      newErrors.emergencyContact = t('booking.errors.emergencyContactSame')
    }

    return newErrors
  }, [formData, seatsLeft, t])

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'travelers' ? (value === '' ? '' : Number(value)) : value
    }))
  }

  const handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault()
    }

    // Mark all fields as touched on submit
    setTouched({
      fullName: true,
      phone: true,
      travelers: true,
      boardingPoint: true,
      emergencyContact: true
    })

    if (Object.keys(errors).length > 0) {
      return
    }

    setIsSubmitting(true)

    // Simulate submit dispatch and show toast
    setTimeout(() => {
      toast.success(t('booking.toast.success'), {
        icon: '✈️'
      })

      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        travelers: 1,
        boardingPoint: '',
        foodPreference: '',
        emergencyContact: ''
      })
      setTouched({
        fullName: false,
        phone: false,
        travelers: false,
        boardingPoint: false,
        emergencyContact: false
      })
      setIsSubmitting(false)
    }, 400)
  }

  const formatNum = (n) => {
    try {
      return Number(n).toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-US')
    } catch {
      return n
    }
  }

  // Tour not found fallback state
  if (!tour) {
    return (
      <div className="min-h-[60vh] max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F1F2EC] flex items-center justify-center text-[#9A9C90]">
          <AlertCircle size={32} strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-serif text-[#15170F] italic mb-3">
          {t('booking.tourNotFoundTitle')}
        </h1>
        <p className="text-[#73766B] font-light max-w-md mx-auto mb-8">
          {t('booking.tourNotFoundDesc')}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#A6F24A] hover:bg-[#93DB3D] text-[#1C3308] font-medium text-sm rounded-lg px-8 py-3.5 shadow-sm transition-all active:scale-95"
        >
          <ArrowLeft size={16} />
          {t('booking.backToHome')}
        </Link>
      </div>
    )
  }

  // Localized tour strings
  const tourKey = tourKeyMap[tour.id]
  const destination = tourKey
    ? t(`upcomingTours.items.${tourKey}.destination`, { defaultValue: tour.destination })
    : tour.destination
  const location = tourKey
    ? t(`upcomingTours.items.${tourKey}.location`, { defaultValue: tour.location })
    : tour.location
  const dateRange = tourKey
    ? t(`upcomingTours.items.${tourKey}.dateRange`, { defaultValue: tour.dateRange })
    : tour.dateRange
  const duration = tourKey
    ? t(`upcomingTours.items.${tourKey}.duration`, { defaultValue: tour.duration })
    : tour.duration
  const rawPrice = Number(String(tour.price).replace(/,/g, '')) || 0
  const travelersCount = Number(formData.travelers) || 1
  const estimatedTotal = rawPrice * travelersCount

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#15170F] py-8 sm:py-12 md:py-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#73766B] hover:text-[#15170F] transition-colors duration-200 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            <span>{t('booking.backToTours')}</span>
          </Link>
        </div>

        {/* Mobile Compact Tour Summary (< md only) */}
        <div className="md:hidden mb-7 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E3E4DA] shadow-[0_2px_12px_rgba(20,25,15,0.04)] flex items-center gap-3.5">
          <img
            src={tour.image}
            alt={destination}
            className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl object-cover bg-[#F1F2EC] shrink-0"
          />
          <div className="min-w-0 flex-1">
            <h2 className="font-serif italic text-base sm:text-lg text-[#15170F] font-medium truncate">
              {destination}
            </h2>
            <p className="text-xs text-[#73766B] mt-0.5 flex items-center gap-1.5 truncate">
              <span>{dateRange}</span>
              <span>·</span>
              <span>{duration}</span>
            </p>
            <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#EDEEE6] text-xs">
              <span className="font-semibold text-[#15170F]">
                Tk {tour.price} <span className="font-normal text-[#9A9C90]">/ {t('common.perPerson')}</span>
              </span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${seatsLeft <= 5 ? 'bg-rose-50 text-[#C4453A]' : 'bg-[#F1F2EC] text-[#5D5F56]'}`}>
                {formatNum(seatsLeft)} {t('booking.seatsAvailable')}
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Layout from Reference Design */}
        <div className="grid md:grid-cols-2 md:gap-10 lg:gap-16 xl:gap-20 w-full items-start">

          {/* Left Column: Heading, Subtitle, and Form */}
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#15170F] text-center md:text-start mb-2 tracking-tight">
              {t('booking.pageTitle')}
            </h1>

            <p className="text-sm text-[#73766B] text-center md:text-start mx-auto md:mx-0 mb-8 leading-relaxed max-w-[420px]">
              {t('booking.pageSubtitle')}
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Row 1: Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm text-[#73766B] mb-2 font-normal"
                >
                  {t('booking.form.fullNameLabel')}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={() => handleBlur('fullName')}
                  placeholder={t('booking.form.fullNamePlaceholder')}
                  className={`w-full h-12 px-3.5 border rounded-lg text-base md:text-sm outline-none transition-colors duration-200 bg-white placeholder-[#B7B9AD] ${
                    touched.fullName && errors.fullName
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-[#E3E4DA] focus:border-[#74C91E]'
                  }`}
                  aria-invalid={Boolean(touched.fullName && errors.fullName)}
                  aria-describedby={touched.fullName && errors.fullName ? 'fullName-error' : undefined}
                />
                {touched.fullName && errors.fullName && (
                  <p id="fullName-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={13} className="shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Row 2: Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-[#73766B] mb-2 font-normal"
                >
                  {t('booking.form.phoneLabel')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={() => handleBlur('phone')}
                  placeholder={t('booking.form.phonePlaceholder')}
                  className={`w-full h-12 px-3.5 border rounded-lg text-base md:text-sm outline-none transition-colors duration-200 bg-white placeholder-[#B7B9AD] ${
                    touched.phone && errors.phone
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-[#E3E4DA] focus:border-[#74C91E]'
                  }`}
                  aria-invalid={Boolean(touched.phone && errors.phone)}
                  aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
                />
                {touched.phone && errors.phone && (
                  <p id="phone-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={13} className="shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Row 3: Travelers Stepper & Boarding Point Dropdown (side by side on desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Number of Travelers (Compact Stepper) */}
                <div>
                  <label
                    htmlFor="travelers"
                    className="block text-sm text-[#73766B] mb-2 font-normal"
                  >
                    {t('booking.form.travelersLabel')}
                  </label>
                  <div
                    className={`flex items-center justify-between h-12 px-3 border rounded-lg bg-white transition-colors duration-200 ${
                      touched.travelers && errors.travelers
                        ? 'border-red-400'
                        : 'border-[#E3E4DA] focus-within:border-[#74C91E]'
                    }`}
                  >
                    <button
                      type="button"
                      aria-label={t('booking.decreaseTravelers')}
                      disabled={formData.travelers <= 1}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, travelers: Math.max(1, Number(prev.travelers) - 1) }))
                        handleBlur('travelers')
                      }}
                      className="w-8 h-8 rounded flex items-center justify-center text-[#15170F] hover:bg-[#F1F2EC] active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                      <Minus size={15} strokeWidth={2.2} />
                    </button>

                    <span className="font-semibold text-base md:text-sm text-[#15170F] tabular-nums select-none">
                      {formatNum(formData.travelers)}
                    </span>

                    <button
                      type="button"
                      aria-label={t('booking.increaseTravelers')}
                      disabled={seatsLeft > 0 && formData.travelers >= seatsLeft}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          travelers: seatsLeft > 0 ? Math.min(seatsLeft, Number(prev.travelers) + 1) : Number(prev.travelers) + 1
                        }))
                        handleBlur('travelers')
                      }}
                      className="w-8 h-8 rounded flex items-center justify-center text-[#15170F] hover:bg-[#F1F2EC] active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                      <Plus size={15} strokeWidth={2.2} />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#9A9C90] mt-1">
                    {t('booking.form.travelersHint', { max: formatNum(seatsLeft) })}
                  </p>

                  {touched.travelers && errors.travelers && (
                    <p id="travelers-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle size={13} className="shrink-0" />
                      <span>{errors.travelers}</span>
                    </p>
                  )}
                </div>

                {/* Boarding Point Dropdown with Custom Chevron */}
                <div>
                  <label
                    htmlFor="boardingPoint"
                    className="block text-sm text-[#73766B] mb-2 font-normal"
                  >
                    {t('booking.form.boardingPointLabel')}
                  </label>
                  <div className="relative">
                    <select
                      id="boardingPoint"
                      name="boardingPoint"
                      value={formData.boardingPoint}
                      onChange={handleChange}
                      onBlur={() => handleBlur('boardingPoint')}
                      className={`w-full h-12 px-3.5 pr-10 border rounded-lg text-base md:text-sm outline-none transition-colors duration-200 bg-white cursor-pointer appearance-none ${
                        touched.boardingPoint && errors.boardingPoint
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#E3E4DA] focus:border-[#74C91E]'
                      }`}
                      aria-invalid={Boolean(touched.boardingPoint && errors.boardingPoint)}
                      aria-describedby={touched.boardingPoint && errors.boardingPoint ? 'boardingPoint-error' : undefined}
                    >
                      <option value="">{t('booking.form.boardingPointPlaceholder')}</option>
                      {BOARDING_POINTS.map((bp) => (
                        <option key={bp.id} value={bp.en}>
                          {lang === 'bn' ? bp.bn : bp.en}
                        </option>
                      ))}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#73766B]">
                      <ChevronDown size={17} strokeWidth={2} />
                    </div>
                  </div>

                  {touched.boardingPoint && errors.boardingPoint && (
                    <p id="boardingPoint-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle size={13} className="shrink-0" />
                      <span>{errors.boardingPoint}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Row 4: Food Preference / Allergy (Optional) */}
              <div>
                <label
                  htmlFor="foodPreference"
                  className="block text-sm text-[#73766B] mb-2 font-normal"
                >
                  {t('booking.form.foodPreferenceLabel')}
                </label>
                <input
                  type="text"
                  id="foodPreference"
                  name="foodPreference"
                  value={formData.foodPreference}
                  onChange={handleChange}
                  placeholder={t('booking.form.foodPreferencePlaceholder')}
                  className="w-full h-12 px-3.5 border border-[#E3E4DA] rounded-lg text-base md:text-sm outline-none transition-colors duration-200 bg-white placeholder-[#B7B9AD] focus:border-[#74C91E]"
                />
              </div>

              {/* Row 5: Emergency Contact Number */}
              <div>
                <label
                  htmlFor="emergencyContact"
                  className="block text-sm text-[#73766B] mb-2 font-normal"
                >
                  {t('booking.form.emergencyContactLabel')}
                </label>
                <input
                  type="tel"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  onBlur={() => handleBlur('emergencyContact')}
                  placeholder={t('booking.form.emergencyContactPlaceholder')}
                  className={`w-full h-12 px-3.5 border rounded-lg text-base md:text-sm outline-none transition-colors duration-200 bg-white placeholder-[#B7B9AD] ${
                    touched.emergencyContact && errors.emergencyContact
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-[#E3E4DA] focus:border-[#74C91E]'
                  }`}
                  aria-invalid={Boolean(touched.emergencyContact && errors.emergencyContact)}
                  aria-describedby={touched.emergencyContact && errors.emergencyContact ? 'emergencyContact-error' : undefined}
                />
                {touched.emergencyContact && errors.emergencyContact && (
                  <p id="emergencyContact-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={13} className="shrink-0" />
                    <span>{errors.emergencyContact}</span>
                  </p>
                )}
              </div>

              {/* Submit Button & Trust Line */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 min-h-[52px] bg-[#A6F24A] hover:bg-[#93DB3D] text-[#1C3308] font-semibold rounded-lg text-sm cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(166,242,74,0.35)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15170F] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>{t('booking.submittingBtn')}</span>
                  ) : (
                    <>
                      <span>{t('booking.submitBtn')}</span>
                      <Check size={16} strokeWidth={2.5} />
                    </>
                  )}
                </button>

                {/* Trust line under submit button */}
                <p className="text-center text-xs text-[#73766B] mt-3 font-light leading-relaxed">
                  {t('booking.trustNote')}
                </p>
              </div>

            </form>
          </div>

          {/* Right Column: Reference-Style Large Rounded Image Card (Desktop / Tablet) */}
          <div className="rounded-3xl p-7 sm:p-10 relative min-h-[620px] lg:min-h-[662px] w-full max-w-[520px] mx-auto hidden md:flex flex-col justify-between overflow-hidden lg:sticky lg:top-24 shadow-[0_20px_50px_rgba(20,25,15,0.12)] border border-[#E3E4DA]">

            {/* Tour Background Image */}
            <img
              src={tour.image}
              alt={destination}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25 pointer-events-none" />

            {/* Card Header Pills */}
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/40 backdrop-blur-md text-white/95 border border-white/20">
                {t('booking.upcomingTourBadge')}
              </span>
              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm ${seatsLeft <= 5 ? 'bg-[#FF5A5F] text-white' : 'bg-[#A6F24A] text-[#1C3308]'}`}>
                {formatNum(seatsLeft)} {t('booking.seatsAvailable')}
              </span>
            </div>

            {/* Bottom Overlay Content */}
            <div className="relative z-10 mt-auto pt-8">

              {/* Destination & Location */}
              <div className="mb-4">
                <h2 className="font-serif italic text-2xl lg:text-3xl font-medium text-white tracking-tight leading-tight break-words">
                  {destination}
                </h2>
                <p className="text-white/80 text-xs sm:text-sm flex items-center gap-1.5 mt-1.5 break-words">
                  <MapPin size={14} className="text-[#A6F24A] shrink-0" />
                  <span>{location}</span>
                </p>
              </div>

              {/* Tour Meta Rows */}
              <div className="space-y-2.5 py-3.5 border-t border-b border-white/20 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-white/90">
                  <span className="flex items-center gap-1.5 text-white/70">
                    <Calendar size={13} className="text-white/60" />
                    {t('booking.dates')}
                  </span>
                  <span className="font-medium text-white">{dateRange}</span>
                </div>

                <div className="flex justify-between items-center text-white/90">
                  <span className="text-white/70">{t('booking.duration')}</span>
                  <span className="font-medium text-white">{duration}</span>
                </div>

                <div className="flex justify-between items-center text-white/90">
                  <span className="text-white/70">{t('booking.pricePerPerson')}</span>
                  <span className="font-semibold text-white">Tk {tour.price}</span>
                </div>
              </div>

              {/* Live Updating Estimated Total */}
              <div className="pt-3.5 flex items-baseline justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/70 font-medium">
                    {t('booking.totalEstimate')}
                  </p>
                  <p className="text-[11px] text-white/60 mt-0.5">
                    Tk {tour.price} × {formatNum(travelersCount)} {travelersCount > 1 ? t('booking.travelers') : t('booking.traveler')}
                  </p>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-[#A6F24A] tracking-tight">
                  Tk {formatNum(estimatedTotal)}
                </p>
              </div>

              {/* Soft Glass-Style Trust Note */}
              <div className="mt-4 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white/90 flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#A6F24A] shrink-0" />
                <span className="leading-snug">{t('booking.verifiedTrustNote')}</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Mobile Sticky Bottom CTA Bar (< md only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E3E4DA] p-3 shadow-[0_-4px_20px_rgba(20,25,15,0.08)]">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] text-[#73766B] font-medium uppercase tracking-wider">
              {t('booking.totalEstimate')}
            </p>
            <p className="text-lg font-bold text-[#15170F] leading-tight">
              Tk {formatNum(estimatedTotal)}
            </p>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex-1 max-w-[210px] h-12 bg-[#A6F24A] hover:bg-[#93DB3D] disabled:opacity-60 text-[#1C3308] font-semibold text-sm rounded-lg shadow-[0_4px_12px_rgba(166,242,74,0.35)] transition-all active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {isSubmitting ? t('booking.submittingBtn') : t('booking.submitBtn')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookingPage
