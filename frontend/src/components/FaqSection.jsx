import React, { useState } from 'react';

export default function FaqSection() {
  const faqs = [
    {
      id: 'faq-1',
      question: 'Who can participate in this workshop?',
      answer: 'The workshop is optimized for young learners aged 8 to 14. No prior programming, hardware, or robotics experience is required—we start from the absolute fundamentals and build up step-by-step.',
    },
    {
      id: 'faq-2',
      question: 'What equipment or materials do students need?',
      answer: 'All hardware kits, microcontrollers, components, sensors, and software tools are fully provided on-site. Online participants will receive a curated hardware package shipped directly to their home address before the starting date.',
    },
    {
      id: 'faq-3',
      question: 'Is there a certificate of completion?',
      answer: 'Yes! Every student receives an official Robotix Lab Certificate of Achievement, along with a digital project portfolio detailing the source code and schematics of the autonomous machines they built.',
    },
    {
      id: 'faq-4',
      question: 'Are parents allowed to observe or participate?',
      answer: 'Yes, parents and guardians are warmly welcomed to attend the Final Prototype Showcase on the last day, where students present their working robots and answer questions about their creations.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#EDEEF5] relative z-10 border-t border-[#171d10]/5">
      <div className="px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto text-left">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <span className="font-headline-md text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Got Questions?
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-background font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
            Everything you need to know about the AI & Robotics Summer Workshop.
          </p>
        </div>

        {/* FAQ Accordions Grid */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={faq.id}
                className="glass-card border border-white/50 rounded-[20px] overflow-hidden transition-all duration-300 shadow-sm"
                style={{
                  background: isOpen ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.55)',
                  boxShadow: isOpen ? '0 10px 30px -10px rgba(63, 105, 0, 0.15)' : 'none'
                }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer outline-none select-none focus:outline-none"
                >
                  <span className="font-headline-lg text-base md:text-lg font-bold text-on-background pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Glowing Arrow Indicator */}
                  <span 
                    className={`material-symbols-outlined text-primary text-2xl transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : 'text-on-surface-variant'
                    }`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>

                {/* Accordion Content */}
                <div 
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden'
                  }}
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8 font-body-sm text-body-sm text-on-surface-variant leading-relaxed border-t border-[#171d10]/5 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
