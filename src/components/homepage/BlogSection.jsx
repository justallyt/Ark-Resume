import { Link } from "react-router-dom"
import { RxArrowTopRight } from "react-icons/rx";
import blog1 from "../../assets/blog1.jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"

const BlogSection = () => {
  return (
    <div className="blog-section">
             <div className="inner-row">
                         <div className="blog-section-content">
                                     <div className="blog-intro">
                                             <h2>See the latest <span>Articles</span> from our press.</h2>
                                             <p>Over the years, we&apos;ve honed our skills to craft winning resumes that get results. Our team is dedicated to helping you stand out from the crowd and land your dream job.</p>
                                             <Link to={'/'}>View All Articles <span><RxArrowTopRight /></span></Link>
                                     </div>

                                     <div className="blog-content-row">
                                               <div className="blog-moja">
                                                          <div className="blog-image">
                                                                     <img src={blog1} alt="blog1" />
                                                          </div>
                                                          <h3>LinkedIn Design, January 31, 2024</h3>
                                                          <h1>Innovations and Solutions in Our Firm</h1>
                                               </div>
                                               <div className="blog-moja">
                                                          <div className="blog-image">
                                                                     <img src={blog2} alt="blog1" />
                                                          </div>
                                                          <h3>ATS Design, February 31, 2024</h3>
                                                          <h1>Our Trio of Breakthrough Solutions</h1>
                                               </div>
                                               <div className="blog-moja">
                                                          <div className="blog-image">
                                                                     <img src={blog3} alt="blog1" />
                                                          </div>
                                                          <h3>Resume Optimization, March 31, 2024</h3>
                                                          <h1>Strategies for Building a Thriving Resume</h1>
                                               </div>
                                     </div>
                         </div>
             </div>
    </div>
  )
}

export default BlogSection