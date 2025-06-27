
import { Brain, BarChart3, Zap, Shield } from 'lucide-react';
import mockImg from '../assets/mock.png';

const ProductSection = () => {
  const workflowSteps = [
    {
      number: "1",
      title: "Patient Recruitment & Baseline MRI Scan",
      description: "DMD patients enrollment and initial scan analysis (baseline fat fraction)"
    },
    {
      number: "2", 
      title: "Therapy Initiation",
      description: "Treatment administration (Exon skipping, gene therapy) & early responders detection"
    },
    {
      number: "3",
      title: "Longitudinal Monitoring", 
      description: "Scan repeating (every ~ 2 months), tracking muscle-specific changes"
    },
    {
      number: "4",
      title: "Endpoint Analysis",
      description: "MRI scan comparison, Correlate MRI biomarkers with clinical outcomes & Generate trial-ready reports for regulators"
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms for precise muscle fat infiltration measurement"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Metrics",
      description: "Fat Infiltration: 35.4%, Muscle Excursion Variance: High, Overall DMD Indicator: Likely"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Processing",
      description: "4-hour turnaround vs. current 7-14 day process"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Clinical Grade",
      description: "FDA-ready platform designed for clinical trial environments"
    }
  ];

  return (
    <section id="product" className="py-20 bg-gradient-to-b from-medical-gray to-medical-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Product</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-medical-cyan to-medical-blue mb-8"></div>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              AI-driven software for analyzing and measuring muscle fat infiltration and 
              using it to diagnose and evaluate the progression of DMD. This software 
              will serve as a proof of concept.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-medical-cyan flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-medical-purple to-medical-blue rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="bg-white rounded-full w-48 h-48 relative overflow-hidden">
                {/* Mock Analysis Interface */}
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                  <img src={mockImg} className="w-full h-auto"/>
                  {/* <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-medical-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <div className="text-xs text-white space-y-1">
                      <div>Fat Infiltration: 35.4%</div>
                      <div>Muscle Excursion Variance: High</div>
                      <div>Overall DMD Indicator: Likely</div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-medical-cyan text-medical-dark px-3 py-1 rounded-full text-sm font-medium">
              AI Overlay
            </div>
          </div>
        </div>

        {/* Clinical Trial Workflow */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Clinical Trial Workflow for Novel Diagnostic Tool Approval</h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-medical-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
                
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-medical-purple to-medical-cyan transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
