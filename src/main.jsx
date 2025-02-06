import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ScrollToSection from './components/ScrolltoSection.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToSection />
    <App />
  </BrowserRouter>
)
