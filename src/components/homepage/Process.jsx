import blob1 from "../../assets/blob1.svg"
import blob2 from "../../assets/blob2.svg"
import blob3 from "../../assets/blob3.svg"
import blob4 from "../../assets/blob4.svg"
import book from "../../assets/book.png"
import document from "../../assets/document.png"
import payment from "../../assets/payment.png"
import completion from "../../assets/completion.png"

const Process = () => {
  return (
    <div className="process-section">
               <div className="inner-row">
                       <div className="process-intro">
                                   <h3>Level up your Job Hunt</h3>
                                   <h1>Get to understand how we serve our Clients</h1>
                       </div>

                       <div className="process-row">
                                <div className="process-moja">
                                             <div className="icon">
                                                     <img className="ico" src={book} alt="" />
                                                     <img className="blob" src={blob1} alt="" />
                                             </div>
                                             <h3>Book Consultation</h3>
                                             <p>Schedule a complimentary consultation with our lead resume writer. This initial chart allows us to understand your unique career goals, industry experience, and desired positions.</p>
                                </div>
                                <div className="process-moja">
                                             <div className="icon">
                                                     <img className="ico" src={document} alt="" />
                                                     <img className="blob" src={blob2} alt="" />
                                             </div>
                                             <h3>Submission of Documents</h3>
                                             <p>You&apos;ll submit any relevant documents such as your current resume, job descriptions for target positions, and any additional information that showcases your skills and achievements.</p>
                                </div>
                                <div className="process-moja">
                                             <div className="icon">
                                                     <img className="ico" src={payment} alt="" />
                                                     <img className="blob" src={blob3} alt="" />
                                             </div>
                                             <h3>Payment Initiation & Completion</h3>
                                             <p>After finalizing the scope, you&apos;ll be able to make a secure payment to get started. We offer flexible payment options to fit your needs.</p>
                                </div>
                                <div className="process-moja">
                                             <div className="icon">
                                                     <img className="ico" src={completion} alt="" />
                                                     <img className="blob" src={blob4} alt="" />
                                             </div>
                                             <h3>Resume Product Delivery</h3>
                                             <p>Within the agreed-upon timeframe, you&apos;ll receive your expertly crafted resume. We&apos;ll also be available to answer any questions you have and ensure you&apos;re completely satisfied with the final product.</p>
                                </div>
                       </div>
               </div>
    </div>
  )
}

export default Process