import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/email-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import whatsapp_icon from '../../assets/whatsapp-icon.png';
import x_icon from '../../assets/twitter-icon.png';
import address_icon from '../../assets/address-icon.png';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const MIN_FILL_TIME_MS = 3000;
const SUBMIT_COOLDOWN_MS = 15000;

const Contact = () => {
  const [result, setResult] = React.useState('');
  const [status, setStatus] = React.useState(''); // success or error
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const formStartRef = React.useRef(Date.now());
  const lastSubmitRef = React.useRef(0);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error');
      setResult('Form is not configured. Please add the site access key.');
      return;
    }

    const now = Date.now();
    if (now - formStartRef.current < MIN_FILL_TIME_MS) {
      setStatus('error');
      setResult('Please wait a few seconds before submitting.');
      return;
    }

    if (now - lastSubmitRef.current < SUBMIT_COOLDOWN_MS) {
      setStatus('error');
      setResult('Please wait before sending another message.');
      return;
    }

    setResult('Sending...');
    setStatus('');
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const honeypot = (formData.get('website') || '').toString().trim();
    if (honeypot) {
      setStatus('success');
      setResult('Email sent successfully.');
      setIsSubmitting(false);
      return;
    }

    formData.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Email sent successfully.');
        setStatus('success');
        lastSubmitRef.current = Date.now();
        formStartRef.current = Date.now();
        event.target.reset();
      } else {
        setResult(data.message || 'Could not send message.');
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      setResult('Network error. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section">
      <h3 className="contact-heading">
        Send us a message <img src={msg_icon} alt="" />
      </h3>
      <p className="contact-intro">
        Feel free to reach out to us through our contact form or find our
        information below. Your service requests and questions are important
        to us as we strive to provide exceptional services to our clients.
      </p>
      <div className="contact">
        <div className="contact-col">
        <ul>
          <li>
            <img src={mail_icon} alt="" /> yinilemedicolegal@outlook.com
          </li>
          <li>
            <img src={phone_icon} alt="" /> +27 64 698 1399
          </li>
          <li>
            <img src={whatsapp_icon} alt="" /> +27 64 698 1399
          </li>
          <li>
            <img src={x_icon} alt="" /> @yinilemedico
          </li>
          <li>
            <img src={address_icon} alt="" />
            206 Von Willich Avenue, Cluview
            <br />
            Centurion, 0157
            <br />
            Gauteng, South Africa
          </li>
        </ul>
        </div>

        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="website"
              className="contact-honeypot"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />
            <label><b>Your Name/Company Name</b></label>
            <input type="text" name="Name" placeholder="Enter your name" required />

            <label><b>Phone Number</b></label>
            <input type="tel" name="Phone Number" placeholder="Enter your phone number" required />

            <label><b>Email</b></label>
            <input type="email" name="Email" placeholder="Enter your email address" required />

            <label><b>Write your message here</b></label>
            <textarea name="Message" rows="6" placeholder="Type your message here" required></textarea>

            <button type="submit" className="btn dark-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>

            <div className={`form-result ${status}`}>{result}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
