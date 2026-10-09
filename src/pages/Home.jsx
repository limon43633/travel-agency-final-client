import TopBanner from '../components/TopBanner'
import PopularDestinations from '../components/Populardestinations'
import AboutTripNest from '../components/AboutTripNest'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/FAQ'
import TourMemories from '../components/TourMemories'
import Testimonials from '../components/Testimonials'
import BookingBanner from '../components/BookingBanner'
import UpcomingTours from '../components/UpcomingTours'

const Home = () => {
  return (
    <div>
      <TopBanner />
      <PopularDestinations />
      <UpcomingTours />
      <AboutTripNest />
      <WhyChooseUs />
      <HowItWorks />
      <TourMemories />
      <Testimonials />
      <FAQ />
      <BookingBanner />
    </div>
  )
}

export default Home
