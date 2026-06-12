/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import profilePic from '../assets/Kartikeya Profile.jpeg';

const About: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    'React.js', 'Next.js', 'TypeScript', 'Node.js',
    'Tailwind CSS', 'Framer Motion', 'Three.js', 'Git'
  ];

  const currentFocus = [
    'Full-Stack Development', '3D Web Experiences',
    'Deep Learning / CNNs', 'Competitive Programming'
  ];

  const cardStyle = {
    background: 'linear-gradient(145deg, rgba(129,140,248,0.05) 0%, rgba(13,13,18,0.9) 100%)',
    border: '1px solid rgba(129,140,248,0.1)',
    borderRadius: '1.25rem',
    backdropFilter: 'blur(20px)',
    transition: 'all 0.35s ease',
  };

  return (
    <section id="about" className="relative overflow-hidden select-none" style={{ background: '#000', padding: '6rem 0' }}>

      {/* Cursor Light */}
      <div
        className="absolute hidden md:block pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
          transition: 'transform 0.3s ease-out',
          zIndex: 0,
          top: 0,
          left: 0,
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(129,140,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.03) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 60%, transparent 100%)',
        }}
      />

      {/* Ambient Orbs */}
      <div className="absolute pointer-events-none" style={{
        top: '30%', left: '5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(100px)',
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '20%', right: '5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Section Header */}
          <div style={{ marginBottom: '4rem', position: 'relative' }} className="group">
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#818cf8',
              display: 'block',
              marginBottom: '0.5rem',
            }}>
              Profile — System
            </span>
            <h2 style={{
              fontFamily: 'Space Grotesk, Inter, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#f1f0ff',
              lineHeight: 1,
            }}>
              About{' '}
              <span style={{
                background: 'linear-gradient(135deg, #818cf8, #a78bfa, #f472b6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Me
              </span>
            </h2>
            <div style={{
              marginTop: '1rem',
              height: '2px',
              width: '80px',
              background: 'linear-gradient(90deg, #818cf8, transparent)',
              borderRadius: '1px',
              transition: 'width 0.5s ease',
            }} className="section-line" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Row 1: Profile + Bio */}
            <div className="flex flex-col lg:flex-row gap-6">

              {/* Profile Card */}
              <Motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="p-6 md:p-10 flex items-center justify-center relative overflow-hidden flex-shrink-0 w-full lg:w-[320px]"
                style={{
                  ...cardStyle,
                }}
                whileHover={{ borderColor: 'rgba(129,140,248,0.3)', boxShadow: '0 20px 60px rgba(129,140,248,0.12)' }}
              >
                    {/* Corner accents */}
                    <div style={{ position: 'absolute', top: '12px', left: '12px', width: '12px', height: '12px', borderTop: '1.5px solid rgba(129,140,248,0.4)', borderLeft: '1.5px solid rgba(129,140,248,0.4)', borderRadius: '2px 0 0 0' }} />
                    <div style={{ position: 'absolute', bottom: '12px', right: '12px', width: '12px', height: '12px', borderBottom: '1.5px solid rgba(129,140,248,0.4)', borderRight: '1.5px solid rgba(129,140,248,0.4)', borderRadius: '0 0 2px 2px' }} />

                    <div style={{ position: 'relative' }}>
                      {/* Rotating ring */}
                      <div style={{
                        width: '160px', height: '160px',
                        borderRadius: '50%',
                        padding: '3px',
                        background: 'conic-gradient(from 0deg, #818cf8, #a78bfa, #f472b6, #fbbf24, #818cf8)',
                      }}>
                        <div style={{
                          width: '100%', height: '100%',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          background: '#000',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <img
                            src={profilePic}
                            alt="Kartikeya Kotha"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                          />
                        </div>
                      </div>

                      {/* Status badge */}
                      <div style={{
                        position: 'absolute',
                        bottom: '4px',
                        right: '4px',
                        background: 'rgba(13,13,18,0.95)',
                        border: '1px solid rgba(129,140,248,0.2)',
                        borderRadius: '9999px',
                        padding: '4px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        backdropFilter: 'blur(8px)',
                      }}>
                        <div style={{
                          width: '6px', height: '6px', borderRadius: '50%',
                          background: '#22c55e',
                          animation: 'pulse-soft 2s ease infinite',
                        }} />
                        <span style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '8px',
                          letterSpacing: '0.1em',
                          color: '#9b99c4',
                        }}>Active</span>
                      </div>
                    </div>
                  </Motion.div>

              {/* Bio Card */}
              <Motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
                className="p-6 md:p-10 flex-1 relative"
                style={{
                  ...cardStyle,
                }}
                whileHover={{ borderColor: 'rgba(129,140,248,0.3)', boxShadow: '0 20px 60px rgba(129,140,248,0.12)' }}
              >
                    <div style={{
                      position: 'absolute', top: '1rem', right: '1.25rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '9px',
                      color: 'rgba(129,140,248,0.15)',
                      letterSpacing: '0.1em',
                    }}>LOC // 23.54N</div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <h3 style={{
                        fontFamily: 'Space Grotesk, Inter, sans-serif',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#f1f0ff',
                        letterSpacing: '-0.02em',
                      }}>
                        Full-Stack Architect
                      </h3>
                      <span style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '9px',
                        fontWeight: 700,
                        color: '#818cf8',
                        background: 'rgba(129,140,248,0.1)',
                        border: '1px solid rgba(129,140,248,0.2)',
                        borderRadius: '4px',
                        padding: '3px 8px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        flexShrink: 0,
                      }}>
                        Available
                      </span>
                    </div>

                    <p style={{
                      color: '#9b99c4',
                      fontSize: '1rem',
                      lineHeight: 1.8,
                      fontWeight: 400,
                    }}>
                      I specialize in crafting highly responsive, visually captivating full-stack ecosystems and interactive 3D web applications. Driven by complex layout design and modern engineering, I bridge the gap between creative aesthetics and high-performance, robust development frameworks.
                    </p>

                    {/* Quick stats */}
                    <div style={{ display: 'flex', gap: '2rem', marginTop: '1.75rem' }}>
                      {[['2+', 'Years Coding'], ['10+', 'Projects'], ['NIT', 'Durgapur']].map(([num, label]) => (
                        <div key={label}>
                          <div style={{
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: 1,
                          }}>{num}</div>
                          <div style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.65rem',
                            color: '#4e4c73',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginTop: '4px',
                          }}>{label}</div>
                        </div>
                      ))}
                    </div>
              </Motion.div>
            </div>

            {/* Row 2: Skills + Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Core Engine Stack */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 md:p-8"
                style={{ ...cardStyle }}
                whileHover={{ borderColor: 'rgba(129,140,248,0.3)', boxShadow: '0 16px 48px rgba(129,140,248,0.1)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <h3 style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#f1f0ff',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}>// Core Stack</h3>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: '#818cf8',
                    animation: 'pulse-soft 2s ease infinite',
                  }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}>
                  {skills.map((skill, index) => (
                    <Motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.04 * index }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(129,140,248,0.03)',
                        border: '1px solid rgba(129,140,248,0.06)',
                        borderRadius: '0.625rem',
                        padding: '0.625rem 0.875rem',
                        cursor: 'default',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <span style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '0.8rem',
                        color: '#9b99c4',
                        fontWeight: 500,
                      }}>{skill}</span>
                      <div style={{
                        width: '4px', height: '4px', borderRadius: '50%',
                        background: 'rgba(129,140,248,0.3)',
                      }} />
                    </Motion.div>
                  ))}
                </div>
              </Motion.div>

              {/* Strategic Vectors */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 md:p-8"
                style={{ ...cardStyle }}
                whileHover={{ borderColor: 'rgba(167,139,250,0.3)', boxShadow: '0 16px 48px rgba(167,139,250,0.1)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <h3 style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#f1f0ff',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}>// Focus Areas</h3>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: '#a78bfa',
                    animation: 'pulse-soft 2s ease 0.5s infinite',
                  }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {currentFocus.map((focus, index) => (
                    <Motion.div
                      key={focus}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.06 * index }}
                      viewport={{ once: true }}
                      whileHover={{ x: 6 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(167,139,250,0.03)',
                        border: '1px solid rgba(167,139,250,0.07)',
                        borderRadius: '0.625rem',
                        padding: '0.875rem 1rem',
                        cursor: 'default',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <span style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '0.85rem',
                        color: '#9b99c4',
                        fontWeight: 500,
                      }}>{focus}</span>
                      <div style={{
                        width: '20px', height: '1.5px',
                        background: 'linear-gradient(90deg, rgba(167,139,250,0.5), transparent)',
                        borderRadius: '1px',
                      }} />
                    </Motion.div>
                  ))}
                </div>
              </Motion.div>
            </div>

            {/* Row 3: Academic */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 md:p-10 relative"
              style={{ ...cardStyle }}
              whileHover={{ borderColor: 'rgba(129,140,248,0.25)', boxShadow: '0 20px 60px rgba(129,140,248,0.1)' }}
            >
              <h3 style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#f1f0ff',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1.75rem',
              }}>// Academic Sequence</h3>

              <div style={{
                borderLeft: '1px solid rgba(129,140,248,0.15)',
                paddingLeft: '1.5rem',
                marginLeft: '0.5rem',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  left: '-6px',
                  top: '8px',
                  width: '11px',
                  height: '11px',
                  borderRadius: '50%',
                  background: '#000',
                  border: '2px solid #818cf8',
                  boxShadow: '0 0 0 4px rgba(129,140,248,0.1)',
                }} />

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div>
                    <h4 style={{
                      fontFamily: 'Space Grotesk, Inter, sans-serif',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#f1f0ff',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.25rem',
                    }}>
                      B.Tech in Electrical Engineering
                    </h4>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      color: '#9b99c4',
                      fontWeight: 400,
                    }}>National Institute of Technology, Durgapur</p>
                  </div>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.75rem',
                    color: '#818cf8',
                    background: 'rgba(129,140,248,0.08)',
                    border: '1px solid rgba(129,140,248,0.15)',
                    borderRadius: '6px',
                    padding: '4px 12px',
                    flexShrink: 0,
                  }}>
                    2024 — 2028
                  </span>
                </div>

                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: '#4e4c73',
                  lineHeight: 1.75,
                  marginTop: '1rem',
                  maxWidth: '680px',
                }}>
                  Synthesizing rigorous foundational core engineering systems principles alongside deep self-directed immersion into distributed architectures and modern full-stack application models.
                </p>
              </div>
        </Motion.div>
      </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default About;