import { useEffect, useRef } from "react";
import { testimonials } from "../../data/testimonials"
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";

const Testimonials = () => {
    const scrollerRef = useRef();

    useEffect(() => {
        const scrollerInner = scrollerRef.current.querySelector('.testimonials-scroller')
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
               const duplicatedItem = item.cloneNode(true);
               duplicatedItem.setAttribute("aria-hidden", true);
               scrollerInner.appendChild(duplicatedItem);
         })
    }, [])
  return (
    <div className="testimonials-section">
               <div className="testimonials-intro">
                         <h3>Testimonials</h3>
                          <h1>Don&apos;t just take our word for it. See how our clients achieved incredible results!</h1>
               </div>

               <div ref={scrollerRef} className="testimonials-row">
                        <div className="testimonials-scroller">
                                  { testimonials.map(item => 
                                         <div className="testimonial-moja" key={item.id}>
                                                     <div className="top-part">
                                                               <img src={item.icon} alt="" />
                                                               <p className="saying">{item.saying}</p>
                                                     </div>
                                                      <div className="bottom-part">
                                                                <h4>{item.name}</h4>
                                                                { item.rating === 4.5 ?
                                                                       <div className="stars">
                                                                                <span><RiStarFill /></span>
                                                                                <span><RiStarFill /></span>
                                                                                <span><RiStarFill /></span>
                                                                                <span><RiStarFill /></span>
                                                                                <span><RiStarHalfFill /></span>
                                                                       </div> :
                                                                       <div className="stars">
                                                                                <span><RiStarFill /></span>
                                                                                <span><RiStarFill /></span>
                                                                                <span><RiStarFill /></span>
                                                                                <span><RiStarFill /></span>
                                                                                <span><RiStarFill /></span>
                                                                       </div>
                                                                }
                                                                <p>{item.time}</p>
                                                      </div>
                                         </div>
                                  )}
                        </div>
               </div>
    </div>
  )
}

export default Testimonials