import React from 'react'
import './css/App.css'
import Header from './components/Header'
import Hero from './components/hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact' 
import Footer from './components/Footer' 

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App



