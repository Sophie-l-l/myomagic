import React from 'react';
import { motion } from 'framer-motion';

const MarketOpportunity: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="glassmorphism rounded-2xl p-8 flex flex-col"
    >
      <h3 className="text-2xl font-bold mb-4 text-white">Market Statistics</h3>
      
      <div className="bg-sci-black/40 rounded-xl p-6 mb-6">
        <h4 className="text-xl font-semibold mb-3 text-sci-blue">
          Global Market Growth
        </h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sci-blue/20 flex items-center justify-center mr-3 mt-1 text-xs">1</span>
            <span className="text-gray-300">
              Global DMD market across 7MM expected to grow from <strong className="text-white">$2.3 billion (2023)</strong> to <strong className="text-white">$5.2 billion (2033)</strong>
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sci-blue/20 flex items-center justify-center mr-3 mt-1 text-xs">2</span>
            <span className="text-gray-300">
              U.S. market dominance with <strong className="text-white">84.8%</strong> of global market share
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sci-blue/20 flex items-center justify-center mr-3 mt-1 text-xs">3</span>
            <span className="text-gray-300">
              Gene therapies projected to contribute <strong className="text-white">$821 million</strong> by 2033
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sci-blue/20 flex items-center justify-center mr-3 mt-1 text-xs">4</span>
            <span className="text-gray-300">
              Exon-skipping therapies forecasted to grow from <strong className="text-white">$1.0B (2023)</strong> to <strong className="text-white">$1.8B (2033)</strong>
            </span>
          </li>
        </ul>
      </div>
      
      <div className="bg-sci-black/40 rounded-xl p-6 mb-6">
        <h4 className="text-xl font-semibold mb-3 text-sci-teal">
          UAE Market Potential
        </h4>
        <p className="text-gray-300">
          UAE DMD drugs market valued at <strong className="text-white">$5.5 million (2022)</strong>, projected to reach <strong className="text-white">$98.9 million by 2030</strong>
        </p>
      </div>
      
      <div className="bg-sci-black/40 rounded-xl p-6">
        <h4 className="text-xl font-semibold mb-3 text-sci-purple">
          U.S. Prevalence Stats
        </h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sci-purple/20 flex items-center justify-center mr-3 mt-1 text-xs">1</span>
            <span className="text-gray-300">
              DMD prevalence: <strong className="text-white">1.7 to 4.2 per 100,000</strong> population
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sci-purple/20 flex items-center justify-center mr-3 mt-1 text-xs">2</span>
            <span className="text-gray-300">
              Birth prevalence: <strong className="text-white">~19.8 per 100,000</strong> live male births
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sci-purple/20 flex items-center justify-center mr-3 mt-1 text-xs">3</span>
            <span className="text-gray-300">
              Diagnosed incidence (2019): <strong className="text-white">17.24 per 100,000</strong> live male births
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sci-purple/20 flex items-center justify-center mr-3 mt-1 text-xs">4</span>
            <span className="text-gray-300">
              Total diagnosed cases (2019): <strong className="text-white">~10,015</strong> in the U.S.
            </span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default MarketOpportunity;