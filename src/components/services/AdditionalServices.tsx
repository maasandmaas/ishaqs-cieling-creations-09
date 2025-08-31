
import { ReactNode } from "react";
import { Lightbulb, PanelTop, ShieldCheck, Clock, Wrench, Hammer, HeartHandshake, Award } from "lucide-react";

interface ServiceItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceItem = ({ icon, title, description }: ServiceItemProps) => (
  <div className="bg-midnight-light p-8 rounded-xl fancy-border reveal hover-glow transition-all duration-300 flex flex-col h-full">
    {icon}
    <h3 className="text-xl font-playfair font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const ADDITIONAL_SERVICES = [
  {
    icon: <Lightbulb className="w-10 h-10 text-gold mb-6" />,
    title: "Lighting Integration",
    description: "We design and install integrated ceiling lighting solutions, including recessed lights, LED strips, and decorative fixtures to enhance your ceiling design."
  },
  {
    icon: <PanelTop className="w-10 h-10 text-gold mb-6" />,
    title: "Ceiling Renovation",
    description: "Our renovation services breathe new life into old or damaged ceilings, updating the style and improving functionality."
  },
  {
    icon: <Wrench className="w-10 h-10 text-gold mb-6" />,
    title: "Maintenance & Repair",
    description: "We provide professional maintenance and repair services to ensure your ceiling remains in pristine condition for years to come."
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-gold mb-6" />,
    title: "Consultation Services",
    description: "Our experts offer professional consultation to help you choose the right ceiling design for your space, considering aesthetics, functionality, and budget."
  },
  {
    icon: <Hammer className="w-10 h-10 text-gold mb-6" />,
    title: "Installation of Ceiling Fixtures",
    description: "We install ceiling fans, chandeliers, and other fixtures, ensuring they are securely and properly integrated with your ceiling design."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-gold mb-6" />,
    title: "Waterproofing Solutions",
    description: "For bathrooms, kitchens, and other moisture-prone areas, we offer waterproofing solutions to protect your ceiling from water damage."
  }
];

const AdditionalServices = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal">
          <h6 className="text-gold mb-4 font-montserrat uppercase tracking-wider">More Services</h6>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
            Additional Services We Provide
          </h2>
          <p className="text-gray-300">
            Beyond our core offerings, we provide a range of complementary services to ensure your complete satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADDITIONAL_SERVICES.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
