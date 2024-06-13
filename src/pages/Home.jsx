import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import ImageStrip from "../components/common/ImageStrip"
import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/homepage/AboutSection"
import Benefits from "../components/homepage/Benefits"
import BlogSection from "../components/homepage/BlogSection"
import HeroSection from "../components/homepage/HeroSection"
import Pricing from "../components/homepage/Pricing"
import Process from "../components/homepage/Process"
import ServicesSection from "../components/homepage/ServicesSection"
import Testimonials from "../components/homepage/Testimonials"
import "../css/home.css"

const Home = () => {
  return (
    <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <Benefits />
          <Process />
          <ImageStrip />
          <Pricing />
          <Testimonials />
          <BlogSection />
          <CallToAction />
          <Footer />
    </>
  )
}

export default Home