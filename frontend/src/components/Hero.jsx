import React from 'react';

export default function Hero() {
  return (
    <header className="relative min-h-[60vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#EDEEF5]">
      {/* Immersive Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
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
        </div>

      </div>
    </header>
  );
}
