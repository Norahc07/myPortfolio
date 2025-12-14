import React, { useState, useRef } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRightIcon, 
  MagnifyingGlassIcon,
  FunnelIcon,
  DocumentTextIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

// Import all certificate images
import reactNativeCert from '../assets/Certificates/React Native.png';
import swiftUICert from '../assets/Certificates/Create the User Interface with SwiftUI.png';
import laravelCert from '../assets/Certificates/Laravel From Scratch.jpeg';
import systemAdminCert from '../assets/Certificates/System Administration and IT Infrastructure Services.jpeg';
import androidStudioCert from '../assets/Certificates/Create the User Interface in Android Studio.jpeg';
import uiUxMetaCert from '../assets/Certificates/Principles of UI-UX Design Meta.png';
import backendCert from '../assets/Certificates/Backend Development and API Creation.jpeg';
import generativeAICert from '../assets/Certificates/Generative AI Content Creation.jpeg';
import uiUxPrinciplesCert from '../assets/Certificates/UI-UX Design Principles.jpeg';
import appSecurityCert from '../assets/Certificates/Application Security for Developers and DevOps Professionals.jpeg';
import designFundamentalsCert from '../assets/Certificates/Design Fundamentals - ADOBE.jpeg';
import customLogoCert from '../assets/Certificates/Customized Logo using Adobe Illustrator.png';
import adobeEducatorCert from '../assets/Certificates/Becoming an Adobe Creative Educator.png';
import socialMediaCert from '../assets/Certificates/Social Media Marketing using Adobe Express.png';
import photoshopCert from '../assets/Certificates/Creating Artistic Effects in Adobe Photoshop.png';
import brandingCert from '../assets/Certificates/Branding Identity using Adobe Illustrator.png';
import batasMilitarCert from '../assets/Certificates/Batas Militar Webinar.png';
import dataficationCert from '../assets/Certificates/Datafication Webinar.png';
import infoLiteracyCert from '../assets/Certificates/Online Information Literacy.jpeg';
import techNexusCert from '../assets/Certificates/Tech Nexus 2024 Empowering Campus Innovators.jpeg';
import azureOpenAICert from '../assets/Certificates/Unlocking Your Data with Azure OpenAI & Copilot Studio.png';
import strengthenAICert from '../assets/Certificates/Strengthen Business and Education using AI.png';
import dataAnalyticsCert from '../assets/Certificates/Data Analytics for Smarter Decision-Making.png';
import azureAICert from '../assets/Certificates/Building AI Agents and Apps with Azure AI Foundry.png';
import djangoCert from '../assets/Certificates/Building Web Application in Django - CERTIFICATE.jpeg';

// Grid background component
const GridBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
  </div>
);

