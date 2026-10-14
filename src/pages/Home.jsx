import TopBanner from '../components/TopBanner'
import UpcomingTours from '../components/UpcomingTours'
import TrustStrip from '../components/TrustStrip'
import Specialities from '../components/Specialities'
import HowWeWork from '../components/HowWeWork'
import Team from '../components/Team'
import AboutTripNest from '../components/AboutTripNest'
import PopularDestinations from '../components/Populardestinations'
import WhyChooseUs from '../components/WhyChooseUs'
import TourMemories from '../components/TourMemories'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import BookingBanner from '../components/BookingBanner'

const Home = () => {
  return (
    <div>
      {/* 1. Hero */}
      <TopBanner />

      {/* 2. Upcoming Tours */}
      <UpcomingTours />

      {/* 3. Trust Strip (NEW) */}
      <TrustStrip />

      {/* 4. Specialities (NEW) */}
      <Specialities />

      {/* 5. How We Work (REPLACES old How it works) */}
      <HowWeWork />

      {/* 6. Team (NEW) */}
      <Team />

      {/* 7. Get to know TripNest */}
      <AboutTripNest />

      {/* 8. Popular Destinations */}
      <PopularDestinations />

      {/* 9. Why travel with us */}
      <WhyChooseUs />

      {/* 10. Tour Memories / Gallery */}
      <TourMemories />

      {/* 11. Testimonials */}
      <Testimonials />

      {/* 12. FAQ */}
      <FAQ />

      {/* 13. Booking CTA Banner */}
      <BookingBanner />
    </div>
  )
}

export default Home
