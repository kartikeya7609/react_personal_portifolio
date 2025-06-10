import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-white">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] hover:border-[#00ff9d] transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-[#00ff9d]">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-[rgba(255,255,255,0.05)]">
                      <i className="fas fa-envelope text-[#00ff9d]"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:your.email@example.com" className="text-white hover:text-[#00ff9d] transition-colors">
                        your.email@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-[rgba(255,255,255,0.05)]">
                      <i className="fas fa-phone text-[#00ff9d]"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+1234567890" className="text-white hover:text-[#00ff9d] transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-[rgba(255,255,255,0.05)]">
                      <i className="fas fa-map-marker-alt text-[#00ff9d]"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Your City, Country</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] hover:border-[#00ff9d] transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-[#00ff9d]">Social Links</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: 'fab fa-github', url: 'https://github.com/yourusername' },
                    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/yourusername' },
                    { icon: 'fab fa-twitter', url: 'https://twitter.com/yourusername' },
                    { icon: 'fab fa-instagram', url: 'https://instagram.com/yourusername' }
                  ].map((social, index) => (
                    <Motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-[rgba(255,255,255,0.05)] hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all duration-300"
                    >
                      <i className={`${social.icon} text-xl`}></i>
                    </Motion.a>
                  ))}
                </div>
              </div>
            </Motion.div>

            {/* Contact Form */}
            <Motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] hover:border-[#00ff9d] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#00ff9d]">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-black border border-[rgba(255,255,255,0.05)] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#00ff9d] focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-black border border-[rgba(255,255,255,0.05)] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#00ff9d] focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full bg-black border border-[rgba(255,255,255,0.05)] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#00ff9d] focus:outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    status === 'loading'
                      ? 'bg-gray-800 cursor-not-allowed'
                      : 'bg-black border border-[#00ff9d] text-[#00ff9d] hover:bg-[#00ff9d] hover:text-black'
                  }`}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                <AnimatePresence>
                  {status === 'success' && (
                    <Motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-green-500 text-center"
                    >
                      Message sent successfully!
                    </Motion.p>
                  )}
                  {status === 'error' && (
                    <Motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-center"
                    >
                      Failed to send message. Please try again.
                    </Motion.p>
                  )}
                </AnimatePresence>
              </form>
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact; 