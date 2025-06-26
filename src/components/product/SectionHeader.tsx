
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-gradient inline-block">
        {title}
      </h2>
      <div className="w-24 h-1 bg-sci-gradient mx-auto mb-6"></div>
      <p className="text-gray-300 max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
