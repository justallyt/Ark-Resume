import Header from "../components/common/navigation/Header"
import AboutSection from "../components/homepage/AboutSection"
import Benefits from "../components/homepage/Benefits"
import HeroSection from "../components/homepage/HeroSection"
import Process from "../components/homepage/Process"
import ServicesSection from "../components/homepage/ServicesSection"
import "../css/home.css"

const Home = () => {
  return (
    <>
          <Header />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <Benefits />
          <Process />
    </>
  )
}

export default Home