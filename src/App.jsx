import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Pricing from './pages/Pricing'
import Footer from './components/Footer'
import Videos from './pages/Videos'
import ContactUs from './pages/ContactUs'
import TermsCondition from './pages/TermsCondition'
import Policy from './pages/Policy'
import RefundPolicy from './pages/RefundPolicy'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <div className='font-inter'>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/videos" element={<Videos />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/terms-condition" element={<TermsCondition />} />
    <Route path="/privacy-policy" element={<Policy />} />
    <Route path="/refund-policy" element={<RefundPolicy />} />
    <Route path="/about-us" element={<AboutUs />} />
    </Routes>
    <Footer /> 
    </div>
  )
}

export default App
