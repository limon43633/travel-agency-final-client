import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Packages from './pages/Packages'
import ContactUs from './pages/ContactUs'
import BookingPage from './pages/BookingPage'
import ScrollToTop from './components/ScrollToTop'
import Layout from './layouts/Layout'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        {/* Home has its own Navbar (floating over the hero image inside TopBanner) */}
        <Route path='/' element={<Home />} />

        {/* Every other page shares one Navbar via Layout */}
        <Route element={<Layout />}>
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/book/:tourId' element={<BookingPage />} />
        </Route>
      </Routes>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App