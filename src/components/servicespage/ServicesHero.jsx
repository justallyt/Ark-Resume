import servicesHero from "../../assets/servicesHero.jpg"
const ServicesHero = () => {
  return (
    <div className="services-hero">
            <div className="services-hero-texts">
                       <div className="inner-row">
                                  <div className="services-hero-row">
                                            <h1>Our success is measured by <span>Your Success</span>.</h1>
                                            <p>We craft powerful resumes for discerning professionals like you.  Using proven strategies and meticulous attention to detail, we empower you to showcase your skills and experiences, taking control of your job search journey.</p>
                                  </div>
                       </div>
            </div>

            <img src={servicesHero} alt="" />
    </div>
  )
}

export default ServicesHero