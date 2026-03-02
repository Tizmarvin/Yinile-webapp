import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionOffset = -100;
  const homeOffset = 0;

  useEffect(()=>{
    const onScroll = () => {
      window.scrollY > 190 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className='nav-top'>
        <img src={logo} alt="" className='logo' />
        <button
          type='button'
          className='menu-toggle'
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label='Toggle navigation menu'
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={mobileOpen ? 'open' : ''}>
        <li><Link to='home' smooth={true} offset={homeOffset} duration={500} className='nav-link' onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to='services' smooth={true} offset={sectionOffset} duration={500} spy={true} activeClass='active-link' className='nav-link' onClick={closeMobileMenu}>Our Services</Link></li>
        <li><Link to='about' smooth={true} offset={sectionOffset} duration={500} spy={true} activeClass='active-link' className='nav-link' onClick={closeMobileMenu}>About Us</Link></li>
        <li><Link to='arrangements' smooth={true} offset={sectionOffset} duration={500} spy={true} activeClass='active-link' className='nav-link' onClick={closeMobileMenu}>Arrangements</Link></li>
        <li><Link to='contact' smooth={true} offset={sectionOffset} duration={500} spy={true} activeClass='active-link' className='nav-link nav-cta' onClick={closeMobileMenu}>Contact Us</Link></li>

      </ul>
    </nav>
  )
}

export default Navbar
