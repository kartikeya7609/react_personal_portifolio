/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      url: 'https://www.linkedin.com/in/meher-sri-kartikeya-kotha-135997217'
    },
    {
      name: 'GitHub',
      icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z',
      url: 'https://github.com/kartikeya7609'
    },
    {
      name: 'X / Twitter',
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
      url: 'https://x.com/kotha_mehe43188'
    },
    {
      name: 'Instagram',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      url: 'https://www.instagram.com/k_m_s_k_7'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer
      style={{
        position: 'relative',
        background: '#000',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        overflow: 'hidden',
        borderTop: '1px solid rgba(129,140,248,0.08)',
      }}
    >
      {/* Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(129,140,248,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.02) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 90% at 50% 100%, #000 70%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '200px',
        background: 'radial-gradient(ellipse at bottom, rgba(129,140,248,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          paddingBottom: '3rem',
          marginBottom: '2rem',
          borderBottom: '1px solid rgba(129,140,248,0.06)',
        }} className="grid-cols-1 lg:grid-cols-2">

          {/* Branding + Social */}
          <div>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 900,
                fontSize: '14px',
                color: '#fff',
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
            </div>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              color: '#4e4c73',
              lineHeight: 1.7,
              marginBottom: '1.75rem',
              maxWidth: '320px',
            }}>
              Full-Stack Developer & 3D Web Architect crafting premium digital experiences.
            </p>

            {/* Socials */}
            <div>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: '#818cf8',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.875rem',
              }}>// External Links</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.625rem', maxWidth: '220px' }}>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    style={{
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(129,140,248,0.04)',
                      border: '1px solid rgba(129,140,248,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4e4c73',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseOver={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(129,140,248,0.3)';
                      el.style.color = '#818cf8';
                      el.style.background = 'rgba(129,140,248,0.08)';
                      el.style.transform = 'translateY(-3px)';
                    }}
                    onMouseOut={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(129,140,248,0.08)';
                      el.style.color = '#4e4c73';
                      el.style.background = 'rgba(129,140,248,0.04)';
                      el.style.transform = 'translateY(0)';
                    }}
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d={link.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: '#a78bfa',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1.25rem',
            }}>// Site Index</span>
            <h3 style={{
              fontFamily: 'Space Grotesk, Inter, sans-serif',
              fontSize: '1rem',
              fontWeight: 700,
              color: '#f1f0ff',
              letterSpacing: '-0.01em',
              marginBottom: '1.25rem',
            }}>Quick Navigation</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'Space Grotesk, Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: '#4e4c73',
                    fontWeight: 500,
                    transition: 'all 0.25s ease',
                    width: 'fit-content',
                  }}
                  onMouseOver={e => {
                    (e.currentTarget as HTMLElement).style.color = '#818cf8';
                    (e.currentTarget as HTMLElement).style.paddingLeft = '8px';
                  }}
                  onMouseOut={e => {
                    (e.currentTarget as HTMLElement).style.color = '#4e4c73';
                    (e.currentTarget as HTMLElement).style.paddingLeft = '0';
                  }}
                >
                  <span style={{ color: 'rgba(129,140,248,0.4)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem' }}>//</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              color: '#818cf8',
              background: 'rgba(129,140,248,0.08)',
              border: '1px solid rgba(129,140,248,0.15)',
              borderRadius: '6px',
              padding: '3px 10px',
            }}>
              v2.0 // 2026
            </span>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: '#4e4c73',
            }}>
              © Kartikeya Kotha. All rights reserved.
            </p>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            color: '#4e4c73',
          }}>
            <span>Built with</span>
            <svg style={{ animation: 'pulse-soft 2s ease infinite', fill: 'rgba(244,114,182,0.7)', width: '12px', height: '12px' }} viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.5 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;