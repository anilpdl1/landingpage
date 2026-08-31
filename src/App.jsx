import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import About from './sections/About'
import Pricing from './sections/Pricing'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <About/>
    <Pricing/>
    <Footer/>
    </>
  )
}
export default App
