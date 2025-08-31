
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, ArrowRight, Image, Home as HomeIcon, ShieldCheck, Users, Award, Clock, CheckCircle, Lightbulb, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

// Import gallery images
import galleryGypsum from "@/assets/gallery-gypsum-1.jpg";
import galleryPop from "@/assets/gallery-pop-1.jpg";
import galleryWooden from "@/assets/gallery-wooden-1.jpg";
import galleryAcoustic from "@/assets/gallery-acoustic-1.jpg";
import galleryFeatured from "@/assets/gallery-featured-project.jpg";
import galleryResidential from "@/assets/gallery-residential-1.jpg";
import galleryCommercial from "@/assets/gallery-commercial-1.jpg";

const Home = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // Hero background images showcasing different ceiling designs
  const heroBackgrounds = [
    "https://images.unsplash.com/photo-1520013573795-38516d2661e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    "https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];
  
  useRevealAnimation();
  
  // Background transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % heroBackgrounds.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [heroBackgrounds.length]);
  
  useEffect(() => {
    // Counter animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const counters = document.querySelectorAll('.counter-value');
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target') || '0');
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 16ms per frame (60fps)
            
            let count = 0;
            const updateCounter = () => {
              count += step;
              if (count < target) {
                counter.textContent = Math.floor(count).toString();
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target.toString();
              }
            };
            
            updateCounter();
          });
        }
      },
      { threshold: 0.5 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);
  
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroBackgrounds.map((bg, index) => (
            <div
              key={index}
              className={`absolute inset-0 parallax-bg transition-opacity duration-1000 ${
                index === currentBgIndex ? 'opacity-50' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${bg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-midnight/80"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 max-w-6xl">
          <div className="text-center sm:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold mb-6 animate-slide-down">
              <span className="text-gradient">Elevate Your Space With</span>
              <span className="block mt-2 gold-gradient">Exquisite Ceiling Designs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl animate-slide-up">
              With over 25 years of experience, Muhammad Ishaq and his expert team 
              create stunning false ceiling masterpieces in Islamabad.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start animate-fade-in">
              <Button 
                asChild 
                className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 animate-glow text-lg py-6 px-8 font-montserrat"
              >
                <Link to="/gallery">
                  Explore Our Work
                  <Image size={18} className="ml-2" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-gold hover:bg-gold/10 text-gold text-lg py-6 px-8 font-montserrat"
              >
                <Link to="/contact">
                  Get a Free Quote
                  <ChevronRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight size={30} className="text-gold transform rotate-90" />
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-midnight-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 gold-gradient inline-block">
              Our Premium Services
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We offer a comprehensive range of false ceiling solutions to transform your spaces
              with elegance and functionality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gypsum Ceilings",
                description: "Versatile, lightweight, and easy to install, our gypsum ceilings offer endless design possibilities.",
                image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              },
              {
                title: "POP Designs",
                description: "Plaster of Paris designs adding texture and dimension to your ceilings with intricate patterns.",
                image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              },
              {
                title: "Wooden Ceilings",
                description: "Rich, warm wooden ceilings adding natural elegance and acoustic properties to your space.",
                image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
              }
            ].map((service, index) => (
              <div key={index} className="group reveal">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-5 fancy-border">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-playfair font-bold mb-3 text-white group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-gold hover:underline"
                >
                  Learn More 
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline" 
              className="border-gold hover:bg-gold/10 text-gold"
            >
              <Link to="/services">
                View All Services
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-celestial/20 to-midnight-accent/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 gold-gradient inline-block">
              Why Choose Muhammad Ishaq?
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              With over 25 years of expertise in false ceiling design and installation, 
              we are the trusted choice for premium ceiling solutions in Islamabad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="text-gold mb-4" size={48} />,
                title: "25+ Years Experience",
                description: "Quarter-century of expertise in designing and installing premium false ceilings across Islamabad."
              },
              {
                icon: <CheckCircle className="text-gold mb-4" size={48} />,
                title: "Quality Guaranteed",
                description: "We use only the finest materials and employ strict quality control measures for lasting results."
              },
              {
                icon: <Users className="text-gold mb-4" size={48} />,
                title: "Expert Team",
                description: "Our skilled craftsmen bring passion and precision to every project, ensuring flawless execution."
              },
              {
                icon: <Clock className="text-gold mb-4" size={48} />,
                title: "Timely Delivery",
                description: "We respect your time and consistently deliver projects on schedule without compromising quality."
              },
              {
                icon: <Lightbulb className="text-gold mb-4" size={48} />,
                title: "Custom Designs",
                description: "From concept to completion, we create unique ceiling designs tailored to your vision and space."
              },
              {
                icon: <ShieldCheck className="text-gold mb-4" size={48} />,
                title: "Warranty Support",
                description: "Complete peace of mind with comprehensive warranty coverage on all our ceiling installations."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group reveal">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-all duration-300 hover-glow">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-bold mb-4 text-white group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Projects Section */}
      <section className="py-20 bg-midnight-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 gold-gradient inline-block">
              Our Projects
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Explore our stunning portfolio of ceiling transformations that showcase our craftsmanship 
              and attention to detail across various styles and spaces.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <Carousel 
              className="w-full" 
              opts={{ 
                align: "start", 
                loop: true,
                skipSnaps: false,
                dragFree: true
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  {
                    title: "Elegant Gypsum Design",
                    category: "Residential",
                    location: "F-8, Islamabad",
                    image: galleryGypsum
                  },
                  {
                    title: "Luxurious POP Ceiling",
                    category: "Commercial",
                    location: "Blue Area, Islamabad",
                    image: galleryPop
                  },
                  {
                    title: "Wooden Ceiling Masterpiece",
                    category: "Residential",
                    location: "DHA Islamabad",
                    image: galleryWooden
                  },
                  {
                    title: "Modern Acoustic Design",
                    category: "Commercial",
                    location: "Centaurus Mall",
                    image: galleryAcoustic
                  },
                  {
                    title: "Featured Project",
                    category: "Luxury Villa",
                    location: "Margalla Hills",
                    image: galleryFeatured
                  },
                  {
                    title: "Premium Residential",
                    category: "Home Design",
                    location: "G-11, Islamabad",
                    image: galleryResidential
                  },
                  {
                    title: "Commercial Excellence",
                    category: "Office Space",
                    location: "I-8 Markaz",
                    image: galleryCommercial
                  }
                ].map((project, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group relative overflow-hidden rounded-xl aspect-[4/3] fancy-border">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300"></div>
                      
                      {/* Project Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="mb-2">
                          <span className="inline-block px-3 py-1 text-xs font-montserrat uppercase tracking-wider bg-gold/20 border border-gold/30 rounded-full text-gold mb-2">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-playfair font-bold mb-2 group-hover:text-gold transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm flex items-center">
                          <HomeIcon size={14} className="mr-2 text-gold" />
                          {project.location}
                        </p>
                      </div>
                      
                      {/* Hover View Details Button */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button 
                          size="sm" 
                          className="bg-gold/20 backdrop-blur-sm text-gold border border-gold/30 hover:bg-gold hover:text-black transition-all duration-300"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0 bg-gold/10 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300" />
                <CarouselNext className="static translate-y-0 bg-gold/10 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300" />
              </div>
            </Carousel>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300"
            >
              <Link to="/gallery">
                View Full Gallery
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-celestial/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 gold-gradient inline-block">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We pride ourselves on delivering excellence and exceeding client expectations.
              Here's what some of our satisfied clients have to say.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <div className="flex items-center justify-between mb-8">
                <CarouselPrevious className="static translate-y-0 bg-gold/10 border-gold text-gold hover:bg-gold hover:text-black" />
                <CarouselNext className="static translate-y-0 bg-gold/10 border-gold text-gold hover:bg-gold hover:text-black" />
              </div>
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  {
                    name: "Ahmed Khan",
                    role: "Homeowner",
                    location: "F-7, Islamabad",
                    testimonial: "Muhammad Ishaq and his team transformed our living room with an incredible ceiling design that has become the highlight of our home. The attention to detail and craftsmanship is unmatched. The team was professional, punctual, and maintained a clean work environment throughout the project.",
                    rating: 5,
                    projectType: "residential"
                  },
                  {
                    name: "Fatima Zaidi",
                    role: "Interior Designer",
                    location: "Blue Area, Islamabad",
                    testimonial: "As an interior designer, I've worked with many ceiling contractors, but Ishaq's team stands out for their exceptional quality and reliability. Their ability to translate design concepts into reality is impressive. I've collaborated with them on multiple projects, and each time they have exceeded expectations.",
                    rating: 5,
                    projectType: "commercial"
                  },
                  {
                    name: "Zubair Ali",
                    role: "Restaurant Owner",
                    location: "G-9 Markaz, Islamabad",
                    testimonial: "The custom wooden ceiling they installed in our restaurant has become a talking point among customers. Muhammad Ishaq took the time to understand our vision and proposed a design that perfectly complemented our restaurant's ambiance. The installation was completed on schedule.",
                    rating: 5,
                    projectType: "commercial"
                  },
                  {
                    name: "Sara Ahmed",
                    role: "Architect",
                    location: "DHA, Islamabad",
                    testimonial: "I've recommended Ishaq's Ceiling Creations to numerous clients, and the feedback has always been positive. Their technical knowledge, combined with an artistic eye, results in ceiling installations that are both structurally sound and aesthetically pleasing.",
                    rating: 5,
                    projectType: "professional"
                  },
                  {
                    name: "Ayesha Khan",
                    role: "Homeowner",
                    location: "E-11, Islamabad",
                    testimonial: "After renovating my entire house, the ceiling designed by Muhammad Ishaq's team is what visitors comment on the most. The intricate POP design in our formal living room is simply spectacular. The team was respectful of our home and maintained cleanliness throughout.",
                    rating: 5,
                    projectType: "residential"
                  },
                  {
                    name: "Imran Siddiqui",
                    role: "Hotel Owner",
                    location: "Bhara Kahu, Islamabad",
                    testimonial: "The acoustic ceiling solution provided by Ishaq's team for our hotel conference room has significantly improved the sound quality, which our corporate clients greatly appreciate. Beyond functionality, the design is elegant and complements the room's decor perfectly.",
                    rating: 5,
                    projectType: "commercial"
                  }
                ].map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-midnight border-gray-800 hover-glow fancy-border h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex">
                            {Array(testimonial.rating).fill(0).map((_, i) => (
                              <Star key={i} size={16} className="fill-gold text-gold" />
                            ))}
                          </div>
                          <Quote className="w-8 h-8 text-gold/30" />
                        </div>
                        <p className="text-gray-300 mb-6 italic flex-grow text-sm leading-relaxed">
                          "{testimonial.testimonial}"
                        </p>
                        <div className="border-t border-gray-700 pt-4">
                          <h4 className="text-white font-medium">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.role}</p>
                          <p className="text-gold text-xs mt-1">{testimonial.location}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-midnight border-gold text-gold hover:bg-gold hover:text-black" />
              <CarouselNext className="bg-midnight border-gold text-gold hover:bg-gold hover:text-black" />
            </Carousel>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline" 
              className="border-gold hover:bg-gold/10 text-gold"
            >
              <Link to="/contact">
                Share Your Experience
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section ref={counterRef} className="py-20 bg-midnight-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: <HomeIcon size={40} className="text-gold mx-auto mb-4" />,
                value: 500,
                label: "Projects Completed",
              },
              {
                icon: <Users size={40} className="text-gold mx-auto mb-4" />,
                value: 350,
                label: "Happy Clients",
              },
              {
                icon: <Award size={40} className="text-gold mx-auto mb-4" />,
                value: 25,
                label: "Years Experience",
              },
              {
                icon: <ShieldCheck size={40} className="text-gold mx-auto mb-4" />,
                value: 5,
                label: "Expert Team Members",
              },
            ].map((stat, index) => (
              <div key={index} className="reveal">
                {stat.icon}
                <h3 className="text-4xl font-playfair font-bold text-white mb-2">
                  <span className="counter-value" data-target={stat.value}>0</span>
                  <span className="text-gold">+</span>
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 bg-fixed" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1614650635090-d78131367ebe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Contact us today for a free consultation and quote. Let's bring your vision to life with our expert ceiling solutions.
            </p>
            <Button 
              asChild 
              className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 animate-glow text-lg py-6 px-8 font-montserrat"
            >
              <Link to="/contact">
                Get Started Today
                <ChevronRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
