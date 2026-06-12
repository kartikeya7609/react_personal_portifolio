import React from 'react';

interface ScrollIndicatorProps {
  targetId: string;
  label?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ targetId, label = 'Next' }) => {
  const scrollTo = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @keyframes siBounce {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50%       { transform: translateY(6px); opacity: 0.3; }
        }
        @keyframes siDot {
          0%   { transform: translateY(0); opacity: 1; }
          80%  { transform: translateY(11px); opacity: 0; }
          100% { transform: translateY(11px); opacity: 0; }
        }
        .si-btn:hover .si-mouse  { border-color: rgba(129,140,248,0.6); }
        .si-btn:hover .si-label  { color: #818cf8; }
        .si-btn:hover .si-chev   { stroke: #a78bfa; }
      `}</style>
      <button
        className="si-btn"
        onClick={scrollTo}
        aria-label={`Scroll to ${targetId} section`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.45rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem',
          transition: 'all 0.25s ease',
        }}
      >
        <span
          className="si-label"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '8px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#4e4c73',
            transition: 'color 0.25s ease',
          }}
        >
          {label}
        </span>

        {/* Mouse shell */}
        <div
          className="si-mouse"
          style={{
            width: '22px',
            height: '34px',
            borderRadius: '11px',
            border: '1.5px solid rgba(129,140,248,0.22)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '6px',
            transition: 'border-color 0.25s ease',
          }}
        >
          <div style={{
            width: '2.5px',
            height: '7px',
            borderRadius: '2px',
            background: 'linear-gradient(to bottom, #818cf8, #a78bfa)',
            animation: 'siDot 1.4s cubic-bezier(0.45,0,0.55,1) infinite',
          }} />
        </div>

        {/* Triple chevrons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}>
          {[0, 1, 2].map(i => (
            <svg
              key={i}
              width="12" height="7"
              viewBox="0 0 12 7"
              fill="none"
              style={{
                animation: `siBounce 1.4s ease ${i * 0.14}s infinite`,
                opacity: 1 - i * 0.28,
              }}
            >
              <path
                className="si-chev"
                d="M1 1l5 5 5-5"
                stroke="#818cf8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: 'stroke 0.25s ease' }}
              />
            </svg>
          ))}
        </div>
      </button>
    </>
  );
};

export default ScrollIndicator;
