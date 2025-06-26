import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, LineChart } from 'lucide-react';

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const TechCard: React.FC<TechCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="sci-card hover:bg-sci-gray/20 hover:-translate-y-1 cursor-pointer group"
    >
      <div className="mb-4 text-sci-blue group-hover:text-sci-teal transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const TechnologySection: React.FC = () => {
  const technologies = [
    {
      icon: <Brain size={40} />,
      title: "Transformer-Based Models",
      description: "Our advanced neural networks capture global image features and generate explainable attention maps for diagnostic confidence.",
      delay: 0
    },
    {
      icon: <LineChart size={40} />,
      title: "Automated Metrics Extraction",
      description: "Precise measurement of muscle volume, fat fraction, and T2 relaxation times for comprehensive analysis.",
      delay: 1
    },
    {
      icon: <Database size={40} />,
      title: "LLM-Powered Reports",
      description: "Automatic generation of structured, human-readable clinical reports bridging AI outputs with medical practice.",
      delay: 2
    }
  ];

  return (
    <section id="technology" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-gradient inline-block pb-3">
            Technology
          </h2>
          <div className="w-24 h-1 bg-sci-gradient mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Combining cutting-edge AI with accessible medical imaging to revolutionize DMD diagnostics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
              delay={tech.delay}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 glassmorphism p-8 rounded-2xl grid-bg relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sci-purple/20 to-sci-blue/20 opacity-40"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">How It Works</h3>
            <p className="text-gray-300 mb-6">
              MyoMetricsMRI transforms MRI data into high-value clinical insights through our 
              proprietary pipeline:
            </p>
            <ol className="space-y-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sci-blue flex items-center justify-center mr-4">1</span>
                <div>
                  <h4 className="font-semibold text-white">Data Acquisition</h4>
                  <p className="text-gray-400">MRI scanning optimized for neurological and muscular tissue analysis.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sci-blue flex items-center justify-center mr-4">2</span>
                <div>
                  <h4 className="font-semibold text-white">Image Processing</h4>
                  <p className="text-gray-400">Transformer models analyze scans to identify subtle patterns undetectable by conventional methods.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sci-blue flex items-center justify-center mr-4">3</span>
                <div>
                  <h4 className="font-semibold text-white">Metrics Extraction</h4>
                  <p className="text-gray-400">Automated measurement of key biomarkers including muscle volume and fat infiltration.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sci-blue flex items-center justify-center mr-4">4</span>
                <div>
                  <h4 className="font-semibold text-white">AI Interpretation</h4>
                  <p className="text-gray-400">LLMs generate comprehensive reports translating complex data into actionable clinical information.</p>
                </div>
              </li>
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;