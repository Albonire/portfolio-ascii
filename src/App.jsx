import React, { useState, useEffect, useRef } from 'react';
import AsciiHero from './components/ascii/AsciiHero';
import AsciiPanel from './components/ui/AsciiPanel';
import InteractiveTerminal from './components/ui/InteractiveTerminal';
import AsciiNavbar from './components/ui/AsciiNavbar';
import SystemFooter from './components/ui/SystemFooter';
import ProjectCard from './components/ui/ProjectCard';
import ClickSpark from './components/ui/ClickSpark';
import SectionDivider from './components/ui/SectionDivider';

function App() {
  const [theme, setTheme] = useState('blueprint');
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  const navigateTheme = () => {
      const themes = ['blueprint', 'concrete', 'amber', 'cyber'];
      const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
      setTheme(themes[nextIndex]);
  };
  

  return (
    <div 
        ref={containerRef}
        className="crt" 
        onMouseMove={handleMouseMove}
        style={{ 
            maxWidth: '1024px', 
            margin: '0 auto', 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column',
            position: 'relative' // Needed for relative interference
        }}
    >
      <div className="crt-interference" />
      <ClickSpark />
      
      {/* Navbar now includes Theme Switcher logic if we pass it down, 
          OR we treat Navbar as a layout container. 
          Let's pass the theme controls to Navbar for integration. */}
      <AsciiNavbar currentTheme={theme} toggleTheme={navigateTheme} />

      {/* HEADER SECTION */}
      <header id="main" style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '80px' }}>
        
        {/* Flex Container for ASCII + Profile */}
        <div className="header-flex" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '30px', 
            marginBottom: '20px',
            flexWrap: 'wrap' 
        }}>
            {/* 3D ASCII Object */}
            <div>
                <AsciiHero />
            </div>

            {/* Profile Picture */}
            <div style={{ 
                width: '180px', 
                height: '180px', 
                border: '2px dashed var(--term-ink)',
                padding: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img 
                    src="https://github.com/Albonire.png" 
                    alt="Profile" 
                    className="retro-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
        </div>

        {/* Pixel Art Title */}
        <h1 style={{ 
            fontFamily: '"Press Start 2P", cursive',
            fontSize: 'clamp(3rem, 5vw, 6rem)', /* Responsive size */
            lineHeight: '1',
            margin: '20px 0',
            color: 'var(--term-ink)',
            textShadow: '4px 4px 0px var(--term-dim)'
        }}>
            HELLO
        </h1>

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
      <SectionDivider title="PROFILE_DATA" theme={theme} />
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
      <SectionDivider title="EDUCATION_LOG" theme={theme} />
      <div style={{ marginTop: '0px' }}>
          <AsciiPanel title="03_EDUCATION.log">
              <pre style={{ fontSize: '12px', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>
{`./EDUCATION/
├── 2020-PRESENT: Systems Engineering
│   ├── Universidad de Cartagena
│   └── Notes: Software Dev, Algorithms
│
├── 2024: Programming Bootcamp
│   ├── Sergio Arboleda University
│   └── Notes: TS, React, Node.js, Next.js
│
├── 2024: AI & Big Data Certification
│   ├── Ministry of ICT + BogoData
│   └── Notes: Python, Data Analysis
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
      <SectionDivider title="PROJECT_FILES" theme={theme} />
      <div style={{ marginTop: '0px' }} id="projects">
        <AsciiPanel title="04_PROJECTS.dir">
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                
                <ProjectCard 
                    title="Task Manager"
                    type="[WEB] <=======> [POMODORO]"
                    desc="Task management platform with Pomodoro integration and auth."
                    stack="Django | JS | SQLite3"
                    image="/thumbnails/home_screencast_thumb.jpg"
                    video="/videos/home_screencast.mp4"
                    link="https://github.com/Albonire/To-DoList1.0"
                />

                <ProjectCard
                    title="BDI-GB-ZOO"
                    type="[ API ] <~~> [ ZOO MGMT ]"
                    desc="Zoo management system for animals, habitats, and caretakers."
                    stack="FastAPI | Postgres | Docker"
                    image="/thumbnails/bdi_screencast_thumb.jpg"
                    video="/videos/bdi_screencast.mp4"
                    link="https://github.com/Albonire/BDI-GB-ZOO"
                    demo="https://bdi-gb-zoo.vercel.app/"
                />

                <ProjectCard
                    title="IA Humanizer"
                    type="[ AI ] <---> [ TEXT ]"
                    desc="AI text humanizer and rewriting orchestrator."
                    stack="React | TS | OpenAI"
                    image="/thumbnails/humanizer_screencast_thumb.jpg"
                    video="/videos/humanizer_screencast.mp4"
                    link="https://github.com/Albonire/ia-humanizer"
                    demo="https://ia-humanizer-neon.vercel.app/"
                />

                <ProjectCard
                    title="Cupido App"
                    type="[ SOCIAL ] <===> [ DATING ]"
                    desc="Full-stack dating application for university students."
                    stack="React | Django | DRF"
                    image="/thumbnails/cupido_screencast_thumb.jpg"
                    video="/videos/cupido_screencast.mp4"
                    link="https://github.com/cupidoUP-App"
                    demo="https://cupido-sandy.vercel.app/"
                />

                <ProjectCard
                    title="Home Button"
                    type="[ GNOME ] <===> [ LINUX ]"
                    desc="GNOME Shell extension to minimize windows and show desktop."
                    stack="JavaScript | GJS"
                    image="/thumbnails/homebutton_screencast_thumb.jpg"
                    video="/videos/homebutton_screencast.mp4"
                    link="https://github.com/Albonire/home-button"
                />

                <ProjectCard
                    title="Quantum Leap"
                    type="[ WEB ] <===> [ PORTFOLIO ]"
                    desc="High-performance web portfolio showing skills and experience."
                    stack="React | Tailwind | Shadcn"
                    image="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=400&fit=crop"
                    link="https://github.com/Albonire/quantum-leap-canvas"
                />

            </div>
        </AsciiPanel>
      </div>
      
      {/* TERMINAL */}
      <SectionDivider title="SYSTEM_END" theme={theme} />
      <InteractiveTerminal />

      {/* FOOTER */}
      <SystemFooter />

    </div>
  );
}

export default App;
