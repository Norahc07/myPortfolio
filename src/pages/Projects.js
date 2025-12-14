import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ArrowTopRightOnSquareIcon,
  ArrowRightIcon,
  TagIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  UserIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import eumatterImage from '../assets/eumatterPage.png';
import n2RevConImage from '../assets/n2RevConPage.png';
import resumeFormImage from '../assets/resumeForrmPage.png';

// Project Card Component (similar to Certificate Card)
const ProjectCard = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer h-full"
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full">
        {/* Project Image */}
        <div className="relative h-48 flex-shrink-0 overflow-hidden">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </>
          ) : (
            <div className={`w-full h-full flex items-center justify-center ${project.placeholder.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
              <div className="relative z-10 text-center p-6">
                <div className="text-4xl mb-3 opacity-80">{project.placeholder.icon}</div>
                <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
              </div>
            </div>
          )}

          {/* Hover Content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <CodeBracketIcon className="h-12 w-12 text-white mx-auto mb-2" />
              <p className="text-white font-medium">View Details</p>
            </motion.div>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 flex-1 flex flex-col min-h-0">
          {/* Title */}
          <h3 
            className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              lineHeight: '1.5rem',
              minHeight: '3rem',
              maxHeight: '3rem'
            }}
          >
            {project.title}
          </h3>
          
          {/* Subtitle */}
          <div className="flex items-center text-primary font-medium mb-2 min-h-[1.5rem] flex-shrink-0">
            <TagIcon className="h-4 w-4 mr-2 flex-shrink-0" />
            <span 
              className="text-sm truncate"
              title={project.subtitle}
            >
              {project.subtitle}
            </span>
          </div>
          
          {/* Year */}
          <div className="flex items-center text-gray-500 mb-3 min-h-[1.5rem] flex-shrink-0">
            <ClockIcon className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="text-sm">{project.year}</span>
          </div>
          
          {/* Description */}
          <p 
            className="text-sm text-gray-400 leading-relaxed flex-1 min-h-0 mb-4"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              lineHeight: '1.5rem'
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-gray-800/50 flex-shrink-0">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i}
                className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-0.5 bg-gray-700/50 text-gray-400 text-xs font-medium rounded-full whitespace-nowrap">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

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
            className="relative max-w-5xl max-h-[90vh] w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
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
              {/* Left Side - Image and Details Below */}
              <div className="lg:w-2/3 flex flex-col bg-gray-800 overflow-y-auto">
                {/* Project Image */}
                <div className="flex items-center justify-center p-8 flex-shrink-0">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-lg"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                </div>

                {/* About this Project - Below Image */}
                <div className="px-8 pb-8 border-t border-gray-700/50">
                  <div className="pt-6">
                    <h3 className="text-xl font-semibold text-white mb-4">About this Project</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Project Info */}
              <div className="lg:w-1/3 p-8 bg-gray-900 overflow-y-auto border-l border-gray-700/50">
                <div className="space-y-6">
                  {/* Category Badge */}
                  <div>
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${project.placeholder.gradient} text-white`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    {project.title}
                  </h2>

                  {/* Subtitle */}
                  <div className="flex items-center text-primary font-medium">
                    <TagIcon className="h-5 w-5 mr-2" />
                    <span>{project.subtitle}</span>
                  </div>

                  {/* Year */}
                  <div className="flex items-center text-gray-400">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span>{project.year}</span>
                  </div>

                  {/* Role & Team */}
                  {(project.role || project.team) && (
                    <div className="space-y-2">
                      {project.role && (
                        <div className="flex items-center text-gray-300">
                          <UserIcon className="h-5 w-5 mr-2" />
                          <span className="text-sm">{project.role}</span>
                        </div>
                      )}
                      {project.team && (
                        <div className="flex items-center text-gray-300">
                          <UserGroupIcon className="h-5 w-5 mr-2" />
                          <span className="text-sm">{project.team}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Result */}
                  {project.result && (
                    <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5"></div>
                        <div>
                          <span className="text-sm font-semibold text-green-400 block mb-1">Key Result</span>
                          <span className="text-sm text-gray-300 leading-relaxed">{project.result}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-gray-700">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Live Project
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                    </motion.a>
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

const projects = [
  {
    id: 1,
    title: 'EUMATTER',
    subtitle: 'Community Relations Management System',
    description: 'EuMatter: A Web and Mobile Platform for Donation and Volunteer Management to Support Community Relations Activities in Educational Institution - A thesis capstone project for the Community Relation Department of Manuel S. Enverga University Foundation Community Extension Services. As the Frontend Developer, I built a responsive and user-friendly interface that streamlines community service management and reporting. The system enables efficient tracking of community programs, participant management, and comprehensive reporting for the university\'s extension services.',
    placeholder: { gradient: 'bg-gradient-to-br from-blue-600 to-purple-700', icon: '🎓' },
    tags: [
      'React.js v19',
      'Vite',
      'React Router DOM',
      'TailwindCSS',
      'Framer Motion',
      'Headless UI',
      'Axios',
      'PWA',
      'React Context API',
      'React Toastify',
      'Recharts',
      'jsPDF',
      'MERN Stack'
    ],
    category: 'web',
    year: '2024',
    link: 'https://eu-matter-thesis-project.vercel.app/',
    featured: true,
    result: 'Streamlined community service management and reporting',
    role: 'Frontend Developer',
    team: 'Luigi Amarillo, John Ray Buenaobra, John Richard Orian',
    image: eumatterImage
  },
  {
    id: 2,
    title: 'N2 RevCon',
    subtitle: 'Construction Revenue Recognition System',
    description: 'A thesis project commissioned by a client - a comprehensive system designed to streamline how construction firms track construction projects, recognize and measure revenue, manage costs, and ensure compliance with financial reporting standards. This was my first client project, focusing on creating an intuitive and efficient user experience for complex financial data management in the construction industry.',
    placeholder: { gradient: 'bg-gradient-to-br from-green-600 to-blue-600', icon: '🏗️' },
    tags: ['Full Stack', 'React', 'Backend', 'Financial Systems', 'Client Project'],
    category: 'web',
    year: '2024',
    link: 'https://n2-rev-con.vercel.app/',
    featured: true,
    result: 'Streamlined construction project tracking and revenue recognition',
    role: 'Full Stack Developer',
    team: 'Solo Project',
    image: n2RevConImage
  },
  {
    id: 3,
    title: 'ResumeForm',
    subtitle: 'Resume Creation & Management System',
    description: 'A website I created for my printing and layout business. This system allows customers to create and submit their resume information, making it easy for me to edit content and send finished resumes to clients via email. Streamlines the entire resume creation workflow from submission to delivery, improving efficiency and client satisfaction.',
    placeholder: { gradient: 'bg-gradient-to-br from-purple-600 to-pink-600', icon: '📄' },
    tags: ['Full Stack', 'React', 'Email Integration', 'Business Solution', 'Form Management'],
    category: 'web',
    year: '2024',
    link: 'https://resume-form-eight.vercel.app/',
    featured: true,
    result: 'Streamlined resume creation workflow and client communication',
    role: 'Full Stack Developer & Designer',
    team: 'Solo Project',
    image: resumeFormImage
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'design', name: 'UI/UX Design' },
];

// Grid background component (unified with About page)
const GridBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
  </div>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Modal handlers
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
              PORTFOLIO SHOWCASE
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              My Projects
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
              <strong className="text-white">Where Clean Design Meets Complex Problem Solving.</strong> Dive into the projects that define my approach. Each case study details the challenge, my strategic solution, and the measurable results delivered for the client.
            </motion.p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-12 pr-4 py-3 border border-gray-700/50 rounded-full bg-gray-900/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-end w-full md:w-auto">
                {categories.map(category => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'bg-gray-900/50 text-gray-300 border border-gray-700/50 hover:bg-gray-800/50 hover:border-gray-600/50'
                    }`}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-center mb-12"
            >
              <motion.p 
                className="text-gray-400 text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </motion.p>
            </motion.div>

            {filteredProjects.length === 0 ? (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <CodeBracketIcon className="h-16 w-16 mx-auto text-gray-600 mb-6" />
                <h3 className="text-xl font-medium mb-2 text-white">No projects found</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  We couldn't find any projects matching your search. Try adjusting your filters.
                </p>
              </motion.div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div 
                    key={project.id} 
                    variants={itemVariants}
                    className="h-full"
                  >
                    <ProjectCard 
                      project={project} 
                      onClick={handleProjectClick}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Projects;
