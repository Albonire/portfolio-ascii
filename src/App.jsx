import React, { useEffect } from 'react';
import AsciiHero from './components/ascii/AsciiHero';

function App() {
  
  // Click splash effect
  useEffect(() => {
    const handleClick = (e) => {
      const splash = document.createElement('div');
      splash.style.position = 'absolute';
      splash.style.width = '20px';
      splash.style.height = '20px';
      splash.style.background = 'radial-gradient(circle, var(--ink-color) 0%, transparent 80%)';
      splash.style.borderRadius = '50%';
      splash.style.pointerEvents = 'none';
      splash.style.transform = 'translate(-50%, -50%) scale(0)';
      splash.style.opacity = '0.8';
      splash.style.zIndex = '9999';
      splash.style.left = e.pageX + 'px';
      splash.style.top = e.pageY + 'px';
      splash.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
      
      document.body.appendChild(splash);

      requestAnimationFrame(() => {
        splash.style.transform = 'translate(-50%, -50%) scale(4)';
        splash.style.opacity = '0';
      });

      setTimeout(() => {
        splash.remove();
      }, 600);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="notebook-container">
      
      {/* HEADER */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="hand-drawn-box" style={{ display: 'inline-block', padding: '10px 20px', width: '100%', maxWidth: '500px' }}>
            <AsciiHero />
        </div>
        
        <div style={{ marginTop: '20px' }}>
            <h1>HOLA, SOY [TU NOMBRE]</h1>
            <p style={{ opacity: 0.9 }}>
                <span className="tech-font">&lt;Ingeniero de Software /&gt;</span>
                <br />
                Dibujando código limpio desde Colombia.
            </p>
        </div>
      </header>

      {/* GRID LAYOUT */}
      <div className="grid-2">
          {/* PERFIL */}
          <div className="hand-drawn-box">
              <h2>01. Sobre Mí</h2>
              <p>
                  Estudiante apasionado por el caos ordenado. Me muevo entre la terminal de 
                  <strong> Fedora</strong> y el desarrollo Full Stack.
              </p>
              <div style={{ textAlign: 'center', margin: '20px 0' }}>
                  <pre style={{ fontSize: '10px', lineHeight: '10px', display: 'inline-block', textAlign: 'left' }}>
{`    .--.       
   |o_o |    [ LINUX ]
   |:_/ |    [ INSIDE ]
  //   \\ \\   
 (|     | )  
/'\\_   _/
\\___)=(___/  `}
                  </pre>
              </div>
              <p>Meta actual: Arquitecturas escalables y código "artesanal".</p>
          </div>

          {/* STACK */}
          <div className="hand-drawn-box">
              <h2>02. Herramientas</h2>
              <p>Mis pinceles digitales:</p>
              
              <div className="sticker-container">
                  {['Python 🐍', 'React.js ⚛️', 'Django 🎸', 'Linux 🐧', 'Azure ☁️', 'Git 🐙', 'PostgreSQL 🐘'].map(tech => (
                      <span key={tech} className="sticker">
                          {tech}
                      </span>
                  ))}
              </div>

              <br />
              <div style={{ borderTop: '1px dashed var(--ink-color)', paddingTop: '10px' }}>
                  <p style={{ fontSize: '0.9em' }}>Aprendiendo:</p>
                  <div className="tech-font" style={{ fontSize: '0.8rem' }}>
                      &gt; Machine Learning<br />
                      &gt; WebSockets Avanzados
                  </div>
              </div>
          </div>
      </div>

      {/* PROYECTOS */}
      <div className="hand-drawn-box">
        <h2>03. Proyectos</h2>
        
        <div className="grid-2" style={{ marginTop: '20px' }}>
            
            {/* Proyecto 1 */}
            <div>
                <h3>&gt; cupidoUP_App</h3>
                <div className="tech-font" style={{ fontSize: '10px', border: '1px solid var(--ink-color)', padding: '5px', width: 'fit-content', marginBottom: '10px' }}>
  [APP] &lt;--&gt; [DB]
                </div>
                <p>Red social universitaria para conectar estudiantes.</p>
                <small className="tech-font">Stack: Django, React</small>
            </div>

            {/* Proyecto 2 */}
            <div>
                <h3>&gt; Azure Sockets</h3>
                <div className="tech-font" style={{ fontSize: '10px', border: '1px solid var(--ink-color)', padding: '5px', width: 'fit-content', marginBottom: '10px' }}>
 (☁️) &lt;--&gt; (💬)
                </div>
                <p>Chat en tiempo real desplegado en la nube.</p>
                <small className="tech-font">Stack: Python, Redis</small>
            </div>

        </div>
      </div>

      {/* CONTACTO */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ fontSize: '1.3rem' }}>¿Creamos algo juntos?</p>
          <a href="mailto:tuemail@ejemplo.com" className="btn-ink">Enviar Correo ✉️</a>
          <br /><br />
          <div className="tech-font" style={{ fontSize: '0.8rem' }}>
              git commit -m "Thanks for visiting"
          </div>
      </div>

    </div>
  );
}

export default App;
