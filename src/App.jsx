import { useEffect } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import Book from './pages/Book';

function App() {
   const location = useLocation();

   //always start pages at the top
   useEffect(() => {
         window.scrollTo(0, 0);
   }, [location])

  return (
    <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/book-consultation" element={<Book />} />
    </Routes>
  )
}

export default App
