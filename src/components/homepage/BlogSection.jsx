import { Link, useNavigate } from "react-router-dom"
import { RxArrowTopRight } from "react-icons/rx";
import { useQuery, gql } from '@apollo/client';
import { useEffect } from "react";

const ARTICLES_QUERY = gql`
      query Articles {
             articles_id {
                    timeOfRead
                    title
                    id
                    blogContent {
                          html
                    }
                  authorName
                  slug
                  category
                  authorImage {
                        url
                   }
                 mainImage {
                     url
                 }
         }
}
`
const BlogSection = () => {
  const { data } = useQuery(ARTICLES_QUERY);

  useEffect(() => {
            if(data){
                  localStorage.setItem("Articles", JSON.stringify(data.articles_id))
            }
  }, [data])

  const navigate = useNavigate();
  return (
    <div className="blog-section">
             <div className="inner-row">
                         <div className="blog-section-content">
                                     <div className="blog-intro">
                                             <h2>See the latest <span>Articles</span> from our press.</h2>
                                             <p>Over the years, we&apos;ve honed our skills to craft winning resumes that get results. Our team is dedicated to helping you stand out from the crowd and land your dream job.</p>
                                             <Link to={'/articles'}>View All Articles <span><RxArrowTopRight /></span></Link>
                                     </div>

                                     <div className="blog-content-row">
                                              { localStorage.getItem("Articles") && JSON.parse(localStorage.getItem("Articles")).map(item => 
                                                         <div className="blog-moja" key={item.id} onClick={() => navigate(`/articles/${item.slug}`)}>
                                                                    <div className="blog-image">
                                                                               <img src={item.mainImage && item.mainImage.url} alt="blog1" />
                                                                    </div>
                                                                    <h3>{item.category}</h3>
                                                                    <h1>{item.title}</h1>
                                                        </div>
                                              )}
                                     </div>
                         </div>
             </div>
    </div>
  )
}

export default BlogSection