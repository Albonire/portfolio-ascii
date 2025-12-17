import React, { useState, useRef } from 'react';

const ProjectCard = ({ title, type, desc, stack, image, video, link, demo }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            // Promise handling for play() to avoid race conditions
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    // Auto-play was prevented
                    console.error("Video play prevented:", error);
                });
            }
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Optional: Reset video
        }
    };

    return (
        <div 
            style={{ border: '2px dotted var(--term-ink)', padding: '15px' }} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div style={{ width: '100%', height: '150px', marginBottom: '10px', position: 'relative', overflow: 'hidden' }}>
                {/* Image (Always present, hidden when video plays to avoid flash) */}
                <img 
                    src={image} 
                    alt={title} 
                    className="retro-img" 
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        display: isHovered && video ? 'none' : 'block'
                    }} 
                />
                
                {/* Video (Only if provided) */}
                {video && (
                    <video
                        ref={videoRef}
                        src={video}
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        onError={(e) => console.error("Video Error:", e.target.error, video)}
                        className="retro-img"
                        style={{
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: isHovered ? 'block' : 'none',
                            backgroundColor: '#000' // Debug visibility
                        }}
                    />
                )}
            </div>

            <h3 style={{ borderBottom: '2px solid var(--term-ink)', display: 'inline-block' }}>{title}</h3>
            <div style={{ margin: '10px 0', fontSize: '11px', fontWeight: 'bold' }}>
                {type}
            </div>
            <p>{desc}</p>
            <p style={{ fontSize: '0.8em', textTransform: 'uppercase', marginTop: '5px' }}>
                Stack: {stack}
            </p>
            <div style={{ marginTop: '10px', fontSize: '10px' }}>
                <a href={link} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>[ SOURCE ]</a>
                {demo && (
                    <a href={demo} target="_blank" rel="noopener noreferrer">[ DEMO ]</a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
