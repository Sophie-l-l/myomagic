import React from 'react';
import MriBackground from './product/MriBackground';
import SectionHeader from './product/SectionHeader';
import ProductFeatures from './product/ProductFeatures';
import MarketOpportunity from './product/MarketOpportunity';
import DMDEarlyDetection from './product/DMDEarlyDetection';

const DMDInfoSection: React.FC = () => {
  const mriImages = [
    '/lovable-uploads/d66e491f-8789-4339-8d69-cbd7596f1011.png',
    '/lovable-uploads/21a3ee77-dbe6-49dd-a26d-b6d85b47fe35.png',
    '/lovable-uploads/065a7d25-f8f0-4230-aa79-c5ff0f7a7232.png',
    '/lovable-uploads/449d8c13-bbf8-469a-bbe7-18d1a4ec80b5.png'
  ];

  return (
    <section id="dmd-info" className="py-24 relative bg-sci-gray/10">
      <MriBackground mriImages={mriImages} />
      
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={<span className="pb-3 inline-block">Understanding DMD</span>}
          description="Key information about Duchenne Muscular Dystrophy diagnosis, impact, and statistics" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ProductFeatures />
          <MarketOpportunity />
        </div>
        
        <DMDEarlyDetection />
      </div>
    </section>
  );
};

export default DMDInfoSection;