// All certificates data
const allCertificates = [
  {
    id: 1,
    title: 'React Native Development',
    issuer: 'Meta',
    date: '2024',
    image: reactNativeCert,
    category: 'Mobile Development',
    description: 'Comprehensive React Native development certification covering cross-platform mobile app development.',
    gradient: 'bg-gradient-to-br from-blue-600 to-purple-600',
    featured: false
  },
  {
    id: 2,
    title: 'UI/UX Design Principles',
    issuer: 'Meta',
    date: '2024',
    image: uiUxMetaCert,
    category: 'Design',
    description: 'Professional UI/UX design principles and user-centered design methodologies.',
    gradient: 'bg-gradient-to-br from-pink-600 to-purple-600',
    featured: false
  },
  {
    id: 3,
    title: 'Backend Development & API Creation',
    issuer: 'Meta',
    date: '2024',
    image: backendCert,
    category: 'Backend Development',
    description: 'Advanced backend development skills including API design, database management, and server architecture.',
    gradient: 'bg-gradient-to-br from-green-600 to-blue-600',
    featured: false
  },
  {
    id: 4,
    title: 'Create User Interface with SwiftUI',
    issuer: 'Apple',
    date: '2024',
    image: swiftUICert,
    category: 'Mobile Development',
    description: 'iOS app development using SwiftUI framework for creating modern user interfaces.',
    gradient: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    featured: false
  },
  {
    id: 5,
    title: 'Laravel From Scratch',
    issuer: 'Laracasts',
    date: '2024',
    image: laravelCert,
    category: 'Backend Development',
    description: 'Complete Laravel framework mastery from basics to advanced concepts.',
    gradient: 'bg-gradient-to-br from-red-500 to-pink-600',
    featured: false
  },
  {
    id: 6,
    title: 'System Administration & IT Infrastructure',
    issuer: 'Google',
    date: '2024',
    image: systemAdminCert,
    category: 'System Administration',
    description: 'Comprehensive system administration and IT infrastructure management skills.',
    gradient: 'bg-gradient-to-br from-green-500 to-teal-600',
    featured: false
  },
  {
    id: 7,
    title: 'Android Studio UI Development',
    issuer: 'Google',
    date: '2024',
    image: androidStudioCert,
    category: 'Mobile Development',
    description: 'Android app development using Android Studio and modern UI components.',
    gradient: 'bg-gradient-to-br from-green-400 to-emerald-600',
    featured: false
  },
  {
    id: 8,
    title: 'Generative AI Content Creation',
    issuer: 'Google',
    date: '2024',
    image: generativeAICert,
    category: 'AI & Machine Learning',
    description: 'Advanced generative AI techniques for content creation and automation.',
    gradient: 'bg-gradient-to-br from-purple-500 to-violet-600',
    featured: false
  },
  {
    id: 9,
    title: 'UI/UX Design Principles',
    issuer: 'Google',
    date: '2024',
    image: uiUxPrinciplesCert,
    category: 'Design',
    description: 'Fundamental UI/UX design principles and best practices for digital products.',
    gradient: 'bg-gradient-to-br from-pink-500 to-rose-600',
    featured: false
  },
  {
    id: 10,
    title: 'Application Security for Developers',
    issuer: 'IBM',
    date: '2024',
    image: appSecurityCert,
    category: 'Cybersecurity',
    description: 'Comprehensive application security practices for developers and DevOps professionals.',
    gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
    featured: false
  },
  {
    id: 11,
    title: 'Design Fundamentals - Adobe',
    issuer: 'Adobe',
    date: '2024',
    image: designFundamentalsCert,
    category: 'Design',
    description: 'Core design principles and Adobe Creative Suite mastery.',
    gradient: 'bg-gradient-to-br from-red-400 to-pink-500',
    featured: false
  },
  {
    id: 12,
    title: 'Customized Logo using Adobe Illustrator',
    issuer: 'Adobe',
    date: '2024',
    image: customLogoCert,
    category: 'Graphic Design',
    description: 'Professional logo design and branding using Adobe Illustrator.',
    gradient: 'bg-gradient-to-br from-orange-400 to-yellow-500',
    featured: true
  },
  {
    id: 13,
    title: 'Becoming an Adobe Creative Educator',
    issuer: 'Adobe',
    date: '2024',
    image: adobeEducatorCert,
    category: 'Education',
    description: 'Advanced Adobe Creative Suite skills for educational content creation.',
    gradient: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    featured: false
  },
  {
    id: 14,
    title: 'Social Media Marketing using Adobe Express',
    issuer: 'Adobe',
    date: '2024',
    image: socialMediaCert,
    category: 'Marketing',
    description: 'Social media marketing strategies using Adobe Express tools.',
    gradient: 'bg-gradient-to-br from-blue-400 to-cyan-500',
    featured: false
  },
  {
    id: 15,
    title: 'Creating Artistic Effects in Adobe Photoshop',
    issuer: 'Adobe',
    date: '2024',
    image: photoshopCert,
    category: 'Graphic Design',
    description: 'Advanced Photoshop techniques for creating artistic effects and digital art.',
    gradient: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    featured: false
  },
  {
    id: 16,
    title: 'Branding Identity using Adobe Illustrator',
    issuer: 'Adobe',
    date: '2024',
    image: brandingCert,
    category: 'Branding',
    description: 'Complete branding identity design using Adobe Illustrator.',
    gradient: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    featured: true
  },
  {
    id: 17,
    title: 'Batas Militar Webinar',
    issuer: 'Educational Institution',
    date: '2024',
    image: batasMilitarCert,
    category: 'Education',
    description: 'Educational webinar on military law and regulations.',
    gradient: 'bg-gradient-to-br from-gray-500 to-gray-600',
    featured: false
  },
  {
    id: 18,
    title: 'Datafication Webinar',
    issuer: 'Educational Institution',
    date: '2024',
    image: dataficationCert,
    category: 'Data Science',
    description: 'Understanding datafication trends and their impact on modern business.',
    gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    featured: false
  },
  {
    id: 19,
    title: 'Online Information Literacy',
    issuer: 'Educational Institution',
    date: '2024',
    image: infoLiteracyCert,
    category: 'Education',
    description: 'Digital literacy and information evaluation skills for the modern age.',
    gradient: 'bg-gradient-to-br from-teal-500 to-green-600',
    featured: false
  },
  {
    id: 20,
    title: 'Tech Nexus 2024 Empowering Campus Innovators',
    issuer: 'Tech Nexus',
    date: '2024',
    image: techNexusCert,
    category: 'Technology',
    description: 'Innovation and technology leadership conference for campus innovators.',
    gradient: 'bg-gradient-to-br from-violet-500 to-purple-600',
    featured: true
  },
  {
    id: 21,
    title: 'Unlocking Your Data with Azure OpenAI & Copilot Studio',
    issuer: 'Microsoft',
    date: '2024',
    image: azureOpenAICert,
    category: 'AI & Machine Learning',
    description: 'Advanced Azure OpenAI and Copilot Studio integration for data-driven solutions.',
    gradient: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    featured: false
  },
  {
    id: 22,
    title: 'Strengthen Business and Education using AI',
    issuer: 'Microsoft',
    date: '2024',
    image: strengthenAICert,
    category: 'AI & Machine Learning',
    description: 'AI applications for enhancing business processes and educational outcomes.',
    gradient: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    featured: false
  },
  {
    id: 23,
    title: 'Data Analytics for Smarter Decision-Making',
    issuer: 'Microsoft',
    date: '2024',
    image: dataAnalyticsCert,
    category: 'Data Science',
    description: 'Advanced data analytics techniques for informed business decision-making.',
    gradient: 'bg-gradient-to-br from-slate-500 to-gray-600',
    featured: false
  },
  {
    id: 24,
    title: 'Building AI Agents and Apps with Azure AI Foundry',
    issuer: 'Microsoft',
    date: '2024',
    image: azureAICert,
    category: 'AI & Machine Learning',
    description: 'Comprehensive Azure AI Foundry for building intelligent applications and agents.',
    gradient: 'bg-gradient-to-br from-blue-600 to-indigo-700',
    featured: false
  },
  {
    id: 25,
    title: 'Building Web Application in Django',
    issuer: 'Python Institute',
    date: '2024',
    image: djangoCert,
    category: 'Backend Development',
    description: 'Complete Django web application development from basics to deployment.',
    gradient: 'bg-gradient-to-br from-green-600 to-emerald-700',
    featured: false
  }
];

