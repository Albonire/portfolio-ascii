import React, { useState, useEffect } from 'react';
import AsciiHero from './components/ascii/AsciiHero';
import AsciiPanel from './components/ui/AsciiPanel';
import InteractiveTerminal from './components/ui/InteractiveTerminal';
import AsciiNavbar from './components/ui/AsciiNavbar';
import SystemFooter from './components/ui/SystemFooter';

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
  
  // ASCII Title "HELLO"
  const titleAscii = `
   _   _  _____  _      _      _____ 
  | | | ||  ___|| |    | |    |  _  |
  | |_| || |__  | |    | |    | | | |
  |  _  ||  __| | |    | |    | | | |
  | | | || |___ | |____| |____| |_| |
  |_| |_||_____||______|______||_____|
 `.trim();

  return (
    <div className="crt" style={{ maxWidth: '900px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navbar now includes Theme Switcher logic if we pass it down, 
          OR we treat Navbar as a layout container. 
          Let's pass the theme controls to Navbar for integration. */}
      <AsciiNavbar currentTheme={theme} toggleTheme={navigateTheme} />

      {/* HEADER SECTION */}
      <header id="main" style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '80px' }}>
        
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
                &lt; SYSTEM.USER: FABIAN GONZÁLEZ /&gt;
            </p>
            <p style={{ margin: 0, fontSize: '0.9em', opacity: 0.8 }}>
                [ STATUS: ONLINE ] [ ROLE: SOFTWARE_ENGINEER / FULLSTACK DEV ]
            </p>
        </div>
      </header>

      {/* GRID LAYOUT */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }} id="profile">
          
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
                      onMouseEnter={(e) => { e.target.textContent = `> ${tech.replace(/[[]]/g, '')} <`; }}
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

      {/* EDUCATION SECTION */}
      <div style={{ marginTop: '40px' }}>
          <AsciiPanel title="03_EDUCATION.log">
              <pre style={{ fontSize: '12px', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>
{`./EDUCATION/
├── 2024: Software Engineering
│   ├── University [Name]
│   └── Status: [In Progress / Graduated]
│
└── 20XX: [Previous Title / High School]
    └── [Institution]`}
              </pre>
              <p style={{ marginTop: '10px', fontStyle: 'italic', opacity: 0.8 }}>
                  &gt; "Learning is a continuous process."
              </p>
          </AsciiPanel>
      </div>

      {/* PROJECTS */}
      <div style={{ marginTop: '40px' }} id="projects">
        <AsciiPanel title="04_PROJECTS.dir">
            
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
      <SystemFooter />

    </div>
  );
}

export default App;
