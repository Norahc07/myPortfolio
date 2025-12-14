import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Import skill icons
import { FaReact, FaNodeJs, FaFigma, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiCanva } from 'react-icons/si';

// Skill logos mapping with updated colors
const skillLogos = {
  'Figma': <FaFigma className="w-6 h-6 text-[#A259FF]" />,
  'Canva': <SiCanva className="w-6 h-6 text-[#00C4CC]" />,
  'HTML/CSS': <div className="flex gap-1"><FaHtml5 className="w-6 h-6 text-[#E34F26]" /><FaCss3Alt className="w-6 h-6 text-[#1572B6]" /></div>,
  'JavaScript': <FaJs className="w-6 h-6 text-[#F7DF1E]" />,
  'React': <FaReact className="w-6 h-6 text-[#61DAFB]" />,
  'Tailwind CSS': <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />
};

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SkillsChart = () => {
  // Years for x-axis
  const years = ['2022', '2023', '2024', '2025', '2026'];

  // Skill data (0-100 scale) - Adjusted to 0, 25, 50, 75, 100 scale
  const skillsData = {
    'Figma': [0, 25, 50, 75, 90],
    'Canva': [0, 20, 45, 70, 85],
    'HTML/CSS': [0, 30, 60, 85, 100],
    'JavaScript': [0, 10, 40, 60, 90],
    'React': [0, 20, 45, 75, 95],
    'Tailwind CSS': [0, 15, 40, 70, 90]
  };

  // Skill colors with specified hex codes and rationales
  const skillColors = {
    'Figma': '#A259FF',             // Electric Violet - Primary color from Figma logo
    'Canva': '#00C4CC',             // Teal/Aqua - From Canva's vibrant brand palette
    'HTML/CSS': '#E34F26',          // Classic Web Orange - Iconic HTML5 color
    'JavaScript': '#F7DF1E',        // Standard JS Yellow - Official JavaScript color
    'React': '#0000FF',             // React Blue/Cyan - From React's atom logo
    'Tailwind CSS': '#008000'       // Deep Teal/Cyan - Tailwind's signature color
  };

  // Prepare datasets for Chart.js
  const datasets = Object.entries(skillsData).map(([skill, data]) => ({
    label: skill,
    data: data,
    borderColor: skillColors[skill],
    backgroundColor: `${skillColors[skill]}20`,
    tension: 0.4,
    fill: false,
    pointBackgroundColor: skillColors[skill],
    pointBorderColor: '#1F2937',
    pointHoverRadius: 8,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    pointHitRadius: 10,
  }));

  const data = {
    labels: years,
    datasets: datasets
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: false // Hide the top legend
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.98)',
        titleColor: '#fff',
        bodyColor: '#9CA3AF',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: 1,
        padding: 12,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}%`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#E5E7EB',
          font: {
            family: "'Inter', sans-serif",
            size: 12
          }
        },
        border: {
          display: false
        },
        gridLines: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
          borderDash: [3, 3]
        },
        ticks: {
          color: '#E5E7EB',
          font: {
            family: "'Inter', sans-serif",
            size: 12
          },
          callback: function(value) {
            return value + '%';
          },
          backdropColor: 'rgba(17, 24, 39, 0.9)'
        }
      }
    },
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart'
    }
  };

  // Legend with icons (now the only legend)
  const LegendItem = ({ label, color, icon }) => (
    <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800/80 transition-colors group">
      <div className="p-2 rounded-lg bg-gray-900/50 group-hover:bg-gray-900/70 transition-colors">
        {icon}
      </div>
      <div className="text-xs font-medium text-gray-300">{label}</div>
      <div className="w-full h-1.5 rounded-full bg-gray-700/50 mt-1 overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-500" 
          style={{ 
            width: '100%',
            background: `linear-gradient(90deg, ${color}, ${color}80)`
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full p-4 md:p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-white">Skills Progression</h3>
        <p className="text-sm text-gray-400 mt-1">2022 - 2026</p>
      </div>
      
      <div className="w-full h-[350px] md:h-[450px] mb-2">
        <Line data={data} options={options} />
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-4 px-2">
        {Object.entries(skillsData).map(([skill]) => (
          <LegendItem 
            key={skill} 
            label={skill} 
            color={skillColors[skill]} 
            icon={skillLogos[skill]} 
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsChart;
