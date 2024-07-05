import Navbar from "../components/common/navigation/Navbar"
import Footer from "../components/common/Footer"
const Book = () => {
  return (
    <>
          <Navbar />
          <div className="booking-wrapper">
                   <div className="inner-row">
                              <div className="booking-content">
                                         <div className="booking-intro">
                                                  <h2>Book a Consultation with Us</h2>
                                                  <p>We can help you craft powerful application materials that showcase your skills and experience, maximizing your chances of getting noticed by hiring managers.</p>
                                         </div>

                                         <div className="booking-form">
                                                   <form action="">
                                                             <div className="form-row split">
                                                                       <div className="form-column">
                                                                                 <label htmlFor="firstname">Firstname</label>
                                                                                 <input type="text" className="form-control" placeholder="First name" />
                                                                       </div>
                                                                       <div className="form-column">
                                                                                 <label htmlFor="lastname">Lastname</label>
                                                                                 <input type="text" className="form-control" placeholder="Last name" />
                                                                       </div>
                                                             </div>
                                                             <div className="form-row split">
                                                                         <div className="form-column">
                                                                                  <label htmlFor="email">Email</label>
                                                                                  <input type="email" className="form-control" placeholder="Email address" />
                                                                         </div>
                                                                         <div className="form-column">
                                                                                  <label htmlFor="phone">Phone Number</label>
                                                                                  <input type="number" className="form-control" placeholder="+254 712345678" pattern="+[0,9]" />
                                                                         </div>
                                                             </div>
                                                             <div className="form-row">
                                                                        <label htmlFor="date">Schedule a date of appointment</label>
                                                                        <input type="date" className="form-control" />
                                                             </div>
                                                             <div className="form-row">
                                                                        <label htmlFor="service">Type of Service</label>
                                                                        <select name="" className="form-control">
                                                                                  <option value="">Choose the service you require</option>
                                                                                  <option value="Modern Resume">Modern Resume</option>
                                                                                  <option value="Cover Letter">Cover Letter</option>
                                                                                  <option value="Linkedin Optimization">LinkedIn Optimization</option>
                                                                                  <option value="Job Search Assistance">Job Search Assistance</option>
                                                                        </select>
                                                             </div>
                                                             <div className="form-row">
                                                                      <label htmlFor="info">Extra Info</label>
                                                                       <textarea name="" placeholder="Any extra info you'd like to add"></textarea>
                                                             </div>

                                                             <div className="form-btn">
                                                                        <button type="submit">Book Now</button>
                                                             </div>
                                                   </form>
                                         </div>
                              </div>
                   </div>
          </div>

          <Footer />
    </>
  )
}

export default Book