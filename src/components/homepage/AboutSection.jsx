import logo1 from "../../assets/logos/deloitte.png"
import logo2 from "../../assets/logos/google.png"
import logo3 from "../../assets/logos/isuzu.png"
import logo4 from "../../assets/logos/kra.png"
import logo5 from "../../assets/logos/safaricom.png"
import logo6 from "../../assets/logos/microsoft.png"
import logo7 from "../../assets/logos/citibank.png"
import logo8 from "../../assets/logos/pwc.png"
import logo9 from "../../assets/logos/standard.png"
import logo10 from "../../assets/logos/equity.png"
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const imagesRef = useRef();

  useEffect(() => {
          const image1 = imagesRef &&  imagesRef.current.querySelector("img:nth-child(1)")
          const image2 = imagesRef &&  imagesRef.current.querySelector("img:nth-child(2)")

          let ctx = gsap.context(() => {
                   gsap.to(image1, {
                         x: "0%",
                         rotation: -8,
                         transformOrigin: "bottom",
                         scrollTrigger: {
                               trigger: imagesRef.current,
                               start: "-50%",
                               end: "bottom",
                               scrub: true,
                               invalidateOnRefresh: true,
                         }
                   })

                   gsap.to(image2, {
                         x: "0%",
                         rotation: 8,
                         transformOrigin: "bottom",
                        scrollTrigger: {
                               trigger: imagesRef.current,
                               start: "-50%",
                               end: "bottom",
                               scrub: true,
                               invalidateOnRefresh: true,
                         }
                   })
          })

          return () => ctx && ctx.revert();
  }, [])
  return (
    <div className="about-section">
               <div className="inner-row">
                          <div className="clients-section">
                                    <h3>Our Clients now work at</h3>
                                   <div className="clients-row">
                                         <div className="client-logos">
                                                     <img src={logo1} alt="" />
                                                     <img src={logo2} alt="" />
                                                     <img src={logo3} alt="" />
                                                     <img src={logo4} alt="" />
                                                    <img src={logo5} alt="" />
                                                    <img src={logo6} alt="" />
                                                    <img src={logo7} alt="" />
                                                    <img src={logo8} alt="" />
                                                    <img src={logo9} alt="" />
                                                    <img src={logo10} alt="" />
                                          </div>
                                  </div>
                          </div>
               </div>
               <div className="about-section-content">
                          <div className="inner-row">
                                     <div className="about-section-container">
                                                 <h2>For over three years, we&apos;ve been passionate about empowering individuals like you to land their dream jobs. We go beyond simply writing resumes - we become your trusted career partner.</h2>


                                                 <div ref={imagesRef} className="about-section-images">
                                                               <img src={about1} alt="" />
                                                               <img src={about2} alt="" />
                                                 </div>

                                                 <div className="extra-about">
                                                           <div className="extra-about-column">
                                                                     <p>Tired of your  applications going unseen? We&apos;re your one-stop shop for a successful job search in Kenya. Our team of skilled resume writers, equipped with the latest techniques, has a proven track record of helping clients across the globe land interviews. We translate that expertise to craft a resume that gets you noticed by employers.</p>
                                                           </div>
                                                           <div className="extra-about-column two">
                                                                    <p>We go beyond writing. We offer personalized guidance throughout the entire job search process, from crafting compelling applications to interview preparation.</p>
                                                                    <Link to={"/about"}>About the Company</Link>
                                                           </div>
                                                 </div>
                                      </div>
                          </div>
               </div>
    </div>
  )
}

export default AboutSection