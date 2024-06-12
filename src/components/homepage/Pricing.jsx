import { useState } from "react"
import { Link } from "react-router-dom"
import { RxArrowTopRight } from "react-icons/rx";
const Pricing = () => {
  const [ option, setOption ] = useState(0)
  return (
    <div className="pricing-section">
               <div className="inner-row">
                         <div className="pricing-section-content">
                                  <div className="pricing-intro">
                                             <h3>Pricing</h3>
                                              <h1>Request For the Service That Best Suits You.</h1>
                                             <p>We understand that every job search journey is unique. That&apos;s why we offer a variety of resume writing services to fit your specific needs and budget.</p>
                                  </div>

                                  <div className="pricing-tabs">
                                            <ul>
                                                    <li onClick={() => setOption(0)} className={option === 0 ? "active" : ''}>Standard Package</li>
                                                    <li onClick={() => setOption(1)} className={option === 1 ? "active" : ''}>Premium Package</li>
                                                    <li onClick={() => setOption(2)} className={option === 2 ? "active" : ''}>Executive Package</li>
                                            </ul>
                                  </div>

                                  <div className="pricing-tab-wrapper">
                                            { option === 0 ?
                                                  <div className="pricing-tab-content">
                                                          <p className="intro">This package is composed of various pricing options based on experience level to choose from. You can order one or more from the available options:</p>
                                                          
                                                          <h2>CV Writing or Revamp</h2>
                                                          <div className="pricing-package-row">
                                                                   <div className="pricing-package-wrap">
                                                                                <div className="package-box">
                                                                                           <h4>Beginner CV</h4>
                                                                                           <h5>Experience Level: 0 - 1 years</h5>
                                                                                           <p><span>Ksh.</span> 1000</p>
                                                                                </div>
                                                                                <div className="package-box">
                                                                                           <h4>Intermediate CV</h4>
                                                                                           <h5>Experience Level: 2 - 5 years</h5>
                                                                                           <p><span>Ksh.</span> 2000</p>
                                                                                </div>
                                                                                <div className="package-box">
                                                                                            <h4>Mid Level CV</h4>
                                                                                            <h5>Experience Level: 6 - 10 years</h5>
                                                                                            <p><span>Ksh.</span> 3000</p>
                                                                                </div>
                                                                                <div className="package-box">
                                                                                           <h4>Senior CV</h4>
                                                                                           <h5>Experience Level: 10+ years</h5>
                                                                                           <p><span>Ksh.</span> 4000</p>
                                                                                </div>
                                                                   </div>
                                                          </div>
   
                                                          <h2 className="more-stuff">More</h2>
   
                                                          <div className="pricing-package-wrap">
                                                                    <div className="package-box">
                                                                             <h4>Cover Letter</h4>
                                                                             <h5>Experience Level: All levels</h5>
                                                                             <p><span>Ksh.</span> 1000</p>
                                                                   </div>
                                                                   <div className="package-box">
                                                                             <h4>LinkedIn Optimization</h4>
                                                                             <h5>Experience Level: All levels</h5>
                                                                             <p><span>Ksh.</span> 3000</p>
                                                                   </div>
                                                          </div>
                                                </div>
                                              : option === 1 ?
                                                   <div className="pricing-tab-content">
                                                             <p className="intro">This package combines all our main services: Resume writing, Cover letter, LinkedIn Optimization and avails options based on various experience levels.</p>

                                                            <h2>All in One Combo(CV, Cover Letter, LinkedIn Optimization)</h2>
                                                            <div className="pricing-package-wrap">
                                                                      <div className="package-box">
                                                                                  <h4>Beginner</h4>
                                                                                  <h5>Experience Level: 0 - 1 year</h5>
                                                                                  <p><span>Ksh.</span> 3000</p>
                                                                      </div>
                                                                      <div className="package-box">
                                                                                  <h4>Intermediate</h4>
                                                                                  <h5>Experience Level: 2 - 5 years</h5>
                                                                                  <p><span>Ksh.</span> 5000</p>
                                                                      </div>
                                                                      <div className="package-box">
                                                                                  <h4>Mid-Level</h4>
                                                                                  <h5>Experience Level: 6 - 10 years</h5>
                                                                                  <p><span>Ksh.</span> 3000</p>
                                                                      </div>
                                                                      <div className="package-box">
                                                                                  <h4>Senior</h4>
                                                                                  <h5>Experience Level: 10+ years</h5>
                                                                                  <p><span>Ksh.</span> 3000</p>
                                                                      </div>
                                                            </div>
                                                   </div>
                                              : 
                                                    <div className="pricing-tab-content">
                                                              <p className="intro">This is the comprehensive package is curated to give you everything you need to stand out and land your dream job in as little as 3 months. </p>

                                                              <ul>
                                                                      <li>1. Expert Resume Writing/Revamp, Strategic Cover Letter Creation, and LinkedIn Profile Optimization.</li>
                                                                     <li>2. We handle the application process for you, submitting up to 25 high-quality applications per week for 3 months, maximizing your exposure to relevant opportunities.</li>
                                                                     <li>3. We offer additional resources such as salary negotiation strategies and career advice to empower you throughout your job search journey.</li>
                                                                     <li>4.  Personalized coaching sessions, mock interviews, and expert feedback to help you confidently answer any question thrown your way.</li>
                                                              </ul>
                                                    </div>
                                              }
                                             
                                  </div>

                                  <div className="cta-strip">
                                             <h3>Contact us today for a free consultation to discuss your specific needs and unlock your full job search potential!</h3>
                                             <Link to={"/"}>Book Consultation <span><RxArrowTopRight /></span></Link>
                                  </div>
                         </div>
               </div>
    </div>
  )
}

export default Pricing