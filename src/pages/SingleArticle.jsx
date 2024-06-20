import { useParams } from "react-router-dom"
import Navbar from "../components/common/navigation/Navbar"
import "../css/articles.css"
import { GoDash } from "react-icons/go";
import { Markup } from 'interweave'
import Footer from "../components/common/Footer";

const SingleArticle = () => {
  const { title } = useParams();
  const data = localStorage.getItem("Articles") ? JSON.parse(localStorage.getItem("Articles")).find(item => item.slug === title) : []
 console.log(data)
  console.log(title)
  return (
    <>
          <Navbar />
          <div className="single-article-body">
                    <div className="article-image">
                               <img src={data.mainImage.url} alt="" />
                    </div>
                    <div className="articles-body">
                            <h1>{data.title}</h1>

                           <div className="author-strip">
                                     <img src={data.authorImage.url} alt="" />
                                     <h4>{data.authorName}</h4>
                                     <span><GoDash /></span>
                                     <p>{data.timeOfRead} read</p>
                           </div>

                            <div className="articles-content">
                                    <Markup content={data.blogContent.html} />
                            </div>

                   </div>
          </div>

          <Footer />
    </>
  )
}

export default SingleArticle