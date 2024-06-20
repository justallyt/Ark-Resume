import ArticlesBody from "../components/common/ArticlesBody"
import Navbar from "../components/common/navigation/Navbar"
import "../css/articles.css"
import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
const Articles = () => {
  return (
    <>
           <Navbar />
           <ArticlesBody />
           <CallToAction />
           <Footer />
    </>
  )
}

export default Articles