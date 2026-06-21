import React, { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.error("Video playback failed:", err);
        });
      }
    }
  };

  // Sync state with actual video status (in case of autoplay blocking, low power mode, or manual pauses)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Initial check (in case browser blocks autoplay)
    setIsPlaying(!video.paused);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <header className="relative min-h-[60vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#EDEEF5]">
      {/* Immersive Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
          loop 
          muted 
          playsInline
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#EDEEF5] via-transparent to-[#EDEEF5]/50"></div>
      </div>
      
      <div className="max-w-[1600px] w-full mx-auto px-margin-mobile md:px-margin-desktop relative z-10 h-full flex flex-col justify-center items-center text-center">
        <div className="flex flex-col gap-6 max-w-3xl items-center">
          {/* Inspirational Quote */}
          <div className="relative px-8 py-6">
            {/* Decorative quote mark */}
            <span 
              className="absolute -top-4 -left-2 text-[120px] leading-none text-primary/10 font-serif pointer-events-none select-none"
              aria-hidden="true"
            >
              "
            </span>

            <blockquote className="relative z-10">
              <p className="font-headline-lg text-[28px] md:text-[40px] leading-[1.3] tracking-[-0.02em] text-on-surface/90 italic font-light">
                The best way to predict the future is to <span className="text-primary font-medium not-italic">invent</span> it.
              </p>
              <footer className="mt-4 flex items-center justify-center gap-2">
                <span className="w-8 h-[2px] bg-primary/40 rounded-full"></span>
                <cite className="font-body-md text-body-md text-on-surface-variant not-italic tracking-wide">
                  Alan Kay, Computer Scientist
                </cite>
                <span className="w-8 h-[2px] bg-primary/40 rounded-full"></span>
              </footer>
            </blockquote>
          </div>

          {/* Video Control Button for Mobile */}
          <div className="md:hidden mt-6 flex justify-center z-20">
            <button
              onClick={toggleVideo}
              className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-primary/20 bg-white/70 hover:bg-white/85 backdrop-blur-md text-[#171d10] font-headline-md font-bold text-xs uppercase tracking-wider shadow-[0_4px_25px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer active:scale-95 hover:shadow-[0_0_15px_rgba(159,255,0,0.3)]"
            >
              <span className="material-symbols-outlined text-lg text-primary select-none">
                {isPlaying ? 'pause_circle' : 'play_circle'}
              </span>
              <span>{isPlaying ? 'Pause Background Video' : 'Play Background Video'}</span>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}

