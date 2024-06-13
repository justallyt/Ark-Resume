import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { CgMenuRight } from "react-icons/cg";
import { useContext } from "react";
import { sidebarContext } from "./navcontext";
const Header = () => {
  const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext)


  return (
    <header>
             <div className="inner-row">
                        <div className="header-content">
                                   <Link to={'/'} className="logo">
                                               <img src={logo} alt="" />
                                   </Link>

                                    <nav>
                                             <ul>
                                                    <li><NavLink to={'/'}>Home</NavLink></li>
                                                    <li><NavLink to={'/about'}>About Us</NavLink></li>
                                                    <li><NavLink to={'/services'}>Services</NavLink></li>
                                                    <li><NavLink to={'/blog'}>Articles</NavLink></li>
                                                    <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
                                            </ul>

                                            <div className="header-action">
                                                     <Link to={"/book-consultation"}>Book Consultation</Link>

                                                     <div className="toggle-btn">
                                                                <span onClick={() => setSidebarStatus(true)}><CgMenuRight /></span>
                                                      </div>
                                            </div>
                                    </nav>
                        </div>
             </div>
    </header>
  )
}

export default Header