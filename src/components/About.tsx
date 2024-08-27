import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="text-white px-6 md:px-12">
        <h2 className="text-center text-xl md:text-3xl font-bold mb-20 mt-0">Hi, my name is Farhan Aziz</h2>

        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className="bg-transparent rounded-lg shadow-lg px-5 py-6 sm:px-6 my-10 w-full max-w-3xl mx-auto border blur-background2 mt-0">
                <h2 className="text-2xl font-semibold text-white mb-6">About Me</h2>
                <div className="space-y-6">
                    <p className="text-gray-200 text-justify">
                        I&apos;m a 23 year old as a Front-End Engineer from Bandung, Indonesia, who loves to create solve
                        problems. Frontend development is my forte, I enjoy keeping up with the latest
                        web technologies and best practices to realize designs with clean code.
                    </p>
                    <h3 className="text-xl font-semibold text-white">Languages & Frameworks</h3>
                    <div className="flex justify-between items-end">
                        <ul className="list-disc pl-5 text-gray-400">
                            <li>JavaScript / TypeScript</li>
                            <li>React / Next.js</li>
                            <li>HTML / CSS / Tailwind CSS</li>
                        </ul>
                        <button className="bg-transparent border hover:bg-gray-500 hover:text-cyan-400 font-bold py-2 px-4 rounded">
                            <Link href='https://drive.google.com/file/d/1CgKpKKoJ_uSybCZry8rr24ZsUAppdrLz/view' target='_blank'>
                              Resume
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
