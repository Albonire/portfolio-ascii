import React, { useState, useEffect } from 'react';
import AsciiHero from './components/ascii/AsciiHero';
import AsciiPanel from './components/ui/AsciiPanel';
import AsciiButton from './components/ui/AsciiButton';
import InteractiveTerminal from './components/ui/InteractiveTerminal';
import ThemeSwitcher from './components/ui/ThemeSwitcher';

function App() {
  const [theme, setTheme] = useState('blueprint');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const navigateTheme = () => {
      const themes = ['blueprint', 'matrix', 'amber', 'cyber'];
      const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
      setTheme(themes[nextIndex]);
  };
  
  // ASCII Title "Graphic"
  const titleAscii = `
  _   _  ____  _      _    
 | | | |/ __ \\| |    | |   
 | |_| | |  | | |    | |   
 |  _  | |  | | |    | |   
 | | | | |__| | |____| |____ 
 |_| |_|\\____/|______|______|
 `.trim();

  return (
    <div className="crt" style={{ maxWidth: '900px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <ThemeSwitcher currentTheme={theme} navigateTheme={navigateTheme} />

      {/* HEADER SECTION */}
      <header style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '40px' }}>
        
        {/* 3D ASCII Object */}
        <div style={{ marginBottom: '20px' }}>
            <AsciiHero />
        </div>

        {/* ASCII Title */}
        <pre style={{ 
            fontSize: '10px', 
            lineHeight: '10px', 
            fontWeight: 'bold',
            display: 'inline-block',
            textAlign: 'left',
            marginBottom: '20px'
        }}>
            {titleAscii}
        </pre>

        <div style={{ marginTop: '10px', borderTop: '1px dashed var(--term-ink)', borderBottom: '1px dashed var(--term-ink)', padding: '10px 0' }}>
            <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>
                &lt; SYSTEM.USER: [TU NOMBRE] /&gt;
            </p>
            <p style={{ margin: 0, fontSize: '0.9em', opacity: 0.8 }}>
                [ STATUS: ONLINE ] [ ROLE: SOFTWARE_ENGINEER ]
            </p>
        </div>
      </header>

      {/* GRID LAYOUT */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          
          {/* PROFILE */}
          <AsciiPanel title="01_PROFILE.exe">
              <p style={{ textAlign: 'justify' }}>
                  &gt; INIT_SEQUENCE... <br/>
                  &gt; LOAD_DATA: PASSION <br/><br/>
                  Full Stack Developer navigating the chaos of the web via <strong>Fedora Linux</strong>.
              </p>
              
              <div style={{ margin: '20px 0', border: '1px solid var(--term-ink)', padding: '10px', backgroundColor: 'var(--term-dim)' }}>
                  <pre style={{ fontSize: '10px', lineHeight: '10px', margin: 0 }}>
{`    .--.       
   |o_o |    [ SYSTEM: LINUX ]
   |:_/ |    [ KERNEL: UP ]
  //   \\ \\   
 (|     | )  
/'\\_   _/
\\___)=(___/  `}
                  </pre>
              </div>
              <p>&gt; GOAL: Scalable Architecture && Clean Code.</p>
          </AsciiPanel>

          {/* TOOLKIT */}
          <AsciiPanel title="02_TOOLKIT.lib">
              <p>&gt; LOADING_MODULES:</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                  {[
                      '[ PYTHON ]', '[ REACT ]', '[ DJANGO ]', 
                      '[ LINUX ]', '[ AZURE ]', '[ GIT ]', '[ PSQL ]'
                  ].map((tech) => (
                      <span key={tech} 
                      className="glitch-hover"
                      style={{ 
                          cursor: 'crosshair', 
                          fontWeight: 'bold',
                          transition: 'color 0.2s'
                      }}
                      onMouseEnter={(e) => { e.target.textContent = `> ${tech.replace(/[\[\]]/g, '')} <`; }}
                      onMouseLeave={(e) => { e.target.textContent = tech; }}
                      >
                          {tech}
                      </span>
                  ))}
              </div>

              <div style={{ marginTop: '30px' }}>
                  <p style={{ borderBottom: '1px solid var(--term-ink)', display: 'inline-block' }}>&gt; PENDING_UPDATES:</p>
                  <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                      <li>[*] Machine Learning</li>
                      <li>[*] Advanced WebSockets</li>
                  </ul>
              </div>
          </AsciiPanel>
      </div>

      {/* PROJECTS */}
      <div style={{ marginTop: '40px' }}>
        <AsciiPanel title="03_PROJECTS.dir">
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                
                {/* Project 1 */}
                <div style={{ border: '1px dotted var(--term-ink)', padding: '15px' }} className="glitch-hover">
                    <h3 style={{ borderBottom: '2px solid var(--term-ink)', display: 'inline-block' }}>cupidoUP_App</h3>
                    <div style={{ margin: '10px 0', fontSize: '11px', fontWeight: 'bold' }}>
                        [APP] &lt;=======&gt; [DATABASE]
                    </div>
                    <p>University social network for secure student connections.</p>
                    <p style={{ fontSize: '0.8em', textTransform: 'uppercase' }}>Stack: Django | React</p>
                </div>

                {/* Project 2 */}
                <div style={{ border: '1px dotted var(--term-ink)', padding: '15px' }} className="glitch-hover">
                    <h3 style={{ borderBottom: '2px solid var(--term-ink)', display: 'inline-block' }}>Azure_Sockets</h3>
                    <div style={{ margin: '10px 0', fontSize: '11px', fontWeight: 'bold' }}>
                        (CLOUD) &lt;~~&gt; (CLIENT)
                    </div>
                    <p>Real-time chat infrastructure deployed on Azure.</p>
                    <p style={{ fontSize: '0.8em', textTransform: 'uppercase' }}>Stack: Python | Redis</p>
                </div>

            </div>
        </AsciiPanel>
      </div>
      
      {/* TERMINAL */}
      <InteractiveTerminal />

      {/* FOOTER */}
      <div style={{ textAlign: 'center', margin: '40px 0', borderTop: '4px double var(--term-ink)', paddingTop: '40px' }}>
          <p style={{ fontSize: '1.2rem', textTransform: 'uppercase' }}>&gt; INITIATE_CONTACT?</p>
          
          <AsciiButton href="mailto:tuemail@ejemplo.com" className="glitch-hover">
              SEND_EMAIL
          </AsciiButton>

          <br /><br />
          <div style={{ opacity: 0.6, fontSize: '0.8rem' }}>
              &gt; git commit -m "End of transmission"
          </div>
      </div>

    </div>
  );
}

export default App;
