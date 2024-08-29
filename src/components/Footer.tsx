import React from 'react';
import Link from 'next/link';
import { FaDiscord, FaLinkedin, FaGithub } from 'react-icons/fa'
import { ButtonLink } from './Scroller';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-6 mt-40 footer-b">
      <div className="max-w-7xl w-11/12 h-full flex flex-col pt-10 px-8 pb-2 gap-16 md:px-10 md:mx-auto md:gap-32">
        <div className="md:flex md:justify-between md:items-center">
          <div className="animated-gradient text-2xl font-semibold mb-6 md:mb-0">
            Retiishia
          </div>
          <div className="mb-6 md:mb-0 md:flex md:space-x-12">
          <ul className="space-y-4">
              <li>
                <ButtonLink className="text-lg font-medium hover:text-cyan-400" buttonText='Home' elementId='hero'/>
              </li>
            </ul>

            {/* // LOGO Social Media */}
            <div className="flex space-x-6 ">
              <Link className="hover:text-cyan-400" href="https://github.com/Retiishia" target='_blank'>
                <FaGithub size={36}/>
              </Link>
              <Link className="hover:text-cyan-400" href="https://www.linkedin.com/in/retiishia" target='_blank'>
                <FaLinkedin size={36}/>
              </Link>
              <Link className="hover:text-cyan-400" href="https://discord.gg/zpcWqf2B8k" target='_blank'>
                <FaDiscord size={36}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
