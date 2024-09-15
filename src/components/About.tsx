import React from 'react';

const About: React.FC = () => {
  return (
    <div id="about" className="relative flex items-center justify-center h-screen">
      <div className="text-white px-6 md:px-12">
        <h2 className="text-center text-xl md:text-3xl font-bold mb-20 mt-0">Hi, my name is <span className="animated-gradient">Farhan Aziz</span></h2>

        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className="bg-transparent rounded-lg shadow-lg px-5 py-6 sm:px-6 my-10 w-full max-w-3xl mx-auto border blur-background2 mt-0">
                <h2 className="text-2xl font-semibold text-white mb-6">About Me</h2>
                <div className="space-y-4">
                    <p className="text-gray-200 text-justify">
                        I&apos;m a 23 year old and Fresh Graduate in Informatics Engineering from Bandung, Indonesia, who loves to create solve problems. Frontend development is my forte, I enjoy keeping up with the latest web technologies and best practices to realize designs with clean and efficient code.
                    </p>
                    <h3 className="text-xl font-semibold text-white">Languages & Frameworks</h3>
                    <div className="flex justify-between items-end">
                        <ul className="list-disc pl-4 text-gray-400">
                            <li>JavaScript / TypeScript</li>
                            <li>React / Next.js</li>
                            <li>HTML / CSS / Tailwind CSS</li>
                        </ul>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Hard Skill</h3>
                    <div className="flex justify-between items-end">
                        <ul className="list-disc pl-4 text-gray-400">
                            <li>IT Support</li>
                            <li>IT Specialist</li>
                            <li>Network Engineer</li>
                            <li>Hardware Engineer</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
