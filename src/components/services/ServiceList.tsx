
import ServiceCard from "./ServiceCard";
import woodenCeilingImage from "@/assets/wooden-ceiling-service.jpg";

const SERVICES_DATA = [
  {
    title: "Gypsum Ceiling Installation",
    description: "Gypsum ceilings are versatile, lightweight, and offer endless design possibilities. Our team specializes in creating stunning gypsum ceiling designs, from simple, elegant patterns to complex, multi-level creations.",
    features: [
      "Custom design and consultation",
      "Professional installation with premium materials",
      "Perfect finishing with attention to detail",
      "Integration with lighting and other ceiling fixtures",
      "Soundproofing options available"
    ],
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  {
    title: "POP (Plaster of Paris) Designs",
    description: "POP designs add texture and dimension to your ceilings, creating a visually striking focal point in any room. Our craftsmen are skilled in creating intricate POP designs that reflect your personal style and enhance your interior décor.",
    features: [
      "Customized designs to suit your aesthetic preferences",
      "Hand-crafted details for unique finishes",
      "Durable construction using quality materials",
      "Seamless integration with existing architecture",
      "Regular maintenance and touch-up services available"
    ],
    image: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Wooden Ceiling Installations",
    description: "Wooden ceilings add warmth, character, and natural beauty to any space. Our wooden ceiling installations combine aesthetic appeal with practical benefits, including acoustic properties and insulation.",
    features: [
      "Selection of premium wood materials",
      "Custom designs ranging from traditional to contemporary",
      "Expert installation with precision joinery",
      "Treatment for durability and longevity",
      "Eco-friendly options available"
    ],
    image: woodenCeilingImage
  },
  {
    title: "Acoustic Ceiling Solutions",
    description: "Acoustic ceilings improve sound quality in your space by reducing echo and noise. Our acoustic ceiling solutions are ideal for home theaters, music rooms, offices, and other spaces where sound quality is important.",
    features: [
      "Sound absorption and noise reduction",
      "Variety of design options and finishes",
      "Fire-resistant and eco-friendly materials",
      "Integration with lighting and ventilation systems",
      "Customized solutions for specific acoustic requirements"
    ],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Metal and Grid Ceiling Systems",
    description: "Metal and grid ceiling systems are practical and visually appealing, offering easy access to services above the ceiling. These systems are particularly suitable for commercial spaces, offices, and retail environments.",
    features: [
      "Variety of materials including aluminum, steel, and tin",
      "Different panel sizes and patterns available",
      "Easy installation and maintenance",
      "Excellent fire resistance and durability",
      "Compatible with various lighting fixtures and air conditioning systems"
    ],
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Custom Ceiling Designs",
    description: "For those seeking something truly unique, our custom ceiling design service combines different materials, techniques, and design elements to create a ceiling that perfectly reflects your vision and complements your space.",
    features: [
      "Personalized design consultation",
      "3D visualization of proposed designs",
      "Integration of multiple materials and techniques",
      "Incorporation of special features such as murals or inlays",
      "Collaborative approach to ensure your vision is realized"
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  }
];

const ServiceList = () => {
  return (
    <section className="py-16 md:py-24 bg-midnight-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal">
          <h6 className="text-gold mb-4 font-montserrat uppercase tracking-wider">What We Offer</h6>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
            Our Core Services
          </h2>
          <p className="text-gray-300">
            Discover our range of specialized ceiling services designed to transform your spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
