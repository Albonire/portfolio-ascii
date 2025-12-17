import React from 'react';

const AsciiNavbar = ({ currentTheme, toggleTheme }) => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'var(--term-ink)',
            color: 'var(--term-bg)',
            fontFamily: '"Press Start 2P", cursive',
            padding: '10px 10px', /* Increased padding for larger font */
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '10px', /* Smaller font size for this bulky font */
            borderBottom: '2px solid var(--term-bg)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <span 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="nav-item"
                >
                    [ F1: MAIN ]
                </span>
                <span 
                    style={{ cursor: 'pointer' }}
                    onClick={() => scrollToSection('profile')} 
                    className="nav-item"
                >
                    [ F2: PROFILE ]
                </span>
                <span 
                    style={{ cursor: 'pointer' }}
                    onClick={() => scrollToSection('projects')}
                    className="nav-item"
                >
                    [ F3: WORK ]
                </span>
                <span 
                    style={{ cursor: 'pointer' }}
                    onClick={() => scrollToSection('contact')}
                    className="nav-item"
                >
                    [ F4: CONTACT ]
                </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span 
                    onClick={toggleTheme}
                    style={{ cursor: 'pointer', border: '1px solid var(--term-bg)', padding: '0 5px' }}
                    className="nav-item"
                >
                    [ THEME: {currentTheme ? currentTheme.toUpperCase() : 'BLUEPRINT'} ]
                </span>
                <span style={{ display: 'none', md: { display: 'block' } }}>
                    MEM: 64KB OK
                </span>
            </div>
        </div>
    );
};

export default AsciiNavbar;
