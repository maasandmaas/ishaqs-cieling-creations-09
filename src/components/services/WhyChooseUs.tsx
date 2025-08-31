
import experienceImage from "../../assets/experience-feature.jpg";
import qualityImage from "../../assets/quality-feature.jpg";
import timelyImage from "../../assets/timely-feature.jpg";
import serviceImage from "../../assets/service-feature.jpg";

interface FeatureProps {
  image: string;
  title: string;
  description: string;
}

const Feature = ({ image, title, description }: FeatureProps) => (
  <div className="text-center p-6 reveal">
    <div className="inline-flex items-center justify-center mb-6">
      <img 
        src={image} 
        alt={title}
        className="w-24 h-24 object-cover rounded-lg"
      />
    </div>
    <h3 className="text-xl font-playfair font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const FEATURES = [
  {
    image: experienceImage,
    title: "25+ Years of Experience",
    description: "Our extensive experience ensures that we have the knowledge and skills to handle any ceiling project, regardless of complexity."
  },
  {
    image: qualityImage,
    title: "Quality Guarantee",
    description: "We stand behind our work with a comprehensive quality guarantee, ensuring your complete satisfaction with the finished product."
  },
  {
    image: timelyImage,
    title: "Timely Completion",
    description: "We understand the importance of timelines and are committed to completing your project on schedule without compromising quality."
  },
  {
    image: serviceImage,
    title: "Personalized Service",
    description: "We believe in building relationships with our clients, providing personalized attention and tailoring our services to your specific needs."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal">
          <h6 className="text-gold mb-4 font-montserrat uppercase tracking-wider">Our Guarantee</h6>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
            Why Choose Our Services
          </h2>
          <p className="text-gray-300">
            At Ishaq's Ceiling Creations, we pride ourselves on delivering exceptional service and value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
