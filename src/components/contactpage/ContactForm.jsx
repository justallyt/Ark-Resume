
const ContactForm = () => {
  return (
       <div className="contact-form">
                <h2>Get in Touch</h2>
                <p>You can reach us at any time.</p>
                <form>
                         <div className="form-row split">
                                    <div className="form-row-column">
                                              <input type="text" className="form-control" placeholder="First name"  />
                                    </div>
                                    <div className="form-row-column">
                                              <input type="text" className="form-control" placeholder="Last name" />
                                    </div>
                         </div>
                         <div className="form-row">
                                     <input type="email" className="form-control" placeholder="Your email" />
                         </div>
                         <div className="form-row">
                                    <input type="number" placeholder="Phone number" className="form-control" pattern="+[0,9]"  />
                         </div>
                         <div className="form-row">
                                   <textarea placeholder="How can we help?"></textarea>
                         </div>

                         <div className="form-btn">
                                    <button>Submit</button>
                         </div>
                </form>
       </div>
  )
}

export default ContactForm