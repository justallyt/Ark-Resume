import { Link } from "react-router-dom"
import hero from "../../assets/hero1.jpg"
import hero2 from "../../assets/hero2.jpg"

const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="inner-row">
                         <div className="hero-section-content">
                                     <div className="hero-title">
                                            <h1>Crafting Resumes that Help You Find your Dream Job.</h1>
                                     </div>
                                     <div className="hero-wrap">
                                                <div className="hero-image">
                                                          <img src={hero} alt="" />
                                                </div>
                                                <div className="hero-texts">
                                                          <div className="hero-texts-inner">
                                                                   <p>We help you stand out from the crowd and confidently ace interviews by crafting winning resumes, cover letters, LinkedIn profiles, biographies, and elevator pitches that get you noticed and interviewed.</p>
                                                                   <Link to={'/'}>Explore Services</Link>
                                                          </div>

                                                          <img src={hero2} alt="" />
                                                </div>
                                     </div>
                         </div>
              </div>
    </div>
  )
}

export default HeroSection