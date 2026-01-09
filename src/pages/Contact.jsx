import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorage';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messages = getFromLocalStorage('contactMessages') || [];
    messages.push({ ...formData, id: Date.now(), date: new Date().toISOString() });
    saveToLocalStorage('contactMessages', messages);
    alert('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="animate-fade-in">
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="card p-8 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <a href="mailto:rm2778643@gmail.com" className="text-purple-600 hover:text-purple-800">rm2778643@gmail.com</a>
            </div>
            <div className="card p-8 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="card p-8 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Shopping Street<br />New York, NY 10001</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-600 focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-600 focus:outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-600 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea name="message" required rows="6" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-600 focus:outline-none transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2 text-lg py-3">
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;