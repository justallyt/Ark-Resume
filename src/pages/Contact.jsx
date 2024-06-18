import Navbar from "../components/common/navigation/Navbar"
import ContactHero from "../components/contactpage/ContactHero"
import FaqSection from "../components/contactpage/FaqSection"
import "../css/contact.css"
import Footer from "../components/common/Footer"
const Contact = () => {
  return (
    <>
           <Navbar />
           <ContactHero />
           <FaqSection />
           <Footer />
    </>
  )
}

export default Contact