import { Faqs } from "../../data/faq";
import FaqMoja from "./FaqMoja";

const FaqSection = () => {
  return (
    <div className="faq-section">
              <div className="inner-row">
                       <div className="faq-section-content">
                                  <div className="faq-texts">
                                            <h1>Frequently Asked Questions</h1>
                                            <p>Most, if not all of your questions about resume writing, cover letters, linkedin are answered here.</p>
                                  </div>

                                  <div className="faqs-body">
                                              { Faqs.map(item => <FaqMoja key={item.id} faq={item} />)}
                                  </div>
                       </div>
              </div>
    </div>
  )
}

export default FaqSection