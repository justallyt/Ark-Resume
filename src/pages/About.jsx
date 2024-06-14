import "../css/about.css"
import Navbar from "../components/common/navigation/Navbar"
import AboutHero from "../components/aboutpage/AboutHero"
import AboutBody from "../components/aboutpage/AboutBody"
import Values from "../components/aboutpage/Values"
import Testimonials from "../components/homepage/Testimonials"
import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"

const About = () => {
  return (
    <>
           <Navbar />
           <AboutHero />
           <AboutBody />
           <Values />
           <Testimonials />
           <CallToAction />
           <Footer />
    </>
  )
}

export default About