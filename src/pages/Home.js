import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import TechStackCarousel from '../components/TechStackCarousel';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  ArrowRightIcon, 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import eumatterImage from '../assets/eumatterPage.png';
import n2RevConImage from '../assets/n2RevConPage.png';
import resumeFormImage from '../assets/resumeForrmPage.png';
// Import certificate images
import techNexusCert from '../assets/Certificates/Tech Nexus 2024 Empowering Campus Innovators.jpeg';
import brandingCert from '../assets/Certificates/Branding Identity using Adobe Illustrator.png';
import customLogoCert from '../assets/Certificates/Customized Logo using Adobe Illustrator.png';

// Grid background component (unified with About page)
const GridBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
  </div>
);

// Typewriter component
const Typewriter = ({ words, className = "" }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isWaiting) {
      const timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000); // Wait 2 seconds before deleting
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50); // Delete speed
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 100); // Type speed
        return () => clearTimeout(timeout);
      } else {
        setIsWaiting(true);
      }
    }
  }, [currentText, currentWordIndex, isDeleting, isWaiting, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};


// Recent Projects - using actual project data
const projects = [
  {
    id: 1,
    title: 'EUMATTER',
    description: 'A thesis capstone project for the Community Relation Department of Manuel S. Enverga University Foundation Community Extension Services. As the Frontend Developer, I built a responsive and user-friendly interface that streamlines community service management and reporting.',
    tags: ['React', 'Frontend Development', 'UI/UX', 'Responsive Design'],
    image: eumatterImage,
    link: 'https://eu-matter-thesis-project.vercel.app/',
    featured: true
  },
  {
    id: 2,
    title: 'N2 RevCon',
    description: 'A thesis project commissioned by a client - a comprehensive system designed to streamline how construction firms track construction projects, recognize and measure revenue, manage costs, and ensure compliance with financial reporting standards.',
    tags: ['Full Stack', 'React', 'Backend', 'Financial Systems', 'Client Project'],
    image: n2RevConImage,
    link: 'https://n2-rev-con.vercel.app/',
    featured: true
  },
  {
    id: 3,
    title: 'ResumeForm',
    description: 'A website I created for my printing and layout business. This system allows customers to create and submit their resume information, making it easy for me to edit content and send finished resumes to clients via email.',
    tags: ['Full Stack', 'React', 'Email Integration', 'Business Solution', 'Form Management'],
    image: resumeFormImage,
    link: 'https://resume-form-eight.vercel.app/',
    featured: true
  }
];

// Certificate placeholder component
const CertificatePlaceholder = ({ title, gradient, icon }) => (
  <div className={`w-20 h-20 rounded-xl flex items-center justify-center ${gradient} relative overflow-hidden`}>
    <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
    <div className="relative z-10 text-center">
      <div className="text-2xl mb-1 opacity-90">{icon}</div>
    </div>
  </div>
);

// Featured certificates data
const featuredCertificates = [
  {
    id: 1,
    title: 'Tech Nexus 2024 Empowering Campus Innovators',
    issuer: 'Tech Nexus',
    date: '2024',
    image: techNexusCert,
    category: 'Technology',
    description: 'Innovation and technology leadership conference for campus innovators.',
    gradient: 'bg-gradient-to-br from-violet-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Branding Identity using Adobe Illustrator',
    issuer: 'Adobe',
    date: '2024',
    image: brandingCert,
    category: 'Branding',
    description: 'Complete branding identity design using Adobe Illustrator.',
    gradient: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  },
  {
    id: 3,
    title: 'Customized Logo using Adobe Illustrator',
    issuer: 'Adobe',
    date: '2024',
    image: customLogoCert,
    category: 'Graphic Design',
    description: 'Professional logo design and branding using Adobe Illustrator.',
    gradient: 'bg-gradient-to-br from-orange-400 to-yellow-500',
  },
];

const services = [
  {
    title: 'Web & Mobile Development',
    description: 'Building responsive web applications and cross-platform mobile apps using modern technologies like React, React Native, and Node.js.',
    icon: <CodeBracketIcon className="h-10 w-10 text-blue-400" />,
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
    description: 'Crafting intuitive and engaging user experiences with a focus on usability and aesthetics.',
    icon: <PaintBrushIcon className="h-10 w-10 text-pink-400" />,
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
    description: 'Creating visually stunning designs that communicate your brand\'s message effectively.',
    icon: <PaintBrushIcon className="h-10 w-10 text-purple-400" />,
    features: [
      'Logo & Brand Identity',
      'Print & Digital Media',
      'Social Media Graphics',
      'Marketing Materials',
      'Illustrations & Icons'
    ]
  },
];

