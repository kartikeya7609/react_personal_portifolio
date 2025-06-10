import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    "Web Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setTimeout(() => {}, 500);
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [textIndex, charIndex, isDeleting]);

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#121212] text-center px-4">
      <div className="hero-content">
        <h1 className="text-5xl mb-4">
          Hi, I'm <span className="text-[#00ff9d]">K.M.S Kartikeya</span>
        </h1>
        <p className="text-2xl mb-6 text-gray-400">
          <i className="fas fa-code"></i> HTML, CSS, Javascript
        </p>
        <div className="min-h-[2rem] flex items-center justify-center my-4">
          <span className="text-[#00ff9d] text-xl">{text}</span>
          <span className="text-[#00ff9d] animate-blink ml-2">|</span>
        </div>
        <p className="text-lg text-gray-400 mb-8">
          <i className="fas fa-map-marker-alt"></i> From Andhra Pradesh, India
        </p>
        <a 
          href="#contact" 
          className="inline-block px-6 py-3 bg-[#00ff9d] text-white rounded-md transition-colors duration-300 hover:bg-[#00cc7d]"
        >
          <i className="fas fa-paper-plane mr-2"></i> Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero; 