import React from 'react';

const SectionDivider = ({ theme = 'blueprint' }) => {
    // Theme-specific patterns
    const patterns = {
        blueprint: { char: '-', left: '[', right: ']' },
        concrete: { char: '=', left: '<', right: '>' },
        amber: { char: '~', left: '{', right: '}' },
        cyber: { char: '>', left: '/', right: '/' },
        matrix: { char: '=', left: '<', right: '>' }
    };

    const config = patterns[theme] || patterns.blueprint;
    
    // Generate a long line dynamically or just use a long string with overflow hidden
    // Using divs ensures flex works correctly unlike spans
    const charLine = config.char.repeat(400); 

    return (
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '60px 0 30px 0',
            width: '100%',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontFamily: "'Fira Code', monospace",
            userSelect: 'none',
            color: 'var(--term-ink)',
            fontSize: '14px',
            opacity: 0.5 
        }}>
            {/* Single Continuous Line */}
            <div style={{ flex: 1, overflow: 'hidden', textAlign: 'center' }}>
                {charLine}
            </div>
        </div>
    );
};

export default SectionDivider;
