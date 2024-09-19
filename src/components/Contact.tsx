import React from 'react';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <div id='contact' className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-2 text-center">Check Out My Resumé Below ✨</h2>
        <div className="bg-transparent border p-8 rounded-lg shadow-lg text-white md:max-w-4xl md:w-full mx-4 mt-8 cc-bg blur-background">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="animated-gradient text-2xl font-bold mb-2">Farhan Aziz</h2>
                    <p className="text-sm mb-4">Front-End Engineer / IT Support / Network Engineer </p>
                </div>

                <div className="flex space-x-4">
                <button className="bg-inherit border text-cyan-300 px-4 py-2 rounded shadow hover:bg-gray-500 hover:text-cyan-300 transition-colors duration-200">
                        <Link href='https://drive.google.com/file/d/1DCdjA7vGZCwYvzA5Sn3UIYn8HCJsEire/view' target='_blank'>
                            Resume
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;
