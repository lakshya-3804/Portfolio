import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/navBar.jsx'
import Footer from './components/footer.jsx'
import BackgroundSpline from './components/splineBackground.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BackgroundSpline />
      <NavBar />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
