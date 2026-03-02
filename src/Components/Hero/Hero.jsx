import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero container'>
        <div className='hero-text'>
            <h1>Delivering expert Medico Legal Assessments with precision and care</h1>
            <p>At Yinile Medico Legal, our specialised assessments and detailed reports empower legal professionals with the insights they need to secure fair compensation for their clients. From Road Accident Fund claims to Medical Negligence and Unlawful Arrest matters, our services are designed to ensure accuracy, professionalism, and dependable support throughout the legal process.</p>
            <Link to='services' smooth={true} offset={-100} duration={500} className='btn-explore'>Explore more</Link>

        </div>
    </div>
  )
}

export default Hero

