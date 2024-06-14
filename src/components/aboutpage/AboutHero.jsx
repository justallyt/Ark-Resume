import aboutImage from "../../assets/about3.jpg"

const AboutHero = () => {
  return (
    <div className="about-hero-section">
              <div className="inner-row">
                        <div className="about-hero-content">
                                     <div className="about-hero-texts">
                                              <h1>We specialize in crafting <span>powerful resumes</span> and <span>comprehensive job search support</span>.</h1>

                                              <div className="hero-paragraphs">
                                                       <p>Ark Resume is a leading Kenyan career services company dedicated to empowering professionals across all stages of their careers. We help you make a strong first impression with a well-crafted resume that highlights your academic achievements, relevant skills, and volunteer experience. </p>
                                                       <p>Whether you&apos;re a recent graduate, a mid-level professional, or a seasoned senior manager or executive, our team of experienced resume writers in Kenya understands the unique needs of the local job market. We tailor our services to your specific career level and industry, ensuring your resume effectively showcases your skills and achievements to Kenyan hiring managers.</p>
                                              </div>
                                     </div>
                                     <div className="about-hero-image">
                                                <img src={aboutImage} alt="" />
                                     </div>
                        </div>
              </div>
    </div>
  )
}

export default AboutHero