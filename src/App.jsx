import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Pricing from './pages/Pricing'
import Footer from './components/Footer'
import Videos from './pages/Videos'
import ContactUs from './pages/ContactUs'

function App() {

  return (
    <div className='font-inter'>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/videos" element={<Videos />} />
    <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer /> 
    </div>
  )
}

export default App
