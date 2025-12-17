import React from 'react';

const AsciiPanel = ({ title, children, style = {} }) => {
  return (
    <div style={{ marginBottom: '30px', ...style }}>
      {/* Title Bar */}
      <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
        <span>+</span>
        <span style={{ borderBottom: '1px solid var(--term-ink)', flex: 1, margin: '0 5px' }}></span>
        <span style={{ padding: '0 10px', textTransform: 'uppercase' }}>{title}</span>
        <span style={{ borderBottom: '1px solid var(--term-ink)', flex: 1, margin: '0 5px' }}></span>
        <span>+</span>
      </div>

      {/* Content Area */}
      <div style={{ 
          borderLeft: '1px solid var(--term-ink)', 
          borderRight: '1px solid var(--term-ink)', 
          padding: '20px',
          position: 'relative'
      }}>
          {children}
      </div>

      {/* Bottom Bar */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>+</span>
        <span style={{ borderTop: '1px solid var(--term-ink)', flex: 1, margin: '0 5px' }}></span>
        <span>+</span>
      </div>
    </div>
  );
};

export default AsciiPanel;
