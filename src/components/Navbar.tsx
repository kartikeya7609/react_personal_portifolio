import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-[rgba(18,18,18,0.95)] p-4 flex justify-between items-center shadow-lg z-50 backdrop-blur-md transition-all duration-300">
      <Link to="/" className="text-2xl font-bold text-[#00ff9d] hover:text-white transition-colors duration-300">
        Kartikeya
      </Link>

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
      </button>

      <ul className={`md:flex gap-10 ${isMenuOpen ? 'flex' : 'hidden'} md:static fixed top-[70px] left-0 w-full md:w-auto h-[calc(100vh-70px)] md:h-auto bg-[#0a0a0a] md:bg-transparent flex-col md:flex-row items-center justify-center p-8 md:p-0 transition-all duration-300`}>
        <li>
          <Link
            to="/"
            className={`flex items-center gap-2 text-gray-400 hover:text-[#00ff9d] transition-all duration-300 ${activeSection === 'home' ? 'text-[#00ff9d]' : ''}`}
          >
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <a 
            href="#about" 
            className={`flex items-center gap-2 text-gray-400 hover:text-[#00ff9d] transition-all duration-300 ${activeSection === 'about' ? 'text-[#00ff9d]' : ''}`}
          >
            <i className="fas fa-user"></i> About
          </a>
        </li>
        <li>
          <a 
            href="#timeline" 
            className={`flex items-center gap-2 text-gray-400 hover:text-[#00ff9d] transition-all duration-300 ${activeSection === 'timeline' ? 'text-[#00ff9d]' : ''}`}
          >
            <i className="fas fa-history"></i> Timeline
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={`flex items-center gap-2 text-gray-400 hover:text-[#00ff9d] transition-all duration-300 ${activeSection === 'projects' ? 'text-[#00ff9d]' : ''}`}
          >
            <i className="fas fa-project-diagram"></i> Portfolio
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={`flex items-center gap-2 text-gray-400 hover:text-[#00ff9d] transition-all duration-300 ${activeSection === 'contact' ? 'text-[#00ff9d]' : ''}`}
          >
            <i className="fas fa-envelope"></i> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 