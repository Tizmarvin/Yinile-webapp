import React from 'react';
import './About.css';
import about_img from '../../assets/educational.jpg';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
  <div id="about" className="about">
    <h3>ABOUT YINILE</h3>
    <div className="about-top">
    <div className="about-left">
      <img src={about_img} alt="About" className="about-img" />
      <img src={play_icon} alt="Play" className="play-icon" />
    </div>

    <div className="about-right">
      <p>
        Yinile Medico Legal is a trusted provider of expert medico-legal assessments and reports,
        specialising in Road Accident Fund (RAF), Medical Negligence, Personal Injuries (Delictual Claims)
        and Unlawful Arrest claims. We are committed to delivering high-quality, comprehensive evaluations
        that assist legal professionals in securing fair and just compensation for their clients. Our
        expertise lies in conducting thorough assessments and producing detailed, professional reports that
        meet the highest standards of medico-legal documentation.
      </p>
      <p>
        Our core services include Clinical Psychological, Industrial Psychological and Educational
        Psychological Assessments and Reports. Each assessment is meticulously conducted to evaluate the
        psychological, functional, and occupational impact of accident injuries. With a focus on accuracy
        and reliability, Yinile Medico-Legal ensures that every report provides valuable insights and
        supports informed decision-making in RAF, Medical Negligence, Personal Injuries (Delictual Claims)
        and Unlawful Arrest claims.
      </p>
    </div>
  </div>

  <div className="about-bottom">
    <h2>Mission</h2>
    <p>
      At Yinile Medico Legal, our vision is to become the preferred provider of high quality, reliable,
      and consistent medico-legal assessments and reporting for legal professionals regarding the Road
      Accident Fund (RAF), Medical Negligence, Personal Injuries (Delictual Claims) and Unlawful Arrest
      claims. We strive to establish a trusted reputation nationally by delivering comprehensive,
      detailed, and professionally structured reports that support fair and just claim resolutions.
    </p>
    <h2>Vision</h2>
    <p>
      As part of our mission, we are dedicated to delivering reliable, efficient, and high-quality
      medico-legal expertise, specialising in assessments and reporting for RAF, Medical Negligence,
      Personal Injuries (Delictual Claims) and Unlawful Arrest claims. Our goal is to streamline the
      medico-legal process, allowing our clients—attorneys—to focus on their core business while we handle
      the logistics of client assessments and detailed reporting.
    </p>
    <p>
      We eliminate the challenges of chasing reports by offering a seamless, end-to-end service. Through
      efficient communication systems, continuous quality assurance, and a commitment to innovation, we
      ensure that every report is delivered accurately and on time, maintaining the highest professional
      standards to support fair and just claim resolutions.
    </p>
  </div>
</div>

  );
};

export default About;
