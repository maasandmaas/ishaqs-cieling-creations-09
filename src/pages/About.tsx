
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Check, ChevronRight, Phone, Award, Users, Clock, Heart } from "lucide-react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import muhammadIshaqPortrait from "@/assets/muhammad-ishaq-portrait.jpg";
import ourJourneyImage from "@/assets/our-journey.jpg";
import whyChooseUsImage from "@/assets/why-choose-us.jpg";

const About = () => {
  useRevealAnimation();
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h6 className="text-gold mb-4 font-montserrat uppercase tracking-wider">About Us</h6>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
                25+ Years of Excellence in False Ceiling Craftsmanship
              </h1>
              <p className="text-gray-300 mb-8">
                Founded by Muhammad Ishaq, a master craftsman with over 25 years of experience, 
                Ishaq's Ceiling Creations has established itself as Islamabad's premier false 
                ceiling installation company. Our journey began with a simple mission: to transform 
                ordinary spaces into extraordinary experiences through exceptional ceiling designs.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 animate-glow font-montserrat"
                >
                  <Link to="/gallery">
                    View Our Work
                    <ChevronRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-gold hover:bg-gold/10 text-gold"
                >
                  <a href="tel:+123456789">
                    <Phone size={16} className="mr-2" />
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative reveal">
              <div className="relative z-10 rounded-xl overflow-hidden fancy-border h-96 lg:h-full">
                <img 
                  src={muhammadIshaqPortrait} 
                  alt="Muhammad Ishaq and Team" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-playfair text-xl">Muhammad Ishaq</p>
                  <p className="text-gold">Founder & Master Craftsman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-midnight-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 reveal">
            <h6 className="text-gold mb-4 font-montserrat uppercase tracking-wider">Our Story</h6>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
              From Humble Beginnings to Industry Leadership
            </h2>
            <p className="text-gray-300">
              The journey of Ishaq's Ceiling Creations is a testament to dedication, craftsmanship, and a relentless pursuit of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 reveal">
              <p className="text-gray-300 mb-6">
                Muhammad Ishaq started his career as an apprentice to a master craftsman in 1995. After years of perfecting his craft, he established his own company in 2005, bringing together a team of skilled artisans dedicated to creating exceptional ceiling designs.
              </p>
              <p className="text-gray-300 mb-6">
                Over the years, our small company has grown into a respected name in Islamabad's construction and interior design industry. We've completed hundreds of projects, from residential homes to commercial spaces, government buildings, and luxury hotels.
              </p>
              <p className="text-gray-300">
                Despite our growth, we remain committed to our core values: attention to detail, quality craftsmanship, innovation, and client satisfaction. Every project we undertake receives the same level of dedication and expertise, regardless of size or scope.
              </p>
            </div>
            <div className="order-1 md:order-2 reveal">
              <div className="relative h-80 md:h-96">
                <img 
                  src={ourJourneyImage} 
                  alt="Our Journey" 
                  className="w-full h-full object-cover rounded-xl fancy-border"
                />
                <div className="absolute bottom-4 right-4 bg-midnight-accent p-4 rounded-lg border border-gold">
                  <p className="text-gold font-playfair text-2xl font-bold">25+</p>
                  <p className="text-white text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-celestial/10 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 reveal">
            <h6 className="text-gold mb-4 font-montserrat uppercase tracking-wider">Our Values</h6>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
              Principles That Guide Our Work
            </h2>
            <p className="text-gray-300">
              At Ishaq's Ceiling Creations, our work is guided by a set of core values that ensure excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-10 h-10 text-gold mb-4" />,
                title: "Excellence",
                description: "We are committed to delivering the highest quality workmanship in every project we undertake."
              },
              {
                icon: <Heart className="w-10 h-10 text-gold mb-4" />,
                title: "Passion",
                description: "Our love for our craft drives us to continuously improve and innovate in ceiling design."
              },
              {
                icon: <Users className="w-10 h-10 text-gold mb-4" />,
                title: "Teamwork",
                description: "We believe in the power of collaboration, both within our team and with our clients."
              },
              {
                icon: <Clock className="w-10 h-10 text-gold mb-4" />,
                title: "Timeliness",
                description: "We respect our clients' time and are committed to completing projects on schedule."
              }
            ].map((value, index) => (
              <div key={index} className="bg-midnight-light p-6 rounded-xl fancy-border reveal hover-glow transition-all duration-300">
                {value.icon}
                <h3 className="text-xl font-playfair font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-midnight-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 reveal">
            <h6 className="text-gold mb-4 font-montserrat uppercase tracking-wider">Our Team</h6>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
              Meet the Experts Behind Our Success
            </h2>
            <p className="text-gray-300">
              Our team of skilled professionals brings together decades of experience in false ceiling design and installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Muhammad Ishaq",
                role: "Founder & Master Craftsman",
                bio: "With over 25 years of experience, Muhammad Ishaq leads the team with his unparalleled expertise and vision.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              },
              {
                name: "Ali Hassan",
                role: "Senior Designer",
                bio: "Ali specializes in creating innovative ceiling designs that perfectly complement the overall interior design.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
              },
              {
                name: "Imran Khan",
                role: "Installation Expert",
                bio: "Imran leads our installation team, ensuring every project is completed to the highest standards of craftsmanship.",
                image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              },
              {
                name: "Farhan Ahmed",
                role: "Technical Specialist",
                bio: "Farhan's technical expertise ensures that all our ceiling installations are structurally sound and long-lasting.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              },
              {
                name: "Bilal Malik",
                role: "Project Manager",
                bio: "Bilal coordinates our projects, ensuring they are completed on time, within budget, and to client specifications.",
                image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-midnight p-6 rounded-xl fancy-border reveal group hover-glow">
                <div className="mb-6 overflow-hidden rounded-xl aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-playfair font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gold mb-3">{member.role}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 reveal">
            <h6 className="text-gold mb-4 font-montserrat uppercase tracking-wider">Why Choose Us</h6>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
              The Ishaq's Ceiling Creations Difference
            </h2>
            <p className="text-gray-300">
              When you choose us, you're choosing unparalleled expertise, quality, and service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal">
              <div className="relative h-full">
                <img 
                  src={whyChooseUsImage} 
                  alt="Our Work" 
                  className="rounded-xl h-full object-cover fancy-border"
                />
              </div>
            </div>
            <div className="space-y-6 reveal">
              {[
                {
                  title: "Experienced Team",
                  description: "With over 25 years of collective experience, our team brings unparalleled expertise to every project."
                },
                {
                  title: "Quality Materials",
                  description: "We use only the highest quality materials to ensure durability and longevity in all our installations."
                },
                {
                  title: "Customized Solutions",
                  description: "Every project is unique, and we tailor our designs to meet your specific needs and preferences."
                },
                {
                  title: "Timely Completion",
                  description: "We value your time and are committed to completing all projects according to the agreed schedule."
                },
                {
                  title: "Competitive Pricing",
                  description: "We offer excellent value without compromising on the quality of our work."
                },
                {
                  title: "Excellent After-Sales Service",
                  description: "Our commitment to you doesn't end with the project completion; we provide ongoing support and maintenance."
                }
              ].map((reason, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                      <Check className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-300">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-midnight-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-celestial rounded-xl p-8 md:p-12 text-center reveal fancy-border">
            <AlertTriangle className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-gradient">
              Looking for Expert False Ceiling Solutions?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're renovating your home or building a new commercial space, our team is ready to help you create the perfect ceiling design.
            </p>
            <Button 
              asChild 
              className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 animate-glow font-montserrat"
            >
              <Link to="/contact">
                Contact Us Today
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
