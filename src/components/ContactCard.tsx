import React from 'react';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

const ContactCard: React.FC = () => {
  return (
    <div id='contact'>
        <h2 className="text-2xl font-bold mb-2 text-center">Check Out My Resume Below ✨</h2>
        <div className="bg-transparent border p-8 rounded-lg shadow-lg text-white w-full md:max-w-4xl mx-auto mt-8 cc-bg blur-background">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Farhan Aziz</h2>
                    <p className="text-sm mb-4">Front-End Engineer / IT Support / Network Engineer </p>
                </div>

                <div className="flex space-x-4">
                <button className="bg-inherit border text-cyan-300 px-4 py-2 rounded shadow hover:bg-gray-500 hover:text-cyan-300 transition-colors duration-200">
                        <Link href='https://drive.google.com/file/d/1CgKpKKoJ_uSybCZry8rr24ZsUAppdrLz/view' target='_blank'>
                            Resume
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactCard;