// Certificate Card Component
const CertificateCard = ({ certificate, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer h-[400px] flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(certificate)}
    >
      {/* Certificate Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <motion.img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover transition-transform duration-500"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${certificate.gradient} text-white backdrop-blur-sm`}>
            {certificate.category}
          </span>
        </div>

        {/* Featured Badge */}
        {certificate.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary backdrop-blur-sm border border-primary/30">
              Featured
            </span>
          </div>
        )}

        {/* Hover Content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <DocumentTextIcon className="h-12 w-12 text-white mx-auto mb-2" />
            <p className="text-white font-medium">View Certificate</p>
          </motion.div>
        </div>
      </div>

      {/* Certificate Details */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {certificate.title}
        </h3>
        
        <div className="flex items-center text-primary font-medium mb-2">
          <BuildingOfficeIcon className="h-4 w-4 mr-2" />
          <span className="text-sm">{certificate.issuer}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-3">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span className="text-sm">{certificate.date}</span>
        </div>
        
        <p 
          className="text-sm text-gray-400 leading-relaxed flex-1"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            wordBreak: 'break-word',
            lineHeight: '1.5'
          }}
        >
          {certificate.description}
        </p>
      </div>
    </motion.div>
  );
};

// Certificate Modal Component
const CertificateModal = ({ certificate, isOpen, onClose }) => {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-4xl max-h-[90vh] w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
              {/* Certificate Image */}
              <div className="lg:w-2/3 bg-gray-800 flex items-center justify-center p-8">
                <motion.img
                  src={certificate.image}
                  alt={certificate.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </div>

              {/* Certificate Details */}
              <div className="lg:w-1/3 p-8 bg-gray-900 overflow-y-auto">
                <div className="space-y-6">
                  {/* Category Badge */}
                  <div>
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${certificate.gradient} text-white`}>
                      {certificate.category}
                    </span>
                    {certificate.featured && (
                      <span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    {certificate.title}
                  </h2>

                  {/* Issuer */}
                  <div className="flex items-center text-primary font-medium">
                    <BuildingOfficeIcon className="h-5 w-5 mr-2" />
                    <span>{certificate.issuer}</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center text-gray-400">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    <span>{certificate.date}</span>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">About this Certificate</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {certificate.description}
                    </p>
                  </div>

                  {/* Additional Info */}
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-sm text-gray-400">
                      This certificate validates completion of the course and demonstrates proficiency in the subject matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Certificates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredCertificates, setFilteredCertificates] = useState(allCertificates);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique categories
  const categories = ['All', ...new Set(allCertificates.map(cert => cert.category))];

  // Modal handlers
  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  // Filter certificates based on search and category
  React.useEffect(() => {
    let filtered = allCertificates;

    if (searchTerm) {
      filtered = filtered.filter(cert =>
        cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(cert => cert.category === selectedCategory);
    }

    setFilteredCertificates(filtered);
  }, [searchTerm, selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-32 pb-16 relative overflow-hidden">
      <GridBackground />
      
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
              PROFESSIONAL ACHIEVEMENTS
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Certifications
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
              A comprehensive collection of my professional certifications and completed courses that validate my expertise across various domains.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search certificates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <FunnelIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-gray-900">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mt-6">
              <p className="text-gray-400">
                Showing {filteredCertificates.length} of {allCertificates.length} certificates
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="relative">
        <div className="container mx-auto px-4">
          {filteredCertificates.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredCertificates.map((certificate, index) => (
                <motion.div key={certificate.id} variants={itemVariants}>
                  <CertificateCard 
                    certificate={certificate} 
                    index={index} 
                    onClick={handleCertificateClick}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <DocumentTextIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No certificates found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Certificate Modal */}
      <CertificateModal 
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Certificates;
