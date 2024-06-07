import Header from "../components/common/navigation/Header"
import AboutSection from "../components/homepage/AboutSection"
import HeroSection from "../components/homepage/HeroSection"
import "../css/home.css"

const Home = () => {
  return (
    <>
          <Header />
          <HeroSection />
          <AboutSection />
    </>
  )
}

export default Home