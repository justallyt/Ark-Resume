import Navbar from "../components/common/navigation/Navbar"
import ServicesBody from "../components/servicespage/ServicesBody"
import ServicesHero from "../components/servicespage/ServicesHero"
import "../css/services.css"
import Pricing from "../components/homepage/Pricing"
import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
const Services = () => {
  return (
    <>
             <Navbar />
             <ServicesHero />
             <ServicesBody />
             <Pricing />
             <CallToAction />
             <Footer />
    </>
  )
}

export default Services