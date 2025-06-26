
import React from 'react';
import { Twitter, Linkedin, Mail, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-sci-black border-t border-sci-gray/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 heading-gradient">MyoMetricsMRI</h3>
            <p className="text-gray-400 mb-4">
              Transforming neuromuscular diagnostics through accessible AI-enhanced imaging technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-sci-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">Publications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sci-blue transition-colors">Patent Information</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-sci-gray/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MyoMetricsMRI, Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm flex items-center">
              <FileText size={16} className="mr-2" />
              Regulatory Information
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Sitemap
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
