
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  index: number;
}

const ServiceCard = ({ title, description, features, image, index }: ServiceCardProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
      <div className={`${index % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}>
        <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4 text-white">
          {title}
        </h3>
        <p className="text-gray-300 mb-6">
          {description}
        </p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          asChild 
          variant="outline" 
          className="border-gold hover:bg-gold/10 text-gold"
        >
          <Link to="/contact">
            Inquire About This Service
            <ChevronRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
      <div className={`${index % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="rounded-xl w-full fancy-border"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
