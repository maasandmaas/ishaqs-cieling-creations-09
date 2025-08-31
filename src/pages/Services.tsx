
import ServiceHero from "@/components/services/ServiceHero";
import ServiceList from "@/components/services/ServiceList";
import AdditionalServices from "@/components/services/AdditionalServices";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import ServicesCta from "@/components/services/ServicesCta";
import { useEffect } from "react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const Services = () => {
  useRevealAnimation();
  // Ensure any components are ready as soon as the page loads
  useEffect(() => {
    // Pre-load critical components
    const preloadComponents = async () => {
      // This is just to ensure components are ready
      // No actual async work needed here
    };
    
    preloadComponents();
  }, []);

  return (
    <div className="pt-24">
      <ServiceHero />
      <ServiceList />
      <AdditionalServices />
      <ProcessTimeline />
      <WhyChooseUs />
      <ServicesCta />
    </div>
  );
};

export default Services;
