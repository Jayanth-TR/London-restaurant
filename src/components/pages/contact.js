import React from 'react';
import './contact.css'; // Import your CSS file
import ContactForm from './contactform';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <p>For any inquiries or assistance, feel free to contact us at:</p>
      </div>

      <div className='contact-content'>
        <div className='contact-img'>
          <img src='https://www.visage.jobs/wp-content/uploads/2023/07/Contact-Page-Header-opt.png' alt='contact' className='contact-img2' />
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
