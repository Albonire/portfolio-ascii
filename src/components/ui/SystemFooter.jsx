import React, { useState, useEffect } from 'react';
import AsciiButton from './AsciiButton';

const SystemFooter = () => {
    const [uptime, setUptime] = useState(0);
    const [cpu, setCpu] = useState(12);
    const [ram, setRam] = useState(402);

    useEffect(() => {
        const interval = setInterval(() => {
            setUptime(u => u + 1);
            setCpu(Math.floor(Math.random() * 30) + 5); 
            setRam(400 + Math.floor(Math.random() * 50));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div style={{ 
            textAlign: 'center', 
            margin: '40px 0 0 0', 
            borderTop: '4px double var(--term-ink)', 
            paddingTop: '40px',
            paddingBottom: '20px'
        }} id="contact">
            <p style={{ fontSize: '1.2rem', textTransform: 'uppercase' }}>&gt; INITIATE_CONTACT?</p>
          
            <AsciiButton href="mailto:tuemail@ejemplo.com" className="glitch-hover">
                SEND_EMAIL
            </AsciiButton>

            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <AsciiButton href="https://github.com/" className="glitch-hover">[ GITHUB ]</AsciiButton>
                <AsciiButton href="https://linkedin.com/" className="glitch-hover">[ LINKEDIN ]</AsciiButton>
                <AsciiButton href="https://instagram.com/" className="glitch-hover">[ INSTAGRAM ]</AsciiButton>
                <AsciiButton href="https://whatsapp.com/" className="glitch-hover">[ WHATSAPP ]</AsciiButton>
            </div>

            <br /><br />
            
            <div style={{ 
                border: '1px solid var(--term-ink)', 
                display: 'inline-block', 
                padding: '10px',
                marginTop: '20px',
                fontSize: '0.8rem',
                backgroundColor: 'var(--term-dim)'
            }}>
                <div>SYSTEM DIAGNOSTICS:</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', marginTop: '5px', textAlign: 'left' }}>
                    <span>UPTIME: {formatTime(uptime)}</span>
                    <span>CPU LOAD: {cpu}%</span>
                    <span>MEM FREE: {ram}KB</span>
                    <span>NET: CONNECTED</span>
                </div>
            </div>

            <div style={{ opacity: 0.6, fontSize: '0.8rem', marginTop: '20px' }}>
                &gt; git commit -m "End of transmission"
            </div>
        </div>
    );
};

export default SystemFooter;
