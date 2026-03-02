import React, { useEffect, useRef, useState } from 'react';
import './Arrangements.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import areas from '../../assets/areas.png';
import prices from '../../assets/prices.png';
import arrangements from '../../assets/arrangements.png';

const Arrangements = () => {
  const slider = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3;
  const step = 100 / totalSlides;
  const slideTitles = ['Service Areas', 'Prices', 'Arrangements'];

  useEffect(() => {
    if (slider.current) {
      slider.current.style.transform = `translateX(-${currentIndex * step}%)`;
    }
  }, [currentIndex, step]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 10000);

    return () => clearInterval(autoSlide);
  }, [totalSlides]);

  const slideForward = () => {
    setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  const slideBackward = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className='arrangements'>
      <p className='prev-slide-label'>
        {currentIndex > 0
          ? `Previous: ${slideTitles[currentIndex - 1]}`
          : 'You are on the first slide'}
      </p>
      <p className='next-slide-label'>
        {currentIndex < totalSlides - 1
          ? `Next: ${slideTitles[currentIndex + 1]}`
          : 'You are on the last slide'}
      </p>
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="arrangements-info">
                <img src={areas} alt='Service Areas' />
                <div className="arrangements-text">
                  <h3>Service Areas</h3>
                  <span>Available Areas</span>
                  <p>
                    <b>Limpopo:</b> Giyani, Malamulele and Polokwane (Other areas open for discussion)<br />
                    <b>Gauteng:</b> All areas <br />
                    <b>Other provinces:</b> Open for discussion
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="arrangements-info">
                <img src={prices} alt='Prices' />
                <div className="arrangements-text">
                  <h3>Prices</h3>
                  <span>Assessment & Administration Prices</span>
                  <p>
                    Clinical Psychological Administration and Report <b>R 13 000</b> <br />
                    Industrial Psychological Administration and Report <b>R 10 000</b> <br />
                    Educational Psychological Administration and Report <b>R 13 500</b>
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="arrangements-info">
                <img src={arrangements} alt='Arrangements' />
                <div className="arrangements-text">
                  <h3>Arrangements</h3>
                  <span>How We Provide Our Services</span>
                <p className="assessment-terms">
                  <div className="bullet">We conduct our assessments at your offices.</div>
                  <div className="bullet">We are also available to conduct assessments on weekends for the convenience of our clients.</div>
                  <div className="bullet">Payment shall be as stated above per medico legal report. This includes all necessary assessments and the preparation and delivery of detailed reports.</div>
                  <div className="bullet">The Attorney/Law Firm shall make a payment of 20% of the total fee per report no later than one day before the scheduled assessment(s).</div>
                  <div className="bullet">The Attorney/Law Firm shall send a formal letter of instruction detailing the scope and purpose of the assessment(s). Upon receipt of the letter, a deposit invoice will be issued, which must be paid no later than one day prior to the scheduled assessment(s).</div>
                </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Arrangements;
