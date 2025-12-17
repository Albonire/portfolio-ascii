import React, { useState, useEffect, useRef } from 'react';

const InteractiveTerminal = () => {
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to the system v2.0. Type "help" for instructions.' }
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let output = '';

        switch(cleanCmd) {
            case 'help':
                output = 'AVAILABLE COMMANDS:\n  > projects - List project directories\n  > whoami   - User identity\n  > contact  - Display coms channel\n  > clear    - Clear screen';
                break;
            case 'projects':
                output = '[ DIR ] cupidoUP_App\n[ DIR ] Azure_Sockets\n[ DIR ] Portfolio_Ascii';
                break;
            case 'whoami':
                output = 'uid=1000(visitor) gid=1000(visitor) groups=1000(visitor)';
                break;
            case 'contact':
                output = 'MAILTO: tuemail@ejemplo.com\nSTATUS: Open for opportunities.';
                break;
            case 'clear':
                setHistory([]);
                return;
            case '':
                return;
            default:
                output = `command not found: ${cleanCmd}`;
        }

        setHistory(prev => [
            ...prev, 
            { type: 'input', content: cmd },
            { type: 'output', content: output }
        ]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div style={{ 
            marginTop: '60px', 
            border: '1px solid var(--term-ink)', 
            padding: '20px', 
            maxWidth: '1000px', 
            margin: '60px auto 20px auto',
            minHeight: '250px',
            backgroundColor: 'var(--term-dim)'
        }}>
            <div style={{ borderBottom: '1px dashed var(--term-ink)', marginBottom: '10px', paddingBottom: '5px' }}>
                TERMINAL_SESSION_1
            </div>
            
            <div style={{ fontFamily: 'Fira Code', fontSize: '12px', whiteSpace: 'pre-wrap' }}>
                {history.map((line, i) => (
                    <div key={i} style={{ marginBottom: '5px', color: line.type === 'input' ? 'var(--term-ink)' : 'inherit', opacity: line.type === 'input' ? 1 : 0.8 }}>
                        {line.type === 'input' ? '> ' : ''}{line.content}
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', marginTop: '10px' }}>
                <span style={{ marginRight: '10px' }}>user@system:~$</span>
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{ 
                        background: 'transparent', 
                        border: 'none', 
                        color: 'inherit', 
                        flex: 1, 
                        outline: 'none',
                        fontFamily: 'inherit'
                    }}
                    autoFocus
                />
            </div>
            <div ref={bottomRef} />
        </div>
    );
};

export default InteractiveTerminal;