// Skill Progress Bar Component
const SkillBar = ({ name, level, color }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs font-medium text-primary">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-3">
{project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors flex items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <Link
          to={project.link}
          className="inline-flex items-center text-primary font-medium hover:underline group"
        >
          View Project
          <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <div className="min-h-screen bg-gray-950 text-white">
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
      <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-24">
        <GridBackground />
        
        {/* Accent Glow */}
        <div className="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-primary/10 rounded-full filter blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-mono bg-primary/10 text-primary rounded-full mt-20 mb-2">
                Hello, I'm
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Luigi Amarillo
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl font-semibold mb-8 text-gray-300"
              variants={itemVariants}
            >
              <Typewriter 
                words={['UX/UI Designer', 'Front-end Developer', 'Creative Designer']}
                className="text-primary"
              />
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl"
              variants={itemVariants}
            >
              I build intuitive applications with pixel-perfect precision, where clean design meets robust functionality.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-6 items-center mb-16"
              variants={itemVariants}
            >
              <Link
                to="/projects"
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-dark bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg group hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  View Featured Projects
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              
              <Link
                to="/about"
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium border border-primary/30 text-primary rounded-lg group hover:bg-primary/5 transition-all duration-300 hover:border-primary/50"
              >
                <span className="relative z-10">
                  About Me / Skills
                </span>
              </Link>
            </motion.div>
            
            {/* Tech Stack Carousel */}
            <motion.div 
              className="pt-8 border-t border-gray-800 overflow-hidden"
              variants={itemVariants}
            >
              <p className="text-sm text-gray-500 mb-6 font-mono">TECH STACK</p>
              <TechStackCarousel />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-28 overflow-hidden">
        <GridBackground />
        <div className="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-3 py-1 text-sm font-mono bg-primary/10 text-primary rounded-full mb-4">
              What I Do
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              My Services
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-400">
              I offer a range of services to help bring your digital ideas to life with cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-primary/40 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out -z-10"></div>
                
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                
                {/* Icon container with gradient border on hover */}
                <motion.div 
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.2)]"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {React.cloneElement(service.icon, { 
                    className: 'h-8 w-8 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
                  })}
                </motion.div>
                
                {/* Title with gradient text on hover */}
                <motion.h3 
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-3 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-primary-300 group-hover:to-primary-500"
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {service.title}
                </motion.h3>
                
                {/* Description with smooth fade and slide */}
                <motion.p 
                  className="text-gray-400 mb-6 leading-relaxed transition-all duration-500 group-hover:text-gray-300"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ 
                    opacity: 1,
                    x: 3,
                    transition: { duration: 0.3 }
                  }}
                >
                  {service.description}
                </motion.p>
                
                <div className="mt-auto pt-6 border-t border-gray-800/50 group-hover:border-gray-700 transition-all duration-500">
                  <motion.h4 
                    className="inline-block text-xs font-semibold text-gray-500 mb-4 tracking-wider group-hover:text-primary-400 transition-colors duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="inline-flex items-center">
                      <span className="inline-block w-3 h-px bg-primary mr-2 group-hover:w-6 transition-all duration-500"></span>
                      SERVICES INCLUDE:
                      <span className="inline-block w-3 h-px bg-primary ml-2 group-hover:w-6 transition-all duration-500"></span>
                    </span>
                  </motion.h4>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start group-hover:bg-gray-800/30 rounded-lg p-2 -mx-2 transition-all duration-300 hover:bg-gray-800/50"
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
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-28 bg-gray-900 overflow-hidden">
        <GridBackground />
        <div className="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 text-xs font-mono bg-primary/10 text-primary/90 rounded-full mb-4 tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              PORTFOLIO SHOWCASE
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Recent Projects
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '6rem', opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p 
              className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore my latest work and personal projects that showcase my skills and expertise.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-900/50 border border-gray-800 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Project image */}
                <motion.div 
                  className="absolute inset-0 overflow-hidden"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-5">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-3">
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                    >
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 line-clamp-1">{project.title}</h3>
                      <p className="text-gray-300 text-xs md:text-sm mb-3 line-clamp-2 leading-relaxed">{project.description}</p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                    >
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span 
                          key={i}
                          className="px-2 py-0.5 bg-primary/10 text-primary/90 text-xs font-medium rounded-full border border-primary/20 group-hover:border-primary/40 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 bg-gray-700/50 text-gray-400 text-xs font-medium rounded-full">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </motion.div>
                    
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300 pt-1"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-primary/90 hover:text-primary font-medium group"
                      >
                        Visit Project
                        <ArrowTopRightOnSquareIcon className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </motion.div>
                  </div>
                </div>
                
                {/* Project number */}
                <div className="absolute top-3 right-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center border border-gray-700 group-hover:border-primary/40 transition-colors">
                  <span className="text-xs font-mono text-gray-300 group-hover:text-primary">0{project.id}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 text-primary rounded-xl hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <span className="font-medium">View All Projects</span>
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="relative py-28 bg-gray-900/50 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10"></div>
        <div className="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-3 py-1 text-sm font-mono bg-primary/10 text-primary rounded-full mb-4">
              Achievements
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Certifications
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-400">
              My professional certifications and completed courses that validate my expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${cert.gradient} text-white`}>
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Certificates Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/certificates"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 text-primary rounded-xl hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <span className="font-medium">View All Certificates</span>
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gray-900/50 backdrop-blur-sm">
        <GridBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-8">
              <span className="inline-block px-3 py-1 text-sm font-mono bg-primary/10 text-primary rounded-full mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to start your project?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Let's collaborate to turn your ideas into reality. I'm here to help with your next project.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-primary/10 border border-primary/30 text-primary rounded-lg hover:bg-primary/20 transition-colors inline-flex items-center group"
              >
                Start a project
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a 
                href="mailto:hello@example.com" 
                className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800/50 transition-colors inline-flex items-center"
              >
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Add smooth scrolling for anchor links
if (typeof window !== 'undefined') {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

export default Home;
