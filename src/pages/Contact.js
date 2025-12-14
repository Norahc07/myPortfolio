import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  PaperAirplaneIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: ''
  });
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, success: false, error: '' });

    try {
      // EmailJS configuration
      // Get credentials from environment variables
      // Create a .env file in the root directory with your EmailJS credentials:
      // REACT_APP_EMAILJS_SERVICE_ID=your_service_id
      // REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
      // REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
      
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Check if credentials are configured
      if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS is not configured. Please set up your EmailJS credentials in a .env file.');
      }

      // Prepare template parameters for EmailJS
      // Make sure your EmailJS template includes these variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}, {{reply_to}}
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Portfolio Contact Form Message',
        message: formData.message,
        to_email: 'luigiamarillo007@gmail.com',
        reply_to: formData.email
      };

      // Send email using EmailJS (public key is passed as 4th parameter)
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      // Success
      setFormStatus({ 
        submitting: false, 
        submitted: true, 
        success: true, 
        error: '' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (error.status === 412 || error.text?.includes('insufficient authentication scopes')) {
        errorMessage = 'Gmail authentication error. Please reconnect your Gmail service in EmailJS dashboard.';
      } else if (error.text) {
        errorMessage = error.text;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setFormStatus({ 
        submitting: false, 
        submitted: true, 
        success: false, 
        error: errorMessage
      });
    }
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6 text-primary" />,
      title: 'Email',
      value: 'luigiamarillo007@gmail.com',
      link: 'mailto:luigiamarillo007@gmail.com'
    },
    {
      icon: <PhoneIcon className="h-6 w-6 text-primary" />,
      title: 'Phone',
      value: '+63 977 083 7705',
      link: 'tel:+639770837705'
    },
    {
      icon: <MapPinIcon className="h-6 w-6 text-primary" />,
      title: 'Location',
      value: 'Mauban, Quezon',
      link: 'https://maps.google.com/maps?q=Mauban+Quezon+Philippines'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Norahc07',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/luigi-amarillo-0a61a9276/',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/luigi.amarillo',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/iamluigiamarillo',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-32 pb-16 relative overflow-hidden">
      {/* Grid background component (unified with About page) */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      </div>
      {/* Accent Glow */}
      <div className="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary/20 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      
      {/* Hero Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-20"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 text-xs font-mono bg-primary/10 text-primary/90 rounded-full mb-4 tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              GET IN TOUCH
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Let's Start a Conversation
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '6rem', opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-16 overflow-hidden -mt-8">
        <div className="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 relative bg-gray-900/60 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-800/50 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Send Me a Message
              </h3>
              
              {formStatus.submitted ? (
                <div className={`p-6 rounded-lg text-center min-h-[280px] flex flex-col justify-center items-center ${formStatus.success ? 'bg-green-900/20 border border-green-500/30' : 'bg-red-900/20 border border-red-500/30'}`}>
                  {formStatus.success ? (
                    <div className="flex flex-col items-center justify-center">
                      <CheckCircleIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-green-300 mb-2">Message Sent Successfully!</h3>
                      <p className="text-green-200 mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                      <div className="h-10"></div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <XCircleIcon className="h-12 w-12 text-red-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-red-300 mb-2">Something Went Wrong</h3>
                      <p className="text-red-200 mb-6">{formStatus.error || 'Please try again later.'}</p>
                      <motion.button
                        onClick={() => setFormStatus({ ...formStatus, submitted: false })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-red-800/50 text-red-200 rounded-md hover:bg-red-700/50 transition-colors border border-red-500/30"
                      >
                        Try Again
                      </motion.button>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col flex-1 space-y-4 lg:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="w-full px-4 py-3 border border-gray-700/50 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="w-full px-4 py-3 border border-gray-700/50 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <motion.input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="w-full px-4 py-3 border border-gray-700/50 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message <span className="text-red-400">*</span>
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      rows="8"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="w-full flex-1 px-4 py-4 border border-gray-700/50 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none min-h-[180px]"
                      placeholder="Hi Luigi, I'd like to discuss a potential project..."
                    ></motion.textarea>
                  </div>
                  
                  <div className="pt-2 mt-auto">
                    <motion.button
                      type="submit"
                      disabled={formStatus.submitting}
                      whileHover={formStatus.submitting ? {} : { scale: 1.05 }}
                      whileTap={formStatus.submitting ? {} : { scale: 0.98 }}
                      onMouseDown={() => !formStatus.submitting && setIsButtonActive(true)}
                      onMouseUp={() => setIsButtonActive(false)}
                      onMouseLeave={() => setIsButtonActive(false)}
                      className={`relative w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center text-white ${
                        formStatus.submitting 
                          ? 'opacity-70 cursor-not-allowed bg-gray-700 text-gray-400' 
                          : ''
                      }`}
                      style={!formStatus.submitting ? {
                        background: isButtonActive 
                          ? 'linear-gradient(to right, #a16207, #854d0e)' 
                          : 'linear-gradient(to right, #eab308, #ca8a04)'
                      } : {}}
                    >
                      {formStatus.submitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-400 mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <PaperAirplaneIcon className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 lg:space-y-6"
            >
              {/* Contact Details */}
              <div className="relative bg-gray-900/60 backdrop-blur-sm p-4 lg:p-6 rounded-2xl border border-gray-800/50">
                <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Contact Details
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Feel free to get in touch with me. I'm always open to discussing new projects and creative ideas.
                </p>
                
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="group/item flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-primary/30 hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <motion.div 
                        className="p-2 bg-primary/10 rounded-lg group-hover/item:bg-primary/20 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {React.cloneElement(item.icon, { 
                          className: 'h-5 w-5 text-primary group-hover/item:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] transition-all duration-300' 
                        })}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover/item:text-primary-300 transition-colors duration-300 text-sm">{item.title}</h4>
                        <p className="text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300 text-xs">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
              
              {/* Social Media */}
              <div className="relative bg-gray-900/60 backdrop-blur-sm p-4 lg:p-6 rounded-2xl border border-gray-800/50">
                <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Follow Me
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Connect with me on social media for updates and behind-the-scenes content.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-3 p-3 bg-gray-800/30 backdrop-blur-sm rounded-lg text-gray-400 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-gray-700/30 hover:border-primary/30"
                      aria-label={social.name}
                    >
                      {React.cloneElement(social.icon, { 
                        className: 'h-5 w-5 transition-all duration-300' 
                      })}
                      <span className="text-sm font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Contact;
