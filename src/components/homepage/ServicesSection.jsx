import group1 from "../../assets/group1.png"
import group2 from "../../assets/group2.png"
import group3 from "../../assets/group3.png"
import group4 from "../../assets/group4.png"
const ServicesSection = () => {
  return (
    <div className='services-section'>
                <div className="inner-row">
                           <div className="services-content">
                                       <div className="service-intro">
                                                 <h3>What We Do</h3>
                                                 <h2>We position you to attract and find more Job Opportunities.</h2>
                                                 <p>Our experts ensure your resume and online presence are interview-ready, maximizing your chances of landing the perfect job.</p>
                                       </div>

                                       <div className="services-row">
                                                 <div className="service-moja">
                                                             <div className="icon">
                                                                        <img src={group1} alt="" />
                                                             </div>
                                                             <h2>ATS Beating Resume/CV</h2>
                                                             <p>We craft modern, high-quality resumes tailored to your industry that bypass Applicant Tracking Systems (ATS) and land in front of hiring managers.</p>
                                                 </div>
                                                 <div className="service-moja">
                                                             <div className="icon">
                                                                        <img src={group2} alt="" />
                                                             </div>
                                                             <h2>Cover Letter Magic</h2>
                                                             <p>Don&apos;t settle for generic! We create compelling cover letters that showcase your unique fit for each specific job opportunity, making you stand out from the crowd.</p>
                                                 </div>
                                                 <div className="service-moja">
                                                             <div className="icon">
                                                                        <img src={group3} alt="" />
                                                             </div>
                                                             <h2>LinkedIn Makeover</h2>
                                                             <p>Get recruiter-ready with an SEO-optimized LinkedIn profile that highlights your skills and experience. Attract opportunities and impress your network.</p>
                                                 </div>
                                                 <div className="service-moja">
                                                             <div className="icon">
                                                                        <img src={group4} alt="" />
                                                             </div>
                                                             <h2>Job Search Simplified</h2>
                                                             <p>We take the hassle out of finding the perfect job. Let us help you identify and apply for high-quality positions that are a great fit for your skills and career goals.</p>
                                                 </div>
                                       </div>
                           </div>
                </div>
    </div>
  )
}

export default ServicesSection