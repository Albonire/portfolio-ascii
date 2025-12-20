import React, { useEffect, useState, useRef } from 'react';

const chars = ['@', '#', '$', '%', '*', '+', '=', '-', ':', '.', '▒', '▓', '░'];

const AsciiTrail = () => {
  const [particles, setParticles] = useState([]);
  const requestRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });
  const lastSpawn = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = (time) => {
      // Spawn new particle every few ms if mouse moved
      if (time - lastSpawn.current > 40) { // Slightly slower spawn
        setParticles((prev) => {
          const newParticle = {
            id: Date.now() + Math.random(),
            x: mousePos.current.x,
            y: mousePos.current.y,
            char: chars[Math.floor(Math.random() * chars.length)],
            rotation: Math.random() * 360, // Random rotation
            size: Math.random() * 10 + 8, // Varied size
            life: 0.5, // Start more transparent (max 1.0)
            vx: (Math.random() - 0.5) * 1, // Slower drift
            vy: (Math.random() - 0.5) * 1
          };
          
          // Keep only recent particles and decay existing ones
          return [...prev.slice(-30), newParticle].map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - 0.02 // Slower decay
          })).filter(p => p.life > 0);
        });
        lastSpawn.current = time;
      } else {
        // Just decay if no spawn
        setParticles(prev => prev.map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - 0.015
        })).filter(p => p.life > 0));
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 9998, 
      overflow: 'hidden',
      fontFamily: '"Fira Code", monospace'
    }}>
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: p.x,
            top: p.y,
            opacity: p.life,
            fontSize: `${p.size}px`,
            color: 'var(--term-ink)',
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
            textShadow: '0 0 1px var(--term-dim)',
            userSelect: 'none',
            mixBlendMode: 'multiply', // Better for Blueprint theme
            filter: 'blur(0.2px)'
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
};

export default AsciiTrail;
