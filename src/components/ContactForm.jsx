import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_2bixn89';   // Replace with your EmailJS Service ID
    const templateID = 'template_x2u3ko4'; // Replace with your EmailJS Template ID
    const userID = 'dZAbp6EspbognMjQF';      // Replace with your EmailJS Public Key

    emailjs.send(serviceID, templateID, form, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
        setLoading(false);
      }, (err) => {
        console.error('FAILED...', err);
        alert('Failed to send message, please try again.');
        setLoading(false);
      });
  };

  return (
    <section className="contact-form py-12 px-6 text-center">
      <div className="content-wrapper mx-auto">
        <h3 className="fs-32 fw-bold mb-3 text-primary">Contact Us</h3>
        <p className="fs-18 mb-6 text-dark">
          Have a question or need advice? Send us a message and we’ll get back to you promptly.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="form-input mb-4 rounded px-4 py-3 w-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="form-input mb-4 rounded px-4 py-3 w-100"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="form-input mb-4 rounded px-4 py-3 w-100"
            rows="5"
          />
          <button type="submit" className="submit-btn px-6 py-3 rounded fw-bold" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <style jsx>{`
        .contact-form {
          width: 100%;
          background: #d5d8e8;
          border-radius: 20px;
        }
        .form-input {
          border: none;
          font-size: 16px;
        }
        .form-input:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
        }
        .submit-btn {
          background-color: #1b5e20;
          color: white;
          border: none;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .submit-btn:hover {
          background-color: #388e3c;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .fs-32 { font-size: 26px; }
          .fs-18 { font-size: 16px; }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
