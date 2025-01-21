import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import NotFound from './pages/NotFound.jsx'
import ScrollToTop from './ScrollToTop.jsx'


function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);

  return (
    <>    
      
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Projects />} />
          <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
    </>
  )
}

export default App
