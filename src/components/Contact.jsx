import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, CheckCircle, XCircle, Loader } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'sending', message: 'Sending...' });
    const backendUrl = import.meta.env.VITE_BACKEND_URL + '/api/send';
    try {
      const res = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', message: 'Message Sent Successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Failed to send. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    }
    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
  };

  return (
    <AnimatedSection>
      <div id="contact" className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-12">Have a question or want to work together? Drop me a line!</p>
        <div className="max-w-2xl mx-auto bg-gray-800/50 rounded-xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative flex-1">
                <User className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500" size={20} />
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="pl-12 pr-4 py-3 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:border-gray-500 transition-shadow" />
              </div>
              <div className="relative flex-1">
                <Mail className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500" size={20} />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className="pl-12 pr-4 py-3 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:border-gray-500 transition-shadow" />
              </div>
            </div>
            <div>
              <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Your Message" className="p-4 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:border-gray-500 transition-shadow"></textarea>
            </div>
            <div>
              <motion.button type="submit" disabled={status.type === 'sending'} className="w-full bg-gray-700 text-white font-bold py-3 px-6 rounded-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600" whileHover={{ scale: 1.03, boxShadow: "0px 0px 12px rgba(156, 163, 175, 0.3)" }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                {status.type === 'sending' ? (<><Loader className="animate-spin" size={18} /> Sending...</>) : (<>Send Message <Send size={18} /></>)}
              </motion.button>
            </div>
          </form>
          <div className="text-center mt-4 h-6">
            {status.message && (<span className={`flex items-center justify-center gap-2 ${status.type === 'success' ? 'text-green-400' : status.type === 'error' ? 'text-red-400' : 'text-gray-400'}`}>
                {status.type === 'success' && <CheckCircle size={18} />}
                {status.type === 'error' && <XCircle size={18} />}
                {status.message}
              </span>)}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
export default Contact;