import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import WorkflowBuilder from './components/WorkflowBuilder';
import RoiCalculator from './components/RoiCalculator';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="bg-grid-pattern" style={{ minHeight: '100vh', background: 'var(--color-background)' }}>
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />
      <main>
        <HeroSection onOpenDemo={() => setIsDemoModalOpen(true)} />
        <FeaturesSection />
        <WorkflowBuilder />
        <RoiCalculator />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}

export default App;
