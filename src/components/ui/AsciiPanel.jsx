import React from 'react';

const AsciiPanel = ({ title, children, style = {} }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', marginBottom: '30px', ...style }}>
      {/* Title Bar */}
      <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
        <span style={{ fontSize: '20px' }}>+</span>
        <span style={{ borderBottom: '2px solid var(--term-ink)', flex: 1, margin: '0 5px' }}></span>
        <span style={{ padding: '0 10px', textTransform: 'uppercase', fontFamily: '"Press Start 2P", cursive', fontSize: '12px' }}>{title}</span>
        <span style={{ borderBottom: '2px solid var(--term-ink)', flex: 1, margin: '0 5px' }}></span>
        <span style={{ fontSize: '20px' }}>+</span>
      </div>

      {/* Content Area */}
      <div style={{ 
          borderLeft: '2px solid var(--term-ink)', 
          borderRight: '2px solid var(--term-ink)', 
          padding: '20px',
          position: 'relative',
          flex: 1 /* Fill remaining space */
      }}>
          {children}
      </div>

      {/* Bottom Bar */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '20px' }}>+</span>
        <span style={{ borderTop: '2px solid var(--term-ink)', flex: 1, margin: '0 5px' }}></span>
        <span style={{ fontSize: '20px' }}>+</span>
      </div>
    </div>
  );
};

export default AsciiPanel;
