"use client"
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add functionality to send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-md rounded-md">
      {submitted ? (
        <p className="text-lg text-black">
          Thank you for contacting us! We'll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-black font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-black font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-black font-semibold mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:ring-black focus:border-black"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

