import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'
import UniversitiesSection from '../components/UniversitiesSection'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import TrustIndicators from '../components/TrustIndicators'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <UniversitiesSection />
      <Stats />
      <Testimonials />
      <TrustIndicators />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
