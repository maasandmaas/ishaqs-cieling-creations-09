
import { CheckCircle, Users, Package, FileText, Shield, HandHeart } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation & Design",
    description: "We begin with a thorough consultation to understand your vision, preferences, and requirements. Our design team creates a ceiling concept that aligns perfectly with your aesthetic and functional needs.",
    icon: <Users className="w-8 h-8" />
  },
  {
    number: "02",
    title: "Material Selection",
    description: "Once the design is approved, we help you select the best materials for your ceiling, considering factors such as durability, aesthetics, maintenance, and budget to ensure optimal results.",
    icon: <Package className="w-8 h-8" />
  },
  {
    number: "03",
    title: "Detailed Quotation",
    description: "We provide a comprehensive quotation detailing all costs, materials, and timelines. Our transparent pricing ensures there are no surprises along the way.",
    icon: <FileText className="w-8 h-8" />
  },
  {
    number: "04",
    title: "Professional Installation",
    description: "Our skilled team executes the installation with precision and attention to detail. We ensure minimal disruption to your daily activities while maintaining a clean work environment.",
    icon: <CheckCircle className="w-8 h-8" />
  },
  {
    number: "05",
    title: "Quality Inspection",
    description: "Upon completion, we conduct a thorough quality inspection to ensure that every aspect of the installation meets our high standards and exceeds your expectations.",
    icon: <Shield className="w-8 h-8" />
  },
  {
    number: "06",
    title: "Final Handover & Support",
    description: "We invite you to inspect the completed project and provide feedback. We also offer maintenance guidance and remain available for any future support you may need.",
    icon: <HandHeart className="w-8 h-8" />
  }
];

const ProcessStep = ({ number, title, description, icon, index }: ProcessStepProps) => {
  return (
    <div className="group relative bg-midnight/50 border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 hover-scale reveal">
      {/* Number badge */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gold to-gold/80 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-midnight font-bold text-sm">{number}</span>
      </div>
      
      {/* Icon */}
      <div className="text-gold mb-4 group-hover:text-gold/80 transition-colors duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-playfair font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

const ProcessTimeline = () => {
  return (
    <section className="py-16 md:py-24 bg-midnight-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal">
          <h6 className="text-gold mb-4 font-montserrat uppercase tracking-wider">Our Approach</h6>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Our Service Process
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We follow a structured approach to ensure the successful execution of every project, delivering excellence at every step.
          </p>
        </div>

        {/* Process steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal">
          <p className="text-gray-300 mb-6">Ready to start your ceiling transformation?</p>
          <button className="bg-gradient-to-r from-gold to-gold/80 text-midnight px-8 py-3 rounded-lg font-semibold hover:from-gold/90 hover:to-gold/70 transition-all duration-300 hover-scale">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
