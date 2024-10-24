import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import HowitWorks from './components/HowitWorks'
import KeyFeatures from './components/KeyFeatures'

const App = () => {
  return (
    <main className='text-sm text-neutral-300 antialiased'>
         <NavBar/>
         <HeroSection/>  
         <HowitWorks/>
         <KeyFeatures/>
    </main>

  )
}

export default App