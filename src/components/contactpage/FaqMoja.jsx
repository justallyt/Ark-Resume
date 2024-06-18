/* eslint-disable react/prop-types*/
import { useState } from "react"
import { GoChevronDown } from "react-icons/go"
const FaqMoja = ({ faq }) => {
    const [ status, setStatus ] = useState(false);
  return (
    <div className="faq-moja">
             <div className={status ? "faq-header active" : "faq-header"} onClick={() => setStatus(!status)}>
                      <h3>{faq.question}</h3>
                      <span><GoChevronDown /></span>
             </div>
             <div className={ status ? "faq-answer active" : "faq-answer"}>
                       <div className="answer-inner">
                                  <p>{faq.answer}</p>
                       </div>
             </div>
</div>
  )
}

export default FaqMoja