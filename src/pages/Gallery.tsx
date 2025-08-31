import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, ChevronDown, Award, Eye, Loader2 } from "lucide-react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { useProjects, useCategories, useFeaturedProjects } from "@/hooks/useProjects";
import type { Project } from "@/services/api";

const Gallery = () => {
  useRevealAnimation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // API Hooks
  const { data: categoriesData, loading: categoriesLoading } = useCategories();
  const { data: projectsData, loading: projectsLoading } = useProjects({ 
    category: selectedCategory 
  });
  const { data: featuredProjectsData, loading: featuredLoading } = useFeaturedProjects(1);

  const categories = categoriesData || [];
  const projects = projectsData?.projects || [];
  const featuredProject = featuredProjectsData?.[0] || null;

  

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage && e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

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
      {featuredProject && (
        <section className="py-12 bg-gradient-to-b from-midnight to-midnight-accent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="reveal">
                <img 
                  src={featuredProject.thumbnail} 
                  alt={featuredProject.title} 
                  className="rounded-xl fancy-border shadow-lg hover-glow"
                />
              </div>
              <div className="reveal">
                <h2 className="text-3xl font-playfair font-bold mb-4 gold-gradient">
                  Featured Project: {featuredProject.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {featuredProject.description}
                </p>
                <p className="text-gray-300 mb-6">
                  {featuredProject.challenge}
                </p>
                <Link to={`/project/${featuredProject.id}`}>
                  <Button 
                    variant="outline" 
                    className="border-gold hover:bg-gold-dark text-black"
                  >
                    View Project Details
                    <Eye size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

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

          {/* Loading State */}
          {projectsLoading && (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-gold" />
              <span className="ml-2 text-gray-300">Loading projects...</span>
            </div>
          )}

          {/* Gallery Grid */}
          {!projectsLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
              <div 
                key={project.id}
                className="group overflow-hidden rounded-xl fancy-border reveal hover-glow transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                      <Button 
                        variant="outline" 
                        className="border-gold text-gold rounded-full w-12 h-12 p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(project.thumbnail);
                        }}
                      >
                        <ImageIcon size={20} />
                      </Button>
                      <Link to={`/project/${project.id}`}>
                        <Button 
                          variant="outline" 
                          className="border-gold text-gold rounded-full w-12 h-12 p-0"
                        >
                          <Eye size={20} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-midnight">
                  <Link to={`/project/${project.id}`}>
                    <h3 className="text-white font-playfair font-medium group-hover:text-gold transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-400 capitalize mb-1">
                    {project.category} - {project.location}
                  </p>
                  <p className="text-xs text-gray-500">
                    {project.year} • {project.area} • {project.duration}
                  </p>
                </div>
              </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {!projectsLoading && projects.length === 0 && (
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
            
            {/* Image */}
            <div className="w-full aspect-[16/9] overflow-hidden">
              {selectedImage && (
                <img 
                  src={selectedImage} 
                  alt="Project preview"
                  className="w-full h-full object-contain"
                />
              )}
            </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center reveal">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2 text-gold">Consultation</h3>
              <p className="text-gray-300">Initial meeting to understand your vision, requirements, and budget constraints.</p>
            </div>
            
            <div className="text-center reveal">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2 text-gold">Design</h3>
              <p className="text-gray-300">Creating detailed designs and 3D visualizations tailored to your space.</p>
            </div>
            
            <div className="text-center reveal">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2 text-gold">Installation</h3>
              <p className="text-gray-300">Professional installation by our experienced craftsmen using premium materials.</p>
            </div>
            
            <div className="text-center reveal">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2 text-gold">Completion</h3>
              <p className="text-gray-300">Final inspection and handover with warranty and maintenance guidelines.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;