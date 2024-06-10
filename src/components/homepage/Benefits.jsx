import benefits from "../../assets/benefits.jpg"
import benefit1 from "../../assets/benefit1.png"
import benefit2 from "../../assets/benefit2.png"
import benefit3 from "../../assets/benefit3.png"
import benefit4 from "../../assets/benefit4.png"

const Benefits = () => {
  return (
    <div className="benefits-section">
              <div className="benefits-texts-column">
                      <div className="benefits-inner">
                                <div className="benefits-intro">
                                         <h3>Why Choose to Work with Us</h3>
                                         <h1>Get the competitive edge with expertly crafted resumes.</h1>
                                 </div>
                                 <div className="benefits-row">
                                           <div className="benefit-moja">
                                                       <div className="icon">
                                                                   <img src={benefit1} alt="" />
                                                       </div>
                                                       <h3>Industry-Specific Expertise & Customization</h3>
                                                       <p>We go beyond generic templates. We tailor your resume to resonate, showcase the specific skills and achievements valued with your target field.</p>
                                           </div>
                                           <div className="benefit-moja">
                                                       <div className="icon">
                                                                   <img src={benefit2} alt="" />
                                                       </div>
                                                       <h3>Data-Driven Optimization & ATS Friendliness</h3>
                                                       <p>Our team stays up-to-date on Applicant Tracking System trends and utilizes keywords and formatting strategies to bypass the systems and land your resume on the hiring manager&apos;s desk.</p>
                                           </div>
                                           <div className="benefit-moja">
                                                       <div className="icon">
                                                                   <img src={benefit3} alt="" />
                                                       </div>
                                                       <h3>Holistic Job Search Support & Interview Coaching</h3>
                                                       <p>We go beyond the resume to offer personalized guidance throughout your entire job search process to equip you with the complete package to confidently navigate every step of the hiring process.</p>
                                           </div>
                                           <div className="benefit-moja">
                                                       <div className="icon">
                                                                   <img src={benefit4} alt="" />
                                                       </div>
                                                       <h3>Guaranteed Satisfaction & Collaborative Approach</h3>
                                                       <p>We are so confident in our work that we offer a 100% satisfaction guarantee. We believe in a collaborative approach, working closely with you ensure your final resume accurately reflects your unique strengths and career aspirations.</p>
                                           </div>
                                 </div>
                      </div>
              </div>
              <div className="benefits-image-column">
                      <img src={benefits} alt="" />
              </div>
    </div>
  )
}

export default Benefits