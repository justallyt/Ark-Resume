import { useQuery, gql } from '@apollo/client';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

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

const ArticlesBody = () => {
  const { data } = useQuery(ARTICLES_QUERY);
 const navigate = useNavigate();
  useEffect(() => {
            if(data){
                  localStorage.setItem("Articles", JSON.stringify(data.articles_id))
            }
  }, [data])

  return (
    <div className="articles-body-section">
              <div className="inner-row">
                           <div className="articles-body-content">
                                     <h1 className='intro'>Latest <span>Articles</span> from our Press</h1>

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

export default ArticlesBody