'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ButtonLink } from './Scroller';
import { FaDiscord, FaGit, FaGithub } from 'react-icons/fa';

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
        <Link href="/" className="text-2xl font-semibold  text-white animated-gradient">
          Retiishia
        </Link>
        <div className="hidden md:flex space-x-6">
          <ButtonLink className="text-lg font-medium  text-white hover:text-cyan-300" buttonText='Home' elementId='hero'/>
          <ButtonLink className="text-lg font-medium  text-white hover:text-cyan-300" buttonText='About' elementId='about'/>
          <ButtonLink className="text-lg font-medium  text-white hover:text-cyan-300" buttonText='Experience' elementId='experience'/>
          <ButtonLink className="text-lg font-medium  text-white hover:text-cyan-300" buttonText='Project' elementId='project'/>
          <ButtonLink className="text-lg font-medium  text-white hover:text-cyan-300" buttonText='Contact' elementId='contact'/>
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
          <Link href="https://github.com/Retiishia" target='_blank' className="hover:text-cyan-400 hidden md:flex">
            <FaGithub size={36}/>
          </Link>
          <Link href="https://discord.gg/zpcWqf2B8k" target='_blank' className="hover:text-cyan-400 hidden md:flex">
            <FaDiscord size={36}/>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
