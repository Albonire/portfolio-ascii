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
                &lt; SYSTEM.USER: FABIAN GONZALEZ /&gt;
            </p>
            <p style={{ margin: 0, fontSize: '0.9em', opacity: 0.8 }}>
                [ STATUS: ONLINE ] [ ROLE: FULL STACK DEVELOPER ]
            </p>
        </div>
      </header>

      {/* GRID LAYOUT */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }} id="profile">
          
          {/* PROFILE */}
          <AsciiPanel title="01_PROFILE.exe">
              <p style={{ textAlign: 'justify' }}>
                  &gt; INIT_SEQUENCE... <br/>
                  &gt; LOAD_DATA: MISSION <br/><br/>
                  Transforming ideas into digital reality through clean code and immersive design.
                  <br/><br/>
                  Full Stack Developer enthusiastic about UI/UX and building high-performance web applications.
              </p>
              
              <div style={{ margin: '20px 0', border: '1px solid var(--term-ink)', padding: '10px', backgroundColor: 'var(--term-dim)' }}>
                  <pre style={{ fontSize: '10px', lineHeight: '10px', margin: 0 }}>
{`    .--.       
   |o_o |    [ SYSTEM: LINUX ]
   |:_/ |    [ DISTRO: FEDORA ]
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
                      '[ HTML/CSS ]', '[ JS/TS ]', '[ REACT ]', '[ NEXT.JS ]',
                      '[ TAILWIND ]', '[ THREE.JS ]',
                      '[ PYTHON ]', '[ DJANGO ]', '[ FASTAPI ]', '[ NODE.JS ]',
                      '[ POSTGRES ]', '[ SQLITE ]', '[ GIT ]', '[ DOCKER ]'
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
                      <li>[*] Advanced AI Integration</li>
                      <li>[*] WebGL Shaders</li>
                  </ul>
              </div>
          </AsciiPanel>
      </div>

      {/* EDUCATION SECTION */}
      <div style={{ marginTop: '40px' }}>
          <AsciiPanel title="03_EDUCATION.log">
              <pre style={{ fontSize: '12px', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>
{`./EDUCATION/
├── 2020-PRESENT: Systems Engineering
│   ├── Universidad de Cartagena
│   └── Notes: Software Dev, Algorithms
│
├── 2023: English B2
│   └── Centro Colombo Americano
│
└── 2019: Academic High School
    └── I.E. Jose de la Vega`}
              </pre>
              <p style={{ marginTop: '10px', fontStyle: 'italic', opacity: 0.8 }}>
                  &gt; "Continuous learning is the key."
              </p>
          </AsciiPanel>
      </div>

      {/* PROJECTS */}
      <div style={{ marginTop: '40px' }} id="projects">
        <AsciiPanel title="04_PROJECTS.dir">
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                
                {/* Project 1 */}
                <div style={{ border: '1px dotted var(--term-ink)', padding: '15px' }} className="glitch-hover">
                    <h3 style={{ borderBottom: '2px solid var(--term-ink)', display: 'inline-block' }}>Task Manager</h3>
                    <div style={{ margin: '10px 0', fontSize: '11px', fontWeight: 'bold' }}>
                        [WEB] &lt;=======&gt; [POMODORO]
                    </div>
                    <p>Task management platform with Pomodoro integration and auth.</p>
                    <p style={{ fontSize: '0.8em', textTransform: 'uppercase', marginTop: '5px' }}>
                        Stack: Django | JS | SQLite3
                    </p>
                    <div style={{ marginTop: '10px', fontSize: '10px' }}>
                        <a href="https://github.com/Albonire/To-DoList1.0" target="_blank" style={{ marginRight: '10px' }}>[ SOURCE ]</a>
                    </div>
                </div>

                {/* Project 2 */}
                <div style={{ border: '1px dotted var(--term-ink)', padding: '15px' }} className="glitch-hover">
                    <h3 style={{ borderBottom: '2px solid var(--term-ink)', display: 'inline-block' }}>BDI-GB-ZOO</h3>
                    <div style={{ margin: '10px 0', fontSize: '11px', fontWeight: 'bold' }}>
                        [ API ] &lt;~~&gt; [ ZOO MGMT ]
                    </div>
                    <p>Zoo management system for animals, habitats, and caretakers.</p>
                    <p style={{ fontSize: '0.8em', textTransform: 'uppercase', marginTop: '5px' }}>
                        Stack: FastAPI | Postgres | Docker
                    </p>
                    <div style={{ marginTop: '10px', fontSize: '10px' }}>
                         <a href="https://github.com/Albonire/BDI-GB-ZOO" target="_blank" style={{ marginRight: '10px' }}>[ SOURCE ]</a>
                         <a href="https://bdi-gb-zoo.vercel.app/" target="_blank">[ DEMO ]</a>
                    </div>
                </div>

                 {/* Project 3 */}
                 <div style={{ border: '1px dotted var(--term-ink)', padding: '15px' }} className="glitch-hover">
                    <h3 style={{ borderBottom: '2px solid var(--term-ink)', display: 'inline-block' }}>IA Humanizer</h3>
                    <div style={{ margin: '10px 0', fontSize: '11px', fontWeight: 'bold' }}>
                        [ AI ] &lt;---&gt; [ TEXT ]
                    </div>
                    <p>AI text humanizer and rewriting orchestrator.</p>
                    <p style={{ fontSize: '0.8em', textTransform: 'uppercase', marginTop: '5px' }}>
                        Stack: React | TS | OpenAI
                    </p>
                    <div style={{ marginTop: '10px', fontSize: '10px' }}>
                        <a href="https://github.com/Albonire/ia-humanizer" target="_blank" style={{ marginRight: '10px' }}>[ SOURCE ]</a>
                        <a href="https://ia-humanizer-neon.vercel.app/" target="_blank">[ DEMO ]</a>
                    </div>
                </div>

                {/* Project 4 */}
                <div style={{ border: '1px dotted var(--term-ink)', padding: '15px' }} className="glitch-hover">
                    <h3 style={{ borderBottom: '2px solid var(--term-ink)', display: 'inline-block' }}>Cupido App</h3>
                    <div style={{ margin: '10px 0', fontSize: '11px', fontWeight: 'bold' }}>
                        [ SOCIAL ] &lt;===&gt; [ DATING ]
                    </div>
                    <p>Full-stack dating application for university students.</p>
                    <p style={{ fontSize: '0.8em', textTransform: 'uppercase', marginTop: '5px' }}>
                        Stack: React | Django | DRF
                    </p>
                    <div style={{ marginTop: '10px', fontSize: '10px' }}>
                        <a href="https://github.com/cupidoUP-App" target="_blank" style={{ marginRight: '10px' }}>[ SOURCE ]</a>
                        <a href="https://cupido-sandy.vercel.app/" target="_blank">[ DEMO ]</a>
                    </div>
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
