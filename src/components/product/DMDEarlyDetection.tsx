import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Activity, Heart, Shield } from 'lucide-react';

const DMDEarlyDetection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="glassmorphism p-8 rounded-2xl max-w-4xl mx-auto"
    >
      <h3 className="text-2xl font-bold mb-6 text-center heading-gradient">Why Early Detection of DMD Matters</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        {/* Late Detection Circle */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64">
            {/* Outer ring with gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-red-300/30 via-blue-500/60 to-blue-700/80"></div>
            
            {/* Inner white circle */}
            <div className="absolute inset-4 rounded-full bg-sci-black/80 flex items-center justify-center">
              <div className="text-center">
                <p className="font-semibold text-white text-lg">Late detection</p>
                <p className="text-gray-400 text-lg">aftermath</p>
              </div>
            </div>
            
            {/* Icon points around the circle */}
            <div className="absolute flex items-center justify-center w-full h-full">
              {/* Shortened lifespan - Top */}
              <div className="absolute -top-6 text-center">
                <div className="text-pink-500 font-medium">Shortened<br/>lifespan</div>
                <div className="w-6 h-6 mx-auto mt-1">
                  <Heart size={22} className="text-pink-500" />
                </div>
              </div>
              
              {/* Late diagnosis - Right */}
              <div className="absolute -right-20 text-center">
                <div className="text-pink-500 font-medium">Late<br/>diagnosis</div>
                <div className="w-6 h-6 mx-auto mt-1">
                  <Clock size={22} className="text-pink-500" />
                </div>
              </div>
              
              {/* Limited treatment - Bottom right */}
              <div className="absolute -bottom-2 right-4 text-center">
                <div className="text-pink-500 font-medium">Limited<br/>treatment</div>
                <div className="w-6 h-6 mx-auto mt-1">
                  <Shield size={22} className="text-pink-500" />
                </div>
              </div>
              
              {/* Faster disease progression - Bottom left */}
              <div className="absolute -bottom-12 text-center">
                <div className="text-pink-500 font-medium">Faster disease<br/>progression</div>
                <div className="w-6 h-6 mx-auto mt-1">
                  <Activity size={22} className="text-pink-500" />
                </div>
              </div>
              
              {/* Reduced mobility - Left */}
              <div className="absolute -left-20 text-center">
                <div className="text-pink-500 font-medium">Reduced<br/>mobility</div>
                <div className="w-6 h-6 mx-auto mt-1">
                  <Activity size={22} className="text-pink-500" fill="none" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Early Detection Circle */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64">
            {/* Outer ring with gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-green-300/30 via-blue-500/60 to-blue-700/80"></div>
            
            {/* Inner white circle */}
            <div className="absolute inset-4 rounded-full bg-sci-black/80 flex items-center justify-center">
              <div className="text-center">
                <p className="font-semibold text-white text-lg">Early detection</p>
                <p className="text-gray-400 text-lg">results</p>
              </div>
            </div>
            
            {/* Icon points around the circle */}
            <div className="absolute flex items-center justify-center w-full h-full">
              {/* Improved quality of life - Top */}
              <div className="absolute -top-6 text-center">
                <div className="text-teal-400 font-medium">Improved quality<br/>of life</div>
                <div className="w-6 h-6 mx-auto mt-1">
                  <Heart size={22} className="text-teal-400" fill="currentColor" />
                </div>
              </div>
              
              {/* Early diagnosis - Right */}
              <div className="absolute -right-20 text-center">
                <div className="text-teal-400 font-medium">Early<br/>diagnosis</div>
                <div className="w-6 h-6 mx-auto mt-1">
                  <Clock size={22} className="text-teal-400" />
                </div>
              </div>
              
              {/* Timely intervention - Bottom right */}
              <div className="absolute -bottom-2 right-4 text-center">
                <div className="text-teal-400 font-medium">Timely<br/>intervention</div>
                <div className="w-6 h-6 mx-auto mt-1">
                  <Shield size={22} className="text-teal-400" fill="currentColor" />
                </div>
              </div>
              
              {/* Slower disease progression - Bottom */}
              <div className="absolute -bottom-12 text-center">
                <div className="text-teal-400 font-medium">Slower disease<br/>progression</div>
                <div className="w-6 h-6 mx-auto mt-1">
                  <Activity size={22} className="text-teal-400" />
                </div>
              </div>
              
              {/* Preserved mobility - Left */}
              <div className="absolute -left-20 text-center">
                <div className="text-teal-400 font-medium">Preserved<br/>mobility</div>
                <div className="w-6 h-6 mx-auto mt-1">
                  <Activity size={22} className="text-teal-400" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 bg-sci-black/30 p-6 rounded-xl">
        <h4 className="text-xl font-semibold mb-4 text-white">Impact of Early Detection</h4>
        <p className="text-gray-300 mb-4">
          Duchenne Muscular Dystrophy (DMD) is a progressive genetic disorder that causes muscle degeneration and weakness. 
          Early detection is critical because intervention at the earliest stages can significantly alter the disease course.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-sci-black/40 p-4 rounded-lg">
            <h5 className="text-sci-blue font-medium mb-2">Medical Impact</h5>
            <ul className="text-gray-300 space-y-2 pl-4">
              <li>Allows for earlier steroid treatment initiation</li>
              <li>Enables physical therapy before significant muscle loss</li>
              <li>Opportunity for emerging gene therapies</li>
              <li>Regular cardiac and respiratory monitoring</li>
            </ul>
          </div>
          <div className="bg-sci-black/40 p-4 rounded-lg">
            <h5 className="text-sci-teal font-medium mb-2">Quality of Life Impact</h5>
            <ul className="text-gray-300 space-y-2 pl-4">
              <li>Extended ambulatory period</li>
              <li>Reduced rate of scoliosis development</li>
              <li>Delayed respiratory complications</li>
              <li>Better preparation for educational and social adaptations</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DMDEarlyDetection;