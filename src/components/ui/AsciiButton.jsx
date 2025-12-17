import React, { useState } from 'react';

const AsciiButton = ({ children, href, style = {}, className = '' }) => {
    const [isHovered, setIsHovered] = useState(false);

    const normalBorder = {
        top: '.----------------.',
        mid: '|',
        bot: '\'----------------\''
    };

    const hoverBorder = {
        top: '#================#',
        mid: 'I',
        bot: '#================#'
    };

    const border = isHovered ? hoverBorder : normalBorder;

    return (
        <a 
            href={href}
            className={className}
            style={{ 
                display: 'inline-block', 
                textDecoration: 'none', 
                color: 'inherit',
                cursor: 'pointer',
                fontFamily: 'Fira Code, monospace',
                textAlign: 'center',
                ...style 
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{ lineHeight: '10px' }}>{border.top}</div>
            <div style={{ lineHeight: '20px', padding: '0 10px' }}>
                {border.mid} {children} {border.mid}
            </div>
            <div style={{ lineHeight: '10px' }}>{border.bot}</div>
        </a>
    );
};

export default AsciiButton;
