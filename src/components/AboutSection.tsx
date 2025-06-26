
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Lightbulb, Users, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-gradient inline-block">
            About Us
          </h2>
          <div className="w-24 h-1 bg-sci-gradient mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our mission is to revolutionize neuromuscular diagnostics through 
            accessible AI-enhanced imaging technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Our Story</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                MyoMetricsMRI began with a simple observation: despite advances in medical imaging and 
                artificial intelligence, diagnosis of Duchenne Muscular Dystrophy remained reliant on 
                invasive, costly procedures.
              </p>
              <p>
                Our founding team of medical imaging specialists, AI researchers, and pediatric neurologists 
                came together with a shared vision: to create a diagnostic solution that would be 
                non-invasive, accessible, and accurate.
              </p>
              <p>
                After years of research and development, we've built a platform that leverages the 
                power of transformer-based AI models and large language models to extract meaningful 
                diagnostic information from low-field MRI scans—making early detection possible in 
                more locations and for more patients worldwide.
              </p>
              <p>
                Today, we're working to bring MyoMetricsMRI to healthcare providers globally, with a 
                special focus on underserved communities where advanced diagnostic tools have 
                traditionally been out of reach.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="sci-card">
              <Lightbulb className="h-10 w-10 text-sci-blue mb-4" />
              <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
              <p className="text-gray-400">
                A world where every child with DMD receives early diagnosis and timely intervention, 
                regardless of geography or economic status.
              </p>
            </div>
            <div className="sci-card">
              <Heart className="h-10 w-10 text-sci-teal mb-4" />
              <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
              <p className="text-gray-400">
                To transform neuromuscular diagnostics through accessible AI-enhanced imaging technology.
              </p>
            </div>
            <div className="sci-card">
              <Award className="h-10 w-10 text-sci-purple mb-4" />
              <h4 className="text-xl font-semibold mb-2">Our Values</h4>
              <p className="text-gray-400">
                Innovation, accessibility, scientific rigor, and patient-centered care drive everything we do.
              </p>
            </div>
            <div className="sci-card">
              <Users className="h-10 w-10 text-sci-blue mb-4" />
              <h4 className="text-xl font-semibold mb-2">Our Team</h4>
              <p className="text-gray-400">
                Multidisciplinary experts in AI, medical imaging, neurology, and healthcare integration.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-2xl p-8 max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-white">What Sets Us Apart</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sci-blue/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-sci-blue text-2xl font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Interpretable AI</h4>
              <p className="text-gray-400">
                Our models provide visual explanations of diagnostic decisions, building trust with healthcare providers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sci-teal/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-sci-teal text-2xl font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Comprehensive Analysis</h4>
              <p className="text-gray-400">
                Beyond binary diagnosis, we provide detailed metrics on muscle health and disease progression.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sci-purple/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-sci-purple text-2xl font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Human-Centered Design</h4>
              <p className="text-gray-400">
                Created with input from patients, families, and healthcare providers to ensure real-world utility.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
