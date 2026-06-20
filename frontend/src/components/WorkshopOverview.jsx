import React from 'react';

export default function WorkshopOverview() {
  const items = [
    {
      id: 'age',
      label: 'Age',
      value: '8-14 Years',
      icon: 'face',
      classes: 'glass-card rounded-[24px] p-8 flex flex-col items-center text-center stacked-carousel-item relative overflow-hidden group in-view',
    },
    {
      id: 'duration',
      label: 'Duration',
      value: '4 Weeks',
      icon: 'schedule',
      classes: 'glass-card rounded-[24px] p-8 flex flex-col items-center text-center stacked-carousel-item relative overflow-hidden group mt-0 md:mt-8 in-view',
    },
    {
      id: 'mode',
      label: 'Mode',
      value: 'Online',
      icon: 'devices',
      classes: 'glass-card rounded-[24px] p-8 flex flex-col items-center text-center stacked-carousel-item relative overflow-hidden group mt-0 md:mt-16 border-primary/30 shadow-[0_0_30px_rgba(159,255,0,0.1)] in-view',
      isBold: true,
    },
    {
      id: 'fee',
      label: 'Fee',
      value: '₹2,999',
      icon: 'payments',
      classes: 'glass-card rounded-[24px] p-8 flex flex-col items-center text-center stacked-carousel-item relative overflow-hidden group mt-0 md:mt-8 in-view',
    },
    {
      id: 'starts',
      label: 'Starts',
      value: '15 July 2026',
      icon: 'event',
      classes: 'glass-card rounded-[24px] p-8 flex flex-col items-center text-center stacked-carousel-item relative overflow-hidden group in-view',
    },
  ];

  return (
    <section id="about" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10 bg-[#EDEEF5]">
      <div className="text-center mb-16">
        <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">Workshop Overview</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Everything you need to know about the program structure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {items.map((item) => (
          <div key={item.id} className={item.classes}>
            {/* Hover Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <span 
              className="material-symbols-outlined text-4xl text-primary mb-4" 
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {item.icon}
            </span>
            
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{item.label}</h3>
            
            <p className={`font-body-lg text-body-lg text-on-surface-variant ${item.isBold ? 'font-bold' : ''}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
