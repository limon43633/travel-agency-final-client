import {
  Mountain,
  Waves,
  Trees,
  Users,
  Sparkles,
  Briefcase,
  PhoneCall,
  ShieldCheck,
  Building2,
  Award,
  ClipboardList,
  CheckCircle2,
  Wallet,
  QrCode,
  Bus,
  Bed,
  Utensils,
  Compass,
  HeartHandshake,
  Shield,
  MapPin,
  Mail,
  Clock,
  Phone,
  MessageCircle,
} from 'lucide-react'
import { assets } from '../assets/assets'

/**
 * Central agency configuration file.
 * All real-world details (license, office address, team contacts, contact info)
 * that need client verification are clearly marked as PLACEHOLDERS.
 */

export const trustCredentials = {
  phoneConfirmation: {
    icon: PhoneCall,
  },
  registration: {
    icon: ShieldCheck,
    licenseNumber: 'TRAD/DSCC/024891/2020', // PLACEHOLDER: Replace with actual Trade License / Registration No.
  },
  office: {
    icon: Building2,
    address: 'House 14, Road 7, Block C, Banani, Dhaka-1213', // PLACEHOLDER: Replace with agency office address
  },
  experience: {
    icon: Award,
    years: '8+', // Matched with AboutTripNest stats
  },
}

export const contactDetails = {
  phone: {
    label: '+880 1700-000001', // PLACEHOLDER: Replace with main phone number
    href: 'tel:+8801700000001',
    icon: Phone,
  },
  whatsapp: {
    label: '+880 1700-000001', // PLACEHOLDER: Replace with WhatsApp support number
    href: 'https://wa.me/8801700000001',
    cleanNumber: '8801700000001',
    icon: MessageCircle,
  },
  email: {
    label: 'hello@tripnest.com.bd', // PLACEHOLDER: Replace with agency official email
    href: 'mailto:hello@tripnest.com.bd',
    icon: Mail,
  },
  office: {
    address: 'House 14, Road 7, Block C, Banani, Dhaka-1213', // PLACEHOLDER: Replace with office address
    landmark: '5 minutes walk from Banani Chairmanbari Bus Stop',
    icon: MapPin,
  },
  hours: {
    days: 'Saturday — Thursday',
    timing: '10:00 AM — 8:00 PM',
    icon: Clock,
  },
}

export const specialitiesData = [
  {
    id: 'hillTrekking',
    icon: Mountain,
    image: assets.bandarban,
  },
  {
    id: 'seaBeach',
    icon: Waves,
    image: assets.coxs,
  },
  {
    id: 'forestRiver',
    icon: Trees,
    image: assets.sundarban,
  },
  {
    id: 'familyTrips',
    icon: Users,
    image: assets.travelersExploring,
  },
  {
    id: 'friendsStudent',
    icon: Sparkles,
    image: assets.tourGuide,
  },
  {
    id: 'corporateTours',
    icon: Briefcase,
    image: assets.travelPlan,
  },
]

export const howWeWorkSteps = [
  {
    stepNumber: 1,
    icon: ClipboardList,
    key: 'step1',
  },
  {
    stepNumber: 2,
    icon: PhoneCall,
    key: 'step2',
  },
  {
    stepNumber: 3,
    icon: CheckCircle2,
    key: 'step3',
  },
  {
    stepNumber: 4,
    icon: Wallet,
    key: 'step4',
  },
  {
    stepNumber: 5,
    icon: QrCode,
    key: 'step5',
  },
]

export const teamMembers = [
  {
    id: 'member-1',
    initials: 'TA',
    name: 'Tanvir Ahmed', // PLACEHOLDER: Replace with real Founder name
    roleKey: 'founder',
    phone: '+8801700000001', // PLACEHOLDER: Replace with real phone number
    whatsapp: '8801700000001', // PLACEHOLDER: WhatsApp number without '+' or symbols
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80', // PLACEHOLDER: Replace with real founder portrait
  },
  {
    id: 'member-2',
    initials: 'RC',
    name: 'Rahim Chowdhury', // PLACEHOLDER: Replace with real Lead Guide name
    roleKey: 'leadGuide',
    phone: '+8801700000002', // PLACEHOLDER: Replace with real phone number
    whatsapp: '8801700000002', // PLACEHOLDER: WhatsApp number
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80', // PLACEHOLDER: Replace with real guide portrait
  },
  {
    id: 'member-3',
    initials: 'NJ',
    name: 'Nusrat Jahan', // PLACEHOLDER: Replace with real Operations Manager name
    roleKey: 'operations',
    phone: '+8801700000003', // PLACEHOLDER: Replace with real phone number
    whatsapp: '8801700000003', // PLACEHOLDER: WhatsApp number
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80', // PLACEHOLDER: Replace with real operations portrait
  },
  {
    id: 'member-4',
    initials: 'FK',
    name: 'Farhan Kabir', // PLACEHOLDER: Replace with real Customer Support name
    roleKey: 'support',
    phone: '+8801700000004', // PLACEHOLDER: Replace with real phone number
    whatsapp: '8801700000004', // PLACEHOLDER: WhatsApp number
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80', // PLACEHOLDER: Replace with real support portrait
  },
]

/**
 * About Us Page Data
 */
export const agencyValues = [
  {
    id: 'honestPricing',
    icon: Wallet,
  },
  {
    id: 'realPeople',
    icon: PhoneCall,
  },
  {
    id: 'safetyFirst',
    icon: Shield,
  },
  {
    id: 'localExperience',
    icon: Compass,
  },
]

export const agencyStats = [
  { value: '8+', key: 'years' },
  { value: '12,400+', key: 'travelers' },
  { value: '60+', key: 'destinations' },
  { value: '4.9/5', key: 'rating' },
]

/**
 * Services Page Data
 */
export const servicesList = [
  {
    id: 'groupTours',
    icon: Users,
  },
  {
    id: 'transport',
    icon: Bus,
  },
  {
    id: 'stay',
    icon: Bed,
  },
  {
    id: 'meals',
    icon: Utensils,
  },
  {
    id: 'guides',
    icon: Compass,
  },
  {
    id: 'customTrips',
    icon: HeartHandshake,
  },
]

export const includedFeatures = [
  'transport',
  'accommodation',
  'tripLead',
  'meals',
  'safetySupport',
  'digitalTicket',
]

export const signatureFeatures = [
  {
    id: 'callConfirm',
    icon: PhoneCall,
  },
  {
    id: 'qrTicket',
    icon: QrCode,
  },
  {
    id: 'mealTracking',
    icon: Utensils,
  },
]
