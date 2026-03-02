import React from 'react'
import "./Services.css"
import service_1 from '../../assets/clinical.jpg'
import service_2 from '../../assets/about.jpg'
import service_3 from '../../assets/industrial.jpg'
import service_4 from '../../assets/occupational.jpg'
import service_icon_1 from '../../assets/clinical+icon.png'
import service_icon_2 from '../../assets/educational+icon.png'
import service_icon_3 from '../../assets/industrial+icon.png'
import service_icon_4 from '../../assets/occupational+icon.png'

const Services = () => {
  return (
    <div className='services'>
      <div className="service">
        <img src={service_1} alt="Clinical Service" />
        <span className="service-center-label">Clinical</span>
        <div className="caption">
            <img src={service_icon_1} alt="Clinical Icon" />
            <p><b>Clinical Psychological</b></p>
            <p>Assessments & Administration</p>
        </div>
      </div>
      <div className="service">
        <img src={service_2} alt="Educational Service" />
        <span className="service-center-label">Educational</span>
        <div className="caption">
            <img src={service_icon_2} alt="Educational Icon" />
            <p><b>Educational Psychological</b></p>
            <p>Assessments & Administration</p>
        </div>
      </div>
      <div className="service">
        <img src={service_3} alt="Industrial Service" />
        <span className="service-center-label">Industrial</span>
        <div className="caption">
            <img src={service_icon_3} alt="Industrial Icon" />
            <p><b>Industrial Psychological</b></p>
            <p>Assessments & Administration</p>
        </div>
      </div>
      <div className="service">
        <img src={service_4} alt="Occupational Service" />
        <span className="service-center-label">Occupational</span>
        <div className="caption">
            <img src={service_icon_4} alt="Occupational Icon" />
            <p><b>Occupational Psychological</b></p>
            <p>Assessments & Administration</p>
        </div>
      </div>  
    </div>
  )
}

export default Services
