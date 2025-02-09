import React, { useState, useEffect } from "react";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <div className="absolute w-full h-full flex items-center justify-center">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          key={isMobile ? 'mobile' : 'desktop'} // Force video reload when source changes
        >
          <source 
            src={isMobile ? "bg-animation-vertical.mp4" : "bg-animation.mp4"} 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Home;