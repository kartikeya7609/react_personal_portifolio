import React, { useEffect, useState } from 'react';
import profilePic from '../assets/Kartikeya Profile.jpeg';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const texts = [
    "Full-Stack Developer",
    "3D Web Architect",
    "Competitive Programmer",
    "Problem Solver"
  ];

  useEffect(() => {
    const currentText = texts[textIndex];

    const type = () => {
      if (isDeleting) {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }
    };

    let timeoutDuration = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentText.length) {
      timeoutDuration = 1800;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      timeoutDuration = 400;
    }

    const timer = setTimeout(type, timeoutDuration);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section id="home" className="relative w-full flex items-center justify-center bg-black overflow-hidden select-none" style={{ minHeight: '90vh', paddingTop: '5rem', paddingBottom: '3rem' }}>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(129,140,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.04) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)',
        }}
      />

      {/* Ambient Orbs — Parallax */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '15%', left: '10%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(129,140,248,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%', right: '5%',
          width: '550px', height: '550px',
          background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Main Content */}
      <div
        className="relative z-10 max-w-5xl mx-auto text-center px-6"
        style={{
          transform: `translate(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px)`,
          transition: 'transform 0.08s ease-out',
        }}
      >
        {/* Profile Picture */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Soft pulse glow behind photo */}
            <div style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(129,140,248,0.4) 0%, transparent 70%)',
              filter: 'blur(8px)',
              zIndex: -1,
              animation: 'pulse-soft 3s ease infinite',
            }} />
            {/* Premium static gradient ring */}
            <div style={{
              width: '108px', height: '108px',
              borderRadius: '50%',
              padding: '3px',
              background: 'linear-gradient(135deg, #818cf8, #a78bfa, #f472b6, #fbbf24)',
            }}>
              <div style={{
                width: '100%', height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                background: '#000',
              }}>
                <img
                  src={profilePic}
                  alt="Kartikeya Kotha"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>
            {/* Online indicator */}
            <div style={{
              position: 'absolute', bottom: '6px', right: '6px',
              width: '16px', height: '16px', borderRadius: '50%',
              background: '#22c55e',
              border: '2.5px solid #000',
              boxShadow: '0 0 12px rgba(34,197,95,0.6)',
            }} />
          </div>
        </div>

        {/* Status Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-6"
          style={{
            background: 'rgba(129,140,248,0.06)',
            border: '1px solid rgba(129,140,248,0.15)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#818cf8',
            display: 'inline-block',
            animation: 'pulse-soft 2s ease infinite',
          }} />
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#a78bfa',
          }}>
            Available for opportunities
          </span>
        </div>

        {/* Main Title */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 5.8rem)',
          fontFamily: 'Space Grotesk, Inter, sans-serif',
          fontWeight: 900,
          letterSpacing: '-0.035em',
          lineHeight: 1.05,
          color: '#f1f0ff',
          marginBottom: '1rem',
        }}>
          Hi, I'm{' '}
          <span style={{
            background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 35%, #f472b6 70%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Kartikeya Kotha
          </span>
        </h1>

        {/* Tech Stack */}
        <p style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.9rem',
          color: '#4e4c73',
          letterSpacing: '0.05em',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
        }}>
          <span style={{ color: 'rgba(129,140,248,0.5)' }}>&lt;</span>
          React.js • Next.js • TypeScript • Node.js
          <span style={{ color: 'rgba(129,140,248,0.5)' }}>/&gt;</span>
        </p>

        {/* Typing Box */}
        <div
          className="inline-flex items-center px-5 py-3 rounded-2xl mb-6"
          style={{
            background: 'rgba(129,140,248,0.03)',
            border: '1px solid rgba(129,140,248,0.08)',
            backdropFilter: 'blur(12px)',
            minWidth: '280px',
          }}
        >
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem',
            color: '#4e4c73',
            marginRight: '0.5rem',
            flexShrink: 0,
          }}>
            $ role →
          </span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.95rem',
            fontWeight: 600,
            background: 'linear-gradient(90deg, #818cf8, #a78bfa)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            minWidth: '160px',
            textAlign: 'left',
          }}>
            {text}
          </span>
          <span style={{
            display: 'inline-block',
            width: '2px',
            height: '18px',
            background: '#818cf8',
            borderRadius: '1px',
            marginLeft: '2px',
            animation: 'blink 1s infinite',
            flexShrink: 0,
          }} />
        </div>

        {/* Location */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.75rem',
          color: '#4e4c73',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
        }}>
          <svg width="12" height="12" fill="none" stroke="rgba(129,140,248,0.5)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Andhra Pradesh, India
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#contact"
            className="btn-primary"
            style={{
              background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
              color: '#fff',
              padding: '0.875rem 2.25rem',
              borderRadius: '0.875rem',
              fontWeight: 700,
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              boxShadow: '0 8px 32px rgba(129,140,248,0.3)',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(129,140,248,0.4)';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(129,140,248,0.3)';
            }}
          >
            Get In Touch
          </a>

          <a
            href="/CV_Kartikeya_K_M_S .pdf"
            download="Kartikeya_Kotha_Resume.pdf"
            style={{
              background: 'rgba(129,140,248,0.06)',
              color: '#9b99c4',
              padding: '0.875rem 2.25rem',
              borderRadius: '0.875rem',
              fontWeight: 600,
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              border: '1px solid rgba(129,140,248,0.15)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(129,140,248,0.35)';
              (e.currentTarget as HTMLElement).style.color = '#f1f0ff';
              (e.currentTarget as HTMLElement).style.background = 'rgba(129,140,248,0.1)';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(129,140,248,0.15)';
              (e.currentTarget as HTMLElement).style.color = '#9b99c4';
              (e.currentTarget as HTMLElement).style.background = 'rgba(129,140,248,0.06)';
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;