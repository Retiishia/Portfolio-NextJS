import React from 'react';

const experiences = [
  {
    id: 1,
    role: 'Network Engineer - Internship',
    company: 'PT. INTI',
    date: 'Aug 2018 - Nov 2018',
    description: 'Implemented and optimized Wi-Fi 5G Infrastructure to enable rapid long-distance data transmission.',
  },
  {
    id: 2,
    role: 'Front-End Engineer - Internship',
    company: 'Sangga Buana YPKP University - Desa Wangunsari Lembang',
    date: 'Sep 2022 - Dec 2022',
    description: 'Developed a landing page website interface using Laravel for Desa Wangunsari Lembang.',
  },
  {
    id: 3,
    role: 'Front-End Engineer - Freelance',
    company: 'PT. Datenshi Games Indonesia',
    date: 'Apr 2024 - Present',
    description: `Implementing design from UI/UX to website using Figma, 
    Create landing page Using nextjs and tailwind for base website, Create components for frontend using TailwindCSS and customize it`
  },
];

interface TimelineItemProps {
  experience: typeof experiences[0];
  side: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, side }) => {
  return (
    <div className={`relative w-full my-6 ${side === 'right' ? 'md:ml-auto' : 'md:mr-auto'} md:w-2/5 ${side === 'right' ? 'timeline-bg1' : 'timeline-bg2'}`}>
      <div className={`bg-transparent border border-grey rounded-lg p-8`}>
        <h3 className="text-xl font-semibold mb-2 text-justify">{experience.role}</h3>
        <h4 className="text-cyan-400 mb-4">{experience.company}</h4>
        <p className="text-purple-400 mb-2">{experience.date}</p>
        <p className="text-white text-justify">{experience.description}</p>
      </div>
    </div>
  );
};

const VerticalTimeline: React.FC = () => {
  return (
    <div id="experience" className="h-auto text-white py-12 bg-transparent">
      <h2 className="text-3xl font-bold mb-16 text-center">Work Experience</h2>
      <div className="container mx-auto px-6">
        <div className="relative w-full">
          <div className="hidden md:block border-l-2 border-cyan-500 border-cyan-450 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              side={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
