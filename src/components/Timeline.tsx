import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  location: string;
  locationUrl: string;
  type: string;
}

const Timeline: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: '2024 — Present',
      title: 'National Institute of Technology Durgapur',
      description: 'Synthesizing foundational concepts in Electrical Engineering while spearheading modern full-stack system implementations.',
      location: 'Durgapur, West Bengal',
      locationUrl: 'https://maps.app.goo.gl/pWr5aP1BWJWJveNC6',
      type: 'Undergraduate'
    },
    {
      year: '2022 — 2024',
      title: 'Tirumala Junior College',
      description: 'Completed rigorous advanced secondary matrix modules with deep specialization in Physics, Chemistry, and Mathematics.',
      location: 'Rajahmundry, Andhra Pradesh',
      locationUrl: 'https://maps.app.goo.gl/9u1pGBsSbDEfnihMA',
      type: 'Intermediate'
    },
    {
      year: '2022',
      title: 'Ashram Public School',
      description: 'Acquired core foundational primary education certificate matching international scientific assessment benchmarks.',
      location: 'Kakinada, Andhra Pradesh',
      locationUrl: 'https://maps.app.goo.gl/KpKUiijXnq4wHzn88',
      type: 'High School'
    }
  ];

  const cardStyle = {
    background: 'linear-gradient(145deg, rgba(129,140,248,0.05) 0%, rgba(13,13,18,0.9) 100%)',
    border: '1px solid rgba(129,140,248,0.1)',
    borderRadius: '1.25rem',
    backdropFilter: 'blur(20px)',
    transition: 'all 0.35s ease',
  };

  return (
    <section id="timeline" className="relative overflow-hidden select-none" style={{ background: '#000', padding: '6rem 0' }}>

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(129,140,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.03) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 60%, transparent 100%)',
        }}
      />

      {/* Ambient orb */}
      <div className="absolute pointer-events-none" style={{
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(100px)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>

        {/* Section Header */}
        <div style={{ marginBottom: '4rem', position: 'relative' }} className="group max-w-5xl mx-auto">
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#818cf8',
            display: 'block',
            marginBottom: '0.5rem',
          }}>
            Chronicle — Milestones
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
              Journey
            </span>
          </h2>
          <div style={{
            marginTop: '1rem',
            height: '2px',
            width: '80px',
            background: 'linear-gradient(90deg, #818cf8, transparent)',
            borderRadius: '1px',
          }} />
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

          {/* Center line */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '1px',
              background: 'linear-gradient(to bottom, rgba(129,140,248,0.4), rgba(129,140,248,0.1), transparent)',
              transform: 'translateX(-50%)',
            }}
          />
          {/* Mobile line */}
          <div
            className="md:hidden"
            style={{
              position: 'absolute',
              left: '16px',
              top: '0',
              bottom: '0',
              width: '1px',
              background: 'linear-gradient(to bottom, rgba(129,140,248,0.4), rgba(129,140,248,0.1), transparent)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                  className={`md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'} w-full`}
                >
                  {/* Node dot */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '2rem',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#000',
                      border: '2px solid #818cf8',
                      boxShadow: '0 0 0 4px rgba(129,140,248,0.12), 0 0 16px rgba(129,140,248,0.2)',
                      zIndex: 20,
                      transition: 'all 0.3s ease',
                    }}
                    className="left-[10px] md:left-1/2 md:-translate-x-1/2"
                  />

                  {/* Card */}
                  <div
                    style={{
                      width: '100%',
                      paddingLeft: '2.5rem',
                    }}
                    className={`md:w-[46%] md:pl-0 ${isEven ? 'md:pr-10' : 'md:pl-10'}`}
                  >
                    <div
                      style={cardStyle}
                      className="group p-6 md:p-8 hover:border-indigo-400/30 hover:shadow-indigo-500/10"
                      onMouseOver={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = 'rgba(129,140,248,0.3)';
                        el.style.boxShadow = '0 16px 48px rgba(129,140,248,0.1)';
                        el.style.transform = 'translateY(-4px)';
                      }}
                      onMouseOut={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = 'rgba(129,140,248,0.1)';
                        el.style.boxShadow = 'none';
                        el.style.transform = 'translateY(0)';
                      }}
                    >
                      {/* Node tag */}
                      <div style={{
                        position: 'absolute',
                        top: '1rem', right: '1.25rem',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '9px',
                        color: 'rgba(129,140,248,0.15)',
                        letterSpacing: '0.1em',
                      }}>NODE_{String(index + 1).padStart(2, '0')}</div>

                      {/* Year + Type badges */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
                        <span style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#818cf8',
                          background: 'rgba(129,140,248,0.08)',
                          border: '1px solid rgba(129,140,248,0.15)',
                          borderRadius: '6px',
                          padding: '3px 10px',
                        }}>
                          {item.year}
                        </span>
                        <span style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.65rem',
                          letterSpacing: '0.12em',
                          color: '#4e4c73',
                          textTransform: 'uppercase',
                        }}>
                          {item.type}
                        </span>
                      </div>

                      <h3 style={{
                        fontFamily: 'Space Grotesk, Inter, sans-serif',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: '#f1f0ff',
                        letterSpacing: '-0.01em',
                        marginBottom: '0.75rem',
                        transition: 'color 0.25s ease',
                      }}>
                        {item.title}
                      </h3>

                      <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.875rem',
                        color: '#9b99c4',
                        lineHeight: 1.7,
                        marginBottom: '1.25rem',
                      }}>
                        {item.description}
                      </p>

                      <div style={{
                        height: '1px',
                        background: 'rgba(129,140,248,0.08)',
                        marginBottom: '0.875rem',
                      }} />

                      <a
                        href={item.locationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.75rem',
                          color: '#4e4c73',
                          transition: 'color 0.25s ease',
                        }}
                        onMouseOver={e => (e.currentTarget as HTMLElement).style.color = '#a78bfa'}
                        onMouseOut={e => (e.currentTarget as HTMLElement).style.color = '#4e4c73'}
                      >
                        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.location}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;