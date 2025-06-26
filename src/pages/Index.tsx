
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import TechnologySection from '@/components/TechnologySection';
import ProductSection from '@/components/ProductSection';
import AboutSection from '@/components/AboutSection';
import JoinUsSection from '@/components/JoinUsSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { motion, useAnimation } from 'framer-motion';

const Index: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="relative min-h-screen bg-sci-black text-white overflow-x-hidden"
    >
      <ParticleBackground />
      <NavBar />
      <HeroSection />
      <TechnologySection />
      <ProductSection />
      <AboutSection />
      <JoinUsSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
