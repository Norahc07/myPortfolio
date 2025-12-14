import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon, 
  ServerIcon, 
  RocketLaunchIcon, 
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import eumatterImage from '../assets/eumatterPage.png';
import n2RevConImage from '../assets/n2RevConPage.png';
import resumeFormImage from '../assets/resumeForrmPage.png';

const services = [
  {
    title: 'Web & Mobile Development',
    subtitle: 'Applications Engineered for Growth',
    description: 'I don\'t just build websites and apps; I create digital experiences that drive conversions, increase user engagement, and scale with your business. Every line of code is optimized for performance and user satisfaction.',
    icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
    sampleProject: 'EUMATTER',
    projectDescription: 'A thesis capstone project for the Community Relation Department of Manuel S. Enverga University Foundation Community Extension Services. As the Frontend Developer, I built a responsive and user-friendly interface that streamlines community service management and reporting.',
    projectLink: 'https://eu-matter-thesis-project.vercel.app/',
    projectRole: 'Frontend Developer',
    projectTeam: 'Luigi Amarillo, John Ray Buenaobra, John Richard Orian',
    projectThumbnail: eumatterImage,
    features: [
      'Responsive Web Applications',
      'Cross-platform Mobile Apps',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'Database Design & Optimization'
    ]
  },
  {
    title: 'UI/UX Design',
    subtitle: 'Interfaces Engineered for Conversion',
    description: 'I don\'t just design pretty screens; I craft user flows that reduce friction, increase time-on-site, and guide users directly to your goals. Every interaction is strategically designed to maximize user satisfaction and business outcomes.',
    icon: <PaintBrushIcon className="h-10 w-10 text-primary" />,
    sampleProject: 'N2 RevCon',
    projectDescription: 'A thesis project commissioned by a client - a comprehensive system designed to streamline how construction firms track construction projects, recognize and measure revenue, manage costs, and ensure compliance with financial reporting standards. This was my first client project, focusing on creating an intuitive and efficient user experience.',
    projectLink: 'https://n2-rev-con.vercel.app/',
    projectRole: 'Full Stack Developer',
    projectTeam: 'Solo Project',
    projectThumbnail: n2RevConImage,
    features: [
      'User Research & Testing',
      'Wireframing & Prototyping',
      'Interaction Design',
      'Information Architecture',
      'Design Systems'
    ]
  },
  {
    title: 'Graphic Design',
    subtitle: 'Brands That Command Attention',
    description: 'I create visual identities that don\'t just look good—they communicate your value proposition instantly and build lasting brand recognition. Every design element is crafted to resonate with your target audience and drive brand loyalty.',
    icon: <PaintBrushIcon className="h-10 w-10 text-primary" />,
    sampleProject: 'ResumeForm',
    projectDescription: 'A website I created for my printing and layout business. This system allows customers to create and submit their resume information, making it easy for me to edit content and send finished resumes to clients via email. Streamlines the entire resume creation workflow.',
    projectLink: 'https://resume-form-eight.vercel.app/',
    projectRole: 'Full Stack Developer & Designer',
    projectTeam: 'Solo Project',
    projectThumbnail: resumeFormImage,
    features: [
      'Logo & Brand Identity',
      'Print & Digital Media',
      'Social Media Graphics',
      'Marketing Materials',
      'Illustrations & Icons'
    ]
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Strategic Discovery & Planning',
    description: 'I dive deep into your business goals, target audience, and competitive landscape to create a roadmap that aligns perfectly with your vision and market needs.'
  },
  {
    number: '02',
    title: 'Collaborative Project Architecture',
    description: 'I work with you to design a detailed project blueprint with clear milestones, timelines, and success metrics. You\'ll always know exactly what to expect and when.'
  },
  {
    number: '03',
    title: 'User-Centered Design & Prototyping',
    description: 'I create wireframes and interactive prototypes that put your users first, ensuring every design decision drives toward your business objectives.'
  },
  {
    number: '04',
    title: 'Agile Development & Iteration',
    description: 'My development process is transparent and collaborative. You\'ll see progress in real-time and have opportunities to refine as I build.'
  },
  {
    number: '05',
    title: 'Rigorous Quality Assurance (QA)',
    description: 'No surprises. I execute comprehensive testing across all devices and edge cases to ensure the final product is flawless and future-ready.'
  },
  {
    number: '06',
    title: 'Launch & Ongoing Partnership',
    description: 'I don\'t just deliver and disappear. I launch your project successfully and provide ongoing support to ensure continued growth and optimization.'
  }
];

