import Navbar from "../components/common/navigation/Navbar"
import Footer from "../components/common/Footer"
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios"

const Book = () => {
  const API_PATH = import.meta.env.VITE_BOOKING_FORM_URL ;
  const { register, handleSubmit , formState: { errors }, reset} = useForm();
  const [btnMsg, setBtnMsg] = useState("Book Now");
  const [serverMsg, setServerMsg] = useState("")

  const submitBooking = (form_data) => {
    setBtnMsg("Booking...");
    try {
      axios.post(API_PATH, {
           form_data: form_data
          }).then(res => {
                  setServerMsg(res.data.message);
                  reset();
            }).finally(() =>{
                 setBtnMsg('Booked')
                 setTimeout(() => {
                      setBtnMsg('Book Now');
                      setServerMsg('')
                 }, 5000)
            })
 } catch (error) {
      setBtnMsg('Book Now');
      setServerMsg('')
 }
  }
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
                                                   <form onSubmit={handleSubmit(submitBooking)}>
                                                             <div className="form-row split">
                                                                       <div className="form-column">
                                                                                 <div className="input-row">
                                                                                        <label htmlFor="firstname">Firstname</label>
                                                                                        <input type="text" className="form-control" placeholder="First name" {...register("firstname", { required: "Firstname input is required"})} />
                                                                                 </div>
                                                                                 <span className="error">{errors.firstname && errors.firstname.message}</span>
                                                                       </div>
                                                                       <div className="form-column">
                                                                                <div className="input-row">
                                                                                            <label htmlFor="lastname">Lastname</label>
                                                                                            <input type="text" className="form-control" placeholder="Last name" {...register("lastname", { required: "Lastname input is required"})} />
                                                                                </div>
                                                                                <span className="error">{errors.lastname && errors.lastname.message}</span>
                                                                       </div>
                                                             </div>
                                                             <div className="form-row split">
                                                                         <div className="form-column">
                                                                                <div className="input-row">
                                                                                          <label htmlFor="email">Email</label>
                                                                                          <input type="email" {...register("email", { required: "Email address input is required"})} className="form-control" placeholder="Email address" />
                                                                                          <span className="error">{errors.email && errors.email.message}</span>
                                                                                </div>
                                                                         </div>
                                                                         <div className="form-column">
                                                                                  <div className="input-row">
                                                                                            <label htmlFor="phone">Phone Number</label>
                                                                                            <input type="number" className="form-control" placeholder="+254 712345678" pattern="+[0,9]" {...register("phone", { required: "Phone number input is required"})} />
                                                                                  </div>
                                                                                  <span className="error">{errors.phone && errors.phone.message}</span>
                                                                         </div>
                                                             </div>
                                                             <input type="text" {...register("honey")} className="honey-special"/>
                                                             <div className="form-row">
                                                                        <label htmlFor="date">Schedule a date of appointment</label>
                                                                        <input type="date" className="form-control" {...register("appointment_date", {required: "Appointment date is required"})} />
                                                                        <span className="error">{errors.appointment_date && errors.appointment_date.message}</span>
                                                             </div>
                                                             <div className="form-row">
                                                                        <label htmlFor="service">Type of Service</label>
                                                                        <select {...register("service_type", { required: "Please select a service"})} className="form-control">
                                                                                  <option value="">Choose the service you require</option>
                                                                                  <option value="Modern Resume">Modern Resume</option>
                                                                                  <option value="Cover Letter">Cover Letter</option>
                                                                                  <option value="Linkedin Optimization">LinkedIn Optimization</option>
                                                                                  <option value="Job Search Assistance">Job Search Assistance</option>
                                                                        </select>
                                                                        <span className="error">{errors.service_type && errors.service_type.message}</span>
                                                             </div>
                                                             <div className="form-row">
                                                                      <label htmlFor="info">Extra Info</label>
                                                                       <textarea {...register("info")} placeholder="Any extra info you'd like to add"></textarea>
                                                             </div>

                                                             <div className="form-btn">
                                                                        <button type="submit">{btnMsg}</button>
                                                             </div>

                                                             <div className="server-msg">{serverMsg}</div>
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