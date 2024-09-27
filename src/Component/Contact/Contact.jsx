import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <section className="contact">
        <h3>Contact Me</h3>
        <p>Email: <a href="mailto:your_email@example.com">wwwramonbernal60@gmail.com</a></p>
        <p>Phone: <a href="tel:+123456789">09953886281</a></p>
        <div className="social-media">
          <p>Follow Me:</p>
          <a href="https://www.facebook.com/ramon.bernal.52012/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://github.com/BANDOLFWAPS" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
