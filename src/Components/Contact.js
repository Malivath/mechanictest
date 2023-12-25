// Contact.js
import React, { useState } from 'react';
import '../Styles/Contact.scss'; // Ensure the path is correct

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement what happens when the form is submitted
    console.log(formData);
    alert("Thank you for your message. We'll be in touch!");
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions, please don't hesitate to contact us at:</p>
      <p><strong>Phone:</strong> (218) 996-4994. <strong>Or email us at:</strong> Example@email.com</p>
      {/* Form for user submissions */}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      {/* Google Maps iframe placeholder */}
      <div className="map">
        <h3>Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168.42973562249477!2d-92.5332018099106!3d47.51181052741584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52a55194479d3c8d%3A0xaafe5584c84743ba!2sA%26C%20Automotive!5e0!3m2!1sen!2sus!4v1703403598691!5m2!1sen!2sus" referrerpolicy="no-referrer-when-downgrade"  // Replace with your actual Google Maps embed link
          width="550"
          height="400"
          style={{ border:0 }}
          allowFullScreen=""
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

export default Contact;