import { CgClose } from "react-icons/cg"
import logo from "../../../assets/logo.png"
import { Link, NavLink } from "react-router-dom"
import { useContext, useEffect, useRef } from "react"
import { sidebarContext } from "./navcontext"
import gsap from "gsap";

const Sidebar = () => {
    const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext)
    const sidebarRef = useRef();
    const closeSidebar = () => setSidebarStatus(false);

    useEffect(() => {
        if(sidebarStatus){
            sidebarRef && sidebarRef.current.classList.add("active");
            const tl = gsap.timeline();

            tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                    y: 0,
                    duration: 1
            })
            tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                   x: 0,
                   duration: 1
            })
    }else{
           const tl = gsap.timeline();
              tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                   x: "-100%",
                   duration: 1
              })

             tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                    y: "-100%",
                    duration: 1
             })
             setTimeout(() => {
                  sidebarRef.current.classList.remove("active")
             }, 2500)
    }
    }, [sidebarStatus])
    
  return (
    <div ref={sidebarRef} className="sidebar-section">
              <div className="sidebar-overlay"></div>
              <div className="sidebar-content">
                         <div className="sidebar-header">
                                    <div className="mobile-logo">
                                            <img src={logo} alt="" />
                                    </div>
                                    <span onClick={closeSidebar}><CgClose /></span>
                         </div>

                         <ul>
                                  <li><NavLink to={'/'}>Home</NavLink></li>
                                  <li><NavLink to={'/about-us'}>About</NavLink></li>
                                  <li><NavLink to={'/services'}>Services</NavLink></li>
                                  <li><NavLink to={'/articles'}>Articles</NavLink></li>
                                  <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
                         </ul>

                         <div className="header-action">
                                  <Link to={'/'}>Book Consultation</Link>
                         </div>
              </div>
    </div>
  )
}

export default Sidebar