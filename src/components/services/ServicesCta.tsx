
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const ServicesCta = () => {
  return (
    <section className="py-16 md:py-24 bg-midnight-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-celestial rounded-xl p-8 md:p-12 text-center reveal fancy-border">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-gradient">
            Ready to Transform Your Ceiling?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and receive a complimentary consultation and quote. Our team is ready to help you create the perfect ceiling for your space.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              asChild 
              className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 font-montserrat"
            >
              <Link to="/contact">
                Request a Free Quote
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="border-gold hover:bg-gold/10 text-gold"
            >
              <Link to="/gallery">
                View Our Portfolio
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCta;
