import React from 'react'
import Hero from './Hero'
import Products from './Products'
import Testimonials from './Testimonials'
import Mission from './Mission'
import Faq from './Faq'
import Cta from './Cta'
import MediaShowcase from './MediaShowcase'
import Discover from './Discover'
import Integration from './Integration'

const Home = () => {
  return (
    <>
    <Hero />
    {/* <Products /> */}
    <Integration />
    <Discover />
    <Testimonials />
    <Mission />
    <MediaShowcase />
    <Faq />
    <Cta />
    </>
  )
}

export default Home