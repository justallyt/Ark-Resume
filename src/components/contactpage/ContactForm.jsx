import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios"

const ContactForm = () => {
  const API_PATH = import.meta.env.VITE_CONTACT_FORM_URL ;
  const { register, handleSubmit , formState: { errors }, reset} = useForm();
  const [btnMsg, setBtnMsg] = useState("Submit Message");
  const [serverMsg, setServerMsg] = useState("")

  const submitForm = (form_data) => {
    setBtnMsg("Sending...");
    try {
      axios.post(API_PATH, {
           form_data: form_data
          }).then(res => {
                  setServerMsg(res.data.message);
                  reset();
            }).finally(() =>{
                 setBtnMsg('Sent')
                 setTimeout(() => {
                      setBtnMsg('Submit Message');
                      setServerMsg('')
                 }, 5000)
            })
 } catch (error) {
      setBtnMsg('Submit Message');
      setServerMsg('')
 }
  }
  return (
       <div className="contact-form">
                <h2>Get in Touch</h2>
                <p>You can reach us at any time.</p>
                <form onSubmit={handleSubmit(submitForm)}>
                         <div className="form-row split">
                                    <div className="form-row-column">
                                              <div className="input-row">
                                                        <input type="text" {...register("firstname", { required: "Firstname input is required"})} className="form-control" placeholder="First name"  />
                                              </div>
                                              <span className="error">{errors.firstname && errors.firstname.message}</span>
                                    </div>
                                    <div className="form-row-column">
                                               <div className="input-row">
                                                        <input type="text" {...register("lastname", { required: "Lastname input is required"})} className="form-control" placeholder="Last name" />
                                               </div>
                                                <span className="error">{errors.lastname && errors.lastname.message}</span>
                                    </div>
                         </div>
                         <input type="text" {...register("honey")} className="honey-special"/>
                         <div className="form-row">
                                     <input type="email" {...register("email", { required: 'Email input is required'})} className="form-control" placeholder="Your email" />
                                     <span className="error">{errors.email && errors.email.message}</span>
                         </div>
                         <div className="form-row">
                                    <input type="number" {...register("phone", { required: "Phone number input is required"})} placeholder="Phone number" className="form-control" pattern="+[0,9]"  />
                                    <span className="error">{errors.phone && errors.phone.message}</span>
                         </div>
                         <div className="form-row">
                                   <textarea placeholder="How can we help?" {...register("msg", { required: "Message inquiry input is required"})}></textarea>
                                   <span className="error">{errors.msg && errors.msg.message}</span>
                         </div>

                         <div className="form-btn">
                                    <button type="submit">{btnMsg}</button>
                         </div>

                         <p className="server-msg">{serverMsg}</p>
                </form>
       </div>
  )
}

export default ContactForm