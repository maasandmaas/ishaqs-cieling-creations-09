
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const ServiceHero = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-fixed opacity-10" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h6 className="text-gold mb-4 font-montserrat uppercase tracking-wider">Our Services</h6>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Comprehensive False Ceiling Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We offer a wide range of ceiling design and installation services to meet your specific needs and preferences. From simple, elegant designs to complex, multi-level creations, our team delivers excellence in every project.
          </p>
          <Button 
            asChild 
            className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 animate-glow font-montserrat"
          >
            <Link to="/contact">
              Request a Free Quote
              <ChevronRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
