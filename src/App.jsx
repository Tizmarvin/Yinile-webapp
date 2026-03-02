import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Arrangements from './Components/Arrangements/Arrangements'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <section id='services'>
          <Title subTitle='Our Services' title='Available services'/>
          <Services/>
        </section>
        <About/>
        <section id='arrangements'>
          <Title subTitle='Arrangements' title='How we work'/>
          <Arrangements/>
        </section>
        <section id='contact'>
          <Title subTitle='Contact Us' title='Get in Touch with Us'/>
          <Contact/>
        </section>
        <Footer/>
      </div>
    </div>
  )
}

export default App
