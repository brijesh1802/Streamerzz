import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import HowitWorks from './components/HowitWorks'
import KeyFeatures from './components/KeyFeatures'
import PricingPlans from './components/PricingPlans'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='text-sm text-neutral-300 antialiased'>
         <NavBar/>
         <HeroSection/>  
         <HowitWorks/>
         <KeyFeatures/>
         <PricingPlans/>
         <Testimonials/>
         <Footer/>
    </main>

  )
}

export default App