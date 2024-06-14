import { useRef, useEffect } from "react"
import about1 from "../../assets/about4.jpg"
import about2 from "../../assets/about5.jpg"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
const AboutBody = () => {
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
    <div className="about-body-section">
               <div className="inner-row">
                        <div className="about-body-content">
                                   <div className="about-body-numbers">
                                              <div className="about-number-moja">
                                                         <h1>500+</h1>
                                                         <p>Happy Clients</p>
                                              </div>
                                              <div className="about-number-moja">
                                                         <h1>5+</h1>
                                                         <p>Years of Work</p>
                                              </div>
                                              <div className="about-number-moja">
                                                         <h1>1500+</h1>
                                                         <p>Successfully Crafted Resumes</p>
                                              </div>
                                   </div>

                                   <div ref={imagesRef} className="about-section-images">
                                            <img src={about1} alt="" />
                                            <img src={about2} alt="" />
                                  </div>

                                  <div className="about-statements">
                                              <div className="statement-moja">
                                                       <h3>Our Mission</h3>
                                                       <p>To empower Kenyan job seekers with the tools and confidence they need to land their dream jobs. We achieve this by crafting personalized, impactful resumes that become powerful spotlights on your unique strengths and experiences.</p>
                                              </div>
                                              <div className="statement-moja">
                                                        <h3>Our Vision</h3>
                                                        <p>A world where every job seeker embarks on their dream career path with unwavering confidence and the tools to succeed. We envision Ark Resume as the leading force in career services, recognized for our unwavering commitment to excellence, innovation, and client success. </p>
                                              </div>
                                  </div>
                        </div>
               </div>
    </div>
  )
}

export default AboutBody