import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  // Using reliable public domain MRI scan images from the internet
  const mriImage1 = "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
  const mriImage2 = "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
  
  // Fallback images in case the internet images fail to load
  const fallbackImage1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23334155'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='24' fill='%23cbd5e1'%3EMRI Scan Image%3C/text%3E%3C/svg%3E";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <div className="scanline"></div>
        <div className="absolute inset-0 bg-gradient-radial from-sci-gray/50 to-sci-black/90"></div>
        
        {/* Background Images */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {/* MRI Scan Images - Top Left */}
          <div className="absolute -top-10 -left-20 w-96 h-96 rotate-12 blur-sm">
            <div 
              style={{ 
                backgroundImage: `url(${mriImage1}), url(${fallbackImage1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%'
              }}
              aria-label="MRI Scan background"
            ></div>
          </div>
          
          {/* MRI Scan Images - Bottom Right */}
          <div className="absolute bottom-0 right-0 w-96 h-96 rotate-[-5deg] blur-sm">
            <div 
              style={{ 
                backgroundImage: `url(${mriImage2}), url(${fallbackImage1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%'
              }}
              aria-label="MRI Scan background"
            ></div>
          </div>
          
          {/* Additional MRI scan image - Center Right */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rotate-[20deg] blur-sm opacity-60 hidden md:block">
            <div 
              style={{ 
                backgroundImage: `url(${mriImage1}), url(${fallbackImage1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%'
              }}
              aria-label="MRI Scan background"
            ></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.3]">
            <span className="heading-gradient">AI-Powered</span> Early Detection for{" "}
            <span className="heading-gradient">Duchenne Muscular Dystrophy</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Non-invasive diagnostics via MRI, enhanced by 
            transformer-based AI and large language models.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-sci-blue hover:bg-sci-blue/90 text-white px-8 py-6 rounded-md text-lg">
              Learn More
            </Button>
            <Button variant="outline" className="border-sci-teal text-sci-teal hover:bg-sci-teal/10 px-8 py-6 rounded-md text-lg">
              View Technology
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10"
        >
          <a 
            href="#technology" 
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="mb-2">Scroll Down</span>
            <ChevronDown className="animate-bounce" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;