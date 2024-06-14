import { Link, useLocation } from "react-router-dom"
import { RxArrowTopRight } from "react-icons/rx";
const CallToAction = () => {
  const { pathname } = useLocation();

  return (
    <div className={ pathname === "/" ? "call-to-action" : "call-to-action adjust"}>
              <div className="inner-row">
                          <div className="call-to-action-content">
                                    <h1>Ready To Convert your Resume into your Dream Job Magnet?</h1>
                                    <p>Our expert resume writing services will transform your resume into a powerful tool that gets you noticed by hiring managers.</p>
                                    <Link to={'/'}>Let&apos;s get Started <span><RxArrowTopRight /></span></Link>
                          </div>
              </div>
    </div>
  )
}

export default CallToAction