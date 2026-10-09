import logo from './logo.svg'
import topBannerBg from './top_banner_bg.jpg'
import bandarban from './bandarban.jpg'
import coxs from './coxs.jpg'
import sajek from './sajek.jpg'
import sundarban from './sundarban.jpg'
import travelersExploring from './travelers_exploring.jpg'
import tourGuide from './tour_guide.jpg'
import kaptai from './kaptai_lake.jpg'
import travelPlan from './travel_plan.jpg'
import bandarbanMemories from './bandarban_memories.jpg'
import coxMemo from './cox_memories.jpg'
import kaptaiMemo from './kaptai_memo.jpg'
import sajekMemories from './sajek_memories.jpg'
import sundarbanMemories from './sundarban_memories.jpg'
import sreemangalMemo from './sreemangal_memo.jpg'
import sitakundaWaterfallMemo from './sitakunda_waterfall_memo.jpg'
import tanguarMemo from './tanguar_memo.jpg'
import sundarbanmemo_2 from './sundarban_memo_2.jpg'
import sajekExplore from './sajek_explore.jpg'




export const assets = {
  logo,
  topBannerBg,
  travelersExploring,
  tourGuide,
  kaptai,
  travelPlan,
  bandarbanMemories,
  coxMemo,
  kaptaiMemo,
  sajekMemories,
  sundarbanMemories,
  sreemangalMemo,
  sitakundaWaterfallMemo,
  tanguarMemo,
  sundarbanmemo_2,
  sajekExplore,
  sajek,
  coxs,
  bandarban,
  sundarban
}



export const menuLinks = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Packages", path: "/packages" },
  { name: "Contact us", path: "/contact-us" },
]


export const destinations = [
  {
    id: 1,
    name: "Cox's Bazar",
    location: "Chattogram Division",
    duration: "3 Days, 2 Nights",
    price: "Tk 8,500",
    rating: 4.8,
    reviews: "2.1k",
    image: coxs
  },
  {
    id: 2,
    name: "Sajek Valley",
    location: "Rangamati",
    duration: "2 Days, 1 Night",
    price: "Tk 6,000",
    rating: 4.9,
    reviews: "1.4k",
    image: sajek
  },
  {
    id: 3,
    name: "Sundarbans",
    location: "Khulna Division",
    duration: "3 Days, 2 Nights",
    price: "Tk 12,000",
    rating: 4.7,
    reviews: "980",
    image: sundarban
  },
  {
    id: 4,
    name: "Bandarban",
    location: "Chattogram Hill Tracts",
    duration: "3 Days, 2 Nights",
    price: "Tk 7,500",
    rating: 4.8,
    reviews: "1.6k",
    image: bandarban
  },
]


export const tourMemories = [
  {
    id: 1,
    title: "Sajek Valley Sunrise",
    location: "Rangamati",
    image: assets.sajekMemories,
  },
  {
    id: 2,
    title: "Cox's Bazar Beach Walk",
    location: "Chattogram",
    image: assets.coxMemo,
  },
  {
    id: 3,
    title: "Sundarbans Boat Trail",
    location: "Khulna",
    image: assets.sundarbanMemories,
  },
  {
    id: 4,
    title: "Bandarban Hill Trek",
    location: "Chattogram Hill Tracts",
    image: assets.bandarbanMemories,
  },
  {
    id: 5,
    title: "Kaptai Lake Evening",
    location: "Rangamati",
    image: assets.kaptaiMemo,
  },
  {
    id: 6,
    title: "Sreemangal Tea Gardens",
    location: "Sylhet",
    image: assets.sreemangalMemo,
  },
  {
    id: 7,
    title: "Sitakunda Waterfall Hike",
    location: "Chattogram",
    image: assets.sitakundaWaterfallMemo,
  },
  {
    id: 8,
    title: "Tanguar Haor Boat Trip",
    location: "Sunamganj",
    image: assets.tanguarMemo,
  },
]




// assets.js — testimonials data with dummy avatar URLs (extracted from reference)

export const testimonials = [
  {
    text: "Price একদম যা দেখেছিলাম তাই ছিল, checkout-এ কোনো hidden charge আসেনি। এটাই সবচেয়ে ভালো লেগেছে।",
    name: "Rakibul Hasan",
    role: "Sylhet",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    text: "Sajek trip-টা এতো smooth ছিল যে বিশ্বাসই হচ্ছিল না। Bus pickup থেকে resort check-in পর্যন্ত সব ঠিক টাইমে হয়েছে।",
    name: "Tanvir Ahmed",
    role: "Dhaka",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    text: "প্রথমবার Sundarbans গেলাম পরিবার নিয়ে, guide-রা এতো helpful ছিল যে বাচ্চাদের নিয়েও কোনো টেনশন হয়নি।",
    name: "Nusrat Jahan",
    role: "Chattogram",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
  },
  {
    text: "হঠাৎ plan change করতে হয়েছিল, ওদের support team সাথে সাথে reschedule করে দিয়েছে কোনো ঝামেলা ছাড়াই।",
    name: "Farzana Islam",
    role: "Khulna",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
  },
  {
    text: "Bandarban-এর hill trek একটু risky মনে হচ্ছিল, কিন্তু local guide-দের experience দেখে confidence পেয়েছি পুরোটা সময়।",
    name: "Imran Kabir",
    role: "Rajshahi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
  },
  {
    text: "Group of 12 নিয়ে Kaptai গিয়েছিলাম, rooming আর transport সব আগে থেকেই গুছিয়ে রেখেছিল। কোনো confusion হয়নি।",
    name: "Sabrina Chowdhury",
    role: "Dhaka",
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
  },
]


// Add this to assets.js alongside your existing exports

export const upcomingTours = [
  {
    id: 1,
    destination: "Sajek Valley",
    location: "Rangamati",
    image: assets.sajek,
    dateRange: "Sep 12 - Sep 14",
    duration: "3 Days, 2 Nights",
    totalSeats: 20,
    seatsBooked: 16,
    price: "6,000",
  },
  {
    id: 2,
    destination: "Cox's Bazar",
    location: "Chattogram Division",
    image: assets.coxs,
    dateRange: "Sep 19 - Sep 21",
    duration: "3 Days, 2 Nights",
    totalSeats: 25,
    seatsBooked: 11,
    price: "8,500",
  },
  {
    id: 3,
    destination: "Bandarban Hill Trek",
    location: "Chattogram Hill Tracts",
    image: assets.bandarban,
    dateRange: "Sep 26 - Sep 28",
    duration: "3 Days, 2 Nights",
    totalSeats: 15,
    seatsBooked: 13,
    price: "7,500",
  },
  {
    id: 4,
    destination: "Sundarbans Boat Trail",
    location: "Khulna Division",
    image: assets.sundarbanmemo_2,
    dateRange: "Oct 3 - Oct 5",
    duration: "3 Days, 2 Nights",
    totalSeats: 18,
    seatsBooked: 7,
    price: "12,000",
  },
]
