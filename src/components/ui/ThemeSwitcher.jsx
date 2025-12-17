import React from 'react';

const ThemeSwitcher = ({ currentTheme, navigateTheme }) => {
  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000, userSelect: 'none' }}>
        <div 
            onClick={navigateTheme}
            style={{ 
                cursor: 'pointer',
                border: '1px solid var(--term-ink)',
                padding: '5px 10px',
                background: 'var(--term-bg)'
            }}
            className="glitch-hover"
        >
            [ THEME: {currentTheme.toUpperCase()} ]
        </div>
    </div>
  );
};

export default ThemeSwitcher;
