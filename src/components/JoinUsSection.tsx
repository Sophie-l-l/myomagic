
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle, Send } from 'lucide-react';

const JoinUsSection: React.FC = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll be in touch with you shortly.",
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setSuccess(false);
        setFormState({
          name: '',
          email: '',
          organization: '',
          message: '',
        });
      }, 2000);
    }, 1500);
  };

  return (
    <section id="join" className="py-24 relative bg-sci-gray/10">
      <div className="absolute inset-0 z-[-1]">
        <div className="scanline"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-gradient inline-block">
            Join Us
          </h2>
          <div className="w-24 h-1 bg-sci-gradient mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Partner with us to transform DMD diagnostics and improve patient outcomes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Get Involved</h3>
            <div className="space-y-6">
              <div className="glassmorphism rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-sci-blue">Healthcare Providers</h4>
                <p className="text-gray-300 mb-4">
                  Join our clinical network to help validate MyoMetricsMRI in diverse healthcare settings. 
                  Early adopters receive priority access and specialized training.
                </p>
                <Button className="bg-sci-blue hover:bg-sci-blue/80">Learn More</Button>
              </div>
              
              <div className="glassmorphism rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-sci-teal">Research Collaboration</h4>
                <p className="text-gray-300 mb-4">
                  We actively seek partnerships with research institutions to expand our technology 
                  to related neuromuscular conditions and enhance our diagnostic models.
                </p>
                <Button className="bg-sci-teal hover:bg-sci-teal/80">Research Opportunities</Button>
              </div>
              
              <div className="glassmorphism rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-sci-purple">Investors</h4>
                <p className="text-gray-300 mb-4">
                  Investment opportunities available for those interested in supporting the next generation 
                  of AI-powered medical diagnostics with significant market potential.
                </p>
                <Button className="bg-sci-purple hover:bg-sci-purple/80">Investment Deck</Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Us</h3>
            
            <div className="glassmorphism rounded-xl p-8">
              {success ? (
                <div className="text-center py-10">
                  <CheckCircle className="h-16 w-16 text-sci-teal mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-gray-300">Thank you for reaching out. We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="bg-sci-gray/20 border-sci-gray/30 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="bg-sci-gray/20 border-sci-gray/30 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-1">
                      Organization
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formState.organization}
                      onChange={handleInputChange}
                      className="bg-sci-gray/20 border-sci-gray/30 text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      className="bg-sci-gray/20 border-sci-gray/30 text-white"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-sci-gradient hover:opacity-90"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> 
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="glassmorphism rounded-xl p-4 text-center">
                <p className="text-gray-300 text-sm">San Francisco</p>
              </div>
              <div className="glassmorphism rounded-xl p-4 text-center">
                <p className="text-gray-300 text-sm">Boston</p>
              </div>
              <div className="glassmorphism rounded-xl p-4 text-center">
                <p className="text-gray-300 text-sm">Singapore</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
