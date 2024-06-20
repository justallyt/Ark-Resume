import ats1 from "../../assets/cv1.jpg"
import ats2 from "../../assets/cv2.jpg"
import cover1 from "../../assets/cover1.jpg"
import cover2 from "../../assets/cover2.jpg"
import linkedin1 from "../../assets/linkedin2.jpg"
import linkedin2 from "../../assets/linkedin1.jpg"
import job1 from "../../assets/job1.jpg"
import job2 from "../../assets/job2.jpg"

const ServicesBody = () => {
  return (
    <div className="services-body-section">
                      <div className="services-body-content">
                               <div className="inner-row">
                                         <div className="services-body-intro">
                                                     <h3>What We Do</h3>
                                                     <h1>We position you to attract and find more Job Opportunities.</h1>
                                                     <p>Our experts ensure your resume and online presence are interview-ready, maximizing your chances of landing the perfect job.</p>
                                          </div>
                               </div>

                                <div className="services-body-wrapper">
                                             <div className="services-body-strip">
                                                         <div className="inner-row">
                                                                    <div className="services-body-strip-row">
                                                                           <div className="services-image-column">
                                                                                    <img src={ats1} alt="" />
                                                                                    <img src={ats2} alt="" />
                                                                            </div>               
                                                                            <div className="services-body-texts">
                                                                                       <h2>ATS Beating Resume/CV: Outsmart the System, Land Your Dream Job</h2>
                                                                                       <p>Applicant Tracking Systems (ATS) are software programs used by many companies to screen resumes electronically. Our experts understand how ATS works and the keywords they scan for ensuring we craft a resumes that passes the screening process and lands in the hands of human recruiters. We format using clear headings, bullet points and consistent fonts. While optimizing for ATS, we don&apos;t compromise on quality. We set up a compelling narrative that showcases your skills and achievements in a way that resonates with human reviewers.</p>
                                                                                       <p>Not all companies rely heavily on ATS. However, having an ATS-friendly resume is a best practice for maximizing your chances. We craft an effective job search strategy by combining an optimized resume with other tactics as well ultimately increasing your chances of landing your dream job.</p>
                                                                            </div>
                                                                    </div>
                                                         </div>
                                             </div>

                                             <div className="services-body-strip">
                                                           <div className="inner-row">
                                                                     <div className="services-body-strip-row">
                                                                             <div className="services-body-texts">
                                                                                     <h2>Unleash the Magic of Your Cover Letter: Craft a Spellbinding Introduction</h2>
                                                                                     <p>Forget generic templates and one-size-fits-all approaches. &quot;Cover Letter Magic&quot; isn&apos;t about cookie-cutter formulas. It&apos;s about harnessing the power of storytelling to captivate hiring managers and open the door to your dream opportunity.</p>
                                                                                     <p>Imagine crafting a cover letter that transcends mere qualifications. Imagine a compelling narrative that showcases your unique value proposition, ignites enthusiasm for your skills, and leaves a lasting impression. That&apos;s the magic we create. Our service delves beyond the resume, drawing out your professional story and weaving it into a captivating introduction that sets you apart from the competition.</p>
                                                                             </div>
                                                                             <div className="services-image-column">
                                                                                          <img src={cover2} alt="" />
                                                                                          <img src={cover1} alt="" />
                                                                               </div>
                                                                     </div>
                                                           </div>
                                             </div>

                                             <div className="services-body-strip">
                                                         <div className="inner-row">
                                                                    <div className="services-body-strip-row">
                                                                           <div className="services-image-column">
                                                                                    <img src={linkedin1} alt="" />
                                                                                    <img src={linkedin2} alt="" />
                                                                            </div>               
                                                                            <div className="services-body-texts">
                                                                                       <h2>Transform Your LinkedIn Profile: From Passive to Powerhouse</h2>
                                                                                       <p>Your LinkedIn profile is your digital storefront in the professional world. But is it merely a static resume replica, or is it a dynamic platform that attracts opportunities? Our &quot;LinkedIn Makeover&quot; goes beyond a simple refresh. We transform your profile into a magnet for recruiters and hiring managers.</p>
                                                                                       <p>Imagine a profile that showcases your expertise, not just lists past roles. We craft a compelling headline that grabs attention, a captivating summary that tells your professional story, and keyword-rich content that positions you as a thought leader in your industry.  We optimize your profile for searchability, ensuring recruiters find you for relevant opportunities. With a strategically crafted visual presence, including a professional headshot and eye-catching visuals, you&apos;ll leave a lasting positive impression. Let us unlock the true power of your LinkedIn profile and turn you from a passive observer into a career powerhouse.</p>
                                                                            </div>
                                                                    </div>
                                                         </div>
                                             </div>

                                             <div className="services-body-strip">
                                                           <div className="inner-row">
                                                                     <div className="services-body-strip-row">
                                                                             <div className="services-body-texts">
                                                                                     <h2>Feeling Overwhelmed by the Job Search? We&apos;ve Got You Covered.</h2>
                                                                                     <p>Let&apos;s face it, the traditional job search can be a daunting and time-consuming process. Scouring endless job boards, crafting countless applications, and facing the uncertainty of interview prospects can leave anyone feeling discouraged. Here at Ark Resume, we believe your job search shouldn&apos;t be a solo mission. That&apos;s why we offer a comprehensive service that takes the burden off your shoulders and propels you toward your dream career.</p>
                                                                                     <p>Imagine a streamlined journey where we handle the heavy lifting.  Our expert team will curate a personalized job search strategy, identifying quality opportunities that perfectly align with your skills and aspirations. We&apos;ll guide you through the application process, ensuring your resume and cover letter stand out from the crowd.  But it doesn&apos;t stop there. We&apos;ll even offer interview coaching and preparation to boost your confidence and help you land the job you deserve.  With our guidance and support, your job search transforms from a frustrating chore into a path paved with success.</p>
                                                                             </div>
                                                                             <div className="services-image-column">
                                                                                          <img src={job1} alt="" />
                                                                                          <img src={job2} alt="" />
                                                                               </div>
                                                                     </div>
                                                           </div>
                                             </div>
                                </div>
                      </div>
    </div>
  )
}

export default ServicesBody