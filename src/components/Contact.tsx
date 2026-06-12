/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID ?? '';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY ?? '';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  /* ─── EmailJS send ─── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErrorMsg('Email service is not configured. Please contact me directly.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          title: `New message from ${formData.name}`,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      console.error('EmailJS error:', err);
      setErrorMsg(err?.text ?? 'Failed to send message. Please try again.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* ─── Styles ─── */
  const cardStyle: React.CSSProperties = {
    background: 'linear-gradient(145deg, rgba(129,140,248,0.05) 0%, rgba(13,13,18,0.9) 100%)',
    border: '1px solid rgba(129,140,248,0.1)',
    borderRadius: '1.25rem',
    backdropFilter: 'blur(20px)',
    transition: 'all 0.35s ease',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(129,140,248,0.04)',
    border: '1px solid rgba(129,140,248,0.1)',
    borderRadius: '0.75rem',
    padding: '0.875rem 1.25rem',
    color: '#f1f0ff',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'all 0.25s ease',
    boxSizing: 'border-box',
  };

  const focusOn = (el: HTMLElement) => { el.style.borderColor = '#818cf8'; el.style.background = 'rgba(129,140,248,0.07)'; el.style.boxShadow = '0 0 0 3px rgba(129,140,248,0.1)'; };
  const focusOff = (el: HTMLElement) => { el.style.borderColor = 'rgba(129,140,248,0.1)'; el.style.background = 'rgba(129,140,248,0.04)'; el.style.boxShadow = 'none'; };

  /* ─── Spinner keyframe (inline) ─── */
  const spinnerStyle: React.CSSProperties = { animation: 'contact-spin 0.8s linear infinite' };

  return (
    <section id="contact" className="relative overflow-hidden select-none" style={{ background: '#000', padding: '6rem 0' }}>

      {/* Spinner keyframe */}
      <style>{`@keyframes contact-spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }`}</style>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(129,140,248,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(129,140,248,0.03) 1px,transparent 1px)`,
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%,#000 60%,transparent 100%)',
      }} />

      {/* Ambient orbs */}
      <div className="absolute pointer-events-none" style={{ bottom: '20%', left: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle,rgba(129,140,248,0.07) 0%,transparent 70%)', borderRadius: '50%', filter: 'blur(100px)' }} />
      <div className="absolute pointer-events-none" style={{ top: '20%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle,rgba(244,114,182,0.05) 0%,transparent 70%)', borderRadius: '50%', filter: 'blur(80px)' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div style={{ marginBottom: '4rem' }}>
            <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#818cf8', display: 'block', marginBottom: '0.5rem' }}>
              Gateway — Communications
            </span>
            <h2 style={{ fontFamily: 'Space Grotesk,Inter,sans-serif', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#f1f0ff', lineHeight: 1 }}>
              Get In{' '}
              <span style={{ background: 'linear-gradient(135deg,#818cf8,#a78bfa,#f472b6)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Touch</span>
            </h2>
            <div style={{ marginTop: '1rem', height: '2px', width: '80px', background: 'linear-gradient(90deg,#818cf8,transparent)', borderRadius: '1px' }} />
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-stretch">

            {/* ── LEFT: Contact Info + Socials ── */}
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', minWidth: '280px' }}
            >
              {/* Contact details */}
              <div style={{ ...cardStyle, padding: '2rem', flex: 1 }}>
                <h3 style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.7rem', fontWeight: 700, color: '#f1f0ff', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
                  // Contact Directory
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(129,140,248,0.06)', border: '1px solid rgba(129,140,248,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="18" height="18" fill="none" stroke="#818cf8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', color: '#4e4c73', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>Email</p>
                      <a href="mailto:kartikeyakk2007@gmail.com" style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.875rem', color: '#9b99c4', transition: 'color 0.25s ease' }}
                        onMouseOver={e => (e.currentTarget as HTMLElement).style.color = '#818cf8'}
                        onMouseOut={e => (e.currentTarget as HTMLElement).style.color = '#9b99c4'}>
                        kartikeyakk2007@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="18" height="18" fill="none" stroke="#a78bfa" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', color: '#4e4c73', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>Phone</p>
                      <a href="tel:+916301641669" style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.875rem', color: '#9b99c4', transition: 'color 0.25s ease' }}
                        onMouseOver={e => (e.currentTarget as HTMLElement).style.color = '#a78bfa'}
                        onMouseOut={e => (e.currentTarget as HTMLElement).style.color = '#9b99c4'}>
                        +91 6301641669
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(244,114,182,0.05)', border: '1px solid rgba(244,114,182,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="18" height="18" fill="none" stroke="#f472b6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', color: '#4e4c73', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>Location</p>
                      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.875rem', color: '#9b99c4' }}>NIT Durgapur, India</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Social links */}
              <div style={{ ...cardStyle, padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', fontWeight: 700, color: '#f1f0ff', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  // Social Links
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.625rem' }}>
                  {[
                    { icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z', url: 'https://github.com/kartikeya7609' },
                    { icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', url: 'https://linkedin.com/in/meher-sri-kartikeya-kotha-135997217' },
                    { icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', url: 'https://twitter.com/kotha_mehe43188' },
                    { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', url: 'https://instagram.com/k_m_s_k_7' },
                  ].map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                      style={{ height: '48px', borderRadius: '12px', background: 'rgba(129,140,248,0.04)', border: '1px solid rgba(129,140,248,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4e4c73', transition: 'all 0.25s ease' }}
                      onMouseOver={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(129,140,248,0.3)'; el.style.color = '#818cf8'; el.style.background = 'rgba(129,140,248,0.08)'; el.style.transform = 'translateY(-3px)'; }}
                      onMouseOut={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(129,140,248,0.08)'; el.style.color = '#4e4c73'; el.style.background = 'rgba(129,140,248,0.04)'; el.style.transform = 'translateY(0)'; }}
                    >
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                    </a>
                  ))}
                </div>
              </div>
            </Motion.div>

            {/* ── RIGHT: Form ── */}
            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ ...cardStyle, padding: '2.5rem', flex: 1 }}
            >
              <h3 style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.7rem', fontWeight: 700, color: '#f1f0ff', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
                // Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                {/* Name */}
                <div>
                  <label style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', color: '#4e4c73', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    style={inputStyle}
                    onFocus={e => focusOn(e.currentTarget)}
                    onBlur={e => focusOff(e.currentTarget)}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', color: '#4e4c73', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    style={inputStyle}
                    onFocus={e => focusOn(e.currentTarget)}
                    onBlur={e => focusOff(e.currentTarget)}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', color: '#4e4c73', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => focusOn(e.currentTarget)}
                    onBlur={e => focusOff(e.currentTarget)}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.875rem',
                    fontFamily: 'Space Grotesk,Inter,sans-serif',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                    background: status === 'loading' ? 'rgba(129,140,248,0.15)' : 'linear-gradient(135deg,#818cf8,#a78bfa)',
                    color: status === 'loading' ? '#4e4c73' : '#fff',
                    boxShadow: status === 'loading' ? 'none' : '0 8px 32px rgba(129,140,248,0.3)',
                    opacity: status === 'loading' ? 0.7 : 1,
                  }}
                  onMouseOver={e => { if (status !== 'loading') { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 16px 48px rgba(129,140,248,0.4)'; } }}
                  onMouseOut={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = status !== 'loading' ? '0 8px 32px rgba(129,140,248,0.3)' : 'none'; }}
                >
                  {status === 'loading' ? (
                    <>
                      <svg style={spinnerStyle} width="18" height="18" fill="none" viewBox="0 0 24 24">
                        <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending…
                    </>
                  ) : status === 'success' ? (
                    <>✅ Sent!</>
                  ) : (
                    <>
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                {/* Status banners */}
                <AnimatePresence>
                  {status === 'success' && (
                    <Motion.div
                      key="success"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      style={{ padding: '0.875rem', borderRadius: '0.875rem', background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)', textAlign: 'center', fontFamily: 'Inter,sans-serif', fontSize: '0.85rem', color: '#4ade80' }}
                    >
                      🎉 Message sent! I'll get back to you within 24 hours.
                    </Motion.div>
                  )}
                  {status === 'error' && (
                    <Motion.div
                      key="error"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      style={{ padding: '0.875rem', borderRadius: '0.875rem', background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.2)', fontFamily: 'Inter,sans-serif', fontSize: '0.85rem', color: '#f87171' }}
                    >
                      <strong>⚠️ Error:</strong> {errorMsg || 'Something went wrong. Please email me directly at kartikeyakk2007@gmail.com'}
                    </Motion.div>
                  )}
                </AnimatePresence>

              </form>
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;