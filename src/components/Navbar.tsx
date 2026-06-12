import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'timeline', name: 'Timeline' },
    { id: 'projects', name: 'Portfolio' },
    { id: 'contact', name: 'Contact' }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 hidden lg:block select-none`}
        style={{
          padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
          background: isScrolled
            ? 'rgba(0, 0, 0, 0.85)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(24px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(129,140,248,0.08)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.6)' : 'none',
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, 'home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              textDecoration: 'none',
            }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 900,
              fontSize: '14px',
              color: '#fff',
              letterSpacing: '-0.02em',
              flexShrink: 0,
            }}>
              KK
            </div>
            <span style={{
              fontFamily: 'Space Grotesk, Inter, sans-serif',
              fontWeight: 800,
              fontSize: '1.1rem',
              letterSpacing: '-0.03em',
              color: '#f1f0ff',
            }}>
              KARTIKEYA
              <span style={{
                background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>.</span>
            </span>
          </a>

          {/* Nav Pills */}
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            background: 'rgba(129,140,248,0.04)',
            border: '1px solid rgba(129,140,248,0.08)',
            borderRadius: '9999px',
            padding: '4px',
            listStyle: 'none',
            margin: 0,
          }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} style={{ position: 'relative' }}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    style={{
                      display: 'block',
                      padding: '0.5rem 1.25rem',
                      fontFamily: 'Space Grotesk, Inter, sans-serif',
                      fontSize: '0.8rem',
                      fontWeight: isActive ? 700 : 500,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      color: isActive ? '#000' : '#9b99c4',
                      background: isActive
                        ? 'linear-gradient(135deg, #818cf8, #a78bfa)'
                        : 'transparent',
                      borderRadius: '9999px',
                      transition: 'all 0.25s ease',
                      position: 'relative',
                      zIndex: 1,
                    }}
                    onMouseOver={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.color = '#f1f0ff';
                    }}
                    onMouseOut={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.color = '#9b99c4';
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Bottom Dock */}
      <nav
        className="fixed bottom-0 left-0 w-full z-50 lg:hidden select-none"
        style={{
          padding: '0.75rem 1rem 1rem',
          background: 'linear-gradient(to top, rgba(0,0,0,0.98) 60%, transparent)',
        }}
      >
        <div style={{
          maxWidth: '480px',
          margin: '0 auto',
          background: 'rgba(13,13,18,0.9)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(129,140,248,0.1)',
          borderRadius: '1.5rem',
          padding: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.8)',
        }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '0.875rem',
                  background: isActive ? 'rgba(129,140,248,0.1)' : 'transparent',
                  transition: 'all 0.25s ease',
                  flex: 1,
                  textDecoration: 'none',
                }}
              >
                {/* Active dot indicator */}
                <div style={{
                  width: '20px',
                  height: '3px',
                  borderRadius: '2px',
                  background: isActive
                    ? 'linear-gradient(90deg, #818cf8, #a78bfa)'
                    : 'transparent',
                  marginBottom: '2px',
                  transition: 'all 0.25s ease',
                }} />
                <span style={{
                  fontFamily: 'Space Grotesk, Inter, sans-serif',
                  fontSize: '9px',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: isActive ? '#818cf8' : '#4e4c73',
                  transition: 'color 0.25s ease',
                }}>
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;