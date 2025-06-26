import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, GlobeIcon, FileCheck, Target, ArrowRight, AlertTriangle, DollarSign, Users } from 'lucide-react';

const ProductFeatures: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="glassmorphism rounded-2xl overflow-hidden h-full"
    >
      <div className="h-64 bg-gradient-to-r from-sci-blue/20 to-sci-teal/20 relative">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="relative w-full h-full flex items-center justify-center">
          {/* MRI Image with overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/src/assets/muscle_mri.jpg" 
              alt="Muscle MRI scan" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sci-blue/40 to-sci-teal/40"></div>
          </div>
          
          {/* Simple text overlay */}
          <div className="z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">DMD Diagnosis</h2>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-white">Problems with Current Diagnostics and How We Fix Them</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Current approaches column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-2">Current Approaches</h4>
            
            <div className="bg-blue-200/20 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 text-blue-400">
                    <AlertTriangle size={18} />
                  </div>
                  <span className="text-white font-medium">6-Minute Walking Test</span>
                </div>
                <div className="text-red-400 flex items-center text-sm">
                  Low Accuracy <ArrowRight size={14} className="ml-1" />
                </div>
              </div>
            </div>
            
            <div className="bg-blue-200/20 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 text-blue-400">
                    <DollarSign size={18} />
                  </div>
                  <span className="text-white font-medium">Genetic Testing</span>
                </div>
                <div className="text-red-400 flex items-center text-sm">
                  High Cost & Waiting <ArrowRight size={14} className="ml-1" />
                </div>
              </div>
            </div>
            
            <div className="bg-blue-200/20 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 text-blue-400">
                    <AlertTriangle size={18} />
                  </div>
                  <span className="text-white font-medium">Biopsy</span>
                </div>
                <div className="text-red-400 flex items-center text-sm">
                  Invasive & High Cost <ArrowRight size={14} className="ml-1" />
                </div>
              </div>
            </div>
            
            <div className="bg-blue-200/20 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 text-blue-400">
                    <Clock size={18} />
                  </div>
                  <span className="text-white font-medium">Conventional MRI</span>
                </div>
                <div className="text-red-400 flex items-center text-sm">
                  Long Waiting Time <ArrowRight size={14} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Our solution column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">AI-Enhanced Low-Field MRI Solution</h4>
            <ul className="space-y-3 bg-sci-black/30 p-4 rounded-lg">
              <li className="flex items-center">
                <div className="mr-3 text-sci-teal">
                  <DollarSign size={18} />
                </div>
                <span className="text-gray-200">Highly cost-effective</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-sci-teal">
                  <Target size={18} />
                </div>
                <span className="text-gray-200">Detailed tissue analysis</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-sci-teal">
                  <Clock size={18} />
                </div>
                <span className="text-gray-200">Fastened by AI & efficient processing</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-sci-teal">
                  <GlobeIcon size={18} />
                </div>
                <span className="text-gray-200">High availability in remote areas</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-sci-teal">
                  <Shield size={18} />
                </div>
                <span className="text-gray-200">Non-invasive diagnostics</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-sci-teal">
                  <FileCheck size={18} />
                </div>
                <span className="text-gray-200">Allows for disease tracking</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-sci-teal">
                  <Users size={18} />
                </div>
                <span className="text-gray-200">Alleviates burden on radiologists</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-sci-teal">
                  <Target size={18} />
                </div>
                <span className="text-gray-200">Supports early intervention</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-400 italic">
          AI-enhanced low-field MRI analysis transforms DMD diagnostics,
          making detection earlier, faster, and more accessible.
        </div>
      </div>
    </motion.div>
  );
};

export default ProductFeatures;