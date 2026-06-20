import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkshopOverview from './components/WorkshopOverview';
import LearningOutcomes from './components/LearningOutcomes';
import FaqSection from './components/FaqSection';
import EnrollmentModal from './components/EnrollmentModal';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-brand-green selection:text-onyx overflow-x-hidden bg-[#EDEEF5]">
      {/* Navigation Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Header with Video Background */}
        <Hero />

        {/* Workshop Overview Section */}
        <WorkshopOverview />

        {/* Learning Outcomes Section */}
        <LearningOutcomes />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Enrollment Popup Form */}
      <EnrollmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
