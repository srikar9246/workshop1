import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#EDEEF5] w-full py-16 border-t border-outline-variant mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-gutter">
        
        {/* Brand Group */}
        <div className="flex items-center gap-2 mb-6 md:mb-0">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center opacity-80 mix-blend-multiply">
            <span 
              className="material-symbols-outlined text-on-surface" 
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
          </div>
          <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
            Robotix Lab<br />
          </span>
        </div>



        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6">
          <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:underline transition-opacity duration-200" href="#">
            Privacy Policy
          </a>
          <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:underline transition-opacity duration-200" href="#">
            Terms of Service
          </a>
          <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:underline transition-opacity duration-200" href="#">
            Cookie Policy
          </a>
        </div>

      </div>
    </footer>
  );
}
