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
} from 'lucide-react'
import { assets } from '../assets/assets'

/**
 * Central agency configuration file.
 * All real-world details (license, office address, team contacts)
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
