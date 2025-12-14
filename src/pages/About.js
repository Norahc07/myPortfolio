import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { UserCircleIcon, AcademicCapIcon, BriefcaseIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import SkillsChart from '../components/SkillsChart';

// Grid background component
const GridBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
  </div>
);

const skills = [
  { name: 'Frontend', percentage: 90 },
  { name: 'Backend', percentage: 80 },
  { name: 'UI/UX Design', percentage: 85 },
  { name: 'Mobile Development', percentage: 75 },
  { name: 'Database', percentage: 80 },
  { name: 'DevOps', percentage: 70 },
];

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Tech Solutions Inc.',
    duration: '2021 - Present',
    description: 'Developing and maintaining web applications using modern technologies.',
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Creatives',
    duration: '2019 - 2021',
    description: 'Created responsive and interactive user interfaces for various clients.',
  },
  {
    role: 'UI/UX Designer',
    company: 'Design Studio',
    duration: '2018 - 2019',
    description: 'Designed user interfaces and experiences for web and mobile applications.',
  },
];

const education = [
  {
    degree: 'Accountancy, Business and Management',
    institution: 'Dr. Maria D. Pastrana National High School',
    year: '2016 - 2022',
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Manuel S. Enverga University Foundation',
    year: '2022 - 2026',
  },
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-32 pb-16 relative overflow-hidden">
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
      <GridBackground />
      
      {/* Accent Glow */}
      <div className="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      
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
              GET TO KNOW ME
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              About Me
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
              Get to know more about my journey, skills, and experience in the tech industry.
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="relative group">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center mx-auto overflow-hidden">
                  <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <UserCircleIcon className="h-full w-full text-primary/30 group-hover:text-primary/40 transition-colors duration-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated rings */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-primary/10 group-hover:border-primary/20 transition-all duration-1000"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ 
                      scale: 1.1, 
                      opacity: 1,
                      transition: { 
                        duration: 1.5,
                        ease: [0.16, 1, 0.3, 1],
                        repeat: Infinity,
                        repeatType: 'reverse'
                      } 
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.h2 
                className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Who I Am
              </motion.h2>
              
              <motion.p 
                className="text-gray-400 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I'm a passionate Web and Mobile Developer with a strong foundation in UI/UX and Graphic Design. As a recent BSIT graduate specializing in Web and Mobile Applications, I've developed a keen eye for creating intuitive and visually appealing digital experiences. My academic journey has equipped me with both technical skills and design sensibilities to build applications that are not just functional but also engaging and user-friendly.
              </motion.p>
              
              <motion.p 
                className="text-gray-400 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                Beyond coding, I have a deep passion for art, design, and gaming, which fuels my creativity in digital development. I enjoy experimenting with new recipes in the kitchen, finding that the same creativity and problem-solving skills apply to both cooking and development. I'm always eager to learn and grow, whether through hands-on projects, exploring new technologies, or drawing inspiration from various art forms and design trends. My goal is to create digital experiences that are not just functional but also visually stunning and enjoyable to use.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {[
                  { value: '50+', label: 'Projects' },
                  { value: '40+', label: 'Clients' },
                  { value: '30+', label: 'Websites' },
                  { value: '20+', label: 'Apps' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors group"
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.1)' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-400 group-hover:from-primary-300 group-hover:to-primary-500 transition-colors">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] -z-10"></div>
        <div className="absolute -left-1/4 -top-1/4 w-3/4 h-3/4 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
        
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
              ACADEMIC JOURNEY
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Educational Background
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '6rem', opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Enverga University */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
              {/* Background Logo */}
              <div className="absolute -bottom-8 -right-8 w-56 h-56 opacity-90 group-hover:opacity-[0.30] transition-opacity duration-300 pointer-events-none">
                <img 
                  src={require('../assets/EnvergaLogo.png')} 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 h-full group-hover:border-primary/30 transition-colors">
                <div className="flex items-start mb-6">
                  <div className="w-24 h-24 rounded-xl border-white/10 flex items-center justify-center p-2 mr-2 flex-shrink-0">
                    <img 
                      src={require('../assets/EnvergaLogo.png')} 
                      alt="Enverga University Logo" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg" style={{display: 'none'}}>
                      EU
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Bachelor of Science in Information Technology (BSIT)</h3>
                    <div className="text-sm text-primary/80 mb-2">2022 - 2026</div>
                    <div className="text-gray-400 text-sm">Manuel S. Enverga University Foundation</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Currently pursuing a degree in Information Technology, focusing on software development, systems analysis, and emerging technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pastrana High School */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative overflow-hidden"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
              {/* Background Logo */}
              <div className="absolute -bottom-8 -right-8 w-56 h-56 opacity-90 group-hover:opacity-[0.30] transition-opacity duration-300 pointer-events-none">
                <img 
                  src={require('../assets/PastranaLogo.png')} 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 h-full group-hover:border-primary/30 transition-colors">
                <div className="flex items-start mb-6">
                  <div className="w-24 h-24 rounded-xl border-white/10 flex items-center justify-center p-2 mr-2 flex-shrink-0">
                    <img 
                      src={require('../assets/PastranaLogo.png')} 
                      alt="Pastrana High School Logo" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg" style={{display: 'none'}}>
                      PH
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Accountancy, Business and Management (ABM)</h3>
                    <div className="text-sm text-primary/80 mb-2">2016 - 2022</div>
                    <div className="text-gray-400 text-sm">Dr. Maria D. Pastrana National High School</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Completed senior high school with honors, focusing on business and management principles, accounting, and entrepreneurship.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 text-xs font-mono bg-primary/10 text-primary/90 rounded-full mb-4 tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              SKILLS PROGRESSION
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Skills Journey
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
              Tracking my growth and expertise across key technologies from 2022 to 2026
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <SkillsChart />
          </motion.div>

        </div>
      </section>

      {/* Hobbies & Interests */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 text-xs font-mono bg-primary/10 text-primary/90 rounded-full mb-4 tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              HOBBIES & INTERESTS
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Beyond the Screen
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
              When I'm not coding, you can find me exploring these passions that keep me inspired and balanced.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.04,
                  delayChildren: 0.2,
                  staggerDirection: 1
                }
              }
            }}
          >
            {[
              { icon: '🎬', name: 'Movies', emoji: '🎥', color: 'from-purple-500/20 to-blue-500/20' },
              { icon: '🏀', name: 'Basketball', emoji: '⛹️', color: 'from-orange-500/20 to-red-500/20' },
              { icon: '👨‍🍳', name: 'Cooking', emoji: '🍳', color: 'from-amber-500/20 to-orange-500/20' },
              { icon: '👔', name: 'Fashion', emoji: '👗', color: 'from-pink-500/20 to-rose-500/20' },
              { icon: '🎥', name: 'Editing', emoji: '✂️', color: 'from-blue-500/20 to-cyan-500/20' },
              { icon: '🎨', name: 'Art', emoji: '🖌️', color: 'from-fuchsia-500/20 to-purple-500/20' },
              { icon: '🎮', name: 'Gaming', emoji: '👾', color: 'from-green-500/20 to-emerald-500/20' },
              { icon: '🎵', name: 'Music', emoji: '🎧', color: 'from-indigo-500/20 to-violet-500/20' },
              { icon: '📰', name: 'News', emoji: '📡', color: 'from-sky-500/20 to-blue-500/20' },
              { icon: '🖼️', name: 'Photos', emoji: '📸', color: 'from-rose-500/20 to-pink-500/20' },
              { icon: '💃', name: 'Dance', emoji: '🕺', color: 'from-violet-500/20 to-fuchsia-500/20' },
              { icon: '🌐', name: 'Web', emoji: '🔍', color: 'from-cyan-500/20 to-sky-500/20' },
            ].map((interest, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      mass: 0.6
                    }
                  }
                }}
                className="group relative h-40 flex flex-col items-center justify-center p-6 rounded-2xl overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
                
                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                  {/* Main Icon */}
                  <motion.div 
                    className="text-4xl mb-3 transform group-hover:-translate-y-2 transition-all duration-500"
                    initial={false}
                    animate={{
                      y: [0, -3, 0],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse"
                      }
                    }}
                  >
                    {interest.icon}
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-sm font-medium text-white/90 mb-2 group-hover:text-white transition-colors duration-300"
                    initial={false}
                  >
                    {interest.name}
                  </motion.h3>
                  
                  {/* Secondary Emoji */}
                  <motion.div 
                    className="text-2xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                    initial={false}
                  >
                    {interest.emoji}
                  </motion.div>
                </div>
                
                {/* Hover Effects */}
                <div className="absolute inset-0 border border-white/5 group-hover:border-white/10 transition-colors duration-500 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-70 blur-md -z-10 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
