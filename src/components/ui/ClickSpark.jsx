import React, { useState, useEffect } from 'react';

const ClickSpark = ({ color = 'var(--term-ink)' }) => {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newSpark = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setSparks((prev) => [...prev, newSpark]);

      // Cleanup spark after animation
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
      }, 600);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {sparks.map((spark) => (
        <div
          key={spark.id}
          style={{
            position: 'fixed',
            top: spark.y,
            left: spark.x,
            width: '0px',
            height: '0px',
            borderRadius: '50%',
            border: `2px solid ${color}`,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9999,
            animation: 'spark-anim 0.5s ease-out forwards',
          }}
        />
      ))}
      <style>{`
        @keyframes spark-anim {
          0% { width: 0; height: 0; opacity: 1; }
          100% { width: 100px; height: 100px; opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default ClickSpark;
