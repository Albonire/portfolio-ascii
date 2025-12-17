import React, { useEffect, useRef } from 'react';
import styles from './AsciiHero.module.css';

const AsciiHero = () => {
    const preRef = useRef(null);
    const frameIdRef = useRef(null);

    useEffect(() => {
        let A = 0;
        let B = 0;
        
        const renderAsciiAnimation = () => {
            const preTag = preRef.current;
            if (!preTag) return;

            let b = [];
            let z = [];
            
            // Adjust resolution
            let width = window.innerWidth < 500 ? 40 : 60; 
            let height = window.innerWidth < 500 ? 20 : 25;
            
            for(let k = 0; k < width * height; k++) {
                b[k] = " ";
                z[k] = 0;
            }

            // Torus Rendering Logic
            for(let j=0; j < 6.28; j += 0.07) {
                for(let i=0; i < 6.28; i += 0.02) {
                    let c = Math.sin(i);
                    let d = Math.cos(j);
                    let e = Math.sin(A);
                    let f = Math.sin(j);
                    let g = Math.cos(A);
                    let h = d + 2;
                    let D = 1 / (c * h * e + f * g + 5);
                    let l = Math.cos(i);
                    let m = Math.cos(B);
                    let n = Math.sin(B);
                    let t = c * h * g - f * e;
                    
                    let scaleX = width / 2.5; 
                    let scaleY = height / 2;
                    
                    let x = 0 | (width/2 + scaleX * D * (l * h * m - t * n));
                    let y = 0 | (height/2 + scaleY * D * (l * h * n + t * m));
                    let o = x + width * y;
                    
                    let N = 0 | (8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));
                    
                    if(y < height && y >= 0 && x >= 0 && x < width && D > z[o]) {
                        z[o] = D;
                        b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
                    }
                }
            }

            let output = "";
            for(let i = 0; i < width * height; i++) {
                output += (i % width) ? b[i] : "\n";
            }
            
            preTag.innerText = output;

            A += 0.04;
            B += 0.02;
            frameIdRef.current = requestAnimationFrame(renderAsciiAnimation);
        };

        renderAsciiAnimation();

        return () => {
            if (frameIdRef.current) {
                cancelAnimationFrame(frameIdRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.heroContainer}>
            <pre 
                ref={preRef} 
                className={styles.asciiPre}
            ></pre>
        </div>
    );
};

export default AsciiHero;
