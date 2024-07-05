import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { RxDot } from "react-icons/rx";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
            <div className="inner-row">
                      <div className="footer-content">
                               <div className="footer-column">
                                         <div className="logo">
                                                 <img src={logo} alt="" />
                                        </div>         
                                        <ul>
                                                <li><Link to={'/'}><span><RxDot /></span>Home</Link></li>
                                                <li><Link to={"/about-us"}><span><RxDot /></span>About Us</Link></li>
                                                <li><Link to={'/services'}><span><RxDot /></span>Services</Link></li>
                                                <li><Link to={'/articles'}><span><RxDot /></span>Articles</Link></li>
                                                <li><Link to={'/contact-us'}><span><RxDot /></span>Contact Us</Link></li>
                                        </ul>
                               </div>
                               <div className="footer-column">
                                         <h3>Contact Us</h3>
                                         <p>careers@arkresume.com</p>
                                         <p>+254 704 833 441</p>
                               </div>
                      </div>
            </div>

             <div className="copyright">
                        <div className="inner-row">
                                   <div className="copyright-content">
                                             <p>All rights reserved &copy;{ new Date().getFullYear() } Ark Resume</p>

                                             <div className="social-links">
                                                       <ul>
                                                              <li><Link target="_blank" to={'https://web.facebook.com/profile.php?id=100093630061099 '}><span><FaFacebookF /></span></Link></li>
                                                              {/* <li><Link to={'/'}><span><FaXTwitter /></span></Link></li> */}
                                                              <li><Link target="_blank" to={'https://www.instagram.com/ark_resume/ '}><span><FaInstagram /></span></Link></li>
                                                              <li><Link target="_blank" to={'https://www.linkedin.com/company/arkresume/'}><span><FaLinkedinIn /></span></Link></li>
                                                       </ul>
                                             </div>
                                   </div>
                        </div>
             </div>
    </footer>
  )
}

export default Footer