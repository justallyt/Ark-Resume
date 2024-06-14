import value1 from "../../assets/benefit1.png"
import value2 from "../../assets/benefit2.png"
import value3 from "../../assets/benefit3.png"
import value4 from "../../assets/benefit4.png"

const Values = () => {
  return (
    <div className="values-section">
            <div className="inner-row">
                        <div className="values-section-content">
                                    <div className="values-intro">
                                                <h1>Core Values that Power your Success</h1>
                                                <p>At Ark Resume, we believe your career journey deserves a partner who shares your goals. Here are the core values that drive our commitment to your success:</p>
                                    </div>

                                    <div className="values-row">
                                               <div className="value-moja">
                                                          <div className="icon">
                                                                    <img src={value1} alt="" />
                                                          </div>
                                                          <h3>Client-Centric Approach</h3>
                                                          <p>We prioritize understanding your unique strengths, experiences, and career aspirations. Every resume we craft is personalized to effectively showcase your value proposition to potential employers.</p>
                                               </div>
                                               <div className="value-moja">
                                                          <div className="icon">
                                                                    <img src={value2} alt="" />
                                                          </div>
                                                          <h3>Excellence in Resume Writing</h3>
                                                          <p>Our team of experienced writers in depth knowledge and current trends. We craft compelling resumes that bypass these ATS systems and land directly on hiring managers&apos; desks.</p>
                                               </div>
                                               <div className="value-moja">
                                                          <div className="icon">
                                                                    <img src={value3} alt="" />
                                                          </div>
                                                          <h3>Collaborative Partnership</h3>
                                                          <p>We believe in a collaborative approach. Throughout the process, we work closely with you, incorporating your feedback and ensuring your final resume accurately reflects your personal brand.</p>
                                               </div>
                                               <div className="value-moja">
                                                          <div className="icon">
                                                                    <img src={value4} alt="" />
                                                          </div>
                                                          <h3>Unwavering Support</h3>
                                                          <p>Your success is our success. We offer ongoing support beyond resume writing. Whether it&apos;s cover letter creation, interview coaching, or job search strategy guidance, Ark Resume is there to empower you throughout your entire career journey.</p>
                                               </div>
                                    </div>
                        </div>
            </div>
    </div>
  )
}

export default Values