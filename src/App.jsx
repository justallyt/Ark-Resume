import { useEffect } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';

function App() {
   const location = useLocation();

   //always start pages at the top
   useEffect(() => {
         window.scrollTo(0, 0);
   }, [location])

  return (
    <Routes>
              <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
