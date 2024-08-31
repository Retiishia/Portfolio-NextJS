'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ButtonLink } from './Scroller';
import { FaDiscord, FaGithub, FaBriefcase } from 'react-icons/fa';


const Navbar: React.FC = () => {

  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full bg-transparent z-50 mnhdr h-auto transition-all ${scrolling ? 'blur-background' : ''} ${mobileMenuOpen ? 'h-24 blur-background' : ''}`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold animated-gradient">
          Retiishia
        </Link>
        <div className="hidden md:flex space-x-6">
          <ButtonLink className="text-lg font-medium  text-white hover:text-cyan-400" buttonText='Home' elementId='hero'/>
          <ButtonLink className="text-lg font-medium  text-white hover:text-cyan-400" buttonText='About' elementId='about'/>
          <ButtonLink className="text-lg font-medium  text-white hover:text-cyan-400" buttonText='Project' elementId='project'/>
          <ButtonLink className="text-lg font-medium  text-white hover:text-cyan-400" buttonText='Contact' elementId='contact'/>
        </div>
        <div className="flex space-x-4">
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6  text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <Link href="https://github.com/Retiishia" target='_blank' className="hidden md:flex hover:text-cyan-400">
            <FaGithub size={36}/>
          </Link>
          <Link href="https://discord.gg/zpcWqf2B8k" target='_blank' className="hidden md:flex hover:text-cyan-400">
            <FaDiscord size={36}/>
          </Link>
        </div>
      </nav>

      {/* Navbar Mobile Hamburger */}
      <div className={`md:hidden ${mobileMenuOpen ? 'flex' : 'hidden'} justify-between mt-4 mb-6 ml-5`}>
        <div className="flex flex-col space-y-4">
          <ButtonLink className="text-left text-lg font-medium  text-white hover:text-cyan-400" buttonText='Home' elementId='hero'/>
          <ButtonLink className="text-left text-lg font-medium  text-white hover:text-cyan-400" buttonText='About' elementId='about'/>
          <ButtonLink className="text-left text-lg font-medium  text-white hover:text-cyan-400" buttonText='Project' elementId='project'/>
          <ButtonLink className="text-left text-lg font-medium  text-white hover:text-cyan-400" buttonText='Contact' elementId='contact'/>
          <Link href="mailto:azizfarhan72@gmail.com" className="animated-gradient text-left text-lg font-medium  text-white hover:text-cyan-400">
            <span className="text-md md:text-sm hover:text-black">I&apos;m looking for a job as a Front-End Engineer or IT Support</span>
          </Link>

        </div>
        <div className="flex items-center mt-20 mr-4 ">
          <Link href="https://github.com/Retiishia" target='_blank' className="ml-4 hover:text-cyan-400">
            <FaGithub  size={36}/>
          </Link>
          <Link href="https://discord.gg/zpcWqf2B8k" target='_blank' className="ml-4 hover:text-cyan-400">
            <FaDiscord  size={36}/>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