// Grid background component (unified with About page)
const GridBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
  </div>
);

const Services = () => {
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
              WHAT I DO
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              My Services
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
              <strong className="text-white">Core Value Proposition:</strong> I transform your business challenges into digital solutions that drive growth, increase conversions, and build lasting customer relationships. Every project is a partnership focused on measurable results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Rows */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-primary/40 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/5 overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out -z-10"></div>
                
                {/* Row Layout: Icon + Content */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-6 lg:p-8">
                  {/* Left: Icon Section */}
                  <div className="flex-shrink-0 flex items-start justify-center lg:justify-start">
                    <motion.div 
                      className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 flex items-center justify-center group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.2)]"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    >
                      {React.cloneElement(service.icon, { 
                        className: 'h-10 w-10 lg:h-12 lg:w-12 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
                      })}
                    </motion.div>
                  </div>
                  
                  {/* Right: Content Section */}
                  <div className="flex-1 min-w-0">
                    {/* Header: Title & Subtitle */}
                    <div className="mb-4">
                      <motion.h3 
                        className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-primary-300 group-hover:to-primary-500"
                        whileHover={{ 
                          x: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.h4 
                        className="text-sm lg:text-base font-semibold text-primary transition-all duration-500 group-hover:text-primary-300"
                        whileHover={{ 
                          x: 3,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {service.subtitle}
                      </motion.h4>
                    </div>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-gray-400 mb-5 leading-relaxed text-base lg:text-lg transition-all duration-500 group-hover:text-gray-300"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ 
                        opacity: 1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {service.description}
                    </motion.p>
                    
                    {/* Bottom Section: Sample Project, Features, and CTA */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-gray-800/50 group-hover:border-gray-700 transition-all duration-500">
                      {/* Left Column: Sample Project */}
                      <div className="space-y-4">
                        {/* Sample Project */}
                        <motion.div 
                          className="p-5 bg-primary/5 rounded-xl border border-primary/10 group-hover:border-primary/20 transition-all duration-300"
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <div className="flex items-start space-x-3 mb-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-primary mb-2">Sample Project</p>
                              <h5 className="text-base font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                                {service.sampleProject}
                              </h5>
                              <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                                {service.projectDescription}
                              </p>
                            </div>
                          </div>
                          
                          {/* Project Role & Team */}
                          {(service.projectRole || service.projectTeam) && (
                            <div className="mb-4 flex flex-wrap gap-2 text-xs">
                              {service.projectRole && (
                                <span className="px-2.5 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                                  {service.projectRole}
                                </span>
                              )}
                              {service.projectTeam && (
                                <span className="px-2.5 py-1 bg-gray-800/50 text-gray-400 rounded-full border border-gray-700/50">
                                  {service.projectTeam}
                                </span>
                              )}
                            </div>
                          )}
                          
                          {/* Project Thumbnail */}
                          <motion.a
                            href={service.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block h-48 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-lg border border-gray-700/50 group-hover:border-primary/30 transition-all duration-300 overflow-hidden"
                            whileHover={{ 
                              scale: 1.02,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {/* Browser window chrome */}
                            <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800/90 border-b border-gray-700/50 flex items-center px-3 space-x-2 z-10">
                              <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                              <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                              <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                              <div className="flex-1 mx-2 h-4 bg-gray-700/50 rounded text-xs flex items-center px-2 text-gray-400 truncate">
                                {service.projectLink?.replace('https://', '').replace('http://', '')}
                              </div>
                            </div>
                            
                            {/* Screenshot Image or Fallback */}
                            {service.projectThumbnail ? (
                              <img
                                src={service.projectThumbnail}
                                alt={`${service.sampleProject} screenshot`}
                                className="w-full h-full pt-8 object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  const fallback = e.target.nextElementSibling;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                            ) : null}
                            
                            {/* Fallback Design */}
                            <div className={`pt-10 p-4 h-full flex flex-col ${service.projectThumbnail ? 'hidden' : ''}`} style={{ display: service.projectThumbnail ? 'none' : 'flex' }}>
                              {/* Mock header bar */}
                              <div className="h-8 bg-gray-700/30 rounded mb-3 flex items-center px-3">
                                <div className="flex space-x-2">
                                  <div className="w-16 h-2 bg-gray-600/40 rounded"></div>
                                  <div className="w-12 h-2 bg-gray-600/40 rounded"></div>
                                  <div className="w-20 h-2 bg-gray-600/40 rounded"></div>
                                </div>
                              </div>
                              
                              {/* Mock content grid */}
                              <div className="flex-1 grid grid-cols-3 gap-2">
                                <div className="bg-gray-700/20 rounded"></div>
                                <div className="bg-gray-700/20 rounded"></div>
                                <div className="bg-gray-700/20 rounded"></div>
                                <div className="bg-gray-700/20 rounded col-span-2"></div>
                                <div className="bg-gray-700/20 rounded"></div>
                              </div>
                              
                              {/* Overlay icon */}
                              <div className="absolute inset-0 pt-8 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                                <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                            </div>
                            
                            {/* Overlay with link icon */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                              <div className="flex items-center space-x-2 text-primary bg-gray-900/90 px-4 py-2 rounded-lg border border-primary/30">
                                <span className="text-sm font-medium">Visit Project</span>
                                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                              </div>
                            </div>
                          </motion.a>
                          
                          {/* Project Link */}
                          {service.projectLink && (
                            <motion.a
                              href={service.projectLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center mt-3 text-sm font-medium text-primary hover:text-primary-300 transition-colors duration-300 group-hover:underline"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              View Live Project
                              <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                            </motion.a>
                          )}
                        </motion.div>
                      </div>
                      
                      {/* Right Column: Features List */}
                      <div className="space-y-4">
                        <motion.h4 
                          className="text-xs font-semibold text-gray-500 tracking-wider group-hover:text-primary-400 transition-colors duration-500"
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className="inline-flex items-center">
                            <span className="inline-block w-3 h-px bg-primary mr-2 group-hover:w-6 transition-all duration-500"></span>
                            SERVICES INCLUDE
                            <span className="inline-block w-3 h-px bg-primary ml-2 group-hover:w-6 transition-all duration-500"></span>
                          </span>
                        </motion.h4>
                        
                        <ul className="space-y-2.5">
                          {service.features.map((feature, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start group-hover:bg-gray-800/30 rounded-lg p-2.5 -mx-2.5 transition-all duration-300 hover:bg-gray-800/50"
                              initial={{ x: 0 }}
                              whileHover={{ 
                                x: 5,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <motion.div 
                                className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary/20 transition-colors duration-300"
                                whileHover={{ scale: 1.1 }}
                              >
                                <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </motion.div>
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        {/* CTA Button */}
                        <motion.div 
                          className="pt-4 border-t border-gray-800/50 group-hover:border-gray-700 transition-all duration-500"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.a
                            href="/projects"
                            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-300 transition-colors duration-300 group-hover:underline"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            View case study
                            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </motion.a>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 text-xs font-mono bg-primary/10 text-primary/90 rounded-full mb-4 tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              MY WORKFLOW
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              My Process
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '6rem', opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p 
              className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A structured approach to ensure your project's success from concept to launch.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-24">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  <div className="md:w-1/2 px-4 mb-6 md:mb-0">
                    <motion.div 
                      className="group relative bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out -z-10 rounded-xl"></div>
                      <motion.div 
                        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary/20 to-primary/40 mb-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.number}
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-primary-300 group-hover:to-primary-500 transition-all duration-500">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                  <div className="hidden md:block md:w-1/2 px-4">
                    <div className="h-1 w-full bg-transparent"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strong Closing CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Transform Your Digital Presence?
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-lg text-gray-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's discuss how I can drive measurable results for your business. Every project starts with understanding your goals and ends with exceeding your expectations.
            </motion.p>
          <motion.div
              className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-600 text-white rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary/20 transition-all duration-300 inline-flex items-center"
              >
                Start Your Project Today
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-primary/30 text-primary rounded-lg font-medium hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 inline-flex items-center"
              >
                View Portfolio
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Services;
