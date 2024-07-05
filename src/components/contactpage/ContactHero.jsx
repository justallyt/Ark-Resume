import ContactForm from "./ContactForm"

const ContactHero = () => {
  return (
    <div className="contact-hero">
               <div className="inner-row">
                           <div className="contact-hero-content">
                                     <div className="contact-hero-texts">
                                                 <h1>Contact Us</h1>
                                                 <p className="intro">Email, call or complete the form to learn how Ark Resume can help you target and achieve your career goals.</p>

                                                 <div className="info-texts">
                                                           <p>info@arkresume.com</p>
                                                           <p>+254 704 833 441</p>
                                                 </div>

                                                 <div className="hero-info-row">
                                                           <div className="info-box">
                                                                    <h3>Customer Support</h3>
                                                                    <p>Our support team is available around the clock to address any concerns or queries you may have.</p>
                                                           </div>
                                                           <div className="info-box">
                                                                     <h3>Feedback and Suggestions</h3>
                                                                     <p>We welcome your feedback and are continuously working to improve. Your input is crucial is shapping the future of Ark Resume.</p>
                                                           </div>
                                                 </div>
                                     </div>
                                     <div className="contact-hero-form">
                                               <ContactForm />
                                     </div>
                           </div>
               </div>
    </div>
  )
}

export default ContactHero