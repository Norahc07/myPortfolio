import React, { useState, useEffect, useRef } from 'react';

const techStack = [
  { name: 'Adobe Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg' },
  { name: 'Adobe Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
  { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];

const TechStackCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const scrollRef = useRef(null);
  const isPausedRef = useRef(false);

  // Duplicate the tech stack - we need at least 2 full sets for seamless loop
  const duplicatedTechStack = [...techStack, ...techStack];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let animationId;
    const speed = 0.5; // pixels per frame
    let singleSetWidth = 0;

    // Calculate single set width once after container is rendered
    const calculateWidth = () => {
      if (scrollContainer) {
        singleSetWidth = scrollContainer.scrollWidth / 2;
      }
    };

    // Wait for next frame to ensure container is rendered
    requestAnimationFrame(calculateWidth);

    const scroll = () => {
      if (!isPausedRef.current && scrollContainer && singleSetWidth > 0) {
        scrollPosition += speed;
        
        // When we've scrolled one full set, reset position seamlessly
        // This reset happens at the exact point where duplicate content aligns
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0; // Reset to start, which aligns with duplicate content
        }
        
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    // Small delay to ensure container is fully rendered
    const startTimeout = setTimeout(() => {
      animationId = requestAnimationFrame(scroll);
    }, 100);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      clearTimeout(startTimeout);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    isPausedRef.current = false;
  };

  return (
    <div className="w-full py-8 overflow-hidden">
      <div className="relative w-full">
        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
        
        {/* Infinite scroll container */}
        <div 
          ref={scrollRef}
          className="flex space-x-8 whitespace-nowrap"
          style={{ 
            willChange: 'transform',
            transition: 'none'
          }}
        >
          {duplicatedTechStack.map((tech, index) => (
            <div 
              key={`${tech.name}-${index}`}
              className="inline-flex flex-col items-center px-4 py-2 flex-shrink-0 transition-all duration-300 hover:scale-110"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className={`h-full w-full object-contain transition-all duration-300 ${
                    hoveredIndex === index 
                      ? 'grayscale-0 opacity-100' 
                      : 'grayscale opacity-80'
                  }`}
                />
              </div>
              <span className="text-xs text-gray-400 mt-2 font-medium transition-opacity duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackCarousel;
