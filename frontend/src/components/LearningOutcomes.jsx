import React from 'react';
import { FullScreenScrollFX } from './ui/full-screen-scroll-fx';

export default function LearningOutcomes() {
  const sections = [
    {
      id: 'ai',
      leftLabel: 'Intelligence',
      title: 'AI Basics',
      rightLabel: 'Machine Learning',
      background: '/outcome_ai.png',
    },
    {
      id: 'robotics',
      leftLabel: 'Engineering',
      title: 'Robotics',
      rightLabel: 'Smart Machines',
      background: '/outcome_robotics.png',
    },
    {
      id: 'problem-solving',
      leftLabel: 'Logic',
      title: 'Problem Solving',
      rightLabel: 'Algorithms',
      background: '/outcome_logic.png',
    },
    {
      id: 'projects',
      leftLabel: 'Creation',
      title: 'Mini Projects',
      rightLabel: 'Hands-On App',
      background: '/outcome_projects.png',
    },
    {
      id: 'creative',
      leftLabel: 'Innovation',
      title: 'Creative Thinking',
      rightLabel: 'Future Solutions',
      background: '/outcome_creative.png',
    },
  ];

  return (
    <section id="impact" className="relative z-10">
      <FullScreenScrollFX
        sections={sections}
        header={
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#9FFF00] mb-2 uppercase">Workshop Curriculum</span>
            <span className="text-lg md:text-2xl font-bold tracking-tight text-white uppercase">Learning Outcomes</span>
          </div>
        }
        footer={<div className="text-[11px] tracking-widest text-white/50 lowercase">robotix lab. scroll to explore.</div>}
        colors={{
          text: "#f5fce5",
          overlay: "rgba(23, 29, 16, 0.45)",
          pageBg: "#171d10",
          stageBg: "#0c1008",
        }}
        showProgress
        durations={{ change: 0.7, snap: 800 }}
      />
    </section>
  );
}
