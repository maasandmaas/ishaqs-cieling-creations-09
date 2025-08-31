import { useState, useRef, useEffect, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, ChevronDown, Award } from "lucide-react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import galleryFeatured from "@/assets/gallery-featured-project.jpg";
import galleryResidential1 from "@/assets/gallery-residential-1.jpg";
import galleryCommercial1 from "@/assets/gallery-commercial-1.jpg";
import galleryPop1 from "@/assets/gallery-pop-1.jpg";
import galleryWooden1 from "@/assets/gallery-wooden-1.jpg";
import galleryAcoustic1 from "@/assets/gallery-acoustic-1.jpg";
import galleryGypsum1 from "@/assets/gallery-gypsum-1.jpg";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  location?: string;
  description?: string;
}

const Gallery = () => {
  useRevealAnimation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const galleryImages: GalleryImage[] = [
    // Residential Projects
    {
      id: 1,
      src: galleryResidential1,
      alt: "Modern Living Room Ceiling",
      category: "residential",
      location: "F-8, Islamabad",
      description: "Contemporary coffered ceiling with integrated LED lighting for a spacious living room."
    },
    {
      id: 2,
      src: galleryGypsum1,
      alt: "Bedroom Ceiling with Recessed Lighting",
      category: "residential",
      location: "E-11, Islamabad",
      description: "Elegant suspended ceiling with geometric patterns and ambient lighting for master bedroom."
    },
    {
      id: 3,
      src: galleryFeatured,
      alt: "Minimalist Kitchen Ceiling",
      category: "residential",
      location: "DHA Phase 2, Islamabad",
      description: "Clean-lined tray ceiling with hidden lighting strips that accentuate the modern kitchen design."
    },
    
    // Commercial Projects
    {
      id: 4,
      src: galleryCommercial1,
      alt: "Restaurant Ceiling Design",
      category: "commercial",
      location: "Blue Area, Islamabad",
      description: "Statement ceiling with pendant lights and wooden beams creating an intimate dining atmosphere."
    },
    {
      id: 5,
      src: galleryAcoustic1,
      alt: "Office Space Ceiling",
      category: "commercial",
      location: "Jinnah Avenue, Islamabad",
      description: "Acoustic ceiling panels designed for optimal sound absorption in modern workspace."
    },
    
    // Gypsum Designs
    {
      id: 6,
      src: galleryGypsum1,
      alt: "Modern Gypsum Ceiling",
      category: "gypsum",
      description: "Multi-level gypsum ceiling with integrated LED strip lighting creating floating effect."
    },
    {
      id: 7,
      src: galleryFeatured,
      alt: "Intricate Gypsum Pattern",
      category: "gypsum",
      description: "Ornate gypsum ceiling with geometric patterns inspired by contemporary architecture."
    },
    
    // POP Designs
    {
      id: 8,
      src: galleryPop1,
      alt: "Decorative POP Ceiling",
      category: "pop",
      description: "Traditional POP (Plaster of Paris) ceiling with hand-crafted floral motifs and borders."
    },
    
    // Wooden Designs
    {
      id: 9,
      src: galleryWooden1,
      alt: "Wooden Panel Ceiling",
      category: "wooden",
      description: "Rich walnut wood paneled ceiling with coffered details bringing warmth to the space."
    },
    
    // Acoustic Solutions
    {
      id: 10,
      src: galleryAcoustic1,
      alt: "Acoustic Ceiling Panels",
      category: "acoustic",
      description: "Sound-absorbing panels arranged in a sculptural pattern to reduce noise while enhancing aesthetics."
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "gypsum", name: "Gypsum Designs" },
    { id: "pop", name: "POP Designs" },
    { id: "wooden", name: "Wooden Ceilings" },
    { id: "acoustic", name: "Acoustic Solutions" }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePrevImage = () => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "ArrowLeft") {
          handlePrevImage();
        } else if (e.key === "ArrowRight") {
          handleNextImage();
        } else if (e.key === "Escape") {
          setSelectedImage(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, filteredImages]);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1615915016183-e38d8c975f8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              Our Stunning Ceiling Gallery
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our extensive portfolio of exceptional ceiling designs and installations across Islamabad. With over 25 years of experience, each project showcases our commitment to quality, innovation, and master craftsmanship.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center space-x-2 bg-midnight-light px-4 py-2 rounded-full">
                <Award className="text-gold h-5 w-5" />
                <span className="text-gray-300">500+ Projects Completed</span>
              </div>
              <div className="flex items-center space-x-2 bg-midnight-light px-4 py-2 rounded-full">
                <Award className="text-gold h-5 w-5" />
                <span className="text-gray-300">25+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-midnight-light px-4 py-2 rounded-full">
                <Award className="text-gold h-5 w-5" />
                <span className="text-gray-300">Islamabad's Premier Ceiling Expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Highlight */}
      <section className="py-12 bg-gradient-to-b from-midnight to-midnight-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="reveal">
              <img 
                src={galleryFeatured} 
                alt="Featured Luxury Ceiling Project" 
                className="rounded-xl fancy-border shadow-lg hover-glow"
              />
            </div>
            <div className="reveal">
              <h2 className="text-3xl font-playfair font-bold mb-4 gold-gradient">Featured Project: Luxury Villa in F-7 Islamabad</h2>
              <p className="text-gray-300 mb-4">
                This signature project showcases our mastery in combining various ceiling techniques to create a harmonious flow throughout the home. From the grand entrance with its ornate POP moldings to the living room's multi-level gypsum design with integrated lighting, every detail was meticulously crafted.
              </p>
              <p className="text-gray-300 mb-6">
                The homeowners wanted a ceiling that would become a conversation piece while complementing their high-end furnishings. Our team created custom designs for each room while maintaining a cohesive aesthetic throughout the property.
              </p>
              <Button 
                variant="outline" 
                className="border-gold hover:bg-gold-dark text-black"
                onClick={() => {
                  const featuredImage = galleryImages.find(img => img.category === "residential");
                  if (featuredImage) setSelectedImage(featuredImage);
                }}
              >
                View Project Details
                <ChevronRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-midnight-accent">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12 flex justify-center">
            {/* Desktop Filter */}
            <div className="hidden md:flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={selectedCategory === category.id 
                    ? "bg-gold hover:bg-gold-dark text-black" 
                    : "border-gold/30 text-gray-300 hover:text-gold hover:border-gold"}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Mobile Filter Dropdown */}
            <div className="md:hidden relative w-full max-w-sm" ref={dropdownRef}>
              <Button
                variant="outline"
                className="w-full border-gold/30 text-gray-300 flex justify-between items-center"
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              >
                <span>{categories.find(cat => cat.id === selectedCategory)?.name || "All Projects"}</span>
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isCategoryDropdownOpen ? "rotate-180" : ""}`} />
              </Button>
              
              {isCategoryDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-midnight-light border border-gold/30 rounded-md shadow-lg">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className={`px-4 py-2 cursor-pointer hover:bg-gold/10 ${
                        selectedCategory === category.id ? "bg-gold/20 text-gold" : "text-gray-300"
                      }`}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setIsCategoryDropdownOpen(false);
                      }}
                    >
                      {category.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="group overflow-hidden rounded-xl fancy-border reveal cursor-pointer hover-glow transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <Button variant="outline" className="border-gold text-gold rounded-full w-12 h-12 p-0">
                        <ImageIcon size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-midnight">
                  <h3 className="text-white font-playfair font-medium group-hover:text-gold transition-colors duration-300">
                    {image.alt}
                  </h3>
                  <p className="text-sm text-gray-400 capitalize">
                    {image.category} {image.location && `- ${image.location}`}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-300">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-midnight-accent border-gold/30">
          <div className="relative">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            {/* Navigation Buttons */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Image */}
            <div className="w-full aspect-[16/9] overflow-hidden">
              {selectedImage && (
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            
            {/* Caption with enhanced details */}
            {selectedImage && (
              <div className="p-6 bg-midnight-accent">
                <h3 className="text-2xl font-playfair font-medium text-gold mb-2">{selectedImage.alt}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm capitalize">
                    {selectedImage.category}
                  </span>
                  {selectedImage.location && (
                    <span className="bg-midnight-light text-gray-300 px-3 py-1 rounded-full text-sm">
                      {selectedImage.location}
                    </span>
                  )}
                </div>
                {selectedImage.description && (
                  <p className="text-gray-300">{selectedImage.description}</p>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Design Process Section */}
      <section className="py-16 bg-celestial/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 gold-gradient inline-block">
              Our Ceiling Design Process
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Each of our stunning projects follows a meticulous process to ensure the highest quality results that exceed our clients' expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We begin with an in-depth consultation to understand your vision, requirements, and the architectural context of your space."
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Our designers create custom ceiling concepts tailored to your preferences, incorporating appropriate materials and lighting."
              },
              {
                step: "03",
                title: "Expert Installation",
                description: "Our skilled craftsmen carefully execute the installation with precision, using high-quality materials and techniques."
              },
              {
                step: "04",
                title: "Final Detailing",
                description: "We meticulously finish every detail, ensuring perfect lighting integration and a flawless, stunning result."
              }
            ].map((process, index) => (
              <div key={index} className="bg-midnight-light p-6 rounded-xl fancy-border reveal hover-glow">
                <div className="text-3xl font-playfair font-bold text-gold mb-3">{process.step}</div>
                <h3 className="text-xl font-playfair font-medium text-white mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed opacity-10" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1566619791206-9642cacbf64c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-midnight-light p-8 rounded-xl fancy-border reveal">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-gold">★</span>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-playfair italic text-white mb-6">
                "Muhammad Ishaq transformed our entire home with his exceptional ceiling work. His attention to detail and artistic sensibility created spaces that feel both grand and intimate. Everyone who visits our home is amazed by the ceiling designs."
              </blockquote>
              <div className="text-gold font-medium">Ahmed & Fatima Siddiqui</div>
              <div className="text-gray-400">F-8 Residence, Islamabad</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-celestial rounded-xl p-8 md:p-12 text-center reveal fancy-border">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-gradient">
              Ready to Transform Your Space?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us bring your vision to life with our expert ceiling design and installation services. Contact us today for a free consultation and quote. Whether you're in Islamabad or the surrounding areas, we're ready to create a stunning ceiling that will elevate your entire space.
            </p>
            <Button 
              asChild 
              className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 animate-glow font-montserrat"
            >
              <a href="/contact">
                Contact Us Today
                <ChevronRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
