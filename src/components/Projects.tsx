import React, { useState } from 'react';

interface Project {
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  tech: string[];
  type: string;
  sourceUrl?: string;
  liveUrl?: string;
  color: string;
}

const projects: Project[] = [
  {
    name: 'HireFlash',
    tagline: 'Real-Time Service Marketplace',
    description: 'Production-grade service marketplace connecting customers with local workers.',
    bullets: [
      'JWT auth, Firebase OAuth, OTP verification & role-based access control',
      'Stream Chat SDK for real-time messaging + Cloudinary image uploads',
      'Booking workflows, worker dashboards & admin analytics panel',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Stream Chat', 'Firebase'],
    type: 'Full-Stack MERN Platform',
    sourceUrl: 'https://github.com/kartikeya7609/HireFlash',
    liveUrl: 'https://hireflash.vercel.app/',
    color: '#818cf8',
  },
  {
    name: 'Flash E-Commerce',
    tagline: 'Advanced Marketplace',
    description: 'Production-grade e-commerce marketplace with seller dashboards and dynamic shopping workflows.',
    bullets: [
      'Verified-buyer reviews, price-drop notifications & CSV bulk imports',
      'Cloudinary asset management + premium glassmorphism UI',
      'Flask-Talisman, CSRF protection, rate limiting & bcrypt auth',
    ],
    tech: ['Flask', 'MongoDB', 'Tailwind CSS', 'Cloudinary'],
    type: 'Full-Stack Marketplace',
    sourceUrl: 'https://github.com/kartikeya7609/Flask_Ecommerce',
    liveUrl: 'https://flask-ecommerce-hrbf.onrender.com/cart',
    color: '#a78bfa',
  },
  {
    name: 'IEEE NVISION 3D',
    tagline: 'Interactive 3D Web Experience',
    description: 'Immersive 3D web interface for IEEE NVISION built with React Three Fiber.',
    bullets: [
      'Smooth animations, dynamic lighting & camera controls via Three.js',
      'Optimized rendering for consistent 60fps across all devices',
      'Responsive 3D scenes with physics-based interactions',
    ],
    tech: ['React.js', 'Three.js', 'Tailwind CSS'],
    type: 'Interactive 3D Platform',
    liveUrl: 'https://something-two-gamma.vercel.app/',
    color: '#f472b6',
  },
  {
    name: 'Attendance Tracker',
    tagline: 'Academic Dashboard',
    description: 'Clean real-time dashboard for tracking subject-wise attendance with deficit alerts.',
    bullets: [
      'Firebase real-time sync with intuitive subject-wise visualizations',
      'Deficit indicators & smart attendance percentage calculations',
      'Fully responsive across mobile and desktop devices',
    ],
    tech: ['React.js', 'Firebase', 'CSS'],
    type: 'Academic Tool',
    sourceUrl: 'https://github.com/kartikeya7609/attendance-tracker',
    liveUrl: 'https://attendance-tracker-seven-taupe.vercel.app/',
    color: '#fbbf24',
  },
];

const GitHubIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
  </svg>
);

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden select-none"
      style={{ background: '#000', padding: '6rem 0' }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(129,140,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.03) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, #000 55%, transparent 100%)',
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute pointer-events-none" style={{
        top: '15%', right: '5%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(100px)',
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '15%', left: '5%', width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>

        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#818cf8',
            display: 'block',
            marginBottom: '0.5rem',
          }}>
            Modules — Production
          </span>
          <h2 style={{
            fontFamily: 'Space Grotesk, Inter, sans-serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#f1f0ff',
            lineHeight: 1,
          }}>
            My{' '}
            <span style={{
              background: 'linear-gradient(135deg, #818cf8, #a78bfa, #f472b6)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Projects
            </span>
          </h2>
          <div style={{
            marginTop: '1rem', height: '2px', width: '80px',
            background: 'linear-gradient(90deg, #818cf8, transparent)',
            borderRadius: '1px',
          }} />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const accentRgb = project.color === '#818cf8' ? '129,140,248'
              : project.color === '#a78bfa' ? '167,139,250'
              : project.color === '#f472b6' ? '244,114,182'
              : '251,191,36';

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="p-6 md:p-8 flex flex-col justify-between cursor-default relative overflow-hidden"
                style={{
                  background: isHovered
                    ? `linear-gradient(145deg, rgba(${accentRgb},0.07) 0%, rgba(13,13,18,0.95) 100%)`
                    : 'linear-gradient(145deg, rgba(129,140,248,0.04) 0%, rgba(13,13,18,0.9) 100%)',
                  border: `1px solid ${isHovered ? `rgba(${accentRgb},0.28)` : 'rgba(129,140,248,0.1)'}`,
                  borderRadius: '1.25rem',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: isHovered ? `0 24px 60px rgba(${accentRgb},0.12)` : 'none',
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: '10%', right: '10%',
                  height: '1px',
                  background: isHovered
                    ? `linear-gradient(90deg, transparent, rgba(${accentRgb},0.6), transparent)`
                    : `linear-gradient(90deg, transparent, rgba(${accentRgb},0.2), transparent)`,
                  transition: 'all 0.4s ease',
                }} />

                {/* Index tag */}
                <div style={{
                  position: 'absolute',
                  top: '1.25rem', right: '1.25rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '9px',
                  color: `rgba(${accentRgb},${isHovered ? '0.35' : '0.12'})`,
                  letterSpacing: '0.12em',
                  transition: 'all 0.3s ease',
                }}>
                  {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </div>

                <div>
                  {/* Header */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    {/* Type badge */}
                    <span style={{
                      display: 'inline-block',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: project.color,
                      background: `rgba(${accentRgb},0.08)`,
                      border: `1px solid rgba(${accentRgb},0.18)`,
                      borderRadius: '5px',
                      padding: '3px 9px',
                      marginBottom: '0.75rem',
                    }}>
                      {project.type}
                    </span>

                    {/* Title + tagline */}
                    <h3 style={{
                      fontFamily: 'Space Grotesk, Inter, sans-serif',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#f1f0ff',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.15,
                      marginBottom: '0.25rem',
                    }}>
                      {project.name}
                    </h3>
                    <p style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.72rem',
                      color: `rgba(${accentRgb},0.7)`,
                      letterSpacing: '0.06em',
                    }}>
                      {project.tagline}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 1.5rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                  }}>
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <div style={{
                          width: '4px', height: '4px',
                          borderRadius: '50%',
                          background: project.color,
                          flexShrink: 0,
                          marginTop: '7px',
                          opacity: 0.8,
                        }} />
                        <span style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.845rem',
                          color: '#9b99c4',
                          lineHeight: 1.6,
                        }}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.67rem',
                        color: '#4e4c73',
                        background: 'rgba(129,140,248,0.04)',
                        border: '1px solid rgba(129,140,248,0.08)',
                        borderRadius: '5px',
                        padding: '2px 8px',
                        letterSpacing: '0.05em',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: '0.625rem' }}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        padding: '0.6rem 0.875rem',
                        borderRadius: '0.75rem',
                        fontFamily: 'Space Grotesk, Inter, sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        background: isHovered
                          ? `linear-gradient(135deg, ${project.color}, rgba(${accentRgb},0.8))`
                          : 'rgba(129,140,248,0.06)',
                        color: isHovered ? '#fff' : '#9b99c4',
                        border: `1px solid ${isHovered ? 'transparent' : 'rgba(129,140,248,0.1)'}`,
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        boxShadow: isHovered ? `0 6px 20px rgba(${accentRgb},0.3)` : 'none',
                      }}
                    >
                      <ExternalIcon />
                      Live Demo
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: project.liveUrl ? 'none' : 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        padding: '0.6rem 0.875rem',
                        borderRadius: '0.75rem',
                        fontFamily: 'Space Grotesk, Inter, sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        background: 'rgba(129,140,248,0.04)',
                        color: '#4e4c73',
                        border: '1px solid rgba(129,140,248,0.08)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                      }}
                      onMouseOver={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = `rgba(${accentRgb},0.3)`;
                        el.style.color = project.color;
                        el.style.background = `rgba(${accentRgb},0.06)`;
                      }}
                      onMouseOut={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = 'rgba(129,140,248,0.08)';
                        el.style.color = '#4e4c73';
                        el.style.background = 'rgba(129,140,248,0.04)';
                      }}
                    >
                      <GitHubIcon />
                      Source
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://github.com/kartikeya7609"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.75rem',
              borderRadius: '0.875rem',
              fontFamily: 'Space Grotesk, Inter, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#9b99c4',
              background: 'rgba(129,140,248,0.04)',
              border: '1px solid rgba(129,140,248,0.1)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
            onMouseOver={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(129,140,248,0.3)';
              el.style.color = '#818cf8';
              el.style.background = 'rgba(129,140,248,0.08)';
              el.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(129,140,248,0.1)';
              el.style.color = '#9b99c4';
              el.style.background = 'rgba(129,140,248,0.04)';
              el.style.transform = 'translateY(0)';
            }}
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;