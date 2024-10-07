"use client";

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import hiImage from '../assets/hi.png'; // Image provided

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(''); // For form status
  const [formSubmitted, setFormSubmitted] = useState(false); // To handle form visibility
  const [isSending, setIsSending] = useState(false); // To handle sending state

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields (check if any fields are empty)
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    // Check email format
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(formData.email)) {
      setFormStatus('Please enter a valid email address.');
      return;
    }

    setIsSending(true); // Set sending state to true

    // Sending the email using Email.js
    emailjs
      .send(
        'service_cw5exzj', // Your Email.js service ID
        'template_pa30md4', // Your Email.js template ID
        formData,
        '__VeVc5QpZxBesMFv' // Your Email.js Public Key
      )
      .then(
        () => {
          setFormSubmitted(true); // Show success message
          setIsSending(false); // Set sending state back to false
        },
        (error) => {
          console.error('FAILED...', error);
          setFormStatus('Failed to send message. Please try again.');
          setIsSending(false); // Set sending state back to false
        }
      );
  };

  // Function to reset the form
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setFormSubmitted(false);
    setFormStatus('');
    setIsSending(false);
  };

  return (
    <div className="px-4 sm:px-8 lg:px-12 mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6">Contact Me</h2>
      
      {/* LinkedIn Icon */}
      <div className="mb-6">
        <a href="https://www.linkedin.com/in/virta-choudhary-7534a0237/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} className="text-blue-600 hover:text-blue-800" />
        </a>
      </div>

      {/* Form */}
      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold text-gray-700">Your Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          {formStatus && <p className="text-red-500">{formStatus}</p>}

          {/* Send Button */}
          <button
            type="submit"
            className={`px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 ${isSending ? 'animate-pulse' : ''}`}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </form>
      ) : (
        // Success Message Section
        <div className="flex flex-col items-center sm:flex-row sm:items-start">
        {/* Image on the left */}
        <div className="sm:mr-4 mb-4 sm:mb-0">
          <Image src={hiImage} alt="Hi" width={100} height={100} />
        </div>
      
        {/* Message and Button on the right */}
        <div className="flex flex-col items-center sm:items-start">
          {/* Message Text */}
          <p className="mt-4 text-lg text-gray-700 text-center sm:text-left">
            Hi, I have received your email and will get back to you shortly!
          </p>
      
          {/* Button below the message */}
          <button
            onClick={resetForm}
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Alright
          </button>
        </div>
      </div>
      
      )}
    </div>
  );
}
