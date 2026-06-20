import React, { useState } from 'react';

export default function Header({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className="fixed top-0 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] max-w-[1200px] z-50 rounded-b-[24px] md:rounded-b-[32px] transition-all duration-300 py-3.5 shadow-lg border-x border-b border-white/20 overflow-hidden" 
      style={{
        backgroundImage: "linear-gradient(rgba(24, 26, 27, 0.5), rgba(24, 26, 27, 0.5)), url('/header_bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 48%',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="px-6 md:px-10 w-full mx-auto relative z-10">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span 
              className="material-symbols-outlined text-2xl text-cyan-400 animate-pulse"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
            <span className="font-display-lg text-lg md:text-xl font-bold tracking-tight lowercase text-white">
              robotix lab
            </span>
          </div>

          {/* Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <a className="font-body-md text-xs font-bold transition-all uppercase tracking-widest text-white/80 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" href="#about">
              about
            </a>
            <a className="font-body-md text-xs font-bold transition-all uppercase tracking-widest text-white/80 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" href="#impact">
              impact
            </a>
            <a className="font-body-md text-xs font-bold transition-all uppercase tracking-widest text-white/80 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" href="#faq">
              faq
            </a>
          </div>

          {/* Right Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={onOpenModal}
              className="font-body-md text-xs font-bold uppercase tracking-widest border-b pb-0.5 flex items-center gap-2 text-white border-white/60 hover:text-cyan-400 hover:border-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all bg-transparent cursor-pointer"
            >
              enroll now <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div 
          className="md:hidden w-full p-6 flex flex-col gap-6 mt-3 border-t border-white/10 rounded-b-[24px] animate-fade-in"
          style={{
            backgroundImage: "linear-gradient(rgba(24, 26, 27, 0.85), rgba(24, 26, 27, 0.85)), url('/header_bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 48%',
          }}
        >
          <div className="flex flex-col gap-4 text-left">
            <a 
              className="font-body-md text-sm font-bold transition-all uppercase tracking-widest text-white/80 hover:text-cyan-400 py-2 border-b border-white/5" 
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              about
            </a>
            <a 
              className="font-body-md text-sm font-bold transition-all uppercase tracking-widest text-white/80 hover:text-cyan-400 py-2 border-b border-white/5" 
              href="#impact"
              onClick={() => setIsOpen(false)}
            >
              impact
            </a>

            <a 
              className="font-body-md text-sm font-bold transition-all uppercase tracking-widest text-white/80 hover:text-cyan-400 py-2 border-b border-white/5" 
              href="#faq"
              onClick={() => setIsOpen(false)}
            >
              faq
            </a>
            <button 
              onClick={() => {
                setIsOpen(false);
                onOpenModal();
              }}
              className="w-full text-left font-body-md text-sm font-bold uppercase tracking-widest border-b pb-1 flex items-center gap-2 text-white border-white/40 hover:text-cyan-400 hover:border-cyan-400 transition-all bg-transparent py-2"
            >
              enroll now <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
