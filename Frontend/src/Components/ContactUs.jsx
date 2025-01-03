import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_mobile: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
      mirror: true, 
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        'service_x71pvhm', // Replace with your EmailJS service ID
        'template_b0qx4am', // Replace with your EmailJS template ID
        formData,
        '0dC8U10tkq7mtNRcK' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          toast.success('Your request has been sent successfully! Our team will contact you soon.');
          setFormData({
            user_name: '',
            user_email: '',
            user_mobile: '',
            message: '',
          });
        },
        (error) => {
          toast.error('Failed to send the message. Please try again later.');
          console.error('Error:', error);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center py-10 px-4">
      <ToastContainer position="top-center" />
      <div className="container mx-auto text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-indigo-400" data-aos="zoom-in">
          Get in Touch
        </h1>
        <p className="text-base lg:text-lg leading-relaxed max-w-2xl mx-auto" data-aos="fade-up">
          We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to drop us a message.
        </p>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-12 px-6">
        {/* Left: Contact Information */}
        <div className="lg:w-1/3 w-full" data-aos="fade-right">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-indigo-400">Contact Information</h2>
          <p className="text-sm lg:text-lg mb-4" data-aos="fade-up">
            <i className="fas fa-envelope mr-2 text-indigo-400"></i> Email: support@company.com
          </p>
          <p className="text-sm lg:text-lg mb-4" data-aos="fade-up" data-aos-delay="100">
            <i className="fas fa-phone-alt mr-2 text-indigo-400"></i> Phone: +1 234 567 890
          </p>
          <p className="text-sm lg:text-lg mb-4" data-aos="fade-up" data-aos-delay="200">
            <i className="fas fa-map-marker-alt mr-2 text-indigo-400"></i> Location: 123 Company Avenue, NY
          </p>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:w-2/3 w-full" data-aos="fade-left">
          <form className="bg-gray-800 p-4 lg:p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-4 lg:mb-6">
              <label htmlFor="user_name" className="block text-sm lg:text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="w-full p-2 lg:p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Your Name"
                value={formData.user_name}
                onChange={handleChange}
                data-aos="fade-up"
                required
              />
            </div>
            <div className="mb-4 lg:mb-6">
              <label htmlFor="user_email" className="block text-sm lg:text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="w-full p-2 lg:p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Your Email"
                value={formData.user_email}
                onChange={handleChange}
                data-aos="fade-up"
                data-aos-delay="100"
                required
              />
            </div>
            <div className="mb-4 lg:mb-6">
              <label htmlFor="user_mobile" className="block text-sm lg:text-lg mb-2">
                Mobile
              </label>
              <input
                type="text"
                id="user_mobile"
                name="user_mobile"
                className="w-full p-2 lg:p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Your Mobile Number"
                value={formData.user_mobile}
                onChange={handleChange}
                data-aos="fade-up"
                data-aos-delay="200"
                required
              />
            </div>
            <div className="mb-4 lg:mb-6">
              <label htmlFor="message" className="block text-sm lg:text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 lg:p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                data-aos="fade-up"
                data-aos-delay="300"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg p-3 hover:scale-105 transition-transform ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
