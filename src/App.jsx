import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Packages from './pages/Packages'
import ContactUs from './pages/ContactUs'
import Layout from './layouts/Layout'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Routes>
        {/* Home has its own Navbar (floating over the hero image inside TopBanner) */}
        <Route path='/' element={<Home />} />

        {/* Every other page shares one Navbar via Layout */}
        <Route element={<Layout />}>
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